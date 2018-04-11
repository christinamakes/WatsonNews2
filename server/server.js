'use strict';

const express = require('express');
const news = require('./news');
const watson = require('./watson');
const api = require('../public/scripts/api');

const app = express();

app.use(express.static('public'));

console.log('server ready');
// GET articles from news.js
// user provide userQuery
// user provide startDate & endDate


app.get('/question', (req, res) => {
  const { input } = req.query;
  news.articles('bitcoin', '12-10-17', '12-19-17').then(function (results) { console.log(results); }); // returns undefined, news and watson are returning correctly, calling .then returns undefined
  // console.log(input);
  // res.json(news.articles(input, '12-03-17', '12-10-17'));
});

app.listen(8080, function () {
  console.info(`Server listening on ${this.address().port}`);
}).on('error', err => {
  console.error(err);
});




