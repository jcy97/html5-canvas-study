window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  let context = canvas.getContext("2d");

  // context.font = "font-style font-weight font-size font-family"

  var text = "This text will be styled!";

  context.font = "normal 800 xx-large times";
  context.fillText(text, 100, 100);

  context.font = "italic 400 48px monospace";
  context.strokeText(text, 100, 150);
};
