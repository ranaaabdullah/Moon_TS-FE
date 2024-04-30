'use client'
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import SignUpImage from "../../../public/assets/signUp.jpg";

import Button from "../../components/Button";
import { InputText } from "../../components";
import { useFormik } from "formik";
import { signupSchema } from "../../schemas";
import URL from "../../config/url";
import network from "../../config/network";
import { useToast } from "../../hooks";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const SignUp = () => {
  //Hooks
  const { showToast } = useToast();
  const navigate = useRouter();
  
  //Functions
  const initialValues = {
    name: "",
    email: "",
    number: "",
    password: "",
  };

  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: initialValues,
    validationSchema: signupSchema,
    onSubmit: (val, action) => {
      handleSignUp(val);
    },
  });

  const handleSignUp = async (data:any) => {
    const response = await network.post(URL.Register, data);
    if (!response.ok) return showToast(response.data.message, "error");
    showToast("User Registered Successfully", "success");
    navigate.push("/login");
  };
  return (
    <div>
      <div className="grid grid-cols-1  lg:grid-cols-2 lg:px-40 py-8">
        <div className="flex justify-center items-center gap-3 py-3 flex-col">
          <h3 className="font-bold text-4xl uppercase tracking-widest">
            SignUp
          </h3>
          <InputText
            placeholder={"Enter Your name "}
            label={"full name"}
            className={" lg:!w-96 capitalize"}
            name={"name"}
            value={values.name}
            onChange={handleChange}
            error={errors.name}
          />{" "}
          <InputText
            name={"email"}
            placeholder={"Enter Your Email Address"}
            label={"Email Address"}
            className={" lg:!w-96 "}
            value={values.email}
            onChange={handleChange}
            error={errors.email}
          />{" "}
          <InputText
            name={"number"}
            placeholder={"Enter Your Phone Number"}
            label={" phone number"}
            className={" lg:!w-96"}
            type={"number"}
            value={values.number}
            onChange={handleChange}
            error={errors.number}
          />{" "}
          <InputText
            name={"password"}
            placeholder={"Enter Password"}
            className={"lg:!w-96"}
            label={"Password"}
            type={"password"}
            value={values.password}
            error={errors.password}
            onChange={handleChange}
          />
          <Link href={'/login'}>Already have an account!</Link>
          <Button
            onClick={handleSubmit}
            className={
              "flex gap-1 justify-center mt-4  bg-primary-100 text-white px-20 lg:!px-[148px] text-center"
            }
          >
            SignUp
            <FaArrowRight />
          </Button>
        </div>
        <div>
          <Image src={SignUpImage} className="rounded" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
