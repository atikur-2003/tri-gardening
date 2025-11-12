import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar, FaStar } from "react-icons/fa6";

const products = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    category: "Indore Plant",
    price: "৳ 2000 - 3400",
    rating: 5,
    reviews: 24,
    image: "/images/featured-product1.jpg",
  },
  {
    id: 2,
    name: "Organic Compost Fertilizer",
    category: "Fertilizer",
    price: "৳ 60 - 440",
    rating: 4,
    reviews: 12,
    image: "/images/featured-product2.jpg",
  },
  {
    id: 3,
    name: "Pruning Shears",
    category: "Equipment",
    price: "৳ 180 - 450",
    rating: 4,
    reviews: 34,
    image: "/images/featured-product3.jpg",
  },
  {
    id: 4,
    name: "Snake Plant",
    category: "Indore Plant",
    price: "৳ 150 - 500",
    rating: 4,
    reviews: 35,
    image: "/images/featured-product4.jpg",
  },
];

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) stars.push(<FaStar key={i} className="text-[#F59E0B]" />);
    else if (rating >= i - 0.5)
      stars.push(<FaStarHalfAlt key={i} className="text-[#F59E0B]" />);
    else stars.push(<FaRegStar key={i} className="text-[#F59E0B]" />);
  }
  return stars;
};

const RelatedProduct = () => {
  return (
    <div className="px-4 md:px-10">
      <div className="text-center my-8">
        <h1 className="text-4xl text-[#2D5016] font-semibold">Related Products</h1>
      </div>
      {/* Product Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-sm cursor-pointer hover:shadow-xl transition-all duration-300"
          >
            {/* Product Image + Hover Overlay */}
            <div className="relative w-full h-64">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Product Details */}
            <div className="p-5 text-left">
              <h1 className="text-[#2D5016] font-medium">{item.name}</h1>
              <p className="text-sm text-[#A7A7A7]">{item.category}</p>
              <p className="flex items-center mt-2 text-[#CC7722] text-lg font-semibold">
                {item.price}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-2">
                {renderStars(item.rating)}
                <span className="text-sm text-[#14532d] ml-1">
                  ({item.reviews})
                </span>
              </div>

              {/* Default Add to Cart */}
              <Link
                href="/product-details"
                className="inline-block w-full text-center mt-4 bg-[#2D5016] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#15803d] transition"
              >
                Add to Cart
              </Link>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-xs flex flex-col items-center justify-between pt-8 opacity-0 group-hover:opacity-100  transition-all duration-300">
              <Link
                href="/product-details"
                className="bg-[#2D5016] cursor-pointer text-white px-5 py-2 rounded-lg font-medium transition"
              >
                Add to Cart
              </Link>
              <Link
                href="/product-details"
                className="bg-[#7A9B57] text-center text-white w-full py-4 rounded-b-lg font-medium cursor-pointer transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
