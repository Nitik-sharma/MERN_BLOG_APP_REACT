import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
import signUpRouter from "./routes/authRoute.js";
dotenv.config();

// contant------->
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;
const app = express();
// middlewear
var corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

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
