require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const reviewRouter = require('./routes/reviews');
const overviewRouter = require('./routes/overview');
const productsRouter = require('./routes/products');
const questionsRouter = require('./routes/questions');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../public')));

app.use('/reviews', reviewRouter);
app.use('/overview', overviewRouter);
app.use('/products', productsRouter);
app.use('/qa/questions', questionsRouter);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
