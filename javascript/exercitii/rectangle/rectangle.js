

var rectangle = document.querySelector("div");

function minimize() {
   current = rectangle.style.height;
   console.log(rectangle.style.height);
   var n = current.substring(0, current.legth - 1);
   var newer = --n  + "%";
   console.log(n);
   rectangle.style.height = newer;
}

minimize();