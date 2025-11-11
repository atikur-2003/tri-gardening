import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ShopByCategory from "./components/ShopByCategory";
import FeaturedProducts from "./components/FeaturedProducts";
import PopularProducts from "./components/PopularProducts";

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ShopByCategory />
      <FeaturedProducts/>
      <PopularProducts/>
    </div>
  );
};

export default page;
