"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Blog = () => {
  return (
    <>
      <section className="blog-section px-5 sm:px-3 md:px-4 lg:px-5">
        <div className="container mx-auto">
          <div>
            <div className="flex flex-col lg:flex-row justify-between gap-y-[20px] lg:pb-12">
              <div className="w-full lg:w-1/2">
                <h2 className="font-behindthetineties text-secondary-light leading-[90%]">
                  Insights &amp; Tips for Your{" "}
                  <span className="text-primary italic">Skincare</span> Journey
                </h2>
              </div>
              <div className="w-full lg:w-[42%]">
                <p className="fs-16 text-justify">
                  Stay informed with our latest articles on skincare treatments,
                  aesthetic trends, and expert advice to help you make informed
                  decisions.
                </p>
              </div>
            </div>
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              centeredSlides={false}
              pagination={{
                el: ".custom-pagination",
                clickable: true,
                renderBullet: (index, className) => {
                  return `<span class="${className} custom-bullet"></span>`;
                },
              }}
              modules={[Pagination]}
            >
              <SwiperSlide>
                <div className="blog-swiper pt-6 md:pt-7 lg:pt-10 xl:pt-12 pb-4">
                  <div className="flex flex-col lg:flex-row gap-y-3 gap-x-7 lg:gap-x-12.5 items-center">
                    <div className="w-full lg:w-[52%]">
                      <div className="img-wrapper relative ratio-16x9">
                        <Image
                          src={"/images/Best-acne-scar-treatment-scaled.webp"}
                          width={500}
                          height={250}
                          alt="blog 1"
                          unoptimized={true}
                          className="w-full! h-full! object-cover"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-[42%]">
                      <p className="fs-16">01-08-2025</p>
                      <h4 className="font-behindthetineties text-secondary mt-4.5 leading-[120%]">
                        "Bioflex Aesthetic VIVA: FDA-Approved Acne Scar
                        Treatment | A Breakthrough in Scar Healing"
                      </h4>
                      <p className="fs-16 text-justify mt-5 lg:mt-9">
                        "Bioflex Aesthetic VIVA, the FDA-approved acne scar
                        treatment, is revolutionizing scar healing with
                        cutting-edge technology. Learn why it’s different from
                        traditional treatments and how it delivers long-lasting
                        results for clearer, smoother skin."
                      </p>
                      <div className="mt-[16px] lg:mt-[45px]">
                        <a
                          className="btn inline-block bg-primary text-white!"
                          href="#"
                        >
                          Continue Reading
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="blog-swiper pt-6 md:pt-7 lg:pt-10 xl:pt-12 pb-4">
                  <div className="flex flex-col lg:flex-row gap-y-3 gap-x-7 lg:gap-x-12.5 items-center">
                    <div className="w-full lg:w-[52%]">
                      <div className="img-wrapper relative ratio-16x9">
                        <Image
                          src={
                            "/images/Aesthetic-Treatment-Aftercare-scaled.webp"
                          }
                          width={500}
                          height={250}
                          alt="blog 2"
                          unoptimized={true}
                          className="w-full! h-full! object-cover"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-[42%]">
                      <p className="fs-16">31-07-2025</p>
                      <h4 className="font-behindthetineties text-secondary mt-4.5 leading-[120%]">
                        "How to Maintain Aesthetic Treatment Results | Tips for
                        Long-Lasting Beauty"
                      </h4>
                      <p className="fs-16 text-justify mt-5 lg:mt-9">
                        "Bioflex Aesthetic VIVA, the FDA-approved acne scar
                        treatment, is revolutionizing scar healing with
                        cutting-edge technology. Learn why it’s different from
                        traditional treatments and how it delivers long-lasting
                        results for clearer, smoother skin."
                      </p>
                      <div className="mt-[16px] lg:mt-[45px]">
                        <a
                          className="btn inline-block bg-primary text-white!"
                          href="#"
                        >
                          Continue Reading
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="blog-swiper pt-6 md:pt-7 lg:pt-10 xl:pt-12 pb-4">
                  <div className="flex flex-col lg:flex-row gap-y-3 gap-x-7 lg:gap-x-12.5 items-center">
                    <div className="w-full lg:w-[52%]">
                      <div className="img-wrapper relative ratio-16x9">
                        <Image
                          src={"/images/Facial-laser-hair-removal-scaled.webp"}
                          width={500}
                          height={250}
                          alt="blog 3"
                          unoptimized={true}
                          className="w-full! h-full! object-cover"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-[42%]">
                      <p className="fs-16">30-07-2025</p>
                      <h4 className="font-behindthetineties text-secondary mt-4.5 leading-[120%]">
                        "Facial Laser Hair Removal – Safe, Lasting Hair
                        Reduction for Smooth Skin"
                      </h4>
                      <p className="fs-16 text-justify mt-5 lg:mt-9">
                        "Bioflex Aesthetic VIVA, the FDA-approved acne scar
                        treatment, is revolutionizing scar healing with
                        cutting-edge technology. Learn why it’s different from
                        traditional treatments and how it delivers long-lasting
                        results for clearer, smoother skin."
                      </p>
                      <div className="mt-[16px] lg:mt-[45px]">
                        <a
                          className="btn inline-block bg-primary text-white!"
                          href="#"
                        >
                          Continue Reading
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="custom-pagination flex justify-center gap-3 mt-0 sm:mt-2"></div>

            <style jsx global>{`
              .custom-bullet {

              }

              .swiper-pagination-bullet-active.custom-bullet {
                background-color: #a21a41; /* Burgundy / Primary Color */
              }
            `}</style>
          </div>
        </div>
      </section>
    </>
  );
};
export default Blog;