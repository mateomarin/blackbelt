var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
  find: function(req, res){
    User.find({name: req.params.name}, function(err, user){
      if(err) {
        console.log('something went wrong');
      } else { // else console.log that we did well and then redirect to the root route
        if(user[0] == null){
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
          res.json(user);
        }
      }
    })
  }
}
