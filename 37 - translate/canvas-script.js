window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  let context = canvas.getContext("2d");

  //Rectangle
  context.fillStyle = "red";
  context.fillRect(50, 50, 160, 160);
  context.fill();

  // Translate Canvas
  context.translate(300, 200);

  //Rectangle
  context.fillStyle = "red";
  context.fillRect(50, 50, 160, 160);
  context.fill();
};
