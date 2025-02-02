window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  let context = canvas.getContext("2d");

  //Red Rectangle
  context.fillStyle = "red";
  context.fillRect(250, 250, 400, 160);
  context.fill();

  //Scale
  context.scale(0.5, 0.5);

  //Blue Rectangle
  context.fillStyle = "blue";
  context.fillRect(250, 250, 400, 160);
  context.fill();

  //Scale -> 이전에 커진 200%에서 200%를 더한다 즉 400% 커지는 것
  context.scale(0.5, 0.5);

  //Green Rectangle
  context.fillStyle = "green";
  context.fillRect(250, 250, 400, 160);
  context.fill();
};
