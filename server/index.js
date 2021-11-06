require('dotenv').config();

const express = require('express');
const path = require('path');
const reviewRouter = require('./routes/reviews');
const overviewRouter = require('./routes/overview');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/../public')));

app.use('/reviews', reviewRouter);

app.use('/overview', overviewRouter);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
