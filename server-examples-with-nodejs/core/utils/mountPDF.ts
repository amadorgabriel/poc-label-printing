export {};

const { fs, PDFKit, SVGtoPDF } = require("../constants/index.ts");

const svgPath = "../../assets/svg/puzzle.svg";
const mountedPath = "./core/results/mounted.pdf";
const fontMRobotoPath = "../../assets/fonts/Roboto-Medium.ttf";

module.exports = {
  mountPDF: () => {
    const doc = new PDFKit({ size: [100, 180] });

    doc.registerFont("Roboto", require.resolve(fontMRobotoPath));

    const svgContent = fs.readFileSync(require.resolve(svgPath), {
      encoding: "utf8",
    });

    SVGtoPDF(doc, svgContent, 10, 80, { width: 80, height: 80 });
    doc
      .font("Roboto")
      .fontSize(12)
      .text("PDF montado com pdfkit", 10, 20, { width: 80 });

    doc.pipe(fs.createWriteStream(mountedPath));

    doc.end();
  },
};
