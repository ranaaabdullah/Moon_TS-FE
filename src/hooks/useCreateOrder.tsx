import { useMutation } from "@tanstack/react-query";
import network from "../config/network";
import URL from "../config/url";

const useCreateOrder = () => {
  const CreateOrder = async (payload:any) => {
    const response = await network.post(URL.createOrder, payload);
    return response;
  };

  return useMutation({ mutationFn: CreateOrder });
};

export default useCreateOrder;
