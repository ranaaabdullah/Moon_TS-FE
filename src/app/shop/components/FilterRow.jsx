import React from "react";
import CheckBox from "../../../components/inputField/CheckBox";
import { useCategory } from "../../../hooks";

const FilterRow = ({ setCategory }) => {
  const { data } = useCategory();

  const categoryData = [
    { name: "Dinnerware", key: "dinnerWare" },
    { name: "Ceramic", key: "ceramic" },
    { name: "Furniture", key: "furniture" },
    { name: "Decor Art", key: "decorArt" },
    { name: "Gifts sets", key: "giftSets" },
  ];
  const priceData = [
    { name: "$0 - $10", key: 10 },
    { name: "$10 - $50", key: 50 },
    { name: "$50 - $100", key: 100 },
    { name: "$100 - $200", key: 200 },
    { name: "> $200", key: 201 },
  ];
  const tagData = [
    { name: "$0 - $10", key: 10 },
    { name: "$10 - $50", key: 50 },
    { name: "$50 - $100", key: 100 },
    { name: "$100 - $200", key: 200 },
    { name: "> $200", key: 201 },
  ];
  return (
    <div>
      <div className="flex items-start flex-col  lg:w-72  w-56  ">
        <div className=" flex flex-col gap-2 py-4 border-t lg:w-full  border-primary-500 ">
          <h2 className="font-semibold">Category</h2>
          <div className="flex flex-col gap-3">
            {data?.map((item) => {
              return (
                <CheckBox
                  setCategory={setCategory}
                  name={item?.name}
                 value={item?.id}
                />
              );
            })}
          </div>
        </div>
        <div className=" flex flex-col gap-2 py-4 border-t lg:w-full  border-primary-500 ">
          <h2 className="font-semibold">Price Range</h2>
          <div className="flex flex-col gap-3">
            {priceData.map((item) => {
              return <CheckBox name={item.name} key={item.key} />;
            })}
          </div>
        </div>

        <div className=" flex flex-col gap-2 py-4 border-t lg:w-full  border-primary-500 ">
          <h2 className="font-semibold">Colors</h2>
          <div className="flex  gap-3">
            <div className="w-4 h-4  bg-white border-primary-100 border " />
            <div className="w-4 h-4  bg-brown-200 " />
            <div className="w-4 h-4  bg-[#CCD8CE] " />
            <div className="w-4 h-4  bg-[#B4555D]  " />
            <div className="w-4 h-4  bg-[#9B92A1]  " />
          </div>
        </div>

        <div className=" flex flex-col gap-2 py-4 border-t lg:w-full  border-primary-500 ">
          <h2 className="font-semibold">Tags</h2>
          <div className="flex flex-col gap-3">
            {categoryData.map((item) => {
              return <CheckBox name={item.name} key={item.key} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterRow;
