import { Button } from "@/components";
import React from "react";

const EmailCard = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 my-12">
      <h2 className="font-semibold text-primary-300">Sign up for emails</h2>
      <h3 className="uppercase text-4xl text-center font-extrabold">
        For news, collections & more
      </h3>
      <input
        className="border-b-2 py-4 border-black lg:w-96 placeholder:text-center placeholder:text-primary-300"
        type="text"
        placeholder="Enter your email address"
      />
      <Button onClick={()=>{}}className={"px-5"} border={true}>
        sign up
      </Button>
    </div>
  );
};

export default EmailCard;
