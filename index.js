

// Singleton pattern run.
const mySingleton = require('./creational/singletion-pattern');

var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();

console.log(singleA.getRandomNumber() === singleB.getRandomNumber()); // true
console.log(singleA.publicProperty);


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
