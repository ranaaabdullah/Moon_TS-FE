'use client'
import React from "react";
import Card from "../../../components/Card";
import { useRouter } from "next/navigation";

const ProductList = ({ data }:any) => {
  const navigate = useRouter();
  return (
    <div>
      <div className="grid grid-cols-2 p-3 lg:grid-cols-3 gap-4 lg:gap-10">
        {data?.map((item:any, index:any) => {
          return (
            <Card
              onClick={() => navigate.push(`/productDetail/${item.id}`)}
              item={item}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
