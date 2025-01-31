window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  let context = canvas.getContext("2d");

  // context.createLinearGradient(x1, y1, x2, y2);
  // context.createRedialGradient(x1, y1, x2, y2, r2);

  //그레디언트를 선언하고 각 영역별 색상을 지정한다 0 ~ 1 사이의 소수로 정할 수 있다.

  // LINEAR GRADIENT
  /*
  var linearGradient = context.createLinearGradient(240, 40, 660, 680);
  linearGradient.addColorStop(0, "red");
  linearGradient.addColorStop(0.25, "blue");
  linearGradient.addColorStop(0.5, "green");
  linearGradient.addColorStop(0.75, "orange");
  linearGradient.addColorStop(1, "white");
  */

  // RADIAL GRADIENT
  var radialGradient = context.createRadialGradient(
    570,
    380,
    300,
    570,
    300,
    250
  );
  radialGradient.addColorStop(0, "red");
  radialGradient.addColorStop(0.25, "blue");
  radialGradient.addColorStop(0.5, "green");
  radialGradient.addColorStop(0.75, "orange");
  radialGradient.addColorStop(1, "white");

  context.strokeStyle = "blue";
  context.lineWidth = 4;
  context.fillStyle = radialGradient;
  context.rect(240, 40, 420, 420);
  context.stroke();
  context.fill();
};
