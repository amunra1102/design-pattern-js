// A constructor for defining new trucks
function Truck(options){
  this.state = options.state || "used";
  this.wheelSize = options.wheelSize || "large";
  this.color = options.color || "blue";
}

module.exports = Truck;
