



// Abstract Factories
const Car = require('./creational/factory/car');
const Truck = require('./creational/factory/truck');

const abstractVehicleFactory = require('./creational/factory/abstract-factories');

Car.prototype.drive = "drive";
Car.prototype.breakDown = "breakDown";

abstractVehicleFactory.registerVehicle("car", Car);
abstractVehicleFactory.registerVehicle("truck", Truck);

// Instantiate a new car based on the abstract vehicle type
const car = abstractVehicleFactory.getVehicle("car", {
    engine: "v12",
    chassis: "LUXURY",
    body: "KIA SOLUTO LUXURY"
});

// Instantiate a new truck in a similar manner
const truck = abstractVehicleFactory.getVehicle("truck", {
    wheelSize: "medium",
    color: "neon yellow"
});

console.log(car);
console.log(truck);


/*
// Factory pattern run.
const VehicleFactory = require('./creational/factory/factory-pattern');
const Car = require('./creational/factory/car');
const Truck = require('./creational/factory/truck');

// Create an instance of our factory that makes cars
const carFactory = new VehicleFactory();
const car = carFactory.createVehicle({
    vehicleType: "car",
    engine: "v12",
    chassis: "LUXURY"
});

console.log(car);
console.log(car instanceof Car);

// Create an instance of our factory that makes trucks
const movingTruck = carFactory.createVehicle({
    vehicleType: "truck",
    state: "like new",
    color: "red",
    wheelSize: "small"
});

console.log(movingTruck);
console.log( movingTruck instanceof Truck );

// Subclass VehicleFactory to create a factory class that builds Trucks
function TruckFactory () {}
TruckFactory.prototype = new VehicleFactory();
TruckFactory.prototype.vehicleClass = Truck;

const truckFactory = new TruckFactory();
const myBigTruck = truckFactory.createVehicle({
    state: "omg..so bad.",
    color: "pink",
    wheelSize: "so big"
});

console.log(myBigTruck);
console.log( myBigTruck instanceof Truck );
*/

/*
// Singleton pattern run.
const mySingleton = require('./creational/singletion-pattern');

var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();

console.log(singleA.getRandomNumber() === singleB.getRandomNumber()); // true
console.log(singleA.publicProperty);
*/

/*
// Builder pattern run.
const CarBuilder = require('./creational/builder-pattern');

const car = new CarBuilder()
    .addEngine('v12')
    .addBody('KIA SOLUTO')
    .addChassis('LUXURY')
    .build();

const car1 = new CarBuilder().addEngine('v10').addBody('KIA SOLUTO LUXURY').build();

console.log('Car', car);
console.log('Car1', car1);

*/
