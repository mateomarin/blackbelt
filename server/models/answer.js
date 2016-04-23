var mongoose = require('mongoose');

var AnswerSchema = new mongoose.Schema({
  answer: String,
  votes: Number,
  created_at: { type: Date, default: Date.now }
})

var Answer = mongoose.model('Answer', AnswerSchema);
