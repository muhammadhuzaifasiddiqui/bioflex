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
      <section className="blog-section px-4 sm:px-5 md:px-6 lg:px-10 pb-80">
        <div className="container mx-auto">
          <div>
            <div className="flex flex-col lg:flex-row justify-between gap-y-[20px] lg:pb-12">
              <div className="w-full lg:w-1/2">
                <h2 className="font-nineties text-secondary-light">
                  Insights & Tips for Your
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
            <div className="swiper swiper-initialized swiper-horizontal blog-swiper swiper-backface-hidden">
                <div className="swiper-wrapper">
                    <div className="swiper-slide swiper-slide-active w-[1280px] mr-[50px]">
                        <div className="blog-swiper pt-12 pb-5">
                            <div className="flex flex-col lg:flex-row justify-between gap-y-3">
                                <div className="w-full lg:w-[52%]">
                                    <div className="img-wrapper relative ratio-16x9">
                                        <img width="500" height="300" alt="featured-image" className="w-full! h-full! object-cover" src="https://api.bioflexaesthetics.com/wp-content/uploads/2025/08/Best-acne-scar-treatment-scaled.jpg">
                                    </div>
                                </div>
                                <div class="w-full lg:w-[42%]">
                                    <p class="fs-16 text-secondary">01-08-2025</p>
                                    <h3 class="font-nineties text-secondary mt-4">Bioflex Aesthetic VIVA: FDA-Approved Acne Scar Treatment | A Breakthrough in Scar Healing</h3>
                                    <p class="fs-16 text-justify mt-5 lg:mt-8">Bioflex Aesthetic VIVA, the FDA-approved acne scar treatment, is revolutionizing scar healing with cutting-edge technology. Learn why it’s different from traditional treatments and how it delivers long-lasting results for clearer, smoother skin.
                                    </p>
                                    <div class="mt-[30px] lg:mt-[45px]">
                                        <a class="inline-block btn btn-primary" href="/articles/fda-approved-acne-scar-treatment">Continue Reading</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide swiper-slide-next" style="width: 1280px; margin-right: 50px;">
                        <div class="blog-swiper pt-12 pb-5">
                            <div class="flex flex-col lg:flex-row justify-between gap-y-3">
                                <div class="w-full lg:w-[52%]">
                                    <div class="img-wrapper relative ratio-16x9">
                                        <img width="500" height="300" alt="featured-image" class="w-full! h-full! object-cover" src="https://api.bioflexaesthetics.com/wp-content/uploads/2025/07/Aesthetic-Treatment-Aftercare-scaled.jpg">
                                    </div>
                                </div>
                                <div class="w-full lg:w-[42%]">
                                    <p class="fs-16 text-secondary">31-07-2025</p>
                                    <h3 class="font-nineties text-secondary mt-4">How to Maintain Aesthetic Treatment Results | Tips for Long-Lasting Beauty</h3>
                                    <p class="fs-16 text-justify mt-5 lg:mt-8">Expert tips to maintain aesthetic treatment results for longer-lasting beauty. Learn skincare routines, lifestyle habits, and expert recommendations for post-treatment care.
                                    </p>
                                    <div class="mt-[30px] lg:mt-[45px]">
                                        <a class="inline-block btn btn-primary" href="/articles/maintain-aesthetic-treatment">Continue Reading</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide" style="width: 1280px; margin-right: 50px;">
                        <div class="blog-swiper pt-12 pb-5">
                            <div class="flex flex-col lg:flex-row justify-between gap-y-3">
                                <div class="w-full lg:w-[52%]">
                                    <div class="img-wrapper relative ratio-16x9">
                                        <img width="500" height="300" alt="featured-image" class="w-full! h-full! object-cover" src="https://api.bioflexaesthetics.com/wp-content/uploads/2025/07/Facial-laser-hair-removal-scaled.jpg">
                                    </div>
                                </div>
                                <div class="w-full lg:w-[42%]">
                                    <p class="fs-16 text-secondary">30-07-2025</p>
                                    <h3 class="font-nineties text-secondary mt-4">Facial Laser Hair Removal – Safe, Lasting Hair Reduction for Smooth Skin</h3>
                                    <p class="fs-16 text-justify mt-5 lg:mt-8">The benefits, process, and safety of facial laser hair removal. Learn how laser treatment provides long-term smoothness for all skin types.
                                    </p>
                                    <div class="mt-[30px] lg:mt-[45px]">
                                        <a class="inline-block btn btn-primary" href="/articles/facial-laser-hair-removal">Continue Reading</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination static swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                    <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                    <span class="swiper-pagination-bullet"></span>
                    <span class="swiper-pagination-bullet"></span>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Blog;