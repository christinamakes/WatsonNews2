//News API key cffd5c18704145eb89a7156717753b11

// WATSON


'use strict';


let naturalWaston = require('watson-developer-cloud/natural-language-understanding/v1.js');

let myWatson = new naturalWaston({
  'username': '9df567c5-d750-4833-8956-320c95cd7ff5',
  'password': 'ip168lPWPBqo',
  'version_date': '2017-02-27'
});

let parameters = {
  'url': 'http://www.bbc.co.uk/news/world-latin-america-42217798',
  'features': {
    'emotion': {
      'document': true,
    },
    // 'entities': {
    //   'emotion': true,
    //   'sentiment': true,
    //   'limit': 2
    // },
    // 'keywords': {
    //   'emotion': true,
    //   'sentiment': true,
    //   'limit': 2
    // }
  }
};

const callWatson = function() {
  myWatson.analyze(parameters, function(err, response) {
  if (err)
    console.log('error:', err);
  else
    console.log(JSON.stringify(response, null, 2));
});
};

module.exports = callWatson;