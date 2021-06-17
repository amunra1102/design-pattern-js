// A constructor for defining new cars
function Car(options) {
    this.engine = options.engine || "";
    this.chassis = options.chassis || "";
    this.body = options.body || "";
}

module.exports = Car;
