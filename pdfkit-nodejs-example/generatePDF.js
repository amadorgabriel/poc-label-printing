const PDFDocument = require("pdfkit");
const SVGtoPDF = require("svg-to-pdfkit");
const fs = require("fs");

const inputPath = "output.pdf";

async function generatePDF() {
  const doc = new PDFDocument({ size: [100, 160] }); // Especifica o tamanho em pontos (1 ponto = 1/72 polegadas)

  const svgContent = fs.readFileSync("./assets/puzzle.svg", "utf-8");

  SVGtoPDF(doc, svgContent, 10, 50, { width: 80, height: 80 });

  doc.fontSize(12).text("Etiqueta test", 10, 20, { width: 80});

  doc.pipe(fs.createWriteStream(inputPath));

  doc.end();
}

generatePDF();
