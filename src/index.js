const Service = require('./module/stocktaking/service/vehicleService');
const ObjectLogger = require('./module/stocktaking/service/objectLogger');
const vehicleData = require('../data/vehicles.db.json');

function logData(dbData) {
  const VehicleService = new Service(dbData);
  const VehicleLogger = new ObjectLogger();

  VehicleLogger.logObjects(VehicleService.getAll());
  VehicleLogger.logSeparator();

  const mostExpensiveVehicle = VehicleService.getMostExpensiveVehicle();
  VehicleLogger.logKeyValuePair('Vehículo más caro:', mostExpensiveVehicle.marca, mostExpensiveVehicle.modelo);

  const cheapestVehicle = VehicleService.getCheapestVehicle();
  VehicleLogger.logKeyValuePair('Vehículo más barato:', cheapestVehicle.marca, cheapestVehicle.modelo);

  const vehicleWithModelY = VehicleService.getWithModelY();
  VehicleLogger.logKeyValuePair('Vehículo que contiene en el modelo la letra ‘Y’:', vehicleWithModelY.marca, vehicleWithModelY.modelo, vehicleWithModelY.precio);

  const sortedByDescendingValue = VehicleService.getSortedByValue(false);
  VehicleLogger.logList('Vehículos ordenados por precio de mayor a menor:', sortedByDescendingValue);
}

logData(vehicleData);
