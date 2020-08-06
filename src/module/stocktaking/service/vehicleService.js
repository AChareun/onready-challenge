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
    this.mapData();
    return this.vehicleList;
  }

  /**
   * @returns {Array.<import('../entities/auto') | import('../entities/moto')>}
   */
  getMostExpensiveVehicle() {
    const prices = this.vehicleList.map((item) => {
      const price = item.precio.split('').splice(1).join('');
      return parseInt(price, 10);
    });
    const maxValue = Math.max(...prices);
    const mostExpensiveVehicle = this.vehicleList.filter((item) => {
      const price = item.precio.split('').splice(1).join('');
      return parseInt(price, 10) === maxValue;
    });

    return mostExpensiveVehicle[0];
  }

  /**
   * @returns {Array.<import('../entities/auto') | import('../entities/moto')>}
   */
  getCheapestVehicle() {
    const prices = this.vehicleList.map((item) => {
      const price = item.precio.split('').splice(1).join('');
      return parseInt(price, 10);
    });
    const minValue = Math.min(...prices);
    const cheapestVehicle = this.vehicleList.filter((item) => {
      const price = item.precio.split('').splice(1).join('');
      return parseInt(price, 10) === minValue;
    });

    return cheapestVehicle[0];
  }

  /**
   * @returns {Array.<import('../entities/auto') | import('../entities/moto')>}
   */
  getWithModelY() {
    // eslint-disable-next-line arrow-body-style
    const matchingVehicle = this.vehicleList.filter((item) => {
      return item.modelo.toLowerCase().includes('y');
    });
    if (matchingVehicle.length === 0) {
      throw new Error("No se encontró vehículo cuyo modelo contenga 'Y'");
    }
    return matchingVehicle[0];
  }

  /**
   * @param {boolean} ascending - Determines if sorting is ascending or descending
   * @returns {Array.<import('../entities/auto') | import('../entities/moto')>} Sorted by value
   */
  getSortedByValue(ascending) {
    if (!ascending) {
      const vehiclesByValue = this.vehicleList.sort((a, b) => {
        const priceA = a.precio.split('').splice(1).join('');
        const priceB = b.precio.split('').splice(1).join('');
        return parseInt(priceB, 10) - parseInt(priceA, 10);
      });
      return vehiclesByValue;
    }

    const vehiclesByValue = this.vehicleList.sort((a, b) => {
      const priceA = a.precio.split('').splice(1).join('');
      const priceB = b.precio.split('').splice(1).join('');
      return parseInt(priceA, 10) - parseInt(priceB, 10);
    });
    return vehiclesByValue;
  }
};
