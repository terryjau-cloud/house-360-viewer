document.addEventListener("DOMContentLoaded", function () {
  var loading = document.getElementById("viewer-loading");
  var error = document.getElementById("viewer-error");
  var tabs = document.querySelectorAll(".location-tab");
  var viewpoints = {
    living: { pitch: 0, yaw: 0, hfov: 105 },
    window: { pitch: -2, yaw: 72, hfov: 92 },
    entry: { pitch: -4, yaw: -86, hfov: 98 }
  };

  function showError() {
    if (loading) {
      loading.hidden = true;
    }

    if (error) {
      error.hidden = false;
    }
  }

  function hideLoading() {
    if (loading) {
      loading.hidden = true;
    }
  }

  try {
    var viewer = pannellum.viewer("panorama", {
    type: "equirectangular",
    panorama: "assets/panoramas/livingroom.jpg",
    autoLoad: true,
    showZoomCtrl: true,
    showFullscreenCtrl: true,
    compass: false,
    hfov: 105,
    pitch: 0,
    yaw: 0,
    minHfov: 50,
    maxHfov: 120
  });

    viewer.on("load", hideLoading);
    viewer.on("error", showError);

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var selectedView = viewpoints[tab.dataset.view];

        if (!selectedView) {
          return;
        }

        tabs.forEach(function (item) {
          item.classList.toggle("is-active", item === tab);
          item.setAttribute("aria-pressed", item === tab ? "true" : "false");
        });

        viewer.lookAt(selectedView.pitch, selectedView.yaw, selectedView.hfov, 900);
      });
    });

    window.setTimeout(function () {
      if (loading && !loading.hidden) {
        showError();
      }
    }, 12000);
  } catch (viewerError) {
    showError();
  }
});
