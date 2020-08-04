const Vehiculo = require('./vehiculo');

module.exports = class Auto extends Vehiculo {
  constructor({
    marca, modelo, precio, caracteristicas,
  }) {
    super({ marca, modelo, precio });
    this.puertas = caracteristicas.puertas;
  }
};
