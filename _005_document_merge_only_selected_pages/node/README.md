# Node - Document _005_document_merge_only_selected_pages
This directory is a self-contained example of how to modify a PDF document
using `pdf-lib` in a Node environment. It is implemented as a simple NPM module
that uses a version of `pdf-lib` published to NPM.

## Running the Example
You can download and run this example yourself with just a few commands:
```bash
git clone https://github.com/mimaraslan/pdf-lib_nodejs-demo-project.git
cd pdf-lib_nodejs-demo-project/_005_document_merge_only_selected_pages/node
npm install
npm i pdf-lib
node index.js
```

The `index.js` script will modify a tax voucher PDF file using `pdf-lib` and save it to the directory alongside the script as `_005_document_merge_only_selected_pages.pdf`. The script will also log the full path to the PDF.

If you're using a Mac, you can open the pdf from the command line with:
```bash
open _005_document_merge_only_selected_pages.pdf
```
