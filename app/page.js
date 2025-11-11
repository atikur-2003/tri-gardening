import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ShopByCategory from "./components/ShopByCategory";
import FeaturedProducts from "./components/FeaturedProducts";
import PopularProducts from "./components/PopularProducts";
import PlantClinicAnalysis from "./components/PlantClinicAnalysis";
import Footer from "./components/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ShopByCategory />
      <FeaturedProducts/>
      <PopularProducts/>
      <PlantClinicAnalysis/>
      <Footer/>
    </div>
  );
};

export default page;
