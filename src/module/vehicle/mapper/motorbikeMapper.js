const MotorBike = require('../entity/motorbike');

module.exports = function mapMotorbike(data) {
  return new MotorBike(data);
};
