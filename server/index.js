const express = require("express");
const app = express();
const mongoose = require("mongoose")
require("dotenv").config()


const URL = process.env.MONGO_DB;
mongoose
  .connect(URL, {})
  .then(() => {
    console.log("DB is now connected");
  })
  .catch((err) => console.log(err));

app.listen(3001, () => {
  console.log("SERVER RUNS PERFECTLY!");
  console.log(URL)
});
