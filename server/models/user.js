var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  name: String,
  created_at: { type: Date, default: Date.now }
})

var User = mongoose.model('User', UserSchema);
