const express = require('express');
const pdf = require('./routes/pdf');
const cors = require('cors');

const { PORT = 3000 } = process.env;
const CORS_WHITELIST = ['http://localhost:3001'];
const app = express();

const corsOption = {
  origin: function checkCorsList(origin, callback) {
    if (CORS_WHITELIST.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
app.use(cors(corsOption));

app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

app.use('/', pdf);


app.listen(PORT, () => {
});
