const VehicleService = require('./module/vehicle/service/vehicleService');
const ObjectLogger = require('./module/logger/service/objectLogger');
const vehicleData = require('../data/vehicles.db.json');

function logData(dbData) {
  const vehicleService = new VehicleService(dbData);
  const vehicleLogger = new ObjectLogger();

  vehicleLogger.logObjects(vehicleService.getAll());
  vehicleLogger.logSeparator();

  const mostExpensiveVehicle = vehicleService.getMostExpensiveVehicle();
  vehicleLogger.logKeyValuePair('Vehículo más caro:', mostExpensiveVehicle.marca, mostExpensiveVehicle.modelo);

  const cheapestVehicle = vehicleService.getCheapestVehicle();
  vehicleLogger.logKeyValuePair('Vehículo más barato:', cheapestVehicle.marca, cheapestVehicle.modelo);

  try {
    const vehicleWithModelY = vehicleService.getWithModelY();
    vehicleLogger.logKeyValuePair('Vehículo que contiene en el modelo la letra ‘Y’:', vehicleWithModelY.marca, vehicleWithModelY.modelo, vehicleWithModelY.precio);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }

  const sortedByDescendingValue = vehicleService.getSortedByValue(false);
  vehicleLogger.logList('Vehículos ordenados por precio de mayor a menor:', sortedByDescendingValue);
}

logData(vehicleData);
