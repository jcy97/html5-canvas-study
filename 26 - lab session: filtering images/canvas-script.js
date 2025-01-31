window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  let context = canvas.getContext("2d");

  // drawImage(img, dx, dy)
  // drawImage(img, dx, dy, dw, dh)
  // drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)

  var amsterdamImage = new Image();
  amsterdamImage.src = "amsterdam.jpg";
  amsterdamImage.onload = function () {
    context.drawImage(amsterdamImage, 180, 35);
    // 이미지를 그린 영역의 픽셀 데이터를 가져온다. rgba 배열로 숫자가 들어있다.
    var imageData = context.getImageData(180, 35, 550, 366);
    for (var i = 0; i < imageData.data.length; i += 4) {
      var average =
        (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;
      imageData.data[i] = average; // Red
      imageData.data[i + 1] = average; // Green
      imageData.data[i + 2] = average; // Blue
      //imageData.data[i + 3] = 50; // Alpha
    }

    context.putImageData(imageData, 180, 35);
  };
};
