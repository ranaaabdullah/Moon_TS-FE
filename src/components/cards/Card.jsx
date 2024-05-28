import React from "react";
import Button from "../buttons/Button";
import { TruncateText } from "../../utils/Utility";
import Image from "next/image";

const Card = ({ item, index, onClick }) => {
  return (
    <div
      onClick={onClick}
      key={index}
      className=" p-2  text-wrap   cursor-pointer rounded-lg"
    >
      <div className="lg:h-52 md:h-52  w-full">
        <Image
          className="rounded h-full w-full object-cover"
          src={
            item?.photos[0]
              ? item?.photos[0]
              : "https://res.cloudinary.com/dmbxqt8i3/image/upload/v1708005972/imageUpload/image1_m65imn.png"
          }
          alt=""
          width={100}
          height={100}
        />
      </div>
      <div className="h-12 mb-4 ">
        <h2 className="font-semibold md:text-sm text-xs lg:text-sm uppercase">
          {TruncateText(item?.name, 30)}
        </h2>
      </div>
      <h2 className="font-semibold md:text-sm text-xs lg:text-sm  uppercase">
        ${item.price}.00
      </h2>
      <div className="h-12 mb-7 overflow-hidden">
        <p className="text-primary-100   pt-2 md:text-sm text-xs lg:text-sm">
          {TruncateText(item?.description, 60)}
        </p>
      </div>
      <div className="flex items-center  justify-center">
        <Button
          border={true}
          className={" lg:text-base md:text-xs text-sm w-full   "}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default Card;
