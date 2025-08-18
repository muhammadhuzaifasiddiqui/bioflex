"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";

const Blog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <section className="blog-section px-4 sm:px-5 md:px-6 lg:px-10 pb-80 ">
        <div className="container mx-auto">
          <div>
            <div className="flex flex-col lg:flex-row justify-between gap-y-[20px] lg:pb-12">
              <div className="w-full lg:w-1/2">
                <h2 className="font-behindthetineties text-secondary-light">
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
            {/* <div className="swiper swiper-initialized swiper-horizontal blog-swiper swiper-backface-hidden">
              <div className="swiper-wrapper transition duration-[0ms] delay-[0ms] transform translate-x-[-1330px]">
                <div className="swiper-slide swiper-slide-prev w-[1280px] mr-[50px]">
                  <div className="blog-swiper pt-12 pb-5">
                    <div className="flex flex-col lg:flex-row justify-between gap-y-3">
                      <div className="w-full lg:w-[52%]">
                        <div className="img-wrapper relative ratio-16x9">
                          <Image
                            src={"/images/Best-acne-scar-treatment-scaled.webp"}
                            width={500}
                            height={300}
                            alt="blog 1"
                            unoptimized={true}
                            className="w-full h-full object-cover rounded-br-[20px]"
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-[42%]">
                        <p className="fs-16 text-secondary">01-08-2025</p>
                        <h3 className="font-nineties text-secondary mt-4">
                          "Bioflex Aesthetic VIVA: FDA-Approved Acne Scar
                          Treatment | A Breakthrough in Scar Healing"
                        </h3>
                        <p className="fs-16 text-justify mt-5 lg:mt-8">
                          "Bioflex Aesthetic VIVA, the FDA-approved acne scar
                          treatment, is revolutionizing scar healing with
                          cutting-edge technology. Learn why it’s different from
                          traditional treatments and how it delivers
                          long-lasting results for clearer, smoother skin."
                        </p>
                        <div className="mt-[30px] lg:mt-[45px]">
                          <a
                            class="btn inline-block px-[26px] py-[9px] rounded-[12px]"
                            href="#"
                          >
                            Continue Reading
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide swiper-slide-active w-[1280px] mr-[50px]">
                  <div className="blog-swiper pt-12 pb-5">
                    <div className="flex flex-col lg:flex-row justify-between gap-y-3">
                      <div className="w-full lg:w-[52%]">
                        <div className="img-wrapper relative ratio-16x9">
                          <Image
                            src={
                              "/images/Aesthetic-Treatment-Aftercare-scaled.webp"
                            }
                            width={500}
                            height={300}
                            alt="blog 2"
                            unoptimized={true}
                            className="w-full h-full object-cover rounded-br-[20px]"
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-[42%]">
                        <p className="fs-16 text-secondary">31-07-2025</p>
                        <h3 className="font-nineties text-secondary mt-4">
                          How to Maintain Aesthetic Treatment Results | Tips for
                          Long-Lasting Beauty
                        </h3>
                        <p className="fs-16 text-justify mt-5 lg:mt-8">
                          "Expert tips to maintain aesthetic treatment results
                          for longer-lasting beauty. Learn skincare routines,
                          lifestyle habits, and expert recommendations for
                          post-treatment care."
                        </p>
                        <div className="mt-[30px] lg:mt-[45px]">
                          <a
                            class="btn inline-block px-[26px] py-[9px] rounded-[12px]"
                            href="#"
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div> */}
            {/* <div className="swiper swiper-initialized swiper-horizontal blog-swiper swiper-backface-hidden">
              <div className="swiper-wrapper">
                <div className="swiper-slide swiper-slide-active w-[1280px] mr-[50px]">
                  <div className="blog-swiper pt-12 pb-5">
                    <div className="flex flex-col lg:flex-row justify-between gap-y-3">
                      <div className="w-full lg:w-[52%]">
                        <div className="img-wrapper relative ratio-16x9">
                          <Image
                            src={"/images/Best-acne-scar-treatment-scaled.webp"}
                            width={650}
                            height={400}
                            alt="Best-acne-scar-treatment-scaled"
                            unoptimized={true}
                            className="w-full! h-full! object-cover! rounded-2xl"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};
export default Blog;
