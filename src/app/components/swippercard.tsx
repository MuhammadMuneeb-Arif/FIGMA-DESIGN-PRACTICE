"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import PackageCard from "./packageCard";

const swippercard = () => {
    const packages = [
        {
          title: "Starter",
          price: 240,
          time: "Monthly",
        },
        {
          title: "Professional",
          price: 340,
          time: "Monthly",
        },
        {
          title: "Advance",
          price: 430,
          time: "Monthly",
        },
      ];

  return (
    <div className="relative">
    <div className="mt-14 mx-4 px-8 rounded-3xl pb-7">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper rounded-3xl overflow-hidden" 
      >
        {packages.map((card, index) => (
          <SwiperSlide 
            key={index} 
            className="rounded-2xl overflow-hidden"   
          >
            <PackageCard
              title={card.title} 
              price={card.price}
              time={card.time} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
  );
};

export default swippercard;
