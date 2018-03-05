'use strict';

const testParameters = {
  'url': 'https://stackoverflow.com/questions/33108326/how-to-pass-client-side-parameters-to-the-server-side-in-angular-node-js-express',
  'features': {
  'emotion': {
  'document': true,
  }
}};

const naturalWaston = require('watson-developer-cloud/natural-language-understanding/v1.js');

const myWatson = new naturalWaston({
  'username': '9df567c5-d750-4833-8956-320c95cd7ff5',
  'password': 'ip168lPWPBqo',
  'version_date': '2017-02-27',
});

const callWatson = function(parameters) {
  return new Promise(function(resolve, reject) {
      myWatson.analyze(parameters, function(err, response) {
          if (err) {
              console.log('error:', err);
              reject(err);
          } else {
              // console.log(JSON.stringify(response) + ' from watson');
              resolve(JSON.stringify(response));
          }
      });

  });
};


  // callWatson(testParameters);




module.exports.callWatson = callWatson;
