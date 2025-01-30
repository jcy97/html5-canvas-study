window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  let context = canvas.getContext("2d");

  var radian = Math.PI / 180;

  //Rectangle
  context.beginPath();
  context.strokeStyle = "green";
  context.fillStyle = "green";
  context.shadowColor = "black";
  context.shadowOffsetX = 10;
  context.shadowOffsetY = 10;
  context.shadowBlur = 5;
  context.rect(150, 100, 150, 400);
  context.stroke();
  context.fill();

  //Circle
  context.beginPath();
  context.strokeStyle = "red";
  context.fillStyle = "red";
  context.shadowColor = "black";
  context.shadowOffsetX = -10;
  context.shadowOffsetY = -10;
  context.shadowBlur = 5;
  context.arc(650, 300, 100, 0 * radian, 360 * radian, false);
  context.stroke();
  context.fill();
};
