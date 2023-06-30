const fs = require("fs");
const PDFDocument = require("pdfkit");
const SVGtoPDF = require("svg-to-pdfkit");
const { spawn, exec } = require("child_process");

const inputPath = "output.pdf";

// Generate PDF
function generatePDF() {
  const doc = new PDFDocument({ size: [100, 160] }); // Especifica o tamanho em pontos (1 ponto = 1/72 polegadas)

  // Register font on PDF
  doc.registerFont("RobotoMed", "./assets/fonts/Roboto-Medium.ttf");

  // Add Svg fonts
  // const svgContent = fs.readFileSync("./assets/puzzle.svg", "utf-8");
  // SVGtoPDF(doc, svgContent, 10, 50, { width: 80, height: 80 });

  doc
    .font("RobotoReg")
    .fontSize(12)
    .text("Etiqueta test", 10, 20, { width: 80 });

  doc.pipe(fs.createWriteStream(inputPath));

  doc.end();
}

// Convert format to x1a with press-ready
function convertToX1a() {
  const command = `press-ready build -i output.pdf -o converted.pdf`;

  exec(command);

  console.log("PDF convertido para X-1a com sucesso!");

  lintPdf("converted.pdf");
}

function lintPdf(path) {
  const command = `press-ready lint ${path}`;

  exec(command);
}

generatePDF();
convertToX1a();

// Convert format to x1a with ghostscript
// function convertWithGs() {
//   const gsArgs = [
//     "-dCompatibilityLevel=1.3 ",
//     "-dPDFACompatibilityPolicy=1 ",

//     "-dPDFA=2",
//     "-dBATCH",
//     "-dNOPAUSE",
//     "-sColorConversionStrategy=UseDeviceIndependentColor",
//     "-sDEVICE=pdfwrite",
//     "-sOutputFile=output_x1a.pdf",
//     "converted.pdf",
//   ];

//   const gsProcess = spawn("gswin64c", gsArgs);

//   gsProcess.stdout.on("data", (data) => {
//     console.log(`stdout: ${data}`);
//   });

//   gsProcess.stderr.on("data", (data) => {
//     console.error(`stderr: ${data}`);
//   });

//   gsProcess.on("close", (code) => {
//     console.log(`Ghostscript process exited with code ${code}`);
//   });
// }

// convertWithGs()
