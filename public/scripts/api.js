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
  const getEmotion = function () {
    return $.ajax({
      type: 'GET',
      url: 'https://api.aylien.com/api/v1/classify',
      dataType: 'jsonp',
      crossDomain: true,
      data: {
        url: 'https://www.w3schools.com/css/css_howto.asp'
      },
      headers: {
        'X-AYLIEN-TextAPI-Application-Key': '7ff933030d2979cbdb870ef0bb5e3ea9',
        'X-AYLIEN-TextAPI-Application-ID': '7bb1767e'
      }
    });
  };


  return {
    getNews,
    getEmotion
  };

})();

module.exports = api;