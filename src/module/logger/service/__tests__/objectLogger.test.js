/* eslint-disable no-console */
const ObjectLogger = require('../objectLogger');

const testLogger = new ObjectLogger();

const objectList = [
  { marca: 'test1', modelo: 'test2' },
  { marca: 'testA', modelo: 'testB' },
];

beforeEach(() => {
  console.log = jest.fn();
});

afterEach(() => {
  jest.resetAllMocks();
});

describe('test Logger methods', () => {
  test('logObjects logs key/value pairs propperly formated', () => {
    testLogger.logObjects(objectList);

    expect(console.log.mock.calls[0][0]).toBe('Marca: test1 // Modelo: test2');
    expect(console.log.mock.calls[1][0]).toBe('Marca: testA // Modelo: testB');
  });

  test('logKeyValuePair logs title and params propperly', () => {
    testLogger.logKeyValuePair('title', objectList[0].marca, objectList[0].modelo);

    expect(console.log.mock.calls[0][0]).toBe('title test1 test2');
  });

  test('logList logs a list of objects values with a title', () => {
    testLogger.logList('title', objectList);

    expect(console.log.mock.calls[0][0]).toBe('title');
    expect(console.log.mock.calls[1][0]).toBe('test1 test2');
    expect(console.log.mock.calls[2][0]).toBe('testA testB');
  });

  test('logSeparator logs a row of "="', () => {
    testLogger.logSeparator();

    expect(console.log.mock.calls[0][0]).toBe('=============================');
  });
});
