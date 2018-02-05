'use strict';

const NewsAPI = require('newsapi');
const watson = require('./scratchWatson');

const app = new NewsAPI('cffd5c18704145eb89a7156717753b11');
// To query /v2/everything
// You must include at least one q, source, or domain
const articles = app.v2.everything({
  q: 'bitcoin',
  // sources: 'bbc-news,the-verge',
  // domains: 'bbc.co.uk, techcrunch.com',
  from: '2017-12-01',
  to: '2017-12-12',
  language: 'en',
  sortBy: 'relevancy',
  page: 2
}).then(response => {
  //take results and feed them into Watson
  console.log('hi');
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
});


// To query sources
// All options are optional
// newsapi.v2.sources({
//   category: 'technology',
//   language: 'en',
//   country: 'us'
// }).then(response => {
//   console.log(response);
//   /*
//     {
//       status: "ok",
//       sources: [...]
//     }
//   */
// });

//console.log(articles);

console.log(watson);
