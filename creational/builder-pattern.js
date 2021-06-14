//Một chiếc xe gồm có 3 bộ phận
const Car = function (engine = '', chassis = '', body = '') {
    this.engine = engine;
    this.chassis = chassis;
    this.body = body;
};

// Xây dựng từng bộ phận của xe
const CarBuilder = function () {
    return {
        addChassis: function (chassis) {
            this.chassis = chassis;
            return this;
        },

        addEngine: function (engine) {
            this.engine = engine;
            return this;
        },

        addBody: function (body) {
            this.body = body;
            return this;
        },

        build: function () {
            return new Car(this.engine, this.chassis, this.body);
        }
    };
};

module.exports = CarBuilder;
