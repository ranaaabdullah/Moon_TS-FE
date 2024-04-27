import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchInput = ({ placeholder }) => {
  return (
    <div className="relative">
      <div className="absolute lg:top-2 top-2 left-2 lg:left-2 ">
        <CiSearch color="##3A3845" size={25} />
      </div>
      <input
        className="p-2 ps-10 border-2 lg:w-full  border-primary-100"
        type="text"
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default SearchInput;
