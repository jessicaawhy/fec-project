require('dotenv').config();

const express = require('express');
const path = require('path');
const reviewRouter = require('./routes/reviews');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/../public')));

app.use('/reviews', reviewRouter);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
