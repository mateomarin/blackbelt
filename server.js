var express = require("express");
var path = require("path");
var app = express();

//require bodyParser since we need to handle post data for adding a bear
var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/client/static')));

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');

routes_setter(app);

//tell express app to listen on port 8000;
app.listen(8000, function(){
 console.log("listening on port 8000");
})
