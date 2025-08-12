"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    return (
        <>
            <section className="footer-section px-5 px:lg-10">
                <div className="container mx-auto">
                    <div className="flex flex-wrap gap-y-6">
                        <div className="w-full lg:w-[36%] me-auto order-first">
                            <a href="/">
                                <Image
                                    src={
                                        "https://api.bioflexaesthetics.com/wp-content/uploads/2025/05/logo.svg"
                                    }
                                    width={120}
                                    height={50}
                                    alt="logo"
                                    unoptimized={true}
                                    className="w-full h-full object-cover"
                                />
                            </a>
                            <p className="text-secondary-dark pt-4">
                                Trusted aesthetic care powered by Canadian, FDA-approved
                                technology — available across Pakistan.
                            </p>
                        </div>
                        <div className="lg:hidden w-full lg:w-[18%]">
                            <h4 className="text-secondary-dark font-normal">Contact Us</h4>
                            <div className="flex justify-start gap-5 pt-4">
                                <a
                                    target="_blank"
                                    className="social-icon"
                                    href="https://www.facebook.com/bioflexaesthetics/"
                                >
                                    <Image
                                        src={"/images/footer-image.webp"}
                                        width={35}
                                        height={35}
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
                                        src={"/images/footer-image.webp"}
                                        width={35}
                                        height={35}
                                        alt="logo"
                                        unoptimized={true}
                                        className="w-full h-full object-cover"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="w-[50%] lg:w-[20%] pe-8">
                            <h4 className="text-secondary-dark font-normal">Information</h4>
                            <ul className="pt-4">
                                <li>
                                    <Image
                                        src={"/images/Vector 6.svg"}
                                        width={6}
                                        height={8}
                                        alt="logo"
                                        unoptimized={true}
                                        className="w-full h-full object-cover"
                                    />
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <Image
                                        src={"/images/Vector 6.svg"}
                                        width={6}
                                        height={8}
                                        alt="logo"
                                        unoptimized={true}
                                        className="w-full h-full object-cover"
                                    />
                                    <a href="/about">About</a>
                                </li>
                                <li>
                                    <Image
                                        src={"/images/Vector 6.svg"}
                                        width={6}
                                        height={8}
                                        alt="logo"
                                        unoptimized={true}
                                        className="w-full h-full object-cover"
                                    />
                                    <a href="/services">Services</a>
                                </li>
                                <li>
                                    <Image
                                        src={"/images/Vector 6.svg"}
                                        width={6}
                                        height={8}
                                        alt="logo"
                                        unoptimized={true}
                                        className="w-full h-full object-cover"
                                    />
                                    <a href="/products">Products</a>
                                </li>
                                <li>
                                    <Image
                                        src={"/images/Vector 6.svg"}
                                        width={6}
                                        height={8}
                                        alt="logo"
                                        unoptimized={true}
                                        className="w-full h-full object-cover"
                                    />
                                    <a href="/articles">Articles</a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-[50%] lg:w-[20%]">
                            <h4 className="text-secondary-dark font-normal">Useful Links</h4>
                            <ul className="pt-4">
                                <li>
                                    <Image
                                        src={"/images/Vector 6.svg"}
                                        width={6}
                                        height={8}
                                        alt="logo"
                                        unoptimized={true}
                                        className="w-full h-full object-cover"
                                    />
                                    <a href="/terms&amp;condition">Terms &amp; Condition</a>
                                </li>
                                <li>
                                    <Image
                                        src={"/images/Vector 6.svg"}
                                        width={6}
                                        height={8}
                                        alt="logo"
                                        unoptimized={true}
                                        className="w-full h-full object-cover"
                                    />
                                    <a href="/privacy">Privacy &amp; Policy</a>
                                </li>
                            </ul>
                        </div>
                        <div className="hidden lg:block w-full lg:w-[18%]">
                            <h4 className="text-secondary-dark font-normal">Contact Us</h4>
                            <div className="flex justify-start gap-5 pt-4">
                                <a target="_blank" className="social-icon" href="https://www.facebook.com/bioflexaesthetics/">
                                    <Image
                                        src={"https://api.bioflexaesthetics.com/wp-content/uploads/2025/05/facebook-icon.svg"}
                                        width={35}
                                        height={35}
                                        alt="logo"
                                        unoptimized={true}
                                        className="w-full h-full object-cover"
                                    />
                                </a>
                                <a target="_blank" className="social-icon" href="https://www.tiktok.com/@bioflexaesthetics?is_from_webapp=1&amp;sender_device=pc">
                                    <Image
                                        src={"https://api.bioflexaesthetics.com/wp-content/uploads/2025/06/tiktok-icon-new.svg"}
                                        width={35}
                                        height={35}
                                        alt="logo"
                                        unoptimized={true}
                                        className="w-full h-full object-cover"
                                    />
                                </a>
                            </div>
                        </div>    
                    </div>
                    <div className="bottom-row flex flex-wrap gap-x-2 gap-y-1 items-center justify-center">
                        <p className="fs-16 text-secondary-dark text-center">© 2025 Bioflexaesthetics. All Rights Reserved.</p> 
                        <p className="fs-16 text-secondary-dark text-center">Designed by   
                            <a className="text-blue-800 hover:text-blue-900 transition" target="_blank" href="https://nanolixdigital.com">
                                Nanolix Digital
                            </a>
                        </p>
                    </div>                    
                </div>
            </section>
        </>
    );
};
export default Footer;