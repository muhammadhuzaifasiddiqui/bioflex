"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CustomSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef < any > null;

  return (
    <div className="w-full max-w-xl mx-auto">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        slidesPerView={1}
        spaceBetween={50}
      >
        <SwiperSlide>
          <div className="p-8 bg-gray-100 text-center">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-8 bg-gray-100 text-center">Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-8 bg-gray-100 text-center">Slide 3</div>
        </SwiperSlide>
      </Swiper>

      <div className="flex justify-center gap-4 mt-4">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            onClick={() => swiperRef.current?.slideTo(i)}
            className={`h-2 w-24 rounded-full transition-all duration-300 ${
              activeIndex === i ? "bg-[#981d39]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomSwiper;