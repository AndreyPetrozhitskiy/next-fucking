'use client'
import React from "react"
import "@/app/Styles/MainSlider.scss"
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function MainSlider () {
  return (
    <div className="MainSlider">
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        loop={true}
      >
        <SwiperSlide  >
            <div className="swiper__slide">
                <img src="slide1.png" />
            </div>
        </SwiperSlide>

        <SwiperSlide  >
            <div className="swiper__slide">
            <img src="slide2.png" />
            </div>
        </SwiperSlide>

        <SwiperSlide  >
            <div className="swiper__slide">
            <img src="slide3.png" />
            </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
  )
};
