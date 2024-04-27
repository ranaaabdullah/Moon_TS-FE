import React from "react";

const GetInTouch = () => {
  return (
    <div className="py-14 px-24">
      <div className="flex flex-col items-center justify-center text-center gap-4">
        <h3 className="text-4xl font-bold  uppercase">Get in touch with us</h3>
        <p className="text-sm text-primary-300 lg:px-96">
          Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
          phasellus mollis sit aliquam sit nullam.
        </p>
        <div className="flex flex-col  items-center justify-center text-center">
          <p className="font-semibold text-primary-300">Office Hours :</p>
          <p className="text-sm text-brown-200 font-semibold">
            Monday - Friday 8:00 am to 5:00 pm
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <p className="font-semibold text-primary-300 ">Email:</p>
          <p className="text-sm text-brown-200 font-semibold">
            contact@company.com
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <p className="font-semibold text-primary-300 ">Phone :</p>
          <p className="text-sm text-brown-200 font-semibold">
            (414) 687 - 5892
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <p className="font-semibold  text-primary-300">Location :</p>
          <p className="text-sm text-brown-200 font-semibold">
            59 Middle Point Rd San <br /> Francisco, 80412
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
