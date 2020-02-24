var name = "Rio";
var message= "Hello " + name + "!";
var timeout = 3000;
var isNight = false;
var isMorning = true;
var nothing = null;

var date = new Date();
var hour = date.getHours();

if(hour >= 21 || hour<= 6){
    alert("Noapte Buna!"); 
    alert("somn usor");

} else if(hour <=11){
    alert("Buna Dimineata");
}else if(hour <= 17){
    alert{
        ("Buna Ziua");
}else(){

    alert("Buna Seara")
    
}

setTimeout(sayhello, timeout);
function sayhello() { 
//alert(message);
console.log(message);

}