const mapAuto = require('../mapper/autoMapper');
const mapMoto = require('../mapper/motoMapper');

module.exports = class StockRetriever {
  /**
   * @returns {Array.<import('../entities/auto') | import('../entities/moto')>}
   */
  mapData() {
    const vehicleList = this.data.map((item) => {
      if (item.tipo === 'auto') {
        return mapAuto(item);
      }
      if (item.tipo === 'moto') {
        return mapMoto(item);
      }

      return null;
    });

    return vehicleList;
  }

  /**
   * @returns {Array.<import('../entities/auto') | import('../entities/moto')>}
   */
  getStock() {
    return this.itemList;
  }

  /**
   * @param {JSON} data
   */
  constructor(data) {
    this.data = data;
    this.itemList = this.mapData();
  }
};
