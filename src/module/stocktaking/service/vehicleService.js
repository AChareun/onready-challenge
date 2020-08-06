const mapAuto = require('../mapper/autoMapper');
const mapMoto = require('../mapper/motoMapper');

module.exports = class VehicleService {
  /**
   * @param {JSON} data - raw JSON from the data
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * @function - maps data into Array of Auto and Moto objects
   */
  mapData() {
    this.vehicleList = this.data.map((item) => {
      if (item.tipo === 'auto') {
        return mapAuto(item);
      }
      if (item.tipo === 'moto') {
        return mapMoto(item);
      }

      return null;
    });
  }

  /**
   * @returns {Array.<import('../entities/auto') | import('../entities/moto')>}
   */
  getAll() {
    if (!this.vehicleList) {
      throw new Error('La lista de vehículos no fue creada');
    }
    return this.vehicleList;
  }

  /**
   * @returns {Array.<import('../entities/auto') | import('../entities/moto')>}
   */
  getMostExpensiveVehicle() {
    const prices = this.vehicleList.map((item) => parseInt(item.precio, 10));
    const maxValue = Math.max(...prices);
    // eslint-disable-next-line arrow-body-style
    const mostExpensiveVehicle = this.vehicleList.filter((item) => {
      return parseInt(item.precio, 10) === maxValue;
    });

    return mostExpensiveVehicle;
  }

  /**
   * @returns {Array.<import('../entities/auto') | import('../entities/moto')>}
   */
  getCheapestVehicle() {
    const prices = this.vehicleList.map((item) => parseInt(item.precio, 10));
    const minValue = Math.min(...prices);
    // eslint-disable-next-line arrow-body-style
    const cheapestVehicle = this.vehicleList.filter((item) => {
      return parseInt(item.precio, 10) === minValue;
    });

    return cheapestVehicle;
  }

  /**
   * @returns {Array.<import('../entities/auto') | import('../entities/moto')>}
   */
  getWithModelY() {
    // eslint-disable-next-line arrow-body-style
    const matchingVehicles = this.vehicleList.filter((item) => {
      return item.modelo.toLowerCase().includes('y');
    });
    if (matchingVehicles.length === 0) {
      throw new Error("No se encontró vehículo cuyo modelo contenga 'Y'");
    }
    return matchingVehicles;
  }

  /**
   * @param {boolean} ascending - Determines if sorting is ascending or descending
   * @returns {Array.<import('../entities/auto') | import('../entities/moto')>} Sorted by value
   */
  getSortedByValue(ascending) {
    if (!ascending) {
      // eslint-disable-next-line arrow-body-style
      const vehiclesByValue = this.vehicleList.sort((a, b) => {
        return parseInt(b.precio, 10) - parseInt(a.precio, 10);
      });
      return vehiclesByValue;
    }
    // eslint-disable-next-line arrow-body-style
    const vehiclesByValue = this.vehicleList.sort((a, b) => {
      return parseInt(a.precio, 10) - parseInt(b.precio, 10);
    });
    return vehiclesByValue;
  }
};
