import Image from "next/image";
import React, { FC } from "react";

interface Props {
  swap?: Boolean;
  heading: String;
  desc: String;
  img: any;
}

const AboutCard: FC<Props> = ({ swap, heading, desc, img }) => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2  lg:px-28 ">
        {swap ? (
          <>
            <div>
              <Image className="h-[400px] w-[670px]" src={img} alt="" />
            </div>
            <div className="flex flex-col justify-center  items-center p-8  text-center gap-8 bg-primary-200  ">
              <h3 className="text-primary-300 font-semibold  uppercase tracking-widest text-2xl">
                {heading}
              </h3>
              <p className="text-primary-100 px-10   lg:px-24">{desc}</p>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col justify-center  items-center p-8  text-center gap-8 bg-primary-200  ">
              <h3 className="text-primary-300 font-semibold  uppercase tracking-widest text-2xl">
                {heading}
              </h3>
              <p className="text-primary-100 px-10   lg:px-24">{desc}</p>
            </div>
            <div>
              <Image className="h-[400px] w-[800px]" src={img} alt="" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AboutCard;
