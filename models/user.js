const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const User = new Schema({
  local: {
    email: String,
    password: String
  },
  tweets: [
    {
      type: Schema.Types.ObjectId,
      ref: "Tweet"
    }
  ]
});

module.exports = mongoose.model("User", User);
