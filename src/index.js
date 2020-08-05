const StockTaker = require('./module/stocktaking/service/stockTake');
const StockLogger = require('./module/stocktaking/service/logger');
const vehicleData = require('../data/vehicles.db.json');

function getStock(dbData) {
  const newStocker = new StockTaker(dbData);
  const newLogger = new StockLogger(newStocker.itemList);

  newLogger.logStock();
}

getStock(vehicleData);
