import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronRight, FaHeart, FaRegHeart, FaStar } from "react-icons/fa6";
import SuggestedProducts from "../shared/SuggestedProducts";
import { IoIosArrowDown } from "react-icons/io";
import RelatedProduct from "../shared/RelatedProduct";
import UserRatings from "../shared/UserRatings";
import UserReviews from "../shared/UserReviews";

const ProductDetails = () => {
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
            <Link href='#' className=" hover:text-[#7A9B57]">Plants</Link>
            <FaChevronRight className="w-4 h-4" />
            <span className="text-[#7A9B57] font-medium">Golden Pothos</span>
          </nav>
        </div>
      </div>

      <div className="bg-[#F3F3F3] py-16">
        {/* Main Product Section */}
        <div className="max-w-7xl mx-auto px-4 md:px-10  ">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Image Gallery */}
            <div className="lg:col-span-5 space-y-6">
              {/* Main Image */}
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
                <Image
                  src="/images/golden-pothos1.png"
                  alt="Golden Pothos Plant"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-3">
                {[2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl shadow-md overflow-hidden border-2 border-transparent hover:border-green-600 transition"
                  >
                    <Image
                      src={`/images/golden-pothos${i}.jpg`}
                      alt={`Thumbnail ${i}`}
                      width={120}
                      height={120}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Center: Product Info */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Golden Pothos
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-3 my-5">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} size={20} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-[#2D5016] font-semibold">
                    (24 Reviews)
                  </span>
                  <span className="flex items-center gap-2 text-[#7A9B57] font-medium">
                    <span className="w-4 h-4 bg-[#7A9B57] rounded-full ml-5"></span>
                    In Stock
                  </span>
                </div>

                <p className="text-[#8C8C8C]">Indoor Plant</p>
              </div>

              {/* Size Options */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Size</h3>
                <div className="flex gap-3">
                  <button className="flex flex-col gap-1 px-4 py-2 border border-[#CDCDCD] font-medium rounded-lg text-sm">
                    Small
                    <span className="text-[#404040]">৳ 240</span>
                  </button>
                  <button className="flex flex-col gap-1 px-4 py-2 bg-[#EDFFDA] border-2 border-[#7A9B57] text-black rounded-lg text-sm font-medium">
                    Medium
                    <span className="text-[#404040]">৳ 350</span>
                  </button>
                  <button className="flex flex-col gap-1 px-4 py-2 border border-[#CDCDCD] font-medium rounded-lg text-sm">
                    Large
                    <span className="text-[#404040]">৳450</span>
                  </button>
                </div>
              </div>

              {/* Include Pot */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">
                  Include Pot
                </h3>
                <div className="flex gap-3">
                  <button className="flex flex-col gap-1 px-4 py-2 border border-gray-300 font-medium rounded-lg text-sm">
                    Small
                    <span className="text-[#404040]">৳ 100</span>
                  </button>
                  <button className="flex flex-col gap-1 px-4 py-2 border border-gray-300 font-medium rounded-lg text-sm">
                    Medium
                    <span className="text-[#404040]">৳ 130</span>
                  </button>
                  <button className="flex flex-col gap-1 px-4 py-2 border border-gray-300 font-medium rounded-lg text-sm">
                    Large
                    <span className="text-[#404040]">৳ 170</span>
                  </button>
                </div>
              </div>

              {/* Pot Color */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Pot Color</h3>
                <div className="flex gap-4">
                  <button className="w-8 h-8 bg-white border-2 border-gray-400 rounded-full"></button>
                  <button className="w-8 h-8 bg-[#9E6431] rounded-full "></button>
                </div>
              </div>

              {/* Bengali Description */}
              <div className="text-sm py-2 border-y border-[#B7B7B7]">
                <span className="text-[#2D5016] font-medium mr-1 ">
                  গোল্ডেন পাথোস (Golden Pothos / Epipremnum aureum) ঘর সাজানোর
                  জন্য অন্যতম সেরা ও সহজে পরিচর্যা করা যায় এমন ইনডোর প্ল্যান্ট।
                  এর হৃদয় আকৃতির
                </span>
                <span className="text-[#CC7722] font-medium">See more...</span>
              </div>

              {/* Price & Actions */}
              <div className="mt-8">
                <div className="flex justify-between items-center gap-5">
                  <span className="flex-1 mt-5 text-3xl font-bold text-[#CC7722]">
                    ৳ 350
                  </span>
                  <div>
                    <p className="text-sm text-center mb-1">Quantity</p>
                    <div className="flex items-center gap-7 px-3 py-2 border border-gray-300 rounded-lg">
                      <button className="text-[#2D5016] text-2xl">-</button>
                      <span className="font-semibold text-xl">1</span>
                      <button className="text-[#2D5016] text-2xl">+</button>
                    </div>
                  </div>
                  <button className="p-3 border mt-6 border-gray-300 rounded-xl">
                    <FaRegHeart size={25} className="text-[#2D5016]" />
                  </button>
                </div>

                <div className="flex items-center gap-4 mt-6">
                  <button className="flex-1 bg-[#2D5016] text-white py-4 rounded-xl font-semibold text-lg ">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Right: You May Also Like */}
            <SuggestedProducts />
          </div>
        </div>

        {/*Product Description */}
        <section className="max-w-7xl mx-auto px-4 md:px-10 my-20">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            {/* Title */}
            <div className="px-8 pt-8">
              <h2 className="text-2xl font-bold text-[#2D5016]">
                Descriptions
              </h2>
            </div>

            {/* Text Content with Fade Effect */}
            <div className="relative px-4 md:px-8 pb-20 mt-6">
              {/* Actual Text */}
              <div className="text-[#2D5016] text-base leading-relaxed space-y-4">
                <p>
                  গোল্ডেন পথোস (Golden Pothos / Epipremnum aureum) – ঘর সাজানোর
                  জন্য অন্যতম সেরা ও সহজে পরিচর্যা করা যায় এমন ইনডোর প্ল্যান্ট।
                  এর হলুদ আকৃতির মার্বেল পাতায় সোনালি-সবুজ রঙের কম্বিনেশন থাকে,
                  যা ঘরের কোনো কোণকেই করে তোলে উজ্জ্বল। এটি গাছটি খুবই সহনশীল—কম
                  আলো, কম পানি, কম যত্নেও দিব্যি টিকে থাকে। এছাড়া এটি বায়ু
                  শোধনকারী গাছ হিসেবে বিখ্যাত।
                </p>
                <p className="text-gray-500">
                  গোল্ডেন পথোস খুব দ্রুত বাড়ে। ঝুলন্ত ঝুড়ি, শেলফ, বা টেবিলের
                  ওপর রাখলে এর লতানো পাতা নিচে ঝুলে এসে অপরূপ সৌন্দর্য সৃষ্টি
                  করে। বেশ কিছু গবেষণায় দেখা গেছে, এই গাছ ঘরের বাতাস থেকে
                  ফরমালডিহাইড, বেনজিন, জাইলিনের মতো ক্ষতিকর গ্যাস শোষণ করে
                  বাতাসকে বিশুদ্ধ রাখে। এটি একেবারেই নতুন গাছপ্রেমীদের জন্য
                  আদর্শ। পানি দেওয়া ভুলে গেলেও রাগ করে না, আলো কম থাকলেও
                  মানিয়ে নেয়। শুধু মাটি শুকিয়ে গেলে পানি দিন—এইটুকুই যত্ন!
                </p>
              </div>

              {/* Gradient Fade + Arrow */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent via-white to-white pointer-events-none"></div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <IoIosArrowDown size={30} />
              </div>
            </div>
          </div>
        </section>
        {/* Releted Product */}
        <RelatedProduct />

        {/* User Review section */}
        <UserRatings/>

        {/* user reviews section */}
        <UserReviews/>
      </div>
    </>
  );
};

export default ProductDetails;
