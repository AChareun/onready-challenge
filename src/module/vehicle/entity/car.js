const Vehicle = require('./vehicle');

module.exports = class Car extends Vehicle {
  constructor({
    marca, modelo, precio, caracteristicas,
  }) {
    super({ marca, modelo });
    this.puertas = caracteristicas.puertas;
    this.precio = precio;
  }
};
