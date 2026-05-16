document.addEventListener("DOMContentLoaded", function () {
  pannellum.viewer("panorama", {
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
});
