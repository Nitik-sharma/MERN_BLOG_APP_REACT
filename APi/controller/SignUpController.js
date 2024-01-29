import { errorHandler } from "../utils/ErrorHandler.js";
import UserModel from "./../Models/UserModel.js";
import bycript from "bcryptjs";
export const SignUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  console.log(req.body);

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are mandatory"));
  }

  const hashPassword = bycript.hashSync(password, 10);
  const newUser = new UserModel({
    username,
    email,
    password: hashPassword,
  });
  try {
    const userDB = await newUser.save();

    res.send({
      status: 200,
      message: "sign up successfully",
      data: userDB,
    });
  } catch (error) {
    next(error);
  }
};
