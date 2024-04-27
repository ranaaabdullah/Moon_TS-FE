import logo from "../../public/assets/logo2.png";
// import logo from "../assets/logo2.png";
import { FaArrowRight } from "react-icons/fa";
import React from "react";
import Button from "./Button";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div>
        <footer className="bg-secondary-100">
          <div className="mx-auto w-full max-w-screen-xl  text-white py-5 p-4  ">
            <div className="md:flex md:justify-between">
              <div className=" border-b border-white">
                <div className="flex flex-col gap-5 items-start py-8 px-20">
                  <Image className="text-white" src={logo} alt="" />
                  <p className="text-primary-400m lg:w-80">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    aliquam mauris sed ma
                  </p>
                  <div className="">
                    <Button
                      text={"white"}
                      className={"flex gap-1 px-4 lg:px-16"}
                      border={true}
                      onClick={()=>{}}
                    >
                      Get started
                      <FaArrowRight />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 border-b lg:border-s border-white">
                <div className="p-8">
                  <h2 className="font-semibold text-lg uppercase">About us</h2>
                  <div className="flex-col  mt-5">
                    <p className=" text-primary-200  text-sm font-light py-2">
                      Mission
                    </p>
                    <p className=" text-primary-200  text-sm font-light py-2">
                      Our team
                    </p>
                    <p className=" text-primary-200  text-sm font-light py-2">
                      Awards
                    </p>
                    <p className=" text-primary-200  text-sm font-light py-2">
                      Testimonials
                    </p>
                    <p className=" text-primary-200  text-sm font-light py-2">
                      Privacy policy
                    </p>
                  </div>
                </div>

                <div className="p-8">
                  <h2 className="font-semibold text-lg uppercase">Services</h2>
                  <div className="flex-col  mt-5">
                    <p className=" text-primary-200  text-sm font-light py-2">
                      Web design
                    </p>
                    <p className=" text-primary-200  text-sm font-light py-2">
                      Web development
                    </p>
                    <p className=" text-primary-200  text-sm font-light py-2">
                      Mobile design
                    </p>
                    <p className=" text-primary-200  text-sm font-light py-2">
                      UI/UX design
                    </p>
                    <p className=" text-primary-200  text-sm font-light py-2">
                      Branding design
                    </p>
                  </div>
                </div>

                <div className="p-8">
                  <h2 className="font-semibold text-lg uppercase">Portfolio</h2>
                  <div className="flex-col  mt-5">
                    <p className=" text-primary-200  text-sm font-light py-2">
                      Corporate websites
                    </p>
                    <p className=" text-primary-200  text-sm font-light py-2">
                      E-commerce
                    </p>
                    <p className=" text-primary-200  text-sm font-light py-2">
                      Mobile apps
                    </p>
                    <p className=" text-primary-200  text-sm font-light py-2">
                      Landing pages
                    </p>
                    <p className=" text-primary-200  text-sm font-light py-2">
                      UI/UX projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:flex sm:items-center sm:justify-center">
              <div className="flex text-secondary-200 items-center justify-center pb-5 p-2">
                <h2 className="text-secondary-200">
                  Copyright © 2023 Moon| All Rights Reserved |
                  <span className="underline mx-1 text-primary-500">
                    Terms and Conditions{" "}
                  </span>
                  |
                  <span className="underline mx-1 text-primary-500">
                    Privacy Policy
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;

<div className="flex-col items-center justify-center  ">
  <div className="flex justify-center ">
    <div className="border-b border-s border-white">
      <div className="grid grid-cols-1 lg:grid-cols-3"> </div>
    </div>
  </div>
  <div className="flex text-secondary-200 items-center justify-center pb-5 p-2">
    <h2 className="text-secondary-200">
      Copyright © 2023 Moon| All Rights Reserved |
      <span className="underline mx-1 text-primary-500">
        Terms and Conditions{" "}
      </span>
      |<span className="underline mx-1 text-primary-500">Privacy Policy</span>
    </h2>
  </div>
</div>;
