// import { useQuery } from "@tanstack/react-query";
// import React, { FC } from "react";
// import network from "../config/network";
// import URL from "../config/url";
// import { Loader } from "../components";
// import { useDispatch } from "react-redux";
// import { setLoader } from "../redux/slices/loaderSlice";

// // interface Props {
// //   page: any ;
// //   category: any
// // }

// type Obj = {
//   page?: number;
//   category?: string;
// };

// interface Params {
//   obj: Obj;
// }

// const useProductData = (obj: Params) => {
//   const dispatch = useDispatch;
//   const { isLoading, error, data } = useQuery({
//     queryKey: ["Products", page],
//     queryFn: () => fetchProductList(),
//   });

//   const fetchProductList = async () => {
//     const response = await network.get(URL.getAllProducts(page, category));
//     return response;
//   };

//   if (isLoading) {
//     // @ts-ignore
//     dispatch(setLoader(isLoading));
//   } else {
//     // @ts-ignore
//     dispatch(setLoader(isLoading));
//   }

//   if (error) return "An error has occurred: " + error.message;

//   return { data: data?.data?.data, isLoading, error };
// };

// export default useProductData;

import { useQuery } from "@tanstack/react-query";
import network from "../config/network";
import URL from "../config/url";
import { useDispatch } from "react-redux";
import { setLoader } from "../redux/slices/loaderSlice";

interface Product {
  _id: string;
  name: string;
  description: string;
  photos: string[];
  color: string[];
  price: number;
  category: string;
  countInStock: number;
  rating: number;
  numReviews: number;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

interface UseProductDataResult {
  data: Product[] | null;
  isLoading: boolean;
  error: string | null;
}

interface UseProductDataParams {
  page: number | null;
  category: string | null;
}

const useProductData = ({
  page,
  category,
}: UseProductDataParams): UseProductDataResult => {
  const dispatch = useDispatch();
  const { isLoading, error, data } = useQuery<{ data: Product[] }, Error>({
    queryKey: ["Products", page],
    queryFn: fetchProductList,
  });

  async function fetchProductList() {
    const url =
      page !== null
        ? `${URL.getAllProducts}/?page=${page}&limit=10 ${
            category ? `${category}` : ""
          }`
        : URL.getAllProducts;
    const response = await network.get(url);
    return response.data;
  }

  if (isLoading || !data) {
    dispatch(setLoader(true));
  } else {
    dispatch(setLoader(false));
  }

  return {
    data: data?.data || null,
    isLoading,
    error: error ? `An error has occurred: ${error.message}` : null,
  };
};

export default useProductData;
