import React from "react";

const InputSelect = ({ label,error, data, ...rest }) => {
  return (
    <div>
      {label && (
        <label
          for="countries"
          class="block text-primary-100 capitalize text-sm font-bold mb-2"
        >
          {label}
        </label>
      )}
      <select
        id="countries"
        class="border-2 border-primary-100  w-full py-4 px-3 text-primary-100  leading-tight focus:outline-none focus:shadow-outline"
        {...rest}
      >
        <option selected>{label}</option>
        {data.map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </select>
      {
          error && <p className="text-red-600 text-sm"> {error}</p>
        }
    </div>
  );
};

export default InputSelect;
