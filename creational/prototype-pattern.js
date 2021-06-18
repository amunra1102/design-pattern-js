const myCar = {

    name: "Ford Escort",

    drive: function () {
        console.log("Weeee. I'm driving!");
    },

    panic: function () {
        console.log("Wait. How do you stop this thing?");
    }

};

// Use Object.create to instantiate a new car
const yourCar = Object.create(myCar);

// Now we can see that one is a prototype of the other
console.log(yourCar.name);
yourCar.drive();
yourCar.panic();

const vehiclePrototype = {
    init: function (carModel) {
        this.model = carModel;
    },

    getModel: function () {
        console.log(`The model of this vehicle is ${this.model}`);
    }
};

function vehicle(model) {

    function F() { };
    F.prototype = vehiclePrototype;

    const f = new F();

    f.init(model);
    return f;

}

const car = vehicle("Ford Escort");
car.getModel();
