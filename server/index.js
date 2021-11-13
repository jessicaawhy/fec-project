require('dotenv').config();

const express = require('express');
const path = require('path');
const reviewRouter = require('./routes/reviews');
const overviewRouter = require('./routes/overview');
const productsRouter = require('./routes/products');
const questionsRouter = require('./routes/questions');
const answersRouter = require('./routes/answers');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/reviews', reviewRouter);
app.use('/overview', overviewRouter);
app.use('/products', productsRouter);
app.use('/qa/questions', questionsRouter);
app.use('/qa/answers', answersRouter);

app.listen(port);
