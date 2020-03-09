var startButton = document.querySelector("input");

startButton.addEventListener("click", start);

function start() {
       startButton.style.display = "none";
       console.log(randomLetter());

function randomLetter() {
    let letters = "abcdefjklmnopqrstvwxyz";
    let pos = randomNumber(letters.length);
    return letters.charAt(pos);


function randomNumber(max) {
    return Math.round(Math.random() * max ); 
}   

}       
}