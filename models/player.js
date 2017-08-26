const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Player = new Schema({
  name: String,
  position: String,
  age: Number,
  club: {
    type: Schema.Types.ObjectId,
    ref: 'Club'
  }
});

module.exports = mongoose.model('Player', Player);
