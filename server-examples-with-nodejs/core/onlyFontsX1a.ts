export {};

const { fs, PDFKit } = require("./constants/index.ts");

const onlyFontsX1aPath = "./core/results/onlyFontsX1a.pdf";
const fontMRobotoPath = "../assets/fonts/Roboto-Medium.ttf";

module.exports = {
  mountOnlyFontsX1a: () => {
    const doc = new PDFKit({ size: [100, 180] });

    doc.registerFont("Roboto", require.resolve(fontMRobotoPath));

    doc
      .font("Roboto")
      .fontSize(12)
      .text("Somente fontes com pdfkit", 10, 20, { width: 80 });

    doc.pipe(fs.createWriteStream(onlyFontsX1aPath));

    doc.end();
  },
};
