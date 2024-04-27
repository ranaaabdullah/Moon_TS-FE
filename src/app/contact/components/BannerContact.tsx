"use client";

import React from "react";
import cover from "../../../../public/assets/contact/coverContact.png";
import logo from "../../../../public/assets/contact/logoBrown.png";
import logo1 from "../../../../public/assets/contact/Facebook.png";
import logo2 from "../../../../public/assets/contact/Twitter.png";
import logo3 from "../../../../public/assets/contact/Instagram.png";
import logo4 from "../../../../public/assets/contact/Linkedin.png";
import logo5 from "../../../../public/assets/contact/youtube.png";
import Image from "next/image";
const BannerContact = () => {
  return (
    <div>
      <div className="lg:relative ">
        <div className="">
          <Image className="w-screen object-contain" src={cover} alt=""></Image>
        </div>
        <div className=" lg:absolute lg:top-0 h-full lg:left-40 flex flex-col  lg:w-96 text-center justify-center  gap-5 items-center bg-secondary-100 p-5">
          <div className="">
            <Image src={logo} alt=""></Image>
          </div>
          <div className=" border-white border-b  pb-8">
            <h3 className="text-white font-bold uppercase tracking-widest text-4xl">
              Contact Us
            </h3>
          </div>
          <div className="py-4 flex flex-col gap-2">
            <h2 className="font-semibold text-white">
              Follow us on social media
            </h2>
            <div className="flex items-center gap-4">
              <Image src={logo1} alt="" />
              <Image src={logo2} alt="" />
              <Image src={logo3} alt="" />
              <Image src={logo4} alt="" />
              <Image src={logo5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerContact;
