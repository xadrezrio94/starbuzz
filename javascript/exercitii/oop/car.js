var car = {
    make: "Ford",
    model: "mustang",
    year: 1990,
    color: "red",
    passengers: 4,
    mileage:2000,
    engineIsOn: false;
    stop: function() {
        if(this.engineIsOn){
            console.log("car stopped");
        }else{
            console.log("Car is already stopped")
        }
       

    }
    start: function() {
        console.log("car started");

    },
}

car.mileage = 20150;
console.log(car.year)
console.log(mileage)
car.start();