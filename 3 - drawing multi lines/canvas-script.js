window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  let context = canvas.getContext("2d");

  context.beginPath(); //reset the context state
  context.moveTo(30, 30); //moveTo(x,y) -> starting point of line
  context.lineTo(80, 80); //line(x,y) -> end point of the line
  context.lineTo(130, 30); //line(x,y) -> end point of the line
  context.lineTo(180, 80); //line(x,y) -> end point of the line
  context.lineTo(230, 30); //line(x,y) -> end point of the line

  context.stroke();
};
