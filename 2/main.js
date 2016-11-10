//window.onload - файл выполняется, когда все загружено
function moveRandPos() {
  console.log("000");
  let x = Math.random() * 200;
  let y = Math.random() * 200;
  let mem_x = btn.style.top;
  let mem_y = btn.style.left;
  /*var timer = setInterval(function() {
    if (mem_x == x && mem_y == y) {
      timer =
    }
  })*/
  btn.style.top = x + "px";
  btn.style.left = y + "px";
}
