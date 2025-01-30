window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  let context = canvas.getContext("2d");

  //first
  context.strokeStyle = "red";
  context.lineWidth = 11;
  context.lineJoin = "round";
  context.fillStyle = "blue";
  context.rect(50, 200, 200, 200);
  context.stroke();
  context.fill();

  //second
  context.fillStyle = "green";
  context.fillRect(300, 200, 200, 200);

  //third
  context.lineWidth = 3;
  context.strokeStyle = "blue";
  context.lineJoin = "square";
  context.strokeRect(550, 200, 200, 200);

  //fouth
  //context.clearRect(100, 100, 200, 200);
  context.clearRect(0, 0, 900, 600);
};
