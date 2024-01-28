import UserModel from "./../Models/UserModel.js";
import bycript from "bcryptjs";
export const SignUp = async (req, res) => {
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
    res.status(400).json({ message: "All fields are mandatory" });
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
      message: "Something error",
    });
  }
};
