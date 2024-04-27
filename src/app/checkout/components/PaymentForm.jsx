import React, { useMemo } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import { Button } from "../../../components";

const useOptions = () => {
  console.log();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: 14,
          color: "#fff",
          letterSpacing: "0.025em",
          fontFamily: "Inter",
          "::placeholder": {
            color: "#A6A6A8",
          },
        },
        invalid: {
          color: "#9e2146",
        },
        placeholder: "Custom PlaceHolder",
      },
    }),
    []
  );

  return options;
};

const PaymentForm = ({ handleSubmit1 ,loading}) => {
  const options = useOptions();

  return (
    <form >
      <div className="border border-primary-200 p-4">
        <CardNumberElement
          options={{ ...options, placeholder: "Card number" }}
        />
      </div>
      <div className="grid grid-cols-2 gap-2 pt-4">
        <div className="border border-primary-200 p-4">
          <CardExpiryElement
            options={{ ...options, placeholder: "Expiration date  (MM/YY)" }}
          />
        </div>

        <div className="border border-primary-200 p-4">
          <CardCvcElement
            options={{ ...options, placeholder: "Security code" }}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <Button
        loader={loading}
          onClick={handleSubmit1}
          borderWhite={true}
          className={"mt-4 w-full text-primary-200"}
        >
          Place order
        </Button>
      </div>
    </form>
  );
};

export default PaymentForm;
