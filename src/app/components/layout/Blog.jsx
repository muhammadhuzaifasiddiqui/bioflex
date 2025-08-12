"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

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
                <h2 className="font-nineties text-secondary-light">Insights &amp; Tips for Your <span class="text-primary italic">Skincare</span> Journey</h2>
              </div>
              <div class="w-full lg:w-[42%]">
                <p class="fs-16 text-justify">
                  Stay informed with our latest articles on skincare treatments, aesthetic trends, and expert advice to help you make informed decisions.
                </p>
              </div>
            </div>
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