const fs = require("fs");
const pdfParse = require("pdf-parse");

async function extractTextFromPdf(path) {
  const fileBuffer = fs.readFileSync(path);
  const pdf = await pdfParse(fileBuffer);
  return pdf.text;
}

module.exports = { extractTextFromPdf };
