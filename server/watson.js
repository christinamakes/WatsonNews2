//News API key cffd5c18704145eb89a7156717753b11

// WATSON


'use strict';


const naturalWaston = require('watson-developer-cloud/natural-language-understanding/v1.js');

const myWatson = new naturalWaston({
  'username': '9df567c5-d750-4833-8956-320c95cd7ff5',
  'password': 'ip168lPWPBqo',
  'version_date': '2017-02-27'
});

const callWatson = function(parameters) {
  myWatson.analyze(parameters, function(err, response) {
  const results = [];
  if (err)
    console.log('error:', err);
  else
  // response pushed to array of results 
    results.push((response));
    console.log(results);
    // console.log(results.usage);
  });
};


module.exports.callWatson = callWatson;
