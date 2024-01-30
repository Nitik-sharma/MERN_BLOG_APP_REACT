import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsGithub, BsTwitter, BsInstagram } from "react-icons/bs";

function Footers() {
  return (
    <Footer container className=" border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className=" grid w-full  justify-between sm:flex md:grid-cols-1">
          <div className="">
            <Link
              to={"/"}
              className=" self-center  whitespace-nowrap  text-lg sm:text-xl font-semibold dark:text-white "
            >
              <span className=" px-2 py-1  rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
                Nitik's{" "}
              </span>
              Blog
            </Link>
          </div>
          <div className=" grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup
                col
                href=""
                target="_blank"
                rel="noopner noreferrer"
              >
                100 js Project
              </Footer.LinkGroup>
              <Footer.LinkGroup
                col
                href=""
                target="_blank"
                rel="noopner noreferrer"
              >
                Nitik's Blog
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup
                col
                href=""
                target="_blank"
                rel="noopner noreferrer"
              >
                Git Hub
              </Footer.LinkGroup>
              <Footer.LinkGroup
                col
                href=""
                target="_blank"
                rel="noopner noreferrer"
              >
                Linkedin
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup
                col
                href=""
                target="_blank"
                rel="noopner noreferrer"
              >
                Privicy Policy
              </Footer.LinkGroup>
              <Footer.LinkGroup
                col
                href=""
                target="_blank"
                rel="noopner noreferrer"
              >
                Term &amp; Conditions
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className=" flex justify-between sm:items-center">
          <Footer.Copyright
            href="#"
            by="Nitik's Blog"
            year={new Date().getFullYear()}
          />
          <div className=" flex items-center justify-between gap-6 ">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default Footers;
