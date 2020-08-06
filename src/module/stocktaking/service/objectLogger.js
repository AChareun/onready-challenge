/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
module.exports = class ObjectLogger {
  /**
   * @param {Array.<Object>} objectList
   */
  logObjects(objectList) {
    objectList.forEach((object) => {
      let log = '';
      Object.entries(object).forEach(([key, value]) => {
        const capitalKey = key.replace(/^\w/, (c) => c.toUpperCase());
        log += `${capitalKey}: ${value} // `;
      });
      console.log(log);
    });
  }

  /**
   * @param {string} title
   * @param  {... string} values
   */
  logKeyValuePair(title, ...values) {
    let log = '';
    log += title;
    values.forEach((value) => {
      log += ` ${value}`;
    });

    console.log(log);
  }

  /**
   * @param {string} title
   * @param {Array.<Object>} list
   */
  logList(title, list) {
    console.log(title);
    list.forEach((item) => {
      console.log(`${item.marca} ${item.modelo}`);
    });
  }

  /**
   * @function Logs a separator to divide sections of the log
   */
  logSeparator() {
    console.log('=============================');
  }
};
