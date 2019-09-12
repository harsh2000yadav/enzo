// app/models/keys.js
// load the things we need
var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");
// define the schema for our user model
mongoose.connect(require("../../config/app").db.connectionUri, {
  useNewUrlParser: true
});

var keySchema = mongoose.Schema({
  apiKey: String, 
  invokes: Number, 
  stats: Array 
});

module.exports = mongoose.model("key", keySchema);

// create the model for users and expose it to our app
