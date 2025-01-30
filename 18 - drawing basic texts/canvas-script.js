window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  let context = canvas.getContext("2d");

  context.font = "45px Verdana";
  //context.fillText(text, xCoord, yCoord, maxWidth);

  var fText = "Fill Text on Canvas";
  context.fillText(fText, 80, 100);

  //context.strokeText(text, xCoord, yCoord, maxWidth);

  var sText = "Stroke Text on Canvas";
  context.strokeText(sText, 80, 200);
};
