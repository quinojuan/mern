const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
const cors = require("cors")
require("dotenv").config();

const URL = process.env.MONGO_DB;

app.use(express.json())
app.use(cors())

mongoose
  .connect(URL, {})
  .then(() => {
    console.log("DB is now connected");
  })
  .catch((err) => console.log(err));

app.get("/getUsers", async (req, res) => {
  try {
    let user = await UserModel.find({});
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});

app.post("/createuser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

app.listen(3001, () => {
  console.log("SERVER RUNS PERFECTLY!");
});
