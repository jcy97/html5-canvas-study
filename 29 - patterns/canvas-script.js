window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  let context = canvas.getContext("2d");

  // context.createPattern(image, repetition);
  // repetition:
  // - repoat: both directions
  // - repeat-x: horizontal only
  // - repeat-y: vertical only
  // - no-repeat: neither

  var patternImage = new Image();
  patternImage.src = "apple.png";

  patternImage.onload = function () {
    //패턴을 만들어서 filling 할 수 있다.
    var pattern = context.createPattern(patternImage, "repeat");
    context.fillStyle = pattern;
    context.fillRect(0, 0, 900, 450);
  };
};
