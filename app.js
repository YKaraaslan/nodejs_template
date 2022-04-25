const express = require("express");
const app = express();
const router = require("./routes/users");
const mongoose = require("mongoose");
require("dotenv/config");

const PORT = 8080 || process.env.PORT;

// MongoDb Connection
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error"));
db.once("open", () => {
  console.log("Connected to Database");
});

// Router Middleware
app.use(router);

// Body Parser Middleware
app.use(express.urlencoded({ extended: false }));

// HomePage connection
app.get("/", (request, response, next) => {
  response.send("Homepage");
});

// ---------------------------------------------------------------------------
// This is the way to add routes

const usersRoute = require("./routes/users");
app.use("/users", usersRoute);

// ---------------------------------------------------------------------------

// In case the request is not found
app.use((request, response, next) => {
  response.send("404 Not Found");
});

// This is to start the server on localhost
app.listen(PORT, () => {
  console.log("App started");
});

// 2qRH9WXNQQvbzMDvXsM5qINkdhTGyGeAzJrYuqB79WL76zBvUjBYvn6VattuHJba
