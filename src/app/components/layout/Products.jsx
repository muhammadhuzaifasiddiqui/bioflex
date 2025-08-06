"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

const Products = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <section className="product-section px-4 sm:px-5 md:px-6 lg:px-10 py-40">
        <div className="container mx-auto">
          <div className="flex flex-col">
            <div className="w-full lg:w-[60%] text-center mx-auto">
              <p className="fs-18 text-gold font-medium underline underline-offset-2">
                Our Products
              </p>
              <h2 className="font-behindthetineties text-secondary-light mt-6 font-medium leading-[92%]">
                Skincare{" "}
                <span class="text-primary italic font-light">Products</span>{" "}
                That Support Real
                <span className="text-primary italic"> Results</span>
              </h2>
              <p className="fs-16 font-light mt-4">
                Great results don’t stop at the clinic. Our range of
                dermatologist-recommended products is designed to complement
                your treatments and help you maintain healthier, glowing skin at
                home.
              </p>
              <div className="mt-6 md:mt-8 lg:mt-10">
                <a className="btn inline-block px-[24px] py-[10px] rounded-[12px]" href="/products">
                  Explore Our Product Line
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5 md:gap-y-6 pt-10 md:pt-13 lg:pt-15">

            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Products;