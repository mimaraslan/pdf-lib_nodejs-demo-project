const fs = require('fs');
const {
  PDFDocumentFactory,
  PDFDocumentWriter,
  StandardFonts,
  drawLinesOfText,
  drawImage,
  drawRectangle,
} = require('pdf-lib');

const assets = {
  myDonorPdfBytes:  fs.readFileSync('./assets/example1.pdf'),
};

const myDonorPdfDoc = PDFDocumentFactory.load(assets.myDonorPdfBytes);

const splitPagePart1 = myDonorPdfDoc.getPages()[0];
const splitPagePart2 = myDonorPdfDoc.getPages()[2];

const pdfDoc = PDFDocumentFactory.create();

pdfDoc.addPage(splitPagePart1);
pdfDoc.addPage(splitPagePart2);

const pdfBytes = PDFDocumentWriter.saveToBytes(pdfDoc);

const filePath = `${__dirname}/_006_document_split.pdf`;
fs.writeFileSync(filePath, pdfBytes);
console.log(`PDF file written to: ${filePath}`);
