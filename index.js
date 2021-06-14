const CarBuilder = require('./builder-pattern');

const car = new CarBuilder()
    .addEngine('v12')
    .addBody('KIA SOLUTO')
    .addChassis('LUXURY')
    .build();

const car1 = new CarBuilder().addEngine('v10').addBody('KIA SOLUTO LUXURY').build();


console.log('Car', car)
console.log('Car1', car1)
