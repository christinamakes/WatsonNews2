//ajax call to server 
/* global $ */
'use strict';

console.log('api');


const api = (function () {

  const getNews = function(path, query) {
    console.log('inside api');
    console.log(path + ' api');
    console.log(query + ' api');
    return $.ajax({
      type: 'GET',
      url: path,
      dataType: 'json',
      data: {'input': query}
    });
  };

  return {
    getNews
  };

})();