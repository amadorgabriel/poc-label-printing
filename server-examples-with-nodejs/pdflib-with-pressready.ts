import {
  PDFLib,
  convertedToX1aPath,
  copyPDFSecondConversion,
  fontPath,
  fs,
  svgPath,
} from "./constants";

async function mountPDFX3WithPdfLib() {
  const pdfDoc = await PDFLib.PDFDocument.create();

  try {
    const fontBytes = fs.readFileSync(fontPath);

    // Registre a fonte incorporada
    const font = await pdfDoc.embedFont(fontBytes);

    // Registre a fonte para uso posterior
    pdfDoc.registerFont(font);

    // Load the image
    const imageBytes = await fetch(svgPath).then((res) => res.arrayBuffer());
    const image = await pdfDoc.embedPng(imageBytes);

    // Load the ICC profile
    const iccProfileBytes = await fetch("ISOcoated_v2_eci.icc").then((res) =>
      res.arrayBuffer()
    );
    const icc = await pdfDoc.embedIccProfile(iccProfileBytes);

    // Set the document metadata
    pdfDoc.setCreator("PDFlib starter sample");
    pdfDoc.setTitle("starter_pdfx3");

    // Create a new page
    const page = pdfDoc.addPage([595, 842]);

    const { width, height } = page.getSize();

    const contentStream = pdfDoc.createContentStream();
    contentStream.setFontAndSize(font, 24);

    const spotColor = PDFLib.PDFFunction.solid(
      PDFLib.PDFColor.rgb(1.0, 0.0, 0.0)
    );
    const spot = await pdfDoc.register(spotColor);

    contentStream.setFillColor(spot);
    contentStream.drawText("PDF/X-3:2003 starter", { x: 50, y: 700 });

    page.pushContentStream(contentStream);

    page.drawImage(image, {
      x: 0,
      y: height - image.height / 2,
      width: image.width / 2,
      height: image.height / 2,
    });

    page.pushXObject(page.getResources().getFont(font));
    page.pushXObject(page.getResources().getIccProfile(icc));

    const pdfBytes = await pdfDoc.save();

    return pdfBytes;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

mountPDFX3WithPdfLib()
  .then((pdfBytes) => {
    // Do something with the PDF bytes
  })
  .catch((error) => {
    console.error(error);
  });

// async function convertPDFtoPdfLib() {
//   // Carregando o PDF original
//   const pdfOriginal = await PDFLib.PDFDocument.load(
//     fs.readFileSync(convertedToX1aPath)
//   );

//   // Criando um novo PDF
//   const pdfNovo = await PDFLib.PDFDocument.create();

//   // Copiando as páginas do PDF original para o novo PDF
//   const [primeiraPagina] = await pdfNovo.copyPages(pdfOriginal, [0]);
//   pdfNovo.addPage(primeiraPagina);

//   // Adicionando uma nova linha de texto ao novo PDF
//   const fonte = await pdfNovo.embedFont(PDFLib.StandardFonts.Helvetica);
//   const pagina = pdfNovo.getPages()[0];
//   pagina.drawText("Nova linha de texto", {
//     x: 50,
//     y: 50,
//     font: fonte,
//     size: 12,
//   });

//   // Copiando o conteúdo do PDF original para o novo PDF
//   const pdfBytes = await pdfNovo.save();

//   // Gravando o novo PDF em disco
//   fs.writeFileSync(copyPDFSecondConversion, pdfBytes);
// }
