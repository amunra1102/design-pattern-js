
const abstractVehicleFactory = (function () {

    // Storage for our vehicle types
    let types = {};

    return {
        getVehicle: function (type, customizations) {
            const Vehicle = types[type];
            return (Vehicle ? new Vehicle(customizations) : null);
        },

        registerVehicle: function (type, Vehicle) {
            const proto = Vehicle.prototype;

            // only register classes that fulfill the vehicle contract
            if (proto.drive && proto.breakDown) {
                types[type] = Vehicle;
            }

            return abstractVehicleFactory;
        }
    };
})();

module.exports = abstractVehicleFactory;
