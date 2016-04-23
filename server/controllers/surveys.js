var mongoose = require('mongoose');
var Survey = mongoose.model('Survey');
var User = mongoose.model('User');

module.exports = {
  find: function(req, res){
    Survey.find({}, function(err, surveys){
      if(err) {
        console.log('something went wrong');
      } else { // else console.log that we did well and then redirect to the root route
        console.log('got the surveys');
      }
    })
    .populate('user')
    .exec(function(err, surveys){
      console.log('populated users');
      res.json(surveys);
    })
  },
  save: function(req, res){
    console.log('got to save function in server');
    var newSurvey = new Survey();
    newSurvey.user = req.body.user._id;
    newSurvey.question = req.body.question;
    var options = [];
    console.log(req.body.options);
    for(var key in req.body.options){
      console.log('going into for loop');
      newSurvey.answers.push({index: key, answer: req.body.options[key], votes: 0});
    }

    console.log('saving this survey to server:');
    console.log(newSurvey);
    newSurvey.save(function(err){
      if(err) {
        console.log('something went wrong');
      } else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added a survey!');
        res.json(newSurvey);
      }
    })
  },
  findid: function(req, res){
    Survey.find({_id: req.body.survey}, function(err, survey){
      if(err) {
        console.log('something went wrong');
      } else { // else console.log that we did well and then redirect to the root route
        console.log(survey);
        res.json(survey);
      }
    })
  },
  delete: function(req, res){
    console.log('req body');
    console.log(req.body);
    Survey.remove({_id: req.body._id}, function(err){
      if(err) {
        console.log('something went wrong');
      } else { // else console.log that we did well and then redirect to the root route
        console.log('survey deleted')
        res.json();
      }
    })
  },
  vote: function(req, res){
    console.log(req.body);
    req.body.survey.answers[req.body.index].votes = req.body.survey.answers[req.body.index].votes += 1;
    Survey.update({_id: req.body.survey._id}, {answers: req.body.survey.answers}, function(err, survey){
      if(err) {
        console.log('something went wrong');
      } else { // else console.log that we did well and then redirect to the root route
        console.log('survey updated');
        res.json(survey);
      }
    })
  }
}
