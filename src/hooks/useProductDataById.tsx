import { useQuery } from "@tanstack/react-query";
import React from "react";
import network from "../config/network";
import URL from "../config/url";
import { Loader } from "../components";
import { useDispatch } from "react-redux";
import { setLoader } from "../redux/slices/loaderSlice";

interface Params {
  productId:number;
}
const useProductDataById = (productId:Params) => {
  const dispatch = useDispatch();
  const fetchSingleProduct = async ({ queryKey }:any) => {
    const Id = queryKey[1];
    const response = await network.get(URL.getSingleProduct(Id));
    return response;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["SingleProduct", productId],
    queryFn: fetchSingleProduct,
  });
  if (isLoading) {
    dispatch(setLoader(isLoading));
  }
  else{
    dispatch(setLoader(isLoading))
  }

  if (error) return "An error has occurred: " + error.message;

  return { data: data?.data, isLoading, error };
};

export default useProductDataById;
