const Car = require('../entity/car');

module.exports = function mapCar(data) {
  return new Car(data);
};
