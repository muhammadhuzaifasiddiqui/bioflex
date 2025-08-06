"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

const Service = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <section className="service-section">
      </section>
    </>
  );
};
export default Service;