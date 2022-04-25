const express = require("express");
const userSchema = require("../models/users");
const router = express.Router();

router.get("/", async (request, response, next) => {
  try {
    const users = await userSchema.find();
    response.json(users);
  } catch (error) {
    response.json({ message: err });
  }
});

module.exports = router;
