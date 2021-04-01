"use strict";

//objects in javaScript
// bellow is a literal notation for objects
var car = {

    //inside they can hold two things: "properties"(variables), and "methods"(functions)
    make: "pontiac",
    model: "solstice",
    color: "black",
    year: 2008,
    addOns: ["soundSystem", "navigation"],
    sportSeries: false,
    mileAge: 170235,
    fuelTank: 100,
    ignition: false,
    efficiency: .7,
    //nested properties can also be made
    owner: {
        name: "Austin",
        age: 23,
        id: 1,
    },
    driveCar: function(){
        if(this.ignition === true){
            if(this.fuelTank > 0) {
                console.log("ignition: true, drive commencing.");

                //increase mileage randomly
                var generateMileage = Math.floor(Math.random() * 10) + 1;
                this.mileAge = this.mileAge - generateMileage;
                console.log("You drove: " + generateMileage + " miles.");
                console.log("Mileage: " + this.mileAge);

                //decrease fuel
                this.fuelTank = this.fuelTank - (generateMileage * this.efficiency);
                console.log("Fuel: " + this.fuelTank.toFixed(2));
            }
            else if(this.fuelTank <= 0){
                console.log("You dont have enough gas.");
                console.log("Fuel: " + this.fuelTank.toFixed(2));

            }
        }
        else if(this.ignition === false){
            console.log("You need to start the car.");
            this.ignition = confirm("Would you like to start the car?");
        }
    },
    getGas: function(){
        while(this.fuelTank <= 100){
            console.log("Filling fuel tank: " + this.fuelTank.toFixed(2) + "%");
            this.fuelTank = this.fuelTank + 1;
        }
    },
    startCar: function(){
        if(this.ignition === true){
            console.log("The car is already started...");
        }else {
            console.log("Starting the car...");
            this.ignition = true;
            console.log("You hear the engine roar!");
        }
    },
    stopCar: function(){
        if(this.ignition === false){
            console.log("The car is already stopped...");
        }else {
            console.log("Stopping the car...");
            this.ignition = false;
            console.log("You turned off the car.");
        }
    },
}

