

var startButton = document.querySelector("input");
var speed = 2000;

startButton.addEventListener("click", start);

function start() {
       startButton.style.display = "none";
       newLetter;
}

function newLwtter() {
    let letter = event.key;
    div = document.querySelector("." + letter);
    
}
      


function newLetter() {
    let letter = randomLetter();
    let x = radomposition();
    let y = radomposition();
    let div = document.createElement("div");
    div.innerText = letter;
    div.style.top = y;
    div.style.left = x;
    div.className = "boxLetter" + letter;
    document.querySelector("body").appendChild(div);
    setTimeout(newLetter, speed);

}       

function randomLetter() {
    let letters = "abcdefjklmnopqrstvwxyz";
    let pos = randomNumber(letters.length);
    return letters.charAt(pos);
}    

function randomNumber() {
    return randomNumber(95)  "%";

}    


function randomNumber(max) {
    return Math.round(Math.random() * max ); 
}   
