"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <section className="hero-section px-5 sm:px-3 md:px-4 lg:px-5 mt-4 lg:mt-5">
        <div className="background-wrapper relative">
          <div className="container mx-auto">
            <div className="w-full lg:w-[60%] text-center lg:text-start pb-[20px] lg:pb-[44px]">
              <h1 className="font-nineties font-medium leading-[90%] text-secondary-light font-behindthetineties">
                The Best
                <span className="text-primary italic"> Laser Hair Removal</span>
                ,
                <span className="text-primary italic">
                  {" "}
                  Hydrafacial Treatment{" "}
                </span>
                &<span className="text-primary italic"> PRP Therapy </span>
                in Pakistan
              </h1>
              <p className="fs-16 pt-6 text-center lg:text-justify">
                At
                <b> BioFlex Aesthetics</b>, we help you look and feel your best
                with advanced, non-invasive treatments. Whether you're seeking
                smooth, hair-free skin through
                <b> laser hair removal</b>, a radiant glow with a Hydrafacial
                treatment, or skin and hair rejuvenation using
                <b> PRP therapy with</b>
                FDA Approved, Canadian Technology, our expert team is here to
                guide you every step of the way. FDA Approved Canadian
                Technology.
              </p>
              <Image
                src={"/images/image 162.png"}
                width={711}
                height={720}
                alt="logo"
                unoptimized={true}
                className="w-full lg:w-auto relative lg:absolute end-0 bottom-0 mx-auto rounded-br-[20px]"
              />
              <div className="book-appointment-container  mt-[24px] lg:mt-[50px]">
                <h5 className="text-dark font-medium text-start mb-4 leading-[100%]">
                  Book a Free Appointment
                </h5>

                <form>
                  <div className="grid grid-flow-row grid-cols-2 gap-2.5">
                    <div className="w-full">
                      <input
                        type="email"
                        className="form-control w-full font-normal focus:border-transparent focus:outline-none"
                        placeholder="Your E-mail Address"
                        name="email"
                      />
                    </div>
                    <div className="w-full">
                      <input
                        className="w-full form-control font-normal focus:border-transparent focus:outline-none"
                        type="tel"
                        placeholder="Contact Number"
                        name="phone"
                      />
                    </div>
                    <div className="relative w-full">
                      <select
                        name="branch"
                        className="w-full cursor-pointer form-control font-normal pr-10 appearance-none focus:border-transparent focus:outline-none"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select Branch
                        </option>
                        <option value="karachi">Karachi</option>
                        <option value="islamabad">Islamabad</option>
                        <option value="peshawar">Peshawar</option>
                        <option value="rawalpindi">Rawalpindi</option>
                      </select>

                      <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5px"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="relative w-full">
                      <select
                        name="branch"
                        className="w-full cursor-pointer form-control font-normal pr-10 appearance-none focus:border-transparent focus:outline-none"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select Branch
                        </option>
                        <option value="karachi">Karachi</option>
                        <option value="islamabad">Islamabad</option>
                        <option value="peshawar">Peshawar</option>
                        <option value="rawalpindi">Rawalpindi</option>
                      </select>

                      <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5px"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  <button
                    className="w-full btn-primary btn btn-lg mt-[15px] lg:mt-[18px] py-[10px]! px-[24px]! sm:py-[14px]! sm:px-[24px]!"
                    type="submit"
                  >
                    Book Appointment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="flex flex-col gap-2 lg:gap-y-[16px] pt-[10px]">
        <div className="flex gap-x-[10px] gap-y-3">
          <div className="w-full">
            <input
              type="email"
              className="fs-18 form-control w-full font-normal focus:border-transparent focus:outline-none"
              placeholder="Your E-mail Address"
              name="email"
            />
          </div>
          <div className="w-full">
            <input
              className="fs-18 w-full form-control font-normal focus:border-transparent focus:outline-none"
              type="tel"
              placeholder="Contact Number"
              name="phone"
            />
          </div>
        </div>
        <div className="flex gap-2 lg:gap-x-[10px] lg:gap-y-3">
          <div className="relative w-full">
            <select
              name="branch"
              className="fs-18 w-full form-control font-normal pr-10 appearance-none focus:border-transparent focus:outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                Select Branch
              </option>
              <option value="karachi">Karachi</option>
              <option value="islamabad">Islamabad</option>
              <option value="peshawar">Peshawar</option>
              <option value="rawalpindi">Rawalpindi</option>
            </select>

            <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5px"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </div>
          <div className="relative w-full">
            <select
              name="branch"
              className="fs-18 w-full form-control font-normal pr-10 appearance-none focus:border-transparent focus:outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                Select Branch
              </option>
              <option value="karachi">Karachi</option>
              <option value="islamabad">Islamabad</option>
              <option value="peshawar">Peshawar</option>
              <option value="rawalpindi">Rawalpindi</option>
            </select>

            <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5px"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default Hero;
