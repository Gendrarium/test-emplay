const fs = require('fs');
const path = require('path');
const uuid = require('uuid');
const PDFDocument = require('pdfkit');
const Answer = require('../models/answer');


module.exports.getAnswers = (req, res) => {
  Answer.find({})
    .then((answers) => res.send(answers))
    .catch((err) => {
      res.status(500).send({message: 'Ошибка'});
    });
};

module.exports.createAnswer = (req, res) => {
    const doc = new PDFDocument();
    const randomId = uuid.v1();
    const fontPath = path.join(__dirname, '..', 'vendor', 'Roboto.ttf');
    const {answers, questions} = req.body;
    const filename = randomId + '.pdf';


  Answer.create({ name: answers[0], answers, questions })
    .then(() => {
      doc.pipe(fs.createWriteStream(filename));

    for(let i=0; i<questions.length; i++) {
      doc.font(fontPath)
        .fontSize(25)
        .text(questions[i], 100, 50+100*i, { align: "center" })
        .fontSize(15)
        .text(answers[i], 100, 100+100*i, { align: "left" });
    }
      doc.end();
      res.status(200).send({message: 'Данные успешно сохранены'});
    })
    .catch((err) => {
        res.status(500).send({message: `Ошибка: ${err}`});
    });
};
