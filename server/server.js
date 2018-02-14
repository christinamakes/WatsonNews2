'use strict';

const express = require('express');


const app = express();

app.use(express.static('public'));


// GET articles from news.js
    // user provide userQuery
    // user provide startDate & endDate

app.listen(8080, function () {
  console.info(`Server listening on ${this.address().port}`);
}).on('error', err => {
  console.error(err);
});




