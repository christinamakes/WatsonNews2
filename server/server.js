'use strict';

const express = require('express');
const news = require('./news');

const app = express();

app.use(express.static('public'));


// GET articles from news.js
    // user provide userQuery
    // user provide startDate & endDate

  app.get('/', (req, res, next) => {
    const { input } = req.params;
    console.log(input);
    news.articles(input, '12-03-17', '12-10-17');
  });

app.listen(8080, function () {
  console.info(`Server listening on ${this.address().port}`);
}).on('error', err => {
  console.error(err);
});




