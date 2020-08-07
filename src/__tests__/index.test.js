/* eslint-disable no-console */
const logData = require('../index');
const fixture = require('./fixtures/testData.json');

beforeAll(() => {
  console.log = jest.fn();
});

afterEach(() => {
  jest.resetAllMocks();
});

test('logs are equal to challenge requirements', () => {
  logData(fixture);

  expect(console.log.mock.calls[0][0]).toBe('Marca: Peugeot // Modelo: 206 // Puertas: 4 // Precio: $200.000,00');
  expect(console.log.mock.calls[1][0]).toBe('Marca: Honda // Modelo: Titan // Cilindrada: 125c // Precio: $60.000,00');
  expect(console.log.mock.calls[2][0]).toBe('Marca: Peugeot // Modelo: 208 // Puertas: 5 // Precio: $250.000,00');
  expect(console.log.mock.calls[3][0]).toBe('Marca: Yamaha // Modelo: YBR // Cilindrada: 160c // Precio: $80.500,50');

  expect(console.log.mock.calls[4][0]).toBe('=============================');

  expect(console.log.mock.calls[5][0]).toBe('Vehículo más caro: Peugeot 208');
  expect(console.log.mock.calls[6][0]).toBe('Vehículo más barato: Honda Titan');
  expect(console.log.mock.calls[7][0]).toBe('Vehículo que contiene en el modelo la letra ‘Y’: Yamaha YBR \\$80.500,50');

  expect(console.log.mock.calls[8][0]).toBe('Vehículos ordenados por precio de mayor a menor:');
  expect(console.log.mock.calls[9][0]).toBe('Peugeot 208');
  expect(console.log.mock.calls[10][0]).toBe('Peugeot 206');
  expect(console.log.mock.calls[11][0]).toBe('Yamaha YBR');
  expect(console.log.mock.calls[12][0]).toBe('Honda Titan');
});
