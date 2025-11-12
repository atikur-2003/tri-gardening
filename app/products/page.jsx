import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaChevronRight, FaFilter, FaRegStar, FaStar } from "react-icons/fa6";

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
    name: "Pruning Shears",
    category: "Equipment",
    price: "৳ 180 - 450",
    rating: 4,
    reviews: 34,
    image: "/images/featured-product3.jpg",
  },
  {
    id: 5,
    name: "Organic Compost Fertilizer",
    category: "Fertilizer",
    price: "৳ 60 - 440",
    rating: 4,
    reviews: 12,
    image: "/images/featured-product2.jpg",
  },
  {
    id: 6,
    name: "Monstera Deliciosa",
    category: "Indore Plant",
    price: "৳ 2000 - 3400",
    rating: 5,
    reviews: 24,
    image: "/images/featured-product1.jpg",
  },
];

const ProductPage = () => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i)
        stars.push(<FaStar key={i} className="text-[#F59E0B]" />);
      else if (rating >= i - 0.5)
        stars.push(<FaStarHalfAlt key={i} className="text-[#F59E0B]" />);
      else stars.push(<FaRegStar key={i} className="text-[#F59E0B]" />);
    }
    return stars;
  };

  return (
    <>
      <div className="bg-white my-5 px-4 md:px-7 lg:px-10">
        {/* Top Navbar - Light Green */}
        <div>
          <div className="max-w-7xl mx-auto  py-3">
            <nav className="flex flex-wrap gap-6 text-sm font-medium text-gray-700">
              <Link href="/" className="hover:text-[#7A9B57]">
                Home
              </Link>
              <Link
                href="/products"
                className="text-[#7A9B57] -mt-1 underline font-bold"
              >
                Plants
              </Link>
              <Link href="#" className="hover:text-[#7A9B57]">
                Tools
              </Link>
              <Link href="#" className="hover:text-[#7A9B57]">
                Fertilizers
              </Link>
              <Link href="/plant-seed-page" className="hover:text-[#7A9B57]">
                Seeds
              </Link>
              <Link href="/medicine-page" className="hover:text-[#7A9B57]">
                Medicine
              </Link>
              <Link href="/equipments-page" className="hover:text-[#7A9B57]">
                Equipments
              </Link>
            </nav>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto py-4 text-sm text-gray-600">
          <nav className="flex items-center gap-2">
            <Link href="/" className="hover:text-green-700">
              Home
            </Link>
            <FaChevronRight className="w-4 h-4" />
            <Link href="/products" className="hover:text-[#7A9B57]">
              Products
            </Link>
            <FaChevronRight className="w-4 h-4" />
            <span className="text-[#7A9B57] font-medium">Plants</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-7 lg:px-10 py-10 bg-gray-50">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Filters */}
          <aside className="lg:w-80 bg-white rounded-2xl p-6 shadow-sm max-h-180">
            <h3 className="font-bold text-lg mb-6 text-gray-900">
              Filter Products
            </h3>

            {/* Category */}
            <div className="mb-8">
              <h4 className="font-semibold text-gray-800 mb-4">Category</h4>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-green-600 rounded"
                    />{" "}
                    Indoor Plants (42)
                  </label>
                </li>
                <li>
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-green-600 rounded"
                    />{" "}
                    Outdoor Plants (38)
                  </label>
                </li>
              </ul>
            </div>

            {/* Price Range */}
            <div className="mb-8">
              <h4 className="font-semibold text-gray-800 mb-4">Price Range</h4>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">৳ 0</span>
                <div className="flex-1 h-2 bg-gray-200 rounded-full relative">
                  <div className="absolute inset-0 bg-[#7A9B57] rounded-full w-2/4"></div>
                  <div className="absolute left-2/4 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#CC7722] rounded-full shadow-md -translate-x-1/2"></div>
                </div>
                <span className="text-sm text-gray-600">৳ 10,000+</span>
              </div>
            </div>

            {/* Size */}
            <div className="mb-8">
              <h4 className="font-semibold text-gray-800 mb-4">Size</h4>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-green-600 rounded"
                    />{" "}
                    Small (30)
                  </label>
                </li>
                <li>
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-green-600 rounded"
                    />{" "}
                    Medium (45)
                  </label>
                </li>
                <li>
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-green-600 rounded"
                    />{" "}
                    Large (20)
                  </label>
                </li>
              </ul>
            </div>

            {/* Light Requirements */}
            <div className="mb-8">
              <h4 className="font-semibold text-gray-800 mb-4">
                Light Requirements
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-green-600 rounded"
                    />{" "}
                    Low Light (18)
                  </label>
                </li>
                <li>
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-green-600 rounded"
                    />{" "}
                    Medium Light (36)
                  </label>
                </li>
                <li>
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-green-600 rounded"
                    />{" "}
                    Bright Light (24)
                  </label>
                </li>
              </ul>
            </div>

            <button className="w-full bg-[#7A9B57] cursor-pointer text-white py-3 rounded-lg font-semibold hover:bg-[#2D5016] transition">
              Apply Filters
            </button>
          </aside>

          {/* Main Product Area */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Plants</h1>
                <p className="text-gray-600 mt-1">Showing 10 of 40 products</p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600 hidden sm:block">
                  Sort by:
                </span>
                <select className="border border-gray-300 rounded-lg px-6 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600">
                  <option>Popular</option>
                </select>
                <button className="lg:hidden p-3 border rounded-lg">
                  <FaFilter className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((item) => (
                <div
                  key={item.id}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-sm cursor-pointer hover:shadow-xl transition-all duration-300"
                >
                  {/* Product Image*/}
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

            {/* Load More Button */}
            <div className="mt-12 text-center">
              <button className="bg-[#7A9B57] text-white px-10 py-4 rounded-lg cursor-pointer font-semibold hover:bg-[#2D5016] transition shadow-lg">
                Load More Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
