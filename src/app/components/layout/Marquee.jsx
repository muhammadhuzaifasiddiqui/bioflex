"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Marquee = () => {
  const treatment = [
    {
      id: 1,
      title: "Treatment",
      img: "/images/treatment.webp",
      alt: "treatment",
    },
    {
      id: 2,
      title: "Asthetic",
      img: "/images/Aesthetic.webp",
      alt: "Aesthetic",
    },
    {
      id: 3,
      title: "Skin-Care",
      img: "/images/ppr-threapy.webp",
      alt: "Skin-Care",
    },
    {
      id: 4,
      title: "Treatment",
      img: "/images/Aesthetic.webp",
      alt: "Treatment",
    },
    {
      id: 5,
      title: "Asthetic",
      img: "/images/Aesthetic.webp",
      alt: "Aesthetic",
    },
  ];

  return (
    <>
      <section className="blog-section">
        <div className="flex flex-row">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 0, // Delay between slides
              disableOnInteraction: false,
            }}
            draggable={false}
            // onTouchMove={false}
            allowTouchMove={false}
            dir="ltr"
            speed={3000}
            slidesPerView={"auto"}
          >
            {treatment.map((item, index) => (
              <SwiperSlide key={index} className="w-fit!">
                <div className="flex items-center gap-2.5 px-1.5">
                  <div className="inline-block">
                    <h2 className="text-primary font-behindthetineties rounded-[10px] border border-[#911E3D4D] p-5 leading-[70%]">
                      {item.title}
                    </h2>
                  </div>
                  <div>
                    <Image
                      src={item.img}
                      width={210}
                      height={200}
                      alt={item.alt}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex flex-row pt-6">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 0, // Delay between slides
              disableOnInteraction: false,
            }}
            allowTouchMove={false}
            dir="rtl"
            speed={3000}
            slidesPerView={"auto"}
          >
            {treatment.map((item, index) => (
              <SwiperSlide key={index} className="w-fit!">
                <div className="flex items-center gap-2.5 px-1.5">
                  <div>
                    <Image
                      src={item.img}
                      width={210}
                      height={200}
                      alt={item.alt}
                    />
                  </div>
                  <div className="inline-block">
                    <h2 className="text-primary font-behindthetineties rounded-[10px] border border-[#911E3D4D] p-5 leading-[70%]">
                      {item.title}
                    </h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};
export default Marquee;
