const Vehicle = require('./vehicle');

module.exports = class MotorBike extends Vehicle {
  constructor({
    marca, modelo, precio, caracteristicas,
  }) {
    super({ marca, modelo });
    this.cilindrada = caracteristicas.cilindrada;
    this.precio = precio;
  }
};
