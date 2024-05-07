'use client'
import React, { FC, useEffect, useState } from "react";
import { IoHeartDislikeOutline } from "react-icons/io5";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { Dislike } from "../redux/slices/WishlistSlice";
import { addToCart } from "../redux/slices/CartSlice";
import Image from "next/image";

interface Props {
  data: any;
  exists: Boolean;
}

const WishCard: FC<Props> = ({ data, exists }) => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.product.products);

  const handleAddToCart = (id: number) => {
    const product = products.find((item: any) => item._id === id);

    if (product.countInStock !== 0) {
      dispatch(
        //@ts-ignore
        addToCart({
          id: product.id,
          name: product.name,
          color: "red",
          price: product.price,
          quantity: 1,
          totalPrice: product.price,
          img: product?.photos[0],
          count: product.countInStock,
        })
      );
    }
  };

  console.log(data?.img);
  return (
    <div className="py-2">
      <div className="flex items-center gap-4 border-t p-4  border-primary-100 ">
        <div className="w-20 h-20  border-red-600 border block">
          <Image
          // style={{height:'100%',width:'100%'}}
            src={data?.img}
            width={1000}
            height={1000}
            className="object-cover"
            alt="product"
            objectFit="cover"
            layout="responsive"
          />
        </div>
        <div className="flex flex-col font-semibold text-primary-100">
          <p>{data.name}</p>
          <p>${data.price}.00</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button
          onClick={() => dispatch(Dislike(data.id))}
          className={"bg-primary-100 text-white px-4  text-center"}
        >
          <IoHeartDislikeOutline size={18} />
        </Button>
        <Button
          disable={exists}
          onClick={() => handleAddToCart(data.id)}
          className={"bg-primary-100 text-white p-2 px-14  text-sm text-center"}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default WishCard;
