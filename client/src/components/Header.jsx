import React from "react";
import { Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { FaMoon, FaSearch } from "react-icons/fa";
import { Button } from "flowbite-react";
function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className=" border-b-2">
      <Link
        to={"/"}
        className=" self-center  whitespace-nowrap  text-sm sm:text-xl font-semibold dark:text-white "
      >
        <span className=" px-2 py-1  rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
          Nitik's{" "}
        </span>
        Blog
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={FaSearch}
          className=" hidden lg:inline"
        />
      </form>

      <Button className=" w-12 h-10 lg:hidden " color="gray" pill>
        <FaSearch />
      </Button>
      <div className=" flex gap-2 md:order-2">
        <Button className=" w-12 h-10 hidden sm:inline " color="gray" pill>
          <FaMoon />
        </Button>
        <Link to={"/signIn"}>
          <Button gradientDuoTone="purpleToBlue">SignIn</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to={"/"} className=" text-2xl">
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to={"/about"} className=" text-2xl">
            About
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/project"} as={"div"}>
          <Link to={"/project"} className=" text-2xl">
            Project
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
