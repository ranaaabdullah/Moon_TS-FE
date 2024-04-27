import React, { useEffect, useState } from "react";
import { IoHeartDislikeOutline } from "react-icons/io5";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { Dislike } from "../redux/slices/WishlistSlice";
import { addToCart } from "../redux/slices/CartSlice";

const WishCard = ({ data, exists }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  const handleAddToCart = (id) => {
    const product = products.find((item) => item._id === id);

    if (product.countInStock !== 0) {
      dispatch(
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
  return (
    <div className="py-2">
      <div className="flex items-center gap-4 border-t p-4  border-primary-100 ">
        <div className="w-20 h-20 object-contain">
          <img src={data.image} alt="" />
        </div>
        <div className="flex flex-col font-semibold text-primary-100">
          <p>{data.name}</p>
          <p>${data.price}.00</p>
        </div>
      </div>
      <div class="flex items-center gap-2">
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
