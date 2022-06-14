const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: String,
  isMale: Boolean,
});

module.exports = mongoose.model("Person", personSchema);
