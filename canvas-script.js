window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  let context = canvas.getContext("2d");

  context.beginPath(); //reset the context state
  context.moveTo(); //moveTo(x,y) -> starting point of line
};
