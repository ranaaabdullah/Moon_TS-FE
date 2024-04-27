import React from "react";

const CheckBox = ({ name, value, setCategory }) => {
  return (
    <div>
      <div className="flex items-center">
        <input
          id="default-checkbox"
          type="checkbox"
          // value={value}
          onClick={() => setCategory(value)}
          className="w-4 h-4 accent-primary-500  bg-gray-100 border-gray-300 "
        />
        <label
          htmlFor="default-checkbox"
          className="ms-2 text-sm font-medium text-primary-600 "
        >
          {name}
        </label>
      </div>
    </div>
  );
};

export default CheckBox;
