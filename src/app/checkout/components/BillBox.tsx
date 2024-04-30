import React, { FC } from "react";
import PaymentForm from "./PaymentForm";
import { useSelector } from "react-redux";

import imgCard from "../../../../public/assets/card.png";
import Image from "next/image";

interface Props {
  handleSubmit:()=>void;
  loading:Boolean
}

const BillBox:FC<Props> = ({ handleSubmit,loading}) => {
  const cartData = useSelector((state:any) => state.cart);
console.log(cartData)
  // const stripePromise = loadStripe(
  //   "pk_test_51NzIqNBrJDSCC8vY3LvdBzXSfHNHNRhmitjgLKbKVZjtJ2XGv3VgRoxkJxaxAJFCeAS12BFxxJjgPpPTJGICoYU20066LIu3ts"
  // );


  return (
    <div>
      {" "}
      <div className="flex-col p-2 gap-4">
        <div className="flex items-center pb-6 border-b border-primary-300 gap-36 lg:gap-72">
          <h2 className="text-xl font-semibold">Product</h2>
          <h2 className="text-xl font-semibold">Subtotal</h2>
        </div>
        <div className="pt-8 flex flex-col gap-2 ">
          {cartData.cart?.map((item:any) => {
            return (
              <div className="flex items-center  justify-between ">
                <p className="lg:text-base text-sm">
                  {item.name} ({item.quantity})
                </p>
                <p>${item.totalPrice}.00</p>
              </div>
            );
          })}
        </div>
        <div className="pt-8 flex flex-col  py-6 border-b border-primary-300  gap-2 ">
          <div className="flex items-center font-semibold  justify-between ">
            <p className="">Subtotal</p>
            <p>${cartData.totalPrice}.00</p>
          </div>{" "}
          <div className="flex items-center font-semibold  justify-between ">
            <p className="">Shipping</p>
            <p>$15.00</p>
          </div>
        </div>
        <div>
          <div className="flex items-center  pt-5  text-xl font-semibold  justify-between ">
            <p className="">Total</p>
            <p>${cartData.totalPrice + 15}.00</p>
          </div>
        </div>

        {/* <PaymentForm /> */}
        <div className=" bg-primary-100 mt-4 p-5">
          <div>
            <h2 className="text-white font-semibold  text-lg">Payment</h2>
            <div className="flex items-center pb-6 pt-3 border-b border-white   justify-between">
              <p className="text-white">Credit Card</p>
              <Image src={imgCard} alt="" />
            </div>
          </div>
         
            <PaymentForm loading={loading}  handleSubmit1={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default BillBox;
