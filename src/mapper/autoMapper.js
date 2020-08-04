const Auto = require('../entities/auto');

module.exports = function mapAuto(data) {
  return new Auto(data);
};
