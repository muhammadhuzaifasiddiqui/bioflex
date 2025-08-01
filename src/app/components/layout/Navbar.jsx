"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <header className="navbar-section px-3 sm:px-3.5 md:px-5">
        <div className="w-full container nav-container mx-auto">
          <nav className="navbar absolute w-full lg:p-7.5 md:p-7.5 sm:px-5 px-5 left-0">
            <div className="container mx-auto relative left-0">
              <div className="bg-navbar flex justify-between items-center rounded-[12px] pt-[5px] pb-[5px] pl-[20px] pr-[10px]">
                <div className="Logo-wrapper">
                  <Image
                    src={"/images/logo.svg"}
                    width={120}
                    height={50}
                    alt="logo"
                    unoptimized={true}
                    className="w-full! h-full! object-cover"
                  />
                </div>
                <div className="lg:flex hidden navbar-menu gap-x-7.5 text-white">
                  <a href="#">Home</a>
                  <a href="#">About</a>
                  <a href="#">Services</a>
                  <a href="#">Products</a>
                  <a href="#">Locations</a>
                  <a href="#">Articles</a>
                </div>

                <div className="flex items-center gap-2">
                  <div className="lg:flex hidden p-[10px] rounded-full bg-secondary">
                    <a
                      href="#"
                      className="flex text-white font-medium items-center gap-x-2.5"
                    >
                      <Image
                        src={"/images/bag-2.svg"}
                        width={120}
                        height={50}
                        alt="logo"
                        unoptimized={true}
                        className="w-full! h-full! object-cover"
                      />
                    </a>
                  </div>

                  <div className="lg:flex hidden p-[10px] rounded-full bg-secondary">
                    <a
                      href="#"
                      className="flex text-white font-medium items-center gap-x-2.5"
                    >
                      <Image
                        src={"/images/profile.svg"}
                        width={120}
                        height={50}
                        alt="logo"
                        unoptimized={true}
                        className="w-full! h-full! object-cover"
                      />
                    </a>
                  </div>

                  <div className="lg:flex hidden rounded-[8px] bg-primary py-[10px] px-[27px]">
                    <a
                      href="#"
                      className="flex text-white font-medium items-center gap-x-2.5"
                    >
                      Login
                    </a>
                  </div>
                </div>
                <div className="lg:hidden flex items-center">
                  <button
                    onClick={toggleMenu}
                    className="p-2 rounded-md transition"
                    aria-label="Toggle menu"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="39"
                      height="38"
                      viewBox="0 0 39 38"
                      fill="none"
                    >
                      <path
                        d="M6.58496 9.5H31.9183M6.58496 19H31.9183M6.58496 28.5H31.9183"
                        stroke="#A1A1AA"
                        strokeWidth="3.16667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.nav
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: isOpen ? 1 : 0,
                      height: isOpen ? "auto" : 0,
                    }}
                    exit={{ opacity: 0, height: 0 }}
                    className="lg:hidden absolute top-16 left-0 right-0 z-10 overflow-hidden bg-[#9e9a9ac4] text-white font-medium"
                  >
                    <ul className="flex flex-col items-start p-6 rounded-md overflow-hidden">
                      <li className="my-4">
                        <Link
                          href={"/"}
                          className={""}
                          onClick={() => setIsOpen(false)}
                        >
                          Home
                        </Link>
                      </li>
                      <li className="my-4">
                        <Link
                          href={"/"}
                          className={""}
                          onClick={() => setIsOpen(false)}
                        >
                          Product
                        </Link>
                      </li>
                      <li className="my-4">
                        <Link
                          href={"/"}
                          className={""}
                          onClick={() => setIsOpen(false)}
                        >
                          Services
                        </Link>
                      </li>
                      <li className="my-4">
                        <Link
                          href={"/"}
                          className={""}
                          onClick={() => setIsOpen(false)}
                        >
                          About
                        </Link>
                      </li>
                      <li className="my-4">
                        <Link
                          href={"/"}
                          className={""}
                          onClick={() => setIsOpen(false)}
                        >
                          Reviews
                        </Link>
                      </li>
                    </ul>
                  </motion.nav>
                )}
              </AnimatePresence>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Navbar;