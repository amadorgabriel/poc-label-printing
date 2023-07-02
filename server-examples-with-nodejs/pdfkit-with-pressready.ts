const fs = require("fs");
const PDFDocument = require("pdfkit");
const SVGtoPDF = require("svg-to-pdfkit");
const { exec } = require("child_process");

const svgPath = "./assets/svg/puzzle.svg";
const mountOutputPath = "./results/pdfkitMountedPDF.pdf";
const convertedToX1aPath = "./results/convertedToX1aPDF.pdf";

// Generate PDF
function mountPDF() {
  const doc = new PDFDocument({ size: [100, 180] }); // Especifica o tamanho em pontos (1 ponto = 1/72 polegadas)

  // Register font on PDF
  doc.registerFont("RobotoMed", "./assets/fonts/Roboto-Medium.ttf");

  // Add Svg
  // const svgContent = fs.readFileSync(svgPath, "utf-8");
  // SVGtoPDF(doc, svgContent, 10, 80, { width: 80, height: 80 });
  // doc.image('./assets/puzzle.svg', { width: 400, height: 300 });

  doc
    .font("RobotoMed")
    .fontSize(12)
    .text("Exemplo PDF montada com pdfkit", 10, 20, { width: 80 });

  doc.pipe(fs.createWriteStream(mountOutputPath));

  doc.end();
}

// Convert format to x1a with press-ready
function convertToX1a() {
  const command = `press-ready build -i ${mountOutputPath} -o ${convertedToX1aPath}`;

  exec(command);

  console.log("PDF convertido para X-1a com sucesso!");
}

function lintPdf(path) {
  const command = `press-ready lint ${path}`;

  exec(command);
}

mountPDF();
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
