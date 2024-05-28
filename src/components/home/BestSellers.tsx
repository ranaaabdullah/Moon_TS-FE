"use client";
import { useRouter } from "next/navigation";
import Card from "../cards/Card";
import { FC } from "react";

interface Props {
  title: String;
  data: any;
  images: Number;
}

const BestSellers: FC<Props> = ({ title, data, images }) => {
  const newData = data?.length > images ? data?.slice(0, images) : data;
  const navigate = useRouter();
  return (
    <div className="flex flex-col mt-16  lg:gap-6 items-center lg:my-8  justify-center">
      <h3 className="uppercase text-2xl font-semibold ">{title}</h3>
      <div className="grid grid-cols-2  lg:grid-cols-4  px-4 gap-4 lg:gap-14">
        {newData?.map((item: any, index: number) => {
          return (
            <Card
              onClick={() => navigate.push(`/productDetail/${item.id}`)}
              key={index}
              item={item}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BestSellers;
