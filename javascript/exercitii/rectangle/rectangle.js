

var rectangle = document.querySelector("div");

function minimize() {
    var computedstyle = window.getComputedStyle(rectangle);
   current = getComputedStyle.height;
   var n = current.substring(0, current.legth - 2);
   var newer = --n  + "px";
   rectangle.style.height = newer;
   setTimeout(minimize, 50);
}

minimize();