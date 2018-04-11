'use strict';

const NewsAPI = require('newsapi');
// const watson = require('./watson');

const app = new NewsAPI('cffd5c18704145eb89a7156717753b11');

const articles = function (userQuery) {
  app.v2.topHeadlines({
    q: userQuery,
    sources: 'bbc-news,the-verge',
    domains: 'bbc.co.uk, techcrunch.com',
    from: '2017-1-19',
    to: '2018-3-11',
    language: 'en',
    sortBy: 'relevancy',
    page: 1
  }).then(response => {
    return response;
    // JSON.stringify(response.articles.map(article => article.url));
  });
};





module.exports.articles = articles;


console.log(articles('facebook'));


