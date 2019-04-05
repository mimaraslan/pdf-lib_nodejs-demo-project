const fs = require('../../_002_document_add/node/node_modules/fs');
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

const pdfDoc = PDFDocumentFactory.create();

for (var i = 0; i < firstDonorPdfDoc.getPages().length; i++) {
    pdfDoc.addPage(firstDonorPdfDoc.getPages()[i]);
}

for (var i = 0; i < secondDonorPdfDoc.getPages().length; i++) {
  pdfDoc.insertPage(i, secondDonorPdfDoc.getPages()[i]);
}

const pdfBytes = PDFDocumentWriter.saveToBytes(pdfDoc);

const filePath = `${__dirname}/_004_document_merge_all_pages.pdf`;
fs.writeFileSync(filePath, pdfBytes);
console.log(`PDF file written to: ${filePath}`);
