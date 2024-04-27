import { useQuery } from "@tanstack/react-query";
import React from "react";
import network from "../config/network";
import URL from "../config/url";
import { Loader } from "../components";
import { useDispatch } from "react-redux";
import { setLoader } from "../redux/slices/loaderSlice";

const useCategory = () => {
  const dispatch = useDispatch;
  const { isLoading, error, data } = useQuery({
    queryKey: ["Category"],
    queryFn: () => fetchAllCategories(),
  });

  const fetchAllCategories = async () => {
    const response = await network.get(URL.getAllCategories);
    return response;
  };

  if (isLoading) {
    // @ts-ignore

    dispatch(setLoader(isLoading));
  } else {
    // @ts-ignore
    dispatch(setLoader(isLoading));
  }

  if (error) return "An error has occurred: " + error.message;

  return { data: data?.data?.data, isLoading, error };
};

export default useCategory;
