



const express = require('express');
const morgan = require('morgan');
const categoryRouter = require('./routes/categoryRouter');
const questionRouter = require('./routes/questionRouter');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.use('/api/categories', categoryRouter);
app.use('/api/questions', questionRouter);

module.exports = app;