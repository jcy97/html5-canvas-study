window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  let context = canvas.getContext("2d");

  /**
   이차 방정식 곡선
   quadraticCurveTo(controlX, controlY, endX, endY)
   */

  context.beginPath();
  context.strokeStyle = "red";
  context.lineWidth = 10;
  context.moveTo(200, 250);
  context.quadraticCurveTo(300, 100, 400, 250);
  context.stroke();
};
