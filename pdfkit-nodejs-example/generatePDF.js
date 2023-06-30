const PDFDocument = require("pdfkit");
const SVGtoPDF = require("svg-to-pdfkit");
const fs = require("fs");

const inputPath = 'output.pdf';

async function generatePDF() {
  const doc = new PDFDocument();

  const svgContent = fs.readFileSync("./assets/puzzle.svg", "utf-8");

  SVGtoPDF(doc, svgContent, 0, 0);

  doc.fontSize(18).text("Hello, World!", 100, 100);

  doc.pipe(fs.createWriteStream(inputPath));

  doc.end();
}

generatePDF()
