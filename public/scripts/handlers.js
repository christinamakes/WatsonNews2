/* global $ api */
'use strict';

console.log('handlers ready');


const handlers = (function () {
  
  function clickForNews() {
    $('#form-news').on('submit', event => {
      event.preventDefault();
      const input = $('.js-search-text').val();
      console.log('hello');
      console.log(input);

      api.getNews('/question', input)
        .then(res => {
          console.log(res);
        });
    });
  }

  function bindEventHandlers () {
    clickForNews();
  }

  return {
    bindEventHandlers,
  };

}());