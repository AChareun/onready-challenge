const StockRetriever = require('./module/stocktaking/service/StockRetriever');
const StockLogger = require('./module/stocktaking/service/StockLogger');
const LogBuilder = require('./module/stocktaking/service/LogBuilder');
const logMethods = require('./module/stocktaking/service/logMethods');
const vehicleData = require('../data/vehicles.db.json');

function getStock(dbData, maxToMin, charToFind, requests) {
  const newLogger = new StockLogger(
    StockRetriever, LogBuilder, dbData, maxToMin, charToFind, requests,
  );

  newLogger.logData();
}

getStock(vehicleData, true, 'Y', logMethods);
