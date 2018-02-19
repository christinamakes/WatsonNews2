//ajax call to server 
/* global $ */
'use strict';

console.log('api');

const api = (function () {

  const getNews = function(path, query) {
    console.log('inside');
    return $.ajax({
      type: 'GET',
      url: path,
      dataType: 'json',
      data: query
    });
  };

  return {
    getNews
  };

})();