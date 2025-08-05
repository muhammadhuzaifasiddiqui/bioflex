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
      <nav className="navbar navbar-section absolute lg:top-2.5 md:top-2.5 sm:top-7.5 top-7.5 w-full lg:p-7.5 md:p-7.5 sm:px-5 px-5 left-0">
        <div className="container mx-auto relative left-0">
          <div className="bg-navbar flex justify-between items-center rounded-[30px] py-1.5 pr-2.5 pl-5">
            <div className="Logo-wrapper">
              <Image
                src={"/images/HM Properties.png"}
                width={151}
                height={23}
                alt="logo"
                unoptimized={true}
                className="w-full! h-full! object-cover"
              />
            </div>

            <div className="lg:flex hidden navbar-menu gap-x-7.5 text-white">
              <a className="fs-18" href="#">
                Home
              </a>
              <a className="fs-18" href="#">
                Product
              </a>
              <a className="fs-18" href="#">
                Services
              </a>
              <a className="fs-18" href="#">
                About
              </a>
              <a className="fs-18" href="#">
                Reviews
              </a>
            </div>

            <div className="lg:flex hidden rounded-[30px] navbar-button py-[1px] pr-[1px] pl-5">
              <a
                href="#"
                className="flex text-white font-medium items-center gap-x-2.5"
              >
                Contact us
                <div className="h-12.5 w-12.54 aspect-square rounded-full bg-white p-4.5">
                  <Image
                    src={"/images/Arrow 1.png"}
                    width={20}
                    height={20}
                    alt="location"
                    unoptimized={true}
                    className="w-full! h-full! object-cover"
                  />
                </div>
              </a>
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
    </>
  );
};
export default Navbar;
