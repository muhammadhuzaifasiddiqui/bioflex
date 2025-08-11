import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import Products from "../components/layout/Products";
import Trusted from "../components/layout/Trusted";
import Blog from "../components/layout/Blog";
import Service from "../components/layout/service";

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Service /> */}
      <Products />
      <Trusted/>
      <Blog/>
    </>
  );
};

export default page;