module.exports = class StockLogger {
  /**
   * @param {import('./StockRetriever')} StockRetriever
   * @param {import('./LogBuilder')} LogBuilder
   * @param {JSON} dbData
   * @param {boolean} maxToMin - Determines if vehicle order by value is max-to-min or min-to-max
   * @param {string} charToFind - Used to find a model that includes it
   * @param {Array.<Function>} methods - Functions depending on info wanted on the log
   */
  constructor(
    StockRetriever, LogBuilder, dbData, maxToMin, charToFind, methods,
  ) {
    this.StockRetriever = new StockRetriever(dbData);
    this.stock = this.StockRetriever.getStock();
    this.LogBuilder = new LogBuilder(this.stock, maxToMin, charToFind, ...methods);
    this.log = this.LogBuilder.getLog();
  }

  logData() {
    console.log(this.log);
  }
};
