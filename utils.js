const puppeteer = require("puppeteer-core");

module.exports = {
  delay: function(time) {
    return new Promise(function(resolve) {
      setTimeout(resolve, time);
    });
  },
  /**
   *
   * @param {puppeteer.ElementHandle} element
   * @param {*} attr
   * @returns string
   */
  getAttr: async function(element, attr) {
    return (
      (await (await element.getProperty(attr)).jsonValue()) ||
      (await element.evaluate((e, attr) => e.getAttribute(attr), attr))
    );
  }
};
