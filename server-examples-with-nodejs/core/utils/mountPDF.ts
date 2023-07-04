const { fs, PDFKit, SVGtoPDF } = require("../constants/index");

const svgPath = "../../assets/svg/puzzle.svg";
const mountedPath = "../results/mounted.pdf";
const fontMRobotoPath = "../../assets/fonts/Roboto-Medium.ttf";

function mountPDF() {
  const doc = new PDFKit({ size: [100, 180] });

  doc.registerFont("Roboto", fontMRobotoPath);

  const svgContent = fs.readFileSync(svgPath, "utf-8");
  SVGtoPDF(doc, svgContent, 10, 80, { width: 80, height: 80 });
  doc
    .font("Roboto")
    .fontSize(12)
    .text("Exemplo PDF montada com pdfkit", 10, 20, { width: 80 });

  doc.pipe(fs.createWriteStream(mountedPath));

  doc.end();
}

export { mountPDF };
