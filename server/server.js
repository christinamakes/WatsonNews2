'use strict';

const express = require('express');
const news = require('./news');
const watson = require('./watson');

const app = express();

app.use(express.static('public'));

console.log('server ready');
// GET articles from news.js
    // user provide userQuery
    // user provide startDate & endDate


  app.get('/question', (req, res) => {
    const { input } = req.query;
    // console.log(input);
    res.json(news.articles(input, '12-03-17', '12-10-17'));
  });

app.listen(8080, function () {
  console.info(`Server listening on ${this.address().port}`);
}).on('error', err => {
  console.error(err);
});




