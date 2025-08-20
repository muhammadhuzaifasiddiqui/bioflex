"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

const Book = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <section className="book-now-section px-5 px:lg-10">
        <div className="background-wrapper w-fit-content mx-auto">
          <div className="container mx-auto relative sm:pb-12.5 lg:pb-[30px]">
            <Image
              src={"/images/footer-image.webp"}
              width={1360}
              height={550}
              alt="logo"
              unoptimized={true}
              className="w-full h-full lg:w-auto relative lg:absolute end-0 bottom-0 mx-auto object-cover rounded-br-[20px]"
            />
            <div className="relative z-[1]">
              <div className="flex flex-col lg:flex-row justify-between gap-y-6">
                <div className="w-full lg:w-[60%]">
                  <h2 className="font-behindthetineties text-secondary-light text-center lg:text-start leading-[90%]">
                    Your <span className="text-primary italic">Glow-Up </span>
                    Begins Without the{" "}
                    <span className="text-primary italic">Price Tag</span>
                  </h2>
                </div>
                <div className="w-full lg:w-[38%]">
                  <p className="fs-16 text-center lg:text-end text-grey-dark leading-[140%]">
                    Experience premium skincare treatments that are both
                    effective and affordable.
                  </p>
                  <div className="hidden lg:flex justify-end gap-4 pt-5">
                    <a
                      target="_blank"
                      className="social-icon"
                      href="https://www.facebook.com/bioflexaesthetics/"
                    >
                      <Image
                        src={"https://api.bioflexaesthetics.com/wp-content/uploads/2025/05/facebook-icon.svg"}
                        width={1360}
                        height={550}
                        alt="logo"
                        unoptimized={true}
                        className="w-full h-full object-cover"
                      />
                    </a>
                    <a
                      target="_blank"
                      className="social-icon"
                      href="https://www.tiktok.com/@bioflexaesthetics?is_from_webapp=1&amp;sender_device=pc"
                    >
                      <Image
                        src={"https://api.bioflexaesthetics.com/wp-content/uploads/2025/06/tiktok-icon-new.svg"}
                        width={1360}
                        height={550}
                        alt="logo"
                        unoptimized={true}
                        className="w-full h-full object-cover"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-center pt-6 lg:pt-[275px]">
                <a className="btn inline-block px-14! fs-18 font-bold" href="/#appointment-section">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Book;