"use client";
import React, { FC, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

import Button from "../../../../components/Button";
import Accordion from "../../../../components/Accordion";

import { useDispatch, useSelector } from "react-redux";

import { useToast } from "../../../../hooks";
import { AddWish } from "../../../../redux/slices/WishlistSlice";
import { useParams, useRouter } from "next/navigation";
import { addToCart } from "@/redux/slices/CartSlice";
import { ApplyDiscount } from "@/utils/Utility";
import SocialMedia from "@/common/SocialMedia";
import Image from "next/image";

interface Props {
  data: any;
  color: String;
  setColor: (value: any) => void;
  exist: Boolean;
}

const ProductDetail: FC<Props> = ({ data, color, setColor, exist }) => {
  //Hooks
  const { showToast } = useToast();
  const dispatch = useDispatch();
  const navigate = useRouter();
  const user = useSelector((state: any) => state?.auth?.user?.user);
  const wishlist = useSelector((state: any) => state.wish.wishList);
  const { id:productId } = useParams();

  
  //States
  const [showDetail, setShowDetail] = useState(false);
  const [showDimension, setShowDimension] = useState(false);
  const [showReview, setshowReview] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const isHeart = wishlist?.some((item: any) => item.id == productId);



  //Functions
  const handleAdd = (product: any) => {
    if (product.countInStock !== 0) {
      dispatch(
        //@ts-ignore
        addToCart({
          id: product.id,
          name: product.name,
          color: color,
          price: product.price,
          quantity: quantity,
          totalPrice: product.price * quantity,
          img: product?.photos[0],
          count: product.countInStock,
        })
      );
      setQuantity(1);
    }
  };

  return (
    <div>
      <div className="p-2 lg:px-10 px-3 flex flex-col gap-4 ">
        <h2 className="text-primary-100 tracking-widest font-bold uppercase  lg:text-xl">
          {data.name}
        </h2>
        <div className="flex items-center gap-5 ">
          <p>({data.numReviews} Reviews)</p>
          <p className="">
            Stock:{" "}
            <span className="text-brown-200">
              {" "}
              {data.countInStock > 0 ? "In stock" : "Out of Stock"}
            </span>
          </p>
        </div>
        <div className="text-2xl flex items-center gap-2">
          <p>${ApplyDiscount(data.price)}</p>
          <span className="text-secondary-200"> ${data.price}</span>
        </div>
        <div>
          <div>
            {" "}
            <div className="flex  gap-3">
              {data?.color?.map((item: any) => {
                return (
                  <div
                    onClick={() => {
                      setColor(item);
                    }}
                    className={`w-4 h-4 `}
                    style={{ backgroundColor: item }}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex  lg:flex-row items-start lg:items-center gap-4">
          <div className="flex items-center gap-2 border-2   border-primary-100">
            <Button
              onClick={() =>
                setQuantity((prevQuantity) =>
                  prevQuantity > 1 ? prevQuantity - 1 : 1
                )
              }
              disable={quantity > 1 ? false : true}
              className={"lg:px-5 md:px-8 !py-1.5 px-3"}
            >
              -
            </Button>
            <p>{quantity}</p>
            <Button
              onClick={() => setQuantity(quantity + 1)}
              className={"lg:px-5 md:px-8   !py-1.5  px-3"}
            >
              +
            </Button>
          </div>
          <div className="">
            <Button
              disable={exist}
              onClick={() => {
                user
                  ? handleAdd(data)
                  : showToast("Please Login First", "error");
              }}
              className={"bg-primary-100 text-white px-8  lg:px-28 text-center"}
            >
              Add to cart
            </Button>
          </div>
        </div>
        <div className="flex items-start lg:justify-start justify-center gap-2">
          <Button
            onClick={() => {
              if (!user) {
                navigate.push("/login"),
                  showToast("Please Login First", "error");
              }
              handleAdd(data)
              navigate.push("/cart");
            }}
            className={"lg:!px-40"}
            border={true}
          >
            Buy now
          </Button>
          <Button
            onClick={() => {
              console.log('first')
              dispatch(
                //@ts-ignore
                AddWish({
                  id: data.id,
                  name: data.name,
                  price: data.price,
                  img: data?.photos[0],
                })
              );
            }}
            border={true}
            className={"!py-2 px-5"}
          >
            {isHeart ? (
              <FaHeart size={24} color=" red" />
            ) : (
              <CiHeart size={24} />
            )}
          </Button>
        </div>
        <div className="flex flex-col py-4 gap-2 ">
          <p className="font-semibold ">Share this:</p>
          <div className="flex items-center  gap-4">
            {SocialMedia.map((item: any, index: number) => {
              return <Image key={index} src={item.image} alt="" />;
            })}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Accordion
            heading={"Details"}
            desc={data.description}
            open={showDetail}
            setOpen={setShowDetail}
          />
          <Accordion
            heading={"Dimensions"}
            desc={
              " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia fugiat quos reiciendis animi omnis, similique blanditiis dolorum eos. Animi mollitia sed maiores autem provident sint nesciunt incidunt nemo ab a!"
            }
            open={showDimension}
            setOpen={setShowDimension}
          />
          <Accordion
            heading={"Reviews"}
            desc={
              " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia fugiat quos reiciendis animi omnis, similique blanditiis dolorum eos. Animi mollitia sed maiores autem provident sint nesciunt incidunt nemo ab a!"
            }
            open={showReview}
            setOpen={setshowReview}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
