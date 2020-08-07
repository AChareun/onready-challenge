const mapCar = require('../mapper/carMapper');
const mapMotorbike = require('../mapper/motorbikeMapper');

/**
 * @param {string} price
 * @returns {number}
 */
function priceToInt(price) {
  const no$String = price.split('').splice(1).join('');
  return parseInt(no$String, 10);
}

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
        return mapCar(item);
      }
      if (item.tipo === 'moto') {
        return mapMotorbike(item);
      }

      return null;
    });
  }

  /**
   * @returns {Array.<import('../entity/car') | import('../entity/motorbike')>}
   */
  getAll() {
    this.mapData();
    return this.vehicleList;
  }

  /**
   * @returns {import('../entity/car') | import('../entity/motorbike')}
   */
  getMostExpensiveVehicle() {
    const prices = this.vehicleList.map((item) => priceToInt(item.precio));
    const maxValue = Math.max(...prices);
    const mostExpensiveVehicle = this.vehicleList.filter((item) => {
      const price = priceToInt(item.precio);
      return price === maxValue;
    });
    return mostExpensiveVehicle[0];
  }

  /**
   * @returns {import('../entity/car') | import('../entity/motorbike')}
   */
  getCheapestVehicle() {
    const prices = this.vehicleList.map((item) => priceToInt(item.precio));
    const minValue = Math.min(...prices);
    const cheapestVehicle = this.vehicleList.filter((item) => {
      const price = priceToInt(item.precio);
      return price === minValue;
    });

    return cheapestVehicle[0];
  }

  /**
   * @returns {import('../entity/car') | import('../entity/motorbike') | string}
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
   * @returns {Array.<import('../entity/car') | import('../entity/motorbike')>} Sorted by value
   */
  getSortedByValue(ascending) {
    if (!ascending) {
      const vehiclesByValue = this.vehicleList.sort((a, b) => {
        const priceA = priceToInt(a.precio);
        const priceB = priceToInt(b.precio);
        return priceB - priceA;
      });
      return vehiclesByValue;
    }

    const vehiclesByValue = this.vehicleList.sort((a, b) => {
      const priceA = priceToInt(a.precio);
      const priceB = priceToInt(b.precio);
      return priceA - priceB;
    });
    return vehiclesByValue;
  }
};
