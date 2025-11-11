import Image from "next/image";
import React from "react";
import { IoCameraSharp } from "react-icons/io5";

const PlantClinicAnalysis = () => {
  return (
    <section className="w-full py-16 md:py-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-5 md:space-y-8 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2D5016] ">
              Plant Clinic Analysis
            </h2>

            <p className="text-base md:text-lg max-w-4xl">
              Upload a photo of your plant and get instant AI-powered diagnosis
              with treatment recommendations from our experts
            </p>

            <button className="group inline-flex items-center gap-3  text-white bg-[#7A9B57]  text-base px-7 py-2 rounded-full shadow-xl">
              <IoCameraSharp size={25}/>
              <span>Diagnose Your Plant</span>
            </button>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 px-4 md:px-0 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative w-80 h-80 md:w-100 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/plant.jpg"
                  alt="Healthy green plants"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantClinicAnalysis;
