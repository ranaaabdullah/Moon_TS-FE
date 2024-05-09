"use client"
import React, { useState } from "react";

import { FilterRow, ProductList } from "./components";

import useProductData from "../../hooks/useProductData";
import { Pagination } from "../../components";

const Shop = () => {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState();
  const { data } = useProductData({page,category:null})

  return (
    <div className="lg:px-24 py-14">
      <div className="flex  lg:flex-row flex-col items-center justify-between">
        <p className="font-semibold">Showing 120 items </p>

        <div className="flex items-center">
          <p className="">Sort by:</p>
          <select className="bg-gray-50  text-primary-100 text-sm pe-14 p-2 ">
            <option selected>Name</option>
            <option value="size">size</option>
          </select>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col   items-start gap-5 py-4">
        <div className="hidden md:hidden lg:block">
          <FilterRow setCategory={setCategory} />
        </div>
        <ProductList data={data} />
      </div>
      <div className="flex items-center justify-center lg:justify-end">
        <Pagination setPage={setPage} page={page} />
      </div>
    </div>
  );
};

export default Shop;
