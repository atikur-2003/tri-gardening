import Image from "next/image";
import Link from "next/link";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import ProductCards from "../shared/ProductCards";

const PopularProducts = () => {
  return (
    <section className="w-full py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#2D5016]">
          Popular Products
        </h2>
        <p className="text-[#2D5016] font-normal mt-2">
          Discover our most popular gardening essentials
        </p>

        {/* Products section */}
        <ProductCards />
      </div>
    </section>
  );
};

export default PopularProducts;
