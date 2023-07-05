export {};

const convertToX1a = require("./utils/convertToX1a.ts");
const mountPDF = require("./utils/mountPDF.ts");

module.exports = {
  mountX1a: () => {
    mountPDF.mountPDF();
    convertToX1a.convertToX1a();
  },
};
