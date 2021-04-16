// app/models/room.js
// load the things we need
var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");
// define the schema for our user model
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://harsh:12345@cluster0.nixff.mongodb.net/enzoharsh?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

/* mongoose.connect(require("../../config/app").db.connectionUri, {
  useNewUrlParser: true
}); */
var chatSchema = mongoose.Schema({
  id: String, 
  users: Array, 
  chats: Array
});

module.exports = mongoose.model("room", chatSchema);

