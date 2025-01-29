window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  let context = canvas.getContext("2d");

  //First Line
  context.beginPath();
  context.lineCap = "butt";
  context.strokeStyle = "red";
  context.lineWidth = 10;
  context.moveTo(100, 20);
  context.lineTo(150, 20);
  context.stroke();

  //Second Line
  context.beginPath();
  context.lineCap = "round";
  context.strokeStyle = "blue";
  context.lineWidth = 10;
  context.moveTo(100, 40);
  context.lineTo(150, 40);
  context.stroke();

  //Third Line
  context.beginPath();
  context.lineCap = "square";
  context.strokeStyle = "green";
  context.lineWidth = 10;
  context.moveTo(100, 60);
  context.lineTo(150, 60);
  context.stroke();
};
