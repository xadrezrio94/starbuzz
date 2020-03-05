var botton = document.querySelector("input");
var element =  document.getElementById("time");

 function showTime(){
    element.innerText = Date();
}
function changeStyle(){
    element.classeName = "newStyle";

}
//showTime();
//botton.onclick = showTime;
//botton.onclick = changeStyle;

botton.addEventListener("click", showTime );
botton.addEventListener("click", changeStyle);

botton.removeEventListener("click", showTime);
botton.removeEventListener("click", changeStyle);