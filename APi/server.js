import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// contant------->
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB is Connect Sucessfully"))
  .catch((err) => console.log(err));

const app = express();
app.get("/", (req, res) => {
  res.send("Server is running ");
});

app.listen(PORT, () => {
  console.log("Server is running on 4000 ");
});
