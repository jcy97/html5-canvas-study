window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  let context = canvas.getContext("2d");

  // Colors
  const lightCellColor = "#ddb180";
  const darkCellColor = "#7c330c";

  var radian = Math.PI / 180;

  context.beginPath();
  context.strokeStyle = "orange";
  context.lineWidth = 15;
  context.fillStyle = "orange";
  context.arc(450, 300, 150, 135 * radian, 360 * radian, false);
  context.stroke();
  context.fill();
};
