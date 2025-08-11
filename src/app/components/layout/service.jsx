"use client";
import Image from "next/image";
import React, { useState } from "react";
// import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

const Service = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <section className="service-section overflow-hidden">
        <div className="container mx-auto py-80">
          <div className="flex flex-col lg:flex-row gap-5 px-4 sm:px-5 md:px-6 lg:px-10">
            <div className="w-full lg:w-[58%]">
              <h2 className="font-behindthetineties leading-[92%] text-secondary-light font-normal">
                Your Go-To Aesthetic Clinic in Pakistan for Healthy, Glowing
                Skin
              </h2>
              <Image
                src={"/images/Sparkle Line.webp"}
                width={298}
                height={60}
                alt="logo"
                unoptimized={true}
                className="w-full h-full object-cover hidden lg:block mt-10"
              />
            </div>
            <div className="w-full lg:w-[42%]">
              <p className="font-light">
                As a trusted aesthetic clinic in Pakistan, BioFlex Aesthetics
                provides personalized care in a comfortable, hygienic
                environment. Every treatment is tailored to your skin’s needs —
                using the latest technology and performed by skilled
                professionals.
              </p>
              <div className="pt-6 md:pt-8 lg:pt-10">
                <a className="btn inline-block px-[26px] py-[9px] rounded-[12px]" href="#">
                  View All Treatments
                </a>
              </div>
            </div>
          </div>
          <div className="pt-80">
            
          </div>
        </div>
      </section>
    </>
  );
};
export default Service;