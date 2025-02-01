window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  let context = canvas.getContext("2d");

  var ballX = 400;
  var ballY = 300;
  var ballRadius = 30;
  var ballColor = "orange";
  var changeX = 4;
  var changeY = 4;

  window.requestAnimationFrame(animationLoop);

  function animationLoop() {
    //Clear Canvas
    context.clearRect(0, 0, canvas.clientWidth, canvas.height);

    // bottom edge
    if (ballY + ballRadius > canvas.height) {
      changeY *= -1;
    }
    // right edge
    if (ballX + ballRadius > canvas.width) {
      changeX *= -1;
    }
    // top edge
    if (ballY + ballRadius <= 0) {
      changeY *= -1;
    }
    // left edge
    if (ballX + ballRadius <= 0) {
      changeX *= -1;
    }
    //Update
    ballX += changeX;
    ballY += changeY;

    drawBall(ballX, ballY, ballRadius, ballColor);

    //Animate
    window.requestAnimationFrame(animationLoop);
  }

  function drawBall(x, y, radius, color) {
    var radian = Math.PI / 180;

    context.beginPath();
    context.strokeStyle = color;
    context.fillStyle = color;
    context.arc(x, y, radius, 0, 360 * radian, false);
    context.stroke();
    context.fill();
  }
};
