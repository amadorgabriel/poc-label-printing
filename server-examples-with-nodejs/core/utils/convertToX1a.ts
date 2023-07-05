export {};

const { childProcess } = require("../constants/index.ts");

const mountedPath = "../results/mounted.pdf";
const mountedX1aPath = "../results/mountedX1a.pdf";

module.exports = {
  convertToX1a: () => {
    const convertCommand = `press-ready build -i ${mountedPath} -o ${mountedX1aPath} --gray-scale --enforce-outline`;

    childProcess.exec(convertCommand);
  },
};
