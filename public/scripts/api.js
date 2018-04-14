//ajax call to server 
/* global $ */
'use strict';



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

  // PASS IN URL
  const getEmotion = function (url) {
    return $.ajax({
      type: 'GET',
      url: 'https://api.dandelion.eu/datatxt/sent/v1',
      dataType: 'json',
      data: {
        token: 'b97f5af544e14020b0887beef8e4a577',
        url: url
      },
    });
  };


  return {
    getNews,
    getEmotion
  };

})();

module.exports = api;