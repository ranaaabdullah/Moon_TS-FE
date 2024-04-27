import React from "react";
import image from "../../../../public/assets/about/banner4.png";
import Image from "next/image";

const CardWork = () => {
  const data = [
    {
      title: "Product design",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis.",
    },
    {
      title: "Crafted",
      desc: "Rutrum vitae risus eget, vulputate aliquam nisi ex gravida neque tempus.",
    },
    {
      title: "Sell product",
      desc: "Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi.",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-28 my-14">
        <div>
          <Image className="w-[600px] object-contain" src={image} alt="" />
        </div>
        <div className="py-12 p-3 lg:pe-40">
          <h3 className="text-3xl tracking-widest uppercase py-5">
            How we works
          </h3>
          {data.map((item) => {
            return (
              <>
                <h2 className="font-semibold  py-4">{item.title}</h2>
                <p className="text-primary-300 ">{item.desc}</p>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardWork;
