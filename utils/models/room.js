// app/models/room.js
// load the things we need
var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");
// define the schema for our user model
mongoose.connect(require("../../config/app").db.connectionUri, {
  useNewUrlParser: true
});

var chatSchema = mongoose.Schema({
  id: String, 
  users: Array, 
  chats: Array
});

module.exports = mongoose.model("room", chatSchema);

