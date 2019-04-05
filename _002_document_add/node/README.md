# Node - Document _002_document_add
This directory is a self-contained example of how to create a PDF document
using `pdf-lib` in a Node environment. It is implemented as a simple NPM module
that uses a version of `pdf-lib` published to NPM.

## Purpose of this Example
This example script  demonstrates how to:
* Create a new PDF document.
* Draw text with a standard font.
* Draw text with an embedded font.
* Draw pictures of embedded PNG and JPG images.
* Draw vector graphics (shapes likes ellipses and rectangles).

## Running the Example
You can download and run this example yourself with just a few commands:
```bash
git clone https://github.com/mimaraslan/pdf-lib_nodejs-demo-project.git
cd pdf-lib_nodejs-demo-project/_002_document_add/node
npm install
npm i pdf-lib
node index.js
```

The `index.js` script will create a PDF file using `pdf-lib` and save it to the
directory alongside the script as `_002_document_add.pdf`. The script will also log the full
path to the PDF.

If you're using a Mac, you can open the pdf from the command line with:
```bash
open _002_document_add.pdf
```