window.onload = function () {
  const canvas = document.getElementById("hello-world-canvas");
  let context = canvas.getContext("2d");

  // State Stack
  // context.save()   -> saving the context state-canvas
  // context.restore() -> restoring the state from the state stack

  // Rect1
  context.fillStyle = "red";
  context.fillRect(240, 100, 120, 120);
  context.save();

  //Rect2
  context.fillStyle = "green";
  context.fillRect(390, 100, 120, 120);
  context.save();

  //Rect3
  context.fillStyle = "blue";
  context.fillRect(540, 100, 120, 120);
  context.save();

  // 마지막으로 저장한 상태가 blue이므로 색깔이 모두 파란색으로 통일된다.

  //Rect4
  // 가장 마지막에 저장한 상태로 되돌린다 ->블루
  context.restore();
  context.fillRect(240, 300, 120, 120);

  //Rect5
  // 가장 마지막에 저장한 상태로 되돌린다 -> 그린
  context.restore();
  context.fillRect(390, 300, 120, 120);

  //Rect6
  // 가장 마지막에 저장한 상태로 되돌린다 -> 레드
  context.restore();
  context.fillRect(540, 300, 120, 120);
};
