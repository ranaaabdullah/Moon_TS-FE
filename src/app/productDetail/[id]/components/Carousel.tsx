import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

export default function Carousel({ data }: any) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>();

  return (
    <>
      <Swiper
        style={{
          //@ts-ignore

          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          //@ts-ignore
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {data?.map((item: any) => {
          return (
            <SwiperSlide>
              <img src={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {data?.map((item: any) => {
          return (
            <SwiperSlide>
              <Image src={item}width={0} height={0}  alt=""/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
