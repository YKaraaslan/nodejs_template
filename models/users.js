const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  city: String,
});

module.exports = mongoose.model("customers", UserSchema);
