/**
 * @returns {string} Formated list of objects with separation at the end
 */
function formatData() {
  const resultArray = [];
  this.data.forEach((item) => {
    const itemInArray = [];
    Object.entries(item).forEach(([key, value]) => {
      const capitalKey = key.replace(/^\w/, (c) => c.toUpperCase());
      const fixedValue = key === 'precio' ? `$${value}` : value;
      const newItem = [capitalKey, fixedValue].join(': ');
      itemInArray.push(newItem);
    });

    const priceIndex = itemInArray.findIndex((elem) => elem.includes('Precio'));
    itemInArray.push(itemInArray.splice(priceIndex, 1)[0]);

    const joinedItem = itemInArray.join(' // ');
    resultArray.push(joinedItem);
  });

  let result = '';
  resultArray.forEach((item) => {
    result += `${item}\n`;
  });
  result += '=============================\n';
  return result;
}

/**
 * @returns {string} Most expensive and cheapest vehicles
 */
function findBorderCasePrices() {
  const prices = this.data.map((item) => parseInt(item.precio, 10));
  const maxValue = Math.max(...prices);
  const minValue = Math.min(...prices);
  const mostExpensiveVehicle = this.data.filter((item) => parseInt(item.precio, 10) === maxValue);
  const cheapestVehicle = this.data.filter((item) => parseInt(item.precio, 10) === minValue);

  return `Vehículo más caro: ${mostExpensiveVehicle[0].marca} ${mostExpensiveVehicle[0].modelo}
Vehículo más barato: ${cheapestVehicle[0].marca} ${cheapestVehicle[0].modelo}\n`;
}

/**
 * @returns {string} Vehicle's with model including this.char
 */
function findModelWithChar() {
  // eslint-disable-next-line arrow-body-style
  const matchingVehicles = this.data.filter((item) => {
    return item.modelo.toLowerCase().includes(this.char.toLowerCase());
  });
  if (matchingVehicles.length === 0) {
    return `No se encontró modelo con la letra ${this.char}\n`;
  }
  if (matchingVehicles.length === 1) {
    return `Vehículo que contiene en el modelo la letra ${this.char}: ${matchingVehicles[0].marca} ${matchingVehicles[0].modelo} \\$${matchingVehicles[0].precio}\n`;
  }
  let result = `Vehículo que contiene en el modelo la letra ${this.char}: `;
  matchingVehicles.forEach((item) => {
    result += `${item.marca} ${item.modelo} \\$${item.precio} // `;
  });

  return `${result}\n`;
}

/**
 * @returns {string} List of vehicles sorted by value
 */
function orderByValue() {
  if (this.maxToMin) {
    let result = 'Vehículos ordenados por precio de mayor a menor:\n';
    // eslint-disable-next-line arrow-body-style
    const vehiclesByValue = this.data.sort((a, b) => {
      return parseInt(b.precio, 10) - parseInt(a.precio, 10);
    });
    vehiclesByValue.forEach((item) => {
      result += `${item.marca} ${item.modelo}\n`;
    });
    return result;
  }
  let result = 'Vehículos ordenados por precio de menor a mayor:\n';
  const vehiclesByValue = this.data.sort((a, b) => parseInt(a.precio, 10) - parseInt(b.precio, 10));
  vehiclesByValue.forEach((item) => {
    result += `${item.marca} ${item.modelo}\n`;
  });
  return result;
}

module.exports = [formatData, findBorderCasePrices, findModelWithChar, orderByValue];
