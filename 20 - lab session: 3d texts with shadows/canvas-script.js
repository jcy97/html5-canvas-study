window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  let context = canvas.getContext("2d");

  var text = "This text will be in 3D";

  draw3DText(
    "This text will be in 3D",
    100,
    300,
    "normal 600 54px monospace",
    "red",
    5
  );

  function draw3DText(text, x, y, style, color, size) {
    context.font = style;
    context.fillStyle = "black";

    for (var i = 0; i < size; i++) {
      context.fillText(text, x - i, y - i);
    }
    context.fillStyle = color;
    context.fillText(text, x, y);
  }
};
