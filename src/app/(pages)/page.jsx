import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import Service from "../components/layout/Service";
import Products from "../components/layout/Products";
import Trusted from "../components/layout/Trusted";
import Blog from "../components/layout/Blog";

import Book from "../components/layout/Book";
import Contact from "../components/layout/Contact";
import Footer from "../components/layout/Footer";
import Marquee from "../components/layout/Marquee";

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <Products />
      <Trusted />
      <Blog />
      <Marquee />
      <Book />
      <Contact />
      <Footer />
    </>
  );
};

export default page;
