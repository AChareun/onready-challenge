const vehicleData = require('../data/vehicles.db.json');
const mapAuto = require('./mapper/autoMapper');
const mapMoto = require('./mapper/motoMapper');

function mapData(data) {
  const listaVehiculos = data.map((item) => {
    if (item.tipo === 'auto') {
      return mapAuto(item);
    }
    if (item.tipo === 'moto') {
      return mapMoto(item);
    }

    return null;
  });

  return listaVehiculos;
}

function logData(dataArray) {
  let finalLog = '';
  dataArray.forEach((item) => {
    let logChunk = '';
    Object.entries(item).forEach(([key, value]) => {
      logChunk += `${key}: ${value} // `;
    });
    finalLog += `${logChunk}
`;
  });

  console.log(finalLog);
}

logData(mapData(vehicleData));

// Marca: Peugeot // Modelo: 206 // Puertas: 4 // Precio: $200.000,00
// Marca: Honda // Modelo: Titan // Cilindrada: 125c // Precio: $60.000,00
// Marca: Peugeot // Modelo: 208 // Puertas: 5 // Precio: $250.000,00
// Marca: Yamaha // Modelo: YBR // Cilindrada: 160c // Precio: $80.500,50
// =============================
// Vehículo más caro: Peugeot 208
// Vehículo más barato: Honda Titan
// Vehículo que contiene en el modelo la letra ‘Y’: Yamaha YBR \$80.500,50
