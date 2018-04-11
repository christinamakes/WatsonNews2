'use strict';

const NewsAPI = require('newsapi');
const watson = require('./watson');

const app = new NewsAPI('cffd5c18704145eb89a7156717753b11');

// Takes user query returns reults into promise then feeds them into watson analyze and calls watson
const articles = function (userQuery, startDate, endDate) {
  app.v2.everything({
    q: userQuery,
    // sources: 'bbc-news,the-verge',
    // domains: 'bbc.co.uk, techcrunch.com',
    from: startDate,
    to: endDate,
    language: 'en',
    sortBy: 'relevancy',
    page: 2
  }).then(response => {
    let parameters = {};
    // CHANGE LENGTH FROM i < 1 !!!
    for (let i = 0; i < 1; i++) {
      parameters = {
        'url': `${response.articles[i].url}`,
        'features': {
          'emotion': {
            'document': true,
          },
        }
      };
    }

    // return watson.callWatson(parameters);
    return new Promise(function (resolve, reject) {
      watson.callWatson(parameters, function (err, response) {
        if (err) {
          console.log('error:', err);
          // reject(err);
        } else {
          console.log('hi');
          // resolve(response);
        }
      });
    });
  });
};





module.exports.articles = articles;


// articles('bitcoin', '12-10-17', '12-19-17');


