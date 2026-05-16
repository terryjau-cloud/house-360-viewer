document.addEventListener("DOMContentLoaded", function () {
  var rooms = [
    {
      id: "outside",
      label: "房子外觀 / 門外",
      panorama: "assets/panoramas/outside.jpg",
      map: { x: 13, y: 86 },
      view: { pitch: -2, yaw: 0, hfov: 98 }
    },
    {
      id: "livingroom",
      label: "客廳",
      panorama: "assets/panoramas/livingroom.jpg",
      map: { x: 30, y: 63 },
      view: { pitch: 0, yaw: 0, hfov: 105 }
    },
    {
      id: "diningroom",
      label: "餐廳",
      panorama: "assets/panoramas/diningroom.jpg",
      map: { x: 34, y: 47 },
      view: { pitch: -2, yaw: 28, hfov: 100 }
    },
    {
      id: "kitchen",
      label: "廚房",
      panorama: "assets/panoramas/kitchen.jpg",
      map: { x: 50, y: 88 },
      view: { pitch: -2, yaw: 18, hfov: 98 }
    },
    {
      id: "master-bedroom",
      label: "主臥",
      panorama: "assets/panoramas/master-bedroom.jpg",
      map: { x: 70, y: 34 },
      view: { pitch: 0, yaw: 0, hfov: 100 }
    },
    {
      id: "guest-bedroom-1",
      label: "客臥 1",
      panorama: "assets/panoramas/guest-bedroom-1.jpg",
      map: { x: 76, y: 63 },
      view: { pitch: 0, yaw: -18, hfov: 100 }
    },
    {
      id: "guest-bedroom-2",
      label: "客臥 2",
      panorama: "assets/panoramas/guest-bedroom-2.jpg",
      map: { x: 24, y: 25 },
      view: { pitch: 0, yaw: 42, hfov: 100 }
    },
    {
      id: "balcony",
      label: "陽台",
      panorama: "assets/panoramas/balcony.jpg",
      map: { x: 82, y: 80 },
      view: { pitch: -4, yaw: 12, hfov: 96 }
    },
    {
      id: "master-bathroom",
      label: "主衛浴",
      panorama: "assets/panoramas/masterbathroom.jpg",
      map: { x: 48, y: 25 },
      view: { pitch: -2, yaw: 12, hfov: 96 }
    },
    {
      id: "guest-bathroom",
      label: "客衛浴",
      panorama: "assets/panoramas/guestbathroom.jpg",
      map: { x: 49, y: 38 },
      view: { pitch: -2, yaw: -20, hfov: 96 }
    }
  ];

  var viewer;
  var currentRoomId = rooms[0].id;
  var loading = document.getElementById("viewer-loading");
  var error = document.getElementById("viewer-error");
  var errorMessage = document.getElementById("viewer-error-message");
  var panorama = document.getElementById("panorama");
  var roomTabs = document.getElementById("room-tabs");
  var mapPins = document.getElementById("map-pins");
  var mapToggle = document.getElementById("map-toggle");
  var floorplanCard = document.querySelector(".floorplan-card");
  var floorplanImage = document.querySelector(".floorplan-map img");

  function getRoom(roomId) {
    return rooms.find(function (room) {
      return room.id === roomId;
    });
  }

  function setLoading(isLoading) {
    if (loading) {
      loading.hidden = !isLoading;
    }
  }

  function showError(path) {
    setLoading(false);

    if (panorama) {
      panorama.classList.remove("is-switching");
    }

    if (errorMessage) {
      errorMessage.textContent = "請放入對應的 360 圖片：" + path;
    }

    if (error) {
      error.hidden = false;
    }
  }

  function hideError() {
    if (error) {
      error.hidden = true;
    }
  }

  function preloadImage(path, onLoad, onError) {
    var image = new Image();

    image.onload = onLoad;
    image.onerror = onError;
    image.src = path;
  }

  function renderRoomControls() {
    rooms.forEach(function (room) {
      var tab = document.createElement("button");
      tab.className = "location-tab";
      tab.type = "button";
      tab.dataset.room = room.id;
      tab.setAttribute("aria-pressed", "false");
      tab.textContent = room.label;
      tab.addEventListener("click", function () {
        switchRoom(room.id);
      });
      roomTabs.appendChild(tab);

      var pin = document.createElement("button");
      pin.className = "map-pin";
      pin.type = "button";
      pin.dataset.room = room.id;
      pin.style.left = room.map.x + "%";
      pin.style.top = room.map.y + "%";
      pin.setAttribute("aria-label", "切換至" + room.label);
      pin.setAttribute("aria-pressed", "false");
      pin.setAttribute("title", room.label);
      pin.textContent = room.label;
      pin.addEventListener("click", function () {
        switchRoom(room.id);
      });
      mapPins.appendChild(pin);
    });
  }

  function updateActiveRoom(roomId) {
    var controls = document.querySelectorAll("[data-room]");

    controls.forEach(function (control) {
      var isActive = control.dataset.room === roomId;

      control.classList.toggle("is-active", isActive);
      control.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  function createViewer(room) {
    if (viewer && typeof viewer.destroy === "function") {
      viewer.destroy();
    }

    if (panorama) {
      panorama.innerHTML = "";
    }

    viewer = pannellum.viewer("panorama", {
      type: "equirectangular",
      panorama: room.panorama,
      autoLoad: true,
      showZoomCtrl: true,
      showFullscreenCtrl: true,
      compass: false,
      hfov: room.view.hfov,
      pitch: room.view.pitch,
      yaw: room.view.yaw,
      minHfov: 50,
      maxHfov: 120
    });

    viewer.on("load", function () {
      setLoading(false);
      window.setTimeout(function () {
        panorama.classList.remove("is-switching");
      }, 80);
    });

    viewer.on("error", function () {
      showError(room.panorama);
    });
  }

  function switchRoom(roomId) {
    var room = getRoom(roomId);

    if (!room || room.id === currentRoomId && viewer) {
      return;
    }

    currentRoomId = room.id;
    updateActiveRoom(room.id);
    hideError();
    setLoading(true);
    panorama.classList.add("is-switching");

    preloadImage(
      room.panorama,
      function () {
        try {
          createViewer(room);
        } catch (viewerError) {
          showError(room.panorama);
        }
      },
      function () {
        showError(room.panorama);
      }
    );
  }

  if (floorplanImage) {
    floorplanImage.addEventListener("error", function () {
      floorplanImage.classList.add("is-missing");
    });
  }

  if (mapToggle && floorplanCard) {
    mapToggle.addEventListener("click", function () {
      var isCollapsed = floorplanCard.classList.toggle("is-collapsed");

      mapToggle.textContent = isCollapsed ? "展開" : "收合";
      mapToggle.setAttribute("aria-expanded", isCollapsed ? "false" : "true");
    });
  }

  renderRoomControls();
  switchRoom(currentRoomId);
});
