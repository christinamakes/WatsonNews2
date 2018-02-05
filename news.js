'use strict';

const NewsAPI = require('newsapi');
const watson = require('./watson');

const app = new NewsAPI('cffd5c18704145eb89a7156717753b11');
// To query /v2/everything
// You must include at least one q, source, or domain
const articles = function() {
  app.v2.everything({
  q: 'bitcoin',
  // sources: 'bbc-news,the-verge',
  // domains: 'bbc.co.uk, techcrunch.com',
  from: '2017-12-01',
  to: '2017-12-12',
  language: 'en',
  // totalResults: 2,
  sortBy: 'relevancy',
  page: 2,
}).then(response => {
  //take results and feed them into Watson
  for( let i = 0; i < response.articles.length; i++) {
    console.log(response.articles[i].url);
    }
  });
};

articles();


