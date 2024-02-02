import UserModel from "./../Models/UserModel.js";
import bycript from "bcryptjs";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
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
    res.send({
      status: 400,
      message: "All fields are mandatory",
    });
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
    res.send({
      status: 500,
      message: "Something went to wrong",
    });
  }
};

// Sign In Api

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password || email === "" || password === "") {
    return res.status(400).json({
      status: 400,
      message: "All fields are required", // Fixed typo: changed 'messgae' to 'message'
    });
  }

  try {
    // find user by email
    const validUser = await UserModel.findOne({ email });

    if (!validUser) {
      return res.status(400).json({
        status: 400,
        message: "Email is not found",
      });
    }

    // decrypt password
    const validPassword = bycript.compareSync(password, validUser.password);

    if (!validPassword) {
      return res.status(400).json({
        status: 400,
        message: "Invalid password",
      });
    }

    const token = jwt.sign(
      { userId: validUser._id },
      process.env.JWT_SECRET_KEY
    );

    return res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({
        message: "Sign-In in successfully 😊 👌",
        data: validUser,
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};
