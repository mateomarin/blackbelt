var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Answer = new mongoose.Schema({
  index: Number,
  answer: {
    type: String,
    required: [true, 'Option required!'],
    minlength: [3, 'Too few characters in the name']
  },
  votes: Number,
  created_at: { type: Date, default: Date.now }
})

var SurveySchema = new mongoose.Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  question: {
    type: String,
    required: [true, 'Question required!'],
    minlength: [8, 'Too few characters in the name']
  },
  answers: [Answer],
  created_at: { type: Date, default: Date.now }
})

var Survey = mongoose.model('Survey', SurveySchema);
