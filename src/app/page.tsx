"use client";

import React from "react";
import image from "../../public/assets/Image.png";
import image2 from "../../public/assets/image2.png";
import image3 from "../../public/assets/image3.png";

import { useDispatch, useSelector } from "react-redux";
import { useProductData } from "../hooks";
import { useRouter } from "next/navigation";
import {
  Banner,
  BannerCard,
  BestSellers,
  EmailCard,
  Section1,
} from "./components";
import { addProducts } from "@/redux/slices/ProductSlice";

const Home = () => {
  //Hooks
  const navigate = useRouter();
  const dispatch = useDispatch();
  const { data }: any = useProductData({ page: null, category: null });
//@ts-ignore
  const products = useSelector((state) => state?.product?.products);
  console.log(products)

  // console.log(first)
  //Functions
  dispatch(addProducts(data));
  return (
    <>
      <Banner />
      <div className="lg:mx-40">
        <Section1 />
        <BannerCard
          button={"shop now"}
          title={" Up to 40% off our Christmas collection"}
          desc={
            "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit hasellus mollis sit aliquam sit nullam neque ultrices."
          }
          img={image}
          onClick={() => navigate.push("/shop")}
        />
        {data?.length > 0 && (
          <BestSellers data={data} images={8} title={"best sellers"} />
        )}
        <BannerCard
          title={" Made in viet Nam since 1450"}
          desc={
            " Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit hasellus mollis sit aliquam sit nullam neque ultrices."
          }
          img={image2}
          button={"learn more "}
          onClick={() => navigate.push("/blog")}
        />
        <BannerCard
          swap={true}
          title={" Made in viet Nam since 1450"}
          desc={
            " Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit hasellus mollis sit aliquam sit nullam neque ultrices."
          }
          img={image3}
          button={"learn more "}
          onClick={() => navigate.push("/blog")}
        />
        <div>
          {data?.length > 0 && (
            <BestSellers
              data={data}
              images={4}
              title={"Discover new arrivals"}
            />
          )}
        </div>
        <div>
          <BannerCard
            heading2={"TableWare"}
            heading={"our blogs"}
            title={" Made in viet Nam since 1450"}
            desc={
              " Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit hasellus mollis sit aliquam sit nullam neque ultrices."
            }
            img={image3}
            button={"learn more "}
            onClick={() => navigate.push("/blog")}
          />
        </div>
        <EmailCard />
      </div>
    </>
  );
};

export default Home;
