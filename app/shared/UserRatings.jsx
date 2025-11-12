import React from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";

const ratingTag = [
  { text: "Easy to Grow", color: "bg-[#E8F5E9] text-[#2D5016]" },

  { text: "Good Quality", color: "bg-[#E3F2FD] text-[#1565C0]" },
  {
    text: "Arrived Healthy",
    color: "bg-[#FBE2FF] text-[#87009D]",
  },
  { text: "Great Value", color: "bg-[#FFE8C6] text-[#D84315]" },
  {
    text: "Smaller Than Expected",
    color: "bg-[#FFEBEE] text-[#C62828]",
  },
];

const UserRatings = () => {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 md:px-10  py-16">
        {/* Section Title */}
        <div className="my-8">
          <h2 className="text-3xl font-bold text-[#2D5016]">
            Customer Reviews & Ratings
          </h2>
          <p className="text-[#2D5016] mt-2">
            See what other gardeners are saying about this product
          </p>
        </div>

        {/* Main Review Card */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-b border-[#D9D9D9] pb-7">
            {/* Left: Overall Rating */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center flex-col">
                <div className="text-6xl font-semibold text-[#2D5016]">4.7</div>
                <div className="flex justify-center lg:justify-start items-center gap-1 mt-3">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} size={20} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-[#2D5016] ml-2">(24)</span>
                </div>
                <p className="text-[#2D5016] mt-3">Based on 1,247 reviews</p>
              </div>
            </div>

            {/* Right: Star Distribution */}
            <div className="space-y-4">
              {/* for 5 star */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-[#2D5016]">5 Star</span>
                <div className="flex-1 h-3 bg-gray-200 rounded-full relative">
                  <div className="absolute inset-0 bg-[#7A9B57] rounded-full w-3/4"></div>
                </div>
                <span className="text-sm text-[#2D5016]">847</span>
              </div>

              {/* for 4 star */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-[#2D5016]">4 Star</span>
                <div className="flex-1 h-3 bg-gray-200 rounded-full relative">
                  <div className="absolute inset-0 bg-[#97DE4C] rounded-full w-1/4"></div>
                </div>
                <span className="text-sm text-[#2D5016]">274</span>
              </div>

              {/* for 3 star */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-[#2D5016]">3 Star</span>
                <div className="flex-1 h-3 bg-gray-200 rounded-full relative">
                  <div className="absolute inset-0 bg-[#F29D38] rounded-full w-1/7"></div>
                </div>
                <span className="text-sm text-[#2D5016]">75</span>
              </div>

              {/* for 2 star */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-[#2D5016]">2 Star</span>
                <div className="flex-1 h-3 bg-gray-200 rounded-full relative">
                  <div className="absolute inset-0 bg-[#FF6600] rounded-full w-1/16"></div>
                </div>
                <span className="text-sm text-[#2D5016]">37</span>
              </div>

              {/* for 1 star */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-[#2D5016]">1 Star</span>
                <div className="flex-1 h-3 bg-gray-200 rounded-full relative">
                  <div className="absolute inset-0 bg-[#C62828] rounded-full w-1/30"></div>
                </div>
                <span className="text-sm text-[#2D5016]">14</span>
              </div>
            </div>
          </div>
          <button className="mt-8 bg-[#2D5016] text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-3 mx-auto lg:mx-0 shadow-lg">
            <BsFillPencilFill />
            Write Review
          </button>
        </div>

        {/* Review Highlights */}
        <div className="mt-8 bg-white rounded-3xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Review Highlights
          </h3>
          <div className="flex flex-wrap gap-3">
            {ratingTag.map((tag) => (
              <span
                key={tag.text}
                className={`px-5 py-2 rounded-full text-sm font-medium ${tag.color}`}
              >
                {tag.text}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserRatings;
