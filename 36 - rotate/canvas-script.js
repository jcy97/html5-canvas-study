window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  let context = canvas.getContext("2d");

  var radian = Math.PI / 180;

  //Rotate
  context.rotate(10 * radian);

  //Rectangle
  context.fillStyle = "red";
  context.fillRect(250, 250, 400, 160);
  context.fill();
};
