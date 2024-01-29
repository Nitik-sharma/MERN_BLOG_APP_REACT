import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
import signUpRouter from "./routes/authRoute.js";
dotenv.config();

// contant------->
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;
const app = express();
// middlewear

app.use(express.json());
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.send().json({
    sucess: false,
    statusCode,
    message,
  });
});

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB is Connect Sucessfully"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.json({
    message: "Home page ",
  });
});

app.use("/api/user", userRouter);
app.use("/api/auth", signUpRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} `);
});
