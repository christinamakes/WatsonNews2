'use strict';

const NewsAPI = require('newsapi');
const watson = require('./watson');

const app = new NewsAPI('cffd5c18704145eb89a7156717753b11');
let userQuery;
let startDate;
let endDate;

// Takes user query returns reults into promise then feeds them into watson analyze and calls watson
const articles = function(userQuery, startDate, endDate) {
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
  let currentURL = [];
  // take url from news results and push to array
  // CHANGE LENGTH FROM i < 2 !!!
  for( let i = 0; i < 2; i++) {
    currentURL.push(response.articles[i].url);
  }
  return currentURL;
})
  .then(response => {
      for (let i = 0; i < response.length; i++) {
        let parameters = {
          'url': `${response[i]}`,
          'features': {
          'emotion': {
          'document': true,
          },
        }
      };
    watson.callWatson(parameters, null);
    }
  });
};


articles('bitcoin', '12-3-17', '12-13-17');



