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
              <h2 className="font-behindthetineties text-secondary-light mt-6 leading-[100%]">
                Skincare
                <span className="text-primary italic font-light"> Products </span>
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
                <a
                  className="btn inline-block bg-primary text-white!"
                  href="/products"
                >
                  Explore Our Product Line
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:pt-13 lg:pt-15">
              <a
                className="product-card cursor-pointer flex flex-col h-full"
                href="/products/spf-60-sunblock"
              >
                <div className="img-wrapper rounded-[20px] overflow-hidden">
                  <Image
                    src={"/images/Sunblock.webp"}
                    width={400}
                    height={442}
                    alt="logo"
                    unoptimized={true}
                    className="w-full! h-full! object-cover"
                  />
                </div>
                <div className="card-footer items-center justify-between gap-2 mt-[5px] flex-1">
                  <div>
                    <h5 className="lint-clamp-1 text-secondary-dark font-medium line-clamp-2 leading-[101%]">
                      SPF 60 Sunblock
                    </h5>
                    <div className="flex items-center gap-2.5 mt-2.5">
                      <p className="text-grey font-normal fs-18">Details</p>
                      <Image
                        src={"/images/Arrow Right.png"}
                        width={20}
                        height={20}
                        alt="logo"
                        unoptimized={true}
                        className="w-full h-full object-cover rounded-br-[20px]"
                      />
                    </div>
                  </div>
                  <p className="min-w-fit fs-35 font-nineties text-dark line-clamp-1 font-behindthetineties">
                    3500 PKR
                  </p>
                </div>
              </a>

              <a
                className="product-card cursor-pointer flex flex-col h-full"
                href="/products/spf-60-sunblock"
              >
                <div className="img-wrapper rounded-[20px] overflow-hidden">
                  <Image
                    src={"/images/Spray-2.webp"}
                    width={400}
                    height={442}
                    alt="logo"
                    unoptimized={true}
                    className="w-full! h-full! object-cover"
                  />
                </div>
                <div className="card-footer items-center justify-between gap-2 mt-[5px] flex-1">
                  <div>
                    <h5 className="lint-clamp-1 text-secondary-dark font-medium line-clamp-2 leading-[101%]">
                      Acivo Spray
                    </h5>
                    <div className="flex items-center gap-2.5 mt-2.5">
                      <p className="text-grey font-normal fs-18">Details</p>
                      <Image
                        src={"/images/Arrow Right.png"}
                        width={20}
                        height={20}
                        alt="logo"
                        unoptimized={true}
                        className="w-full h-full object-cover rounded-br-[20px]"
                      />
                    </div>
                  </div>
                  <p className="min-w-fit fs-35 font-nineties text-dark line-clamp-1 font-behindthetineties">
                    2850 PKR
                  </p>
                </div>
              </a>

              <a
                className="product-card cursor-pointer flex flex-col h-full"
                href="/products/spf-60-sunblock"
              >
                <div className="img-wrapper rounded-[20px] overflow-hidden">
                  <Image
                    src={"/images/Spray-2.webp"}
                    width={400}
                    height={442}
                    alt="logo"
                    unoptimized={true}
                    className="w-full! h-full! object-cover"
                  />
                </div>
                <div className="card-footer items-center justify-between gap-2 mt-[5px] flex-1">
                  <div>
                    <h5 className="lint-clamp-1 text-secondary-dark font-medium line-clamp-2 leading-[101%]">
                      Hair Serum
                    </h5>
                    <div className="flex items-center gap-2.5 mt-2.5">
                      <p className="text-grey font-normal fs-18">Details</p>
                      <Image
                        src={"/images/Arrow Right.png"}
                        width={20}
                        height={20}
                        alt="logo"
                        unoptimized={true}
                        className="w-full h-full object-cover rounded-br-[20px]"
                      />
                    </div>
                  </div>
                  <p className="min-w-fit fs-35 font-nineties text-dark line-clamp-1 font-behindthetineties">
                    4000 PKR
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Products;