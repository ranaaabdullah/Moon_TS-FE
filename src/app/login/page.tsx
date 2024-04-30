"use client";
import React from "react";
import loginImage from "../../../public/assets/login.png";
import { FaArrowRight } from "react-icons/fa6";
import Button from "../../components/Button";
import { InputText } from "../../components";

import { useFormik } from "formik";
import network from "../../config/network";
import URL from "../../config/url";
import { useDispatch } from "react-redux";
import { LoginUser } from "../../redux/slices/AuthSlice";
import { useToast } from "../../hooks";
import { LoginSchema } from "../../schemas";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginPage = () => {
  //Hooks
  const { showToast } = useToast();
  const dispath = useDispatch();
  const navigate = useRouter();

  const initialValues = {
    email: "",
    password: "",
  };

  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: initialValues,
    validationSchema: LoginSchema,
    onSubmit: (val, action) => {
      handleLogin(val);
    },
  });

  const handleLogin = async (data: any) => {
    const response = await network.post(URL.Login, data);
    if (!response.ok) return showToast(response.data.message, "error");
    showToast("User logged In Successfully", "success");
    console.log({ user: response.data.data, token: response.data.token });
    dispath(
      LoginUser({ user: response.data.data, token: response.data.token })
    );
    navigate.push("/");
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-20 px-5 py-8">
        <div className="h-[700px]-lg w-[700px]-lg  rounded-lg ">
          <Image
            src={loginImage}
            alt=""
            className="object-cover h-full  w-full rounded-lg"
            height={700}
            width={700}
          />
        </div>
        <div className="flex justify-center items-center gap-3 flex-col">
          <h3 className="font-bold lg:text-5xl  text-2xl  py-2 tracking-widest ">Login</h3>
          <InputText
            placeholder={"Enter Email Address"}
            label={"Email Address"}
            className={" lg:!w-96"}
            name={"email"}
            value={values.email}
            onChange={handleChange}
            error={errors.email}
          />
          <InputText
            placeholder={"Enter Password"}
            className={"lg:!w-96"}
            type={"password"}
            label={"Password"}
            name={"password"}
            value={values.password}
            onChange={handleChange}
            error={errors.password}
          />
          <Link href={"/signUp"}>Don't have an account? </Link>
          <Button
            onClick={handleSubmit}
            className={
              "flex gap-1 justify-center   bg-primary-100 text-white px-5  lg:!px-[155px] text-center"
            }
          >
            login
            <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
