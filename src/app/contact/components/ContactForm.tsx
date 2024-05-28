"use client";
import React from "react";
import InputText from "../../../components/inputField/InputText";
import Button from "../../../components/buttons/Button";
import { FaArrowRight } from "react-icons/fa";
import InputTextArea from "../../../components/inputField/InputTextArea";

const ContactForm = () => {
  const inputField = [
    { label: "Name", placeHodler: "Samatha Clarken", key: "name" },
    { label: "Email", placeHodler: "example@youremail.com", key: "email" },
    { label: "Phone", placeHodler: "(123) 456 - 7890", key: "phone" },
    { label: "Company", placeHodler: "Moon", key: "company" },
  ];
  return (
    <div className="lg:px-64 px-3 pb-14 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {inputField.map((input) => (
          <InputText label={input.label} placeholder={input.placeHodler} />
        ))}
      </div>
      <div className="grid pt-4 grid-cols-1">
        <InputTextArea
          label={"Message"}
          placeholder={"Type your message here..."}
        />
      </div>
      <div className="flex items-center pt-5 justify-center">
        <Button
          className={
            "flex gap-1 justify-center   bg-primary-100 text-white w-full text-center"
          }
          onClick={() => {}}
        >
          send message
          <FaArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;
