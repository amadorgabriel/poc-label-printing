interface ConstantsType {
  [key: string]: string | ((id: string) => any);
}

module.exports = {
  fs: require("fs"),
  PDFLib: require("pdf-lib"),
  PDFKit: require("pdfkit"),
  SVGtoPDF: require("svg-to-pdfkit"),
  childProcess: require("child_process"),
} as ConstantsType;
