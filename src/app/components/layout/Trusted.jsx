"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

const Trusted = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <section className="trusted-section py-80 px-4 sm:px-5 md:px-6 lg:px-10">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-[30px] false">
            <div className="flex flex-col justify-between w-full lg:w-[52%]">
              <div>
                <h2 className="font-behindthetineties text-secondary-light leading-[92%]">
                  Trusted <span className="text-primary italic">Aesthetic</span>
                  Advice, <span className="text-primary italic">Tailored </span>
                  for You
                </h2>
                <div className="w-full lg:w-[80%] pt-5">
                  <p className="fs-16">
                    Our experienced professionals provide personalized
                    consultations to understand your unique skin needs and
                    recommend the best treatment plans. <br />
                    <br /> Get the latest updates on skincare routines, popular
                    aesthetic treatments, and expert insights tailored for skin
                    in Pakistan. Our blog is your trusted guide for smarter skin
                    care decisions.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3  gap-2.5 mt-[30px]">
                <div className="counter-wrapper">
                  <p className="fs-35">
                    <span>15</span>+
                  </p>
                  <p>Happy Customers</p>
                </div>
                <div className="counter-wrapper">
                  <p className="fs-35">FDA</p>
                  <p>Approved Technology</p>
                </div>
                <div className="counter-wrapper">
                  <p className="fs-35">
                    <span>99</span>%
                  </p>
                  <p>Satisfaction Rate</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[40%]">
              <Image
                src={"/images/trusted-section-image.webp"}
                width={440}
                height={571}
                alt="logo"
                unoptimized={true}
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Trusted;