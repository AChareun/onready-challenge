module.exports = class StockLogger {
  constructor(stock) {
    this.stock = stock;
    this.standarizedItems = this.standarizeStock();
    this.log = this.constructLog();
  }

  standarizeStock() {
    const result = [];
    this.stock.forEach((item) => {
      const itemInArray = [];
      Object.entries(item).forEach(([key, value]) => {
        const capitalKey = key.replace(/^\w/, (c) => c.toUpperCase());
        const newItem = [capitalKey, value].join(': ');
        itemInArray.push(newItem);
      });
      const joinedItem = itemInArray.join(' // ');
      result.push(joinedItem);
    });

    return result;
  }

  constructLog() {
    let log = '';
    this.standarizedItems.forEach((item) => {
      log += `${item}\n`;
    });
    log += '=============================';
    return log;
  }

  logStock() {
    console.log(this.log);
  }
};
