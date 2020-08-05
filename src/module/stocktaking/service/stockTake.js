const mapAuto = require('../mapper/autoMapper');
const mapMoto = require('../mapper/motoMapper');

module.exports = class stockTaker {
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

  getStock() {
    return this.itemList;
  }

  constructor(data) {
    this.data = data;
    this.itemList = this.mapData();
  }
};
