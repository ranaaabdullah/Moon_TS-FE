import React, { ChangeEvent, FC } from "react";
import { CiSearch } from "react-icons/ci";

interface Props {
  placeholder: string;
  onChange: (params: any) => void;
  // onchange: (e: ChangeEvent<HTMLInputElement>) => void;
  className: string;
}

const SearchInput: FC<Props> = ({ placeholder, onChange, className }) => {
  return (
    <div className="relative">
      <div className="absolute lg:top-2 top-2 left-2 lg:left-2 ">
        <CiSearch color="##3A3845" size={25} />
      </div>
      <input
        className={`p-2 ps-10 border-2 lg:w-full  border-primary-100 ${className}`}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default SearchInput;
