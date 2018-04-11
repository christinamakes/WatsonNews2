//ajax call to server 
/* global $ */
'use strict';

console.log('api');

const API_KEY = 'cffd5c18704145eb89a7156717753b11';
const api = (function () {

  const getNews = function (query) {
    return $.ajax({
      type: 'GET',
      url: 'https://newsapi.org/v2/everything',
      dataType: 'json',
      data: {
        apiKey: API_KEY,
        q: `"+${query}"-APKMirror`,
        from: '2018-4-01',
        // country: 'us',
        language: 'en',
        sortBy: 'relevancy',
        // REMOVE PAGE
        pageSize: 3
      }
    });
  };

  return {
    getNews
  };

})();

module.exports = api;