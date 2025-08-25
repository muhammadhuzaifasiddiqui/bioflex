"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <section className="contact-section px-3 md:px-4 lg:px-5 py-80">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 xl:grid-cols-4">
            <div className="item">
              <h5 className="text-secondary">Call Center</h5>
              <div className="flex flex-col pt-2.5">
                <a
                  className="fs-18 text-dark hover-underline"
                  aria-label="Call +92323 2463539"
                  href="tel:+923232463539"
                >
                  +92323-2463539
                </a>
              </div>
            </div>
            <div className="item">
              <h5 className="text-secondary">E-mail Address</h5>
              <div className="pt-2.5">
                <a
                  className="fs-18 text-dark hover-underline break-all"
                  aria-label="Send an email to info at bioflex aesthetics dot com"
                  href="mailto:info@bioflexaesthetics.com"
                >
                  info@bioflexaesthetics.com
                </a>
              </div>
            </div>
            <div className="item">
              <h5 className="text-secondary">Our locations</h5>
              <div className="flex flex-col pt-2.5">
                <a
                  target="_blank"
                  className="fs-18 text-dark hover-underline"
                  href="https://maps.app.goo.gl/kCmHMQgeVeMSQ5AP7"
                >
                  Karachi
                </a>
                <a
                  target="_blank"
                  className="fs-18 text-dark hover-underline"
                  href="https://maps.app.goo.gl/PzxQnFfvdmtqod3s7"
                >
                  Islamabad
                </a>
                <a
                  target="_blank"
                  className="fs-18 text-dark hover-underline"
                  href="https://maps.app.goo.gl/xVY6GBbWMT1rWPQZ9"
                >
                  Peshawar
                </a>
                <a
                  target="_blank"
                  className="fs-18 text-dark hover-underline"
                  href="https://maps.app.goo.gl/8GoQkky9NyeYjnJt5"
                >
                  Rawalpindi
                </a>
              </div>
            </div>
            <div className="item">
              <div
                id="_rht_toaster"
                className="fixed z-[9999] top-[16px] left-[16px] right-[16px] bottom-[16px] pointer-events-none"
              ></div>
              <h5 className="text-secondary">Newsletter</h5>
              <div className="pt-2.5">
                <form>
                  <div className="flex flex-col gap-2.5">
                    <input
                      type="email"
                      className="w-full form-control fs-16 focus:border-transparent focus:outline-none"
                      placeholder="Your E-mail Address"
                      name="email"
                    />
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-3 btn fs-18 bg-primary text-white!"
                    >
                      Subscribe
                      <Image
                        src={"/images/White Arrow Right.png"}
                        width={17}
                        height={16}
                        alt="logo"
                        unoptimized={true}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;