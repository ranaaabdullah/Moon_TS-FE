"use client";
import React, { FC, ReactNode } from "react";
import WishDrawer from "./components/WishDrawer";
import { Footer, Header, Loader } from "./components";
import { useSelector } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ScrollToTop from "./utils/ScrollToTop";
import { ToastContainer } from "react-toastify";

interface Props {
  children: ReactNode;
}

const Root: FC<Props> = ({ children }) => {
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

  const loader = useSelector((state: any) => state.loader.loader);

  return (
    <>
      <Elements stripe={stripePromise}>
        <WishDrawer />
        <Loader visible={loader} />
        <Header />
        {children}
        <ScrollToTop />
        <ToastContainer />
        <Footer />
      </Elements>
    </>
  );
};

export default Root;