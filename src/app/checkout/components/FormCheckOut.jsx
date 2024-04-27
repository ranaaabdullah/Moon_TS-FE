import React, { useRef } from "react";
import InputText from "../../../components/inputField/InputText";
import InputSelect from "../../../components/inputField/InputSelect";
import InputTextArea from "../../../components/inputField/InputTextArea";

import { Button } from "../../../components";

const FormCheckOut = ({
  inputData,
  handleSubmit,
  handleChange,
  values,
  errors,
}) => {
  const countries = ["Pakistan", "Canada", "France", "Germany"];
  const states = ["Punjab", "Sindh", "KPK", "Balochistan"];

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 px-2  lg:grid-cols-2 gap-4 lg:w-[700px]">
          {inputData?.map((input) => (
            <>
              <div
                className={
                  input.key === "address" ||
                  input.key === "email" ||
                  input.key === "Onote"
                    ? "lg:col-span-2"
                    : "col-span-1"
                }
              >
                {input.key === "country" || input.key === "state" ? (
                  <InputSelect
                    data={input.key === "country" ? countries : states}
                    label={input.label}
                    name={input.key}
                    onChange={handleChange}
                    value={values[input.key]}
                    error={errors[input.key]}
                  />
                ) : input.key === "Onote" ? (
                  <InputTextArea
                    label={"Order notes"}
                    placeholder={"Type your message here..."}
                    name={input.key}
                    value={values[input.key]}
                    error={errors[input.key]}
                    onChange={handleChange}
                  />
                ) : (
                  <>
                    <InputText
                      key={input.key}
                      label={input.label}
                      placeholder={input?.placeholder}
                      name={input?.key}
                      onChange={handleChange}
                      value={values[input.key]}
                      error={errors[input.key]}
                    />
                  </>
                )}
              </div>
            </>
          ))}
        </div>
        {/* <Button
          // className={"hidden"}

          type={"submit"}
         
        >
          send
        </Button> */}
      </form>
    </div>
  );
};

export default FormCheckOut;
