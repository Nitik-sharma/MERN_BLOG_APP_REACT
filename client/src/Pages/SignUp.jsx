import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function SignUp() {
  const [formData, setFormData] = useState({});
  const handleData = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/signUp", formData, {
        headers: { "Content-Type": "application/json" },
      });

      console.log(response.data);
      // Handle the response data as needed
    } catch (error) {
      // Handle errors
    }
  };
  return (
    <div className=" min-h-screen mt-20">
      <div className=" flex  p-3 max-w-3xl mx-auto flex-col md:flex-row gap-5">
        {/* Left Div */}
        <div className="left flex-1">
          <Link to={"/"} className=" text-4xl font-bold dark:text-white ">
            <span className=" px-2 py-1  rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
              Nitik's{" "}
            </span>
            Blog
          </Link>
          <p className=" text-sm mt-5">
            This is a BlogApp Project . You can Sign up with your normal email
            and password or with Goggle.
          </p>
        </div>
        {/* Right Div */}
        <div className="right flex-1 ">
          <form className=" flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your Username" />
              <TextInput
                type="text"
                placeholder="username"
                id="username"
                onChange={handleData}
              />
            </div>
            <div>
              <Label value="Your Email" />
              <TextInput
                type="email"
                placeholder="email@gmail.com"
                id="email"
                onChange={handleData}
              />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput
                type="password"
                placeholder="password"
                id="password"
                onChange={handleData}
              />
            </div>
            <Button gradientDuoTone={"purpleToPink"} type="submit">
              SignUp
            </Button>
          </form>
          <div className=" flex gap-2 mt-4 text-sm">
            <span>Have a account?</span>
            <Link to={"/signIn"} className=" text-blue-500">
              SignIn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
