"use client";
import React, { useState } from "react";

import { useSelector } from "react-redux";

// import { useProductDataById } from "../../hooks";
import { useParams, usePathname } from "next/navigation";
// import {  ProductDetail } from "../components";
import Carousel from "./components/Carousel";
import { useProductDataById } from "@/hooks";
import { BestSellers } from "@/app/components";
import ProductDetail from "./components/ProductDetail";

const ProductDetails = ({ params }: { params: { id: String } }) => {
  //   console.log({ params });
  const productId: any = params?.id;
  //Hooks
  const { data }: any = useProductDataById(productId);
  const products = useSelector((state: any) => state.product.products);
  const stateCart = useSelector((state: any) => state.cart.cart);

  //States
  const [color, setColor] = useState("");
  const [cartAdded, setCartAdded] = useState(false);

  const exist = stateCart?.find((product: any) => product.id === productId);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-4 lg:mx-28">
        <div>{data?.data && <Carousel data={data?.data?.photos} />}</div>
        <div>
          {data?.data && (
            <ProductDetail
              // setCartAdded={setCartAdded}
              color={color}
              setColor={setColor}
              // cartAdded={cartAdded}
              data={data?.data}
              exist={exist ? true : false}
            />
          )}
        </div>
      </div>
      <div className="mx-40">
        <BestSellers data={products} images={4} title={"Similar Items"} />
      </div>
    </div>
  );
};

export default ProductDetails;
