import React from "react";
import BannerPic from "../../../public/assets/home/banner.png";
import icon from "../../../public/assets/home/Icon.png";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "@/components/buttons/Button";

// import { Button } from "../../../components";
// interface Props {
// className?: string;
// text: string;
// disable?: boolean;
// ref?: RefObject<HTMLDivElement>;
// onClick: () => void;
// id?: string;
// bg: BgColor;
// border: string;
// borderWhite: string;
// loader: boolean;
// children: ReactNode;

// }

const Banner = () => {
  const navigate = useRouter();
  return (
    <div className="lg:relative ">
      <div className="">
        <Image
          className="w-screen object-contain"
          src={BannerPic}
          alt=""
        ></Image>
      </div>
      <div className=" lg:absolute lg:top-0 h-full lg:left-40 flex flex-col  lg:w-96 text-center justify-center  gap-5 items-center bg-brown-100 p-5">
        <div className="">
          <Image src={icon} alt=""></Image>
        </div>
        <p className="text-white font-medium">
          Handcrafted in Viet Nam since 1650
        </p>
        <h3 className="lg:text-4xl text-2xl text-white font-semibold">
          BAT TRANG DINNER SET
        </h3>

        <Button
          onClick={() => navigate.push("/shop")}
          className={"px-16"}
          text={"brown"}
        >
          shop now
        </Button>
      </div>
    </div>
  );
};

export default Banner;
