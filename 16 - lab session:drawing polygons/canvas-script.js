window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  let context = canvas.getContext("2d");

  // Colors
  const lightCellColor = "#ddb180";
  const darkCellColor = "#7c330c";

  // Polygon Variables
  //sides 변수를 조정해서 다각형을 만들 수 있다.

  var sides = 5;
  var radius = 100;
  var centerX = 400;
  var centerY = 300;
  var startAngle = 200;
  var angle = (2 * Math.PI) / sides;

  // Start Drawing
  context.beginPath();
  context.strokeStyle = "red";
  context.lineWidth = 5;
  context.lineJoin = "round";

  var beginX = centerX + radius * Math.cos(startAngle);
  var beginY = centerY - radius * Math.sin(startAngle);

  context.moveTo(beginX, beginY);

  //Draw Lines
  for (var i = 1; i <= sides; i++) {
    // Current point's coordinates
    var currentAngle = startAngle + i * angle;
    var currentPointX = centerX + radius * Math.cos(currentAngle);
    var currentPointY = centerY - radius * Math.sin(currentAngle);

    //Draw the lineJoin
    context.lineTo(currentPointX, currentPointY);
  }
  context.closePath(); // to close paths manually
  context.stroke();
};
