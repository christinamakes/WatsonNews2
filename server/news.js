'use strict';

const NewsAPI = require('newsapi');
const watson = require('./watson');

const app = new NewsAPI('cffd5c18704145eb89a7156717753b11');




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
    for (let i = 0; i < currentURL.length; i++) {
        let parameters = {
            'url': `${currentURL[i]}`,
            'features': {
            'emotion': {
            'document': true,
            },
          }
        };
        console.log(parameters.url + ' from news then');
        watson.callWatson(parameters)
          .then(watsonResults => {
            console.log(watsonResults + ' from news.js');
          })
          .catch(err => {
            console.log(err);
          });
    }});
        // .then(responseWatson => {
        //   console.log(responseWatson + ' from news');
        // });
  };

  module.exports.articles = articles;


// getTheNews.articles('bitcoin', '12-10-17', '12-19-17');


