import React from "react";
import HeroSection from "./components/HeroSection";
import ShopByCategory from "./components/ShopByCategory";
import FeaturedProducts from "./components/FeaturedProducts";
import PopularProducts from "./components/PopularProducts";
import PlantClinicAnalysis from "./components/PlantClinicAnalysis";

const page = () => {
  return (
    <div>
      <HeroSection />
      <ShopByCategory />
      <FeaturedProducts/>
      <PopularProducts/>
      <PlantClinicAnalysis/>
    </div>
  );
};

export default page;
