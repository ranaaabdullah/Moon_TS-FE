import { useQuery } from "@tanstack/react-query";
import React from "react";
import network from "../config/network";
import URL from "../config/url";
import { Loader } from "../components";
import { useDispatch } from "react-redux";
import { setLoader } from "../redux/slices/loaderSlice";

interface Params {
  search: any;
}
const useProductBySearch = (search: Params) => {
  const dispatch = useDispatch();
  const fetchProductBySearch = async () => {
    const response = await network.get(URL.getSearchProduct(search));
    return response.data;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["search", search],
    queryFn: fetchProductBySearch,
  });
  if (isLoading) {
    dispatch(setLoader(isLoading));
  } else {
    dispatch(setLoader(isLoading));
  }

  if (error) return "An error has occurred: " + error.message;

  return { data: data?.data, isLoading, error };
};

export default useProductBySearch;
