"use client";

import Image from "next/image";

const categories = [
  {
    id: 1,
    title: "Plants",
    description:'Indoor  & Outdoor Plants for every space',
    img: "/images/plants.png",
  },
  {
    id: 2,
    title: "Medicine",
    description:'Natural Plant Care Solutions',
    img: "/images/medicine.png",
  },
  {
    id: 3,
    title: "Equipment",
    description:'Professional Gardening tools',
    img: "/images/equipment.png",
  },
  {
    id: 4,
    title: "Fertilizers",
    description:'Safe & effective plant protection',
    img: "/images/fertilizer.png",
  },
];

const ShopByCategory = () => {
  return (
    <section className="w-full py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#2D5016]">
          Shop by Category
        </h2>
        

        {/* Category Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center bg-[#F5F5DC] rounded-2xl pt-10 pb-7 px-3 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="p-3 bg-white rounded-full">
                <Image src={category.img} alt={category.title} width={60} height={60}/>
              </div>
              <div className="mt-5">
                <h1 className="text-lg font-semibold">{category.title}</h1>
                <p className="text-sm font-normal mt-2 max-w-[220px] mx-auto">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
