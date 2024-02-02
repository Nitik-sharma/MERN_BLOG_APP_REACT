import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
function SignIn() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);

  const [loading, setLoading] = useState(false);
  const naviagate = useNavigate();
  const handleData = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setErrorMessage("please fill all the feild");
    }

    try {
      const res = await fetch(`http://localhost:5000/api/auth/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log("data-->", data); // Log the response data
      if (data.sucess === false) {
        setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        naviagate("/");
      }

      // Handle the response data as needed
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  return (
    <div className=" mb-20 mt-20">
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
              {loading ? (
                <>
                  <Spinner size={"sm"} />
                  <span className=" pl-3">loading...</span>
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>
          <div className=" flex gap-2 mt-4 text-sm">
            <span>Don't have a account?</span>
            <Link to={"/signUp"} className=" text-blue-500">
              SignUp
            </Link>
          </div>
          {errorMessage && (
            <Alert className=" mt-5" color={"failure"}>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignIn;
