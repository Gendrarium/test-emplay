const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const uuid = require('uuid');
const PDFDocument = require('pdfkit');

router.post('/', (req, res) => {
  const doc = new PDFDocument()
  const randomId = uuid.v1();
  const fontPath = path.join(__dirname, 'Roboto.ttf');
  const {name, questions} = req.body;
  const filename = randomId + '.pdf';
  doc.pipe(fs.createWriteStream(filename));
  doc.font(fontPath)
    .fontSize(25)
    .text(questions[0], 100, 50, { align: "center" })
    .fontSize(15)
    .text(name, 100, 100, { align: "left" });
  doc.font(fontPath)
    .fontSize(25)
    .text(questions[1], 100, 150, { align: "center" })
    .fontSize(15)
    .text(name, 100, 200, { align: "left" });
  doc.font(fontPath)
    .fontSize(25)
    .text(questions[2], 100, 250, { align: "center" })
    .fontSize(15)
    .text(name, 100, 300, { align: "left" });
  doc.end();
  res.status(200).send({message: 'Ваши ответы сохранены.'});
})

module.exports = router;
