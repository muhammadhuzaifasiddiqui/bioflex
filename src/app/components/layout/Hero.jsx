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
      <section className="hero-section px-4 sm:px-5 md:px-6 lg:px-10 mt-4 lg:mt-5">
        <div className="background-wrapper relative">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-[60%] text-center lg:text-start">
                <h1 className="font-nineties font-normal leading-[92%] text-secondary-light font-behindthetineties">
                  The Best
                  <span className="text-primary italic font-medium">
                    {" "}
                    Laser Hair Removal
                  </span>
                  ,
                  <span className="text-primary italic font-medium">
                    {" "}
                    Hydrafacial Treatment{" "}
                  </span>
                  &
                  <span className="text-primary italic font-medium">
                    {" "}
                    PRP Therapy{" "}
                  </span>
                  in Pakistan
                </h1>
                <p className="fs-16 pt-6 text-center lg:text-justify">
                  At
                  <b> BioFlex Aesthetics</b>, we help you look and feel your
                  best with advanced, non-invasive treatments. Whether you're
                  seeking smooth, hair-free skin through
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
                  className="w-full h-full lg:w-auto relative lg:absolute end-0 bottom-0 mx-auto object-cover rounded-br-[20px]"
                />
                <div className="scroll-mt-[300px] book-appointment-container mt-[24px] lg:mt-[50px] mb-[20px] lg:mb-[44px] ">
                  <h4 className="text-dark font-medium text-start">
                    Book a Free Appointment
                  </h4>
                  <form>
                    <div className="flex flex-col gap-2 lg:gap-y-[16px] pt-[10px]">
                      <div className="flex gap-x-[10px] gap-y-3">
                        <div className="w-full">
                          <input
                            type="email"
                            className="fs-18 form-control w-full font-normal"
                            placeholder="Your E-mail Address"
                            name="email"
                          />
                        </div>
                        <div className="w-full">
                          <input
                            className="fs-18 w-full form-control font-normal"
                            type="tel"
                            placeholder="Contact Number"
                            name="phone"
                          />
                        </div>
                      </div>
                      <div className="flex gap-2 lg:gap-x-[10px] lg:gap-y-3">
                        <div className="w-full">
                          <select
                            name="branch"
                            className="fs-18 w-full form-control font-normal pr-10"
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
                        </div>
                        <div className="w-full">
                          <select
                            name="branch"
                            className="fs-18 w-full form-control font-normal"
                            defaultValue=""
                          >
                            <option value="" disabled>
                              Treatment Concern
                            </option>
                            <option value="karachi">Karachi</option>
                            <option value="islamabad">Islamabad</option>
                            <option value="peshawar">Peshawar</option>
                            <option value="rawalpindi">Rawalpindi</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <button className="w-full btn mt-[10px] rounded-[10px] lg:mt-[16px] py-[14px]" type="submit">Book Appointment</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;