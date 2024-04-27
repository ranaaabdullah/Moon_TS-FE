import React from "react";

import { IoIosArrowBack } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { BillBox, FormCheckout } from "./components";

import { useFormik } from "formik";
import { checkOutSchema } from "../../schemas";
import {
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

import { useCreateOrder, useToast } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "../../redux/slices/CartSlice";
import { Button } from "../../components";

const Checkout = () => {
  //Hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const { mutate, isPending, data, error } = useCreateOrder();
  const { showToast } = useToast();

  const user = useSelector((state) => state?.auth?.user?.user);
  const cart = useSelector((state) => state.cart.cart);

  console.log(error);
  console.log(data);
  //Functions
  if (data?.data?.success) {
    navigate("/shop");
    showToast("Order Created Succesfully", "success");
    dispatch(emptyCart());
  }
  const inputData = [
    { label: "First Name *", placeholder: "Samatha Clarken", key: "fname" },
    { label: "Last Name *", placeholder: "Clarken", key: "lname" },
    { label: "Company", placeholder: "Moon", key: "company" },
    {
      label: "Country / Region *",
      placeholder: "United states",
      key: "country",
    },
    { label: "Street address *", placeholder: "Address", key: "address" },
    { label: "Town / City *", placeholder: "City", key: "city" },
    { label: "State *", placeholder: "State", key: "state" },
    { label: "ZIP Code", placeholder: "ZIP Code", key: "zipCode" },
    { label: "Phone *", placeholder: "(123) 456 - 7890", key: "phone" },
    { label: "Email", placeholder: "example@youremail.com", key: "email" },
    {
      label: "Order notes",
      placeholder: "Type your message here...",
      key: "Onote",
    },
  ];

  const initialValues = {
    fname: "",
    lname: "",
    company: "",
    country: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    email: "",
    Onote: "",
  };
  const onSubmit = async (val) => {
    const data = modifyData(val);
    if (!stripe || !elements) {
      return;
    }
    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });
    const NewPayload = { ...data, paymentID: payload?.paymentMethod.id };
    mutate(NewPayload);
  };
  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: initialValues,
    validationSchema: checkOutSchema,
    onSubmit,
  });

  const modifyData = (payData) => {
    console.log(payData);
    const updatedCart = cart?.map((item) => {
      let cart;
      return (cart = {
        product: item.id,
        quantity: item.quantity,
        color: item.color,
      });
    });

    let payLoad = {
      fname: payData?.fname,
      lname: payData?.lname,
      company: payData?.company,
      state: payData?.state,
      email: payData?.email,
      city: payData?.city,
      Onote: payData?.Onote,
      zip: payData?.zipCode,
      country: payData?.country,
      phone: payData?.phone,
      streetAddress: payData?.address,
      orderItems: updatedCart,
    };

    return payLoad;
  };

  return (
    <div className="lg:px-40 py-14">
      <div className=" flex lg:flex-row flex-col gap-14">
        <div className="flex-col flex lg:gap-8 gap-4 ">
          <h2 className="text-xl font-semibold">Billing Details</h2>
          <FormCheckout
            inputData={inputData}
            handleSubmit={handleSubmit}
            values={values}
            handleChange={handleChange}
            errors={errors}
          />
          <div className="flex lg:flex-row flex-col items-center lg:justify-between">
            <Button className={"flex items-center gap-4"}>
              <IoIosArrowBack />
              Return to cart
            </Button>
            <Button
              onClick={() => navigate("/shop")}
              className={
                "flex gap-2 justify-center lg:!px-14 py-3  bg-primary-100 text-white  text-center"
              }
            >
              Continue to shipping
              <FaArrowRight />
            </Button>
          </div>
        </div>
        <BillBox loading={isPending} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Checkout;
