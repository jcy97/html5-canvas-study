window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  let context = canvas.getContext("2d");

  /**
   베지어 곡선 - 두 개의 컨트롤 포인트를 갖고 있다.
   bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY)
   */

  context.beginPath();
  context.strokeStyle = "red";
  context.lineWidth = 10;
  context.moveTo(200, 250);
  context.bezierCurveTo(200, 10, 50, 150, 400, 250);
  context.stroke();
};
