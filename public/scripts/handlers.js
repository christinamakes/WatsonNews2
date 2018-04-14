/* global $ api */
'use strict';


console.log('handlers ready');


const handlers = (function () {

  function clickForNews() {
    let urls = [];
    $('#form-news').on('submit', event => {
      event.preventDefault();
      const input = $('.js-search-text').val();
      console.log('hello');
      console.log(input);

      api.getNews(input)
        .then(res => {
          urls = [...((res.articles).map(article => article.url))];
          const url = urls[1];
          api.getEmotion(url)
            .then(res => {
              console.log(res.sentiment);
            });
        });



    });
  }

  function bindEventHandlers() {
    clickForNews();
  }

  return {
    bindEventHandlers,
  };

}());