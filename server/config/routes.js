var users = require('../controllers/users.js');
var surveys = require('../controllers/surveys.js');

module.exports = function(app){
  app.get('/users/:name/', function(req, res){
    console.log('trying to add...');
    console.log(req.params);
    users.check(req, res);
  })

  app.post('/users/find', function(req, res){
    console.log('tried to find!');
    users.find(req, res);
  })

  app.get('/surveys', function(req, res){
    surveys.find(req, res);
  })

  app.post('/surveys/new', function(req, res){
    surveys.save(req, res);
  })

  app.post('/surveys/find', function(req, res){
    surveys.findid(req, res);
  })

  app.post('/surveys/delete', function(req, res){
    surveys.delete(req, res);
  })

  app.post('/surveys/vote', function(req, res){
    surveys.vote(req, res);
  })
}
