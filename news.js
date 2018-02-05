'use strict';

const NewsAPI = require('newsapi');
const watson = require('./watson');

const app = new NewsAPI('cffd5c18704145eb89a7156717753b11');


// Takes user query returns reults into promise then feeds them into watson analyze and calls watson
const articles = function() {
  app.v2.everything({
  q: 'bitcoin',
  // sources: 'bbc-news,the-verge',
  // domains: 'bbc.co.uk, techcrunch.com',
  from: '2017-12-01',
  to: '2017-12-12',
  language: 'en',
  sortBy: 'relevancy',
  page: 2
}).then(response => {
  let currentURL = [];
  // take url from news results and push to array
  for( let i = 0; i < response.articles.length; i++) {
    currentURL.push(response.articles[i].url);
  }
  return currentURL
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
      }
    watson.callWatson(parameters, null);
    }
  })
};


articles();



