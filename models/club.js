const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Club = new Schema({
  name: String,
  country: String
});

module.exports = mongoose.model('Club', Club);
