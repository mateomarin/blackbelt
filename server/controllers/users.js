var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
  check: function(req, res){
    console.log('these are the params:');
    console.log(req.params);
    console.log('here is the user to check:');
    console.log(req.params.name);
    User.find({name: req.params.name}, function(err, user){
      if(err) {
        console.log('something went wrong');
      } else { // else console.log that we did well and then redirect to the root route
        console.log(user);
        if(user[0] == null){
          console.log('gotta save new user');
          var newUser = new User();
          newUser.name = req.params.name;
          newUser.save(function(err){
            if(err) {
              console.log('something went wrong');
            } else { // else console.log that we did well and then redirect to the root route
              console.log('successfully added a person!');
              res.json(newUser);
            }
          })
        } else {
          console.log('took this other route');
          res.json(user[0]);
        }
      }
    })
  },
  find: function(req, res){
    console.log('gonna try to find user');
    console.log(req.body);
    User.find({name: req.body.user}, function(err, user){
      if(err) {
        console.log('something went wrong');
      } else {
        console.log('found user!');
        console.log(user);
        res.json(user);
      }
    })
  }
}
