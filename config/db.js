let mongoose = require('mongoose');
const { DATABASE_URL } = require('./constants');

mongoose.Promise = global.Promise;

module.exports = function() {
  const options = {
    useMongoClient: true
  };

  mongoose.connect(DATABASE_URL, options, function(err, result) {
    if (err) {
      console.log(err);
    }

    require('../models/player');
    require('../models/club');
  });

  return mongoose;
};
