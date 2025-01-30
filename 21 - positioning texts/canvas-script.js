window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  let context = canvas.getContext("2d");

  var text = "This text will be in 3D";
  // 가로축 정렬
  // context.textAlign = "center | end | left | right | start"
  // The default value is start

  // 세로축 정렬
  // context.textBaseline = "alphabletic | top | hanging | middle | ideographic | bottom";
  // The default value is "alphabetic"

  // 가로축 정렬 비교를 위한 기준선 생성
  context.strokeStyle = "red";
  context.moveTo(300, 20);
  context.lineTo(300, 430);
  context.stroke();

  //Define a style
  context.font = "italic 400 18px monospace";

  //Apply textAlign values
  context.textAlign = "start";
  context.fillText("start", 300, 20);

  context.textAlign = "center";
  context.fillText("center", 300, 50);

  context.textAlign = "left";
  context.fillText("left", 300, 80);

  context.textAlign = "end";
  context.fillText("end", 300, 110);

  context.textAlign = "right";
  context.fillText("right", 300, 140);

  // 세로축 정렬 비교를 위한 기준선 생성
  context.strokeStyle = "red";
  context.moveTo(20, 300);
  context.lineTo(580, 300);
  context.stroke();

  // Apply textBaseline values
  context.textBaseline = "alphabetic";
  context.fillText("alphabetic", 120, 300);

  context.textBaseline = "top";
  context.fillText("top", 220, 300);

  context.textBaseline = "hanging";
  context.fillText("hanging", 320, 300);

  context.textBaseline = "middle";
  context.fillText("middle", 420, 300);

  context.textBaseline = "ideographic";
  context.fillText("ideographic", 520, 300);

  context.textBaseline = "bottom";
  context.fillText("bottom", 620, 300);
};
