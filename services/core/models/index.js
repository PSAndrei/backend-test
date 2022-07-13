const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: String,
  isMale: Boolean,
});

const MessageSchema = new Schema({
  actor: String,
  text: String,
});

module.exports = mongoose.model("Messages", MessageSchema);
