import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import Service from "../components/layout/Service";
import Products from "../components/layout/Products";

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <Products />
    </>
  );
};

export default page;