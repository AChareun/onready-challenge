module.exports = class LogBuilder {
  /**
   * @param {Array.<import('../entities/auto') | import('../entities/moto')>} stock
   * @param {boolean} maxToMin
   * @param {string} charToFind
   * @param {Array.<Function>} requests
   */
  constructor(stock, maxToMin, charToFind, ...requests) {
    this.data = stock;
    this.maxToMin = maxToMin;
    this.char = charToFind;
    this.methods = [...requests];
    this.setLog();
  }

  setLog() {
    this.log = this.methods.reduce((acc, crr) => {
      const partialResult = acc + crr.bind(this)();
      return partialResult;
    }, '');
  }

  /**
   * @returns {string} Complete log
   */
  getLog() {
    if (!this.log) {
      return 'No hay log disponible.';
    }
    return this.log;
  }
};
