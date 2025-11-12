import Image from "next/image";
import Link from "next/link";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import ProductCards from "../shared/ProductCards";





const FeaturedProducts = () => {
  return (
    <section className="w-full py-16 md:py-20 bg-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#2D5016]">
          Featured Products
        </h2>

        {/* Product section */}
        <ProductCards/>
      </div>
    </section>
  );
};

export default FeaturedProducts;
