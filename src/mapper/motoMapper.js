const Moto = require('../entities/moto');

module.exports = function mapMoto(data) {
  return new Moto(data);
};
