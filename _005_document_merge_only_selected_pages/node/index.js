const fs = require('fs');
const {
  PDFDocumentFactory,
  PDFDocumentWriter,
  StandardFonts,
  drawLinesOfText,
  drawImage,
  drawRectangle,
} = require('../../_002_document_add/node/node_modules/pdf-lib');

const assets = {
  firstDonorPdfBytes:  fs.readFileSync('./assets/example1.pdf'),
  secondDonorPdfBytes:  fs.readFileSync('./assets/example2.pdf'),
};

const firstDonorPdfDoc = PDFDocumentFactory.load(assets.firstDonorPdfBytes);
const secondDonorPdfDoc = PDFDocumentFactory.load(assets.secondDonorPdfBytes);

const firstDonorPage = firstDonorPdfDoc.getPages()[0];
const secondDonorPage = secondDonorPdfDoc.getPages()[1];

const pdfDoc = PDFDocumentFactory.create();

pdfDoc.addPage(firstDonorPage);
pdfDoc.insertPage(0, secondDonorPage);

const pdfBytes = PDFDocumentWriter.saveToBytes(pdfDoc);

const filePath = `${__dirname}/_005_document_merge_only_selected_pages.pdf`;
fs.writeFileSync(filePath, pdfBytes);
console.log(`PDF file written to: ${filePath}`);