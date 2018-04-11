'use strict';

var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var natural_language_understanding = new NaturalLanguageUnderstandingV1({
  'username': '9df567c5-d750-4833-8956-320c95cd7ff5',
  'password': 'ip168lPWPBqo',
  'version_date': '2017-02-27',
});

var parameters = {
  'url': 'www.ibm.com',
  'features': {
    'categories': {}
  }
};

natural_language_understanding.analyze(parameters, function (err, response) {
  if (err)
    console.log('error:', err);
  else
    console.log(JSON.stringify(response, null, 2));
});