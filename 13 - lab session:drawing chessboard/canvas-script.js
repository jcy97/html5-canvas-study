window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  let context = canvas.getContext("2d");

  // Colors
  const lightCellColor = "#ddb180";
  const darkCellColor = "#7c330c";

  //Frame
  context.stroke = "black";
  context.strokeRect(250, 100, 400, 400);
  for (let x = 1; x <= 8; x++) {
    for (let y = 1; y <= 8; y++) {
      context.fillStyle = (x + y) % 2 === 0 ? lightCellColor : darkCellColor;
      context.fillRect(200 + x * 50, 50 + y * 50, 50, 50); // y 좌표 수정
    }
  }

  /*

  for (let i = 1; i <= 8; i++) {
    context.fillStyle = i % 2 === 0 ? lightCellColor : darkCellColor;
    context.fillRect(200 + i * 50, 150, 50, 50);
  }
  for (let i = 1; i <= 8; i++) {
    context.fillStyle = i % 2 === 0 ? darkCellColor : lightCellColor;
    context.fillRect(200 + i * 50, 200, 50, 50);
  }

  for (let i = 1; i <= 8; i++) {
    context.fillStyle = i % 2 === 0 ? lightCellColor : darkCellColor;
    context.fillRect(200 + i * 50, 250, 50, 50);
  }
*/
  /*
  //cell 1
  context.fillStyle = lightCellColor;
  context.fillRect(250, 100, 50, 50);

  //cell 2
  context.fillStyle = darkCellColor;
  context.fillRect(300, 100, 50, 50);

  //cell 3
  context.fillStyle = lightCellColor;
  context.fillRect(350, 100, 50, 50);

  //cell 4
  context.fillStyle = darkCellColor;
  context.fillRect(400, 100, 50, 50);
  */
};
