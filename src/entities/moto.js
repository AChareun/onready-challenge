const Vehiculo = require('./vehiculo');

module.exports = class Moto extends Vehiculo {
  constructor({
    marca, modelo, precio, caracteristicas,
  }) {
    super({ marca, modelo, precio });
    this.cilindrada = caracteristicas.cilindrada;
  }
};
