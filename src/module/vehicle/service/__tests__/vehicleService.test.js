const VehicleService = require('../vehicleService');
const fixture = require('./fixtures/testData.json');

const objectList = [
  { marca: 'test1', modelo: 'test2', precio: '$2' },
  { marca: 'testA', modelo: 'testB', precio: '$3' },
  { marca: 'testX', modelo: 'testY', precio: '$1' },
];

const testService = new VehicleService(fixture);

afterAll(() => {
  jest.resetAllMocks();
});

describe('tests VehicleService methods', () => {
  test('class constructor works propperly', () => {
    expect(testService.data).toBe(fixture);
  });

  test('mapData creates an array and assignes it to vehicleList', () => {
    testService.mapData();

    expect(testService.vehicleList).toBeInstanceOf(Array);
  });

  test('getAll calls mapData', () => {
    testService.getAll = jest.fn();
    testService.getAll();

    expect(testService.getAll).toHaveBeenCalledTimes(1);
  });

  test('getMostExpensiveVehicle does what it says', () => {
    testService.vehicleList = objectList;
    const expensiveVehicle = testService.getMostExpensiveVehicle();

    expect(expensiveVehicle.precio).toEqual('$3');
  });

  test('getCheapestVehicle does what it says', () => {
    const cheapestVehicle = testService.getCheapestVehicle();

    expect(cheapestVehicle.precio).toEqual('$1');
  });

  test('you can get the object with Y in model', () => {
    const modelWithY = testService.getWithModelY();

    expect(modelWithY.modelo).toEqual('testY');
  });

  test('getSortByValue(false) returns descending-sorted list', () => {
    const descending = testService.getSortedByValue(false);

    expect(descending[0].precio).toEqual('$3');
  });

  test('getSortByValue(true) returns ascending-sorted list', () => {
    const ascending = testService.getSortedByValue(true);

    expect(ascending[0].precio).toEqual('$1');
  });
});
