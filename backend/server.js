require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
//parse incoming data
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(4000, () => {
      console.log(`listening on port ${process.env.PORT}, connected to db`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
