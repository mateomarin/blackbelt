var users = require('../controllers/users.js');

module.exports = function(app){
  app.get('/users/:name/', function(req, res){
    console.log(req.params);
    users.find(req, res);
  })

  app.post('/users/new', function(req, res){
    console.log('tried to save!');
    users.add(req, res);
  })
}
