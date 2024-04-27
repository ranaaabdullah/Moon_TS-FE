import React from 'react'

const InputTextArea = ({label,placeholder,...rest}) => {
  return (
    <div>
      {" "}
      <div>
        <label className="block text-primary-100 text-sm font-bold mb-2">
         {label}
        </label>
        <textarea
          className=" border-2 border-primary-100  w-full h-32 py-4 px-3 text-primary-100 leading-tight placeholder:items-start focus:outline-none focus:shadow-outline"
          type="text"
          placeholder={placeholder}
          {...rest}
        />
      </div>
    </div>
  );
}

export default InputTextArea