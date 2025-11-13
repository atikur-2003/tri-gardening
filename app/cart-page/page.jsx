import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeft, FaMinus, FaPlus, FaXmark } from "react-icons/fa6";

const CartPage = () => {
  return (
    <div className="min-h-screen bg-[#F3F3F3] px-4 md:px-10 lg:px-16 py-14">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-4">
        <div className="">
          <h1 className="text-2xl font-bold text-[#2D5016]">
            Your Shopping Cart
          </h1>
        </div>
        <p className="text-gray-600 mt-2">
          <Link
            href="/products"
            className="flex items-center gap-1 text-[#A3A3A3] hover:text-green-700"
          >
            <Image
              src="/images/left-arrow.png"
              alt="left arrow"
              width={20}
              height={20}
            />
            Back to product page
          </Link>
        </p>
        <p className="text-[#2D5016] font-medium mt-4">3 Items</p>
      </div>

      <div className="max-w-7xl mx-auto pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              {/* Cart Item 1 */}
              <div className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#B7B7B7]">
                <div className="flex flex-row gap-5">
                  <Image
                    src="/images/fiddle-leaf.jpg"
                    alt="fiddle leaf"
                    width={80}
                    height={80}
                    className="rounded-lg w-24 h-24"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#2D5016]">
                      Fiddle Leaf Plant
                    </h3>
                    <p className="text-sm text-gray-600">6" Pot</p>
                    <p className="text-[#CC7722] font-bold text-lg mt-1">
                      ৳ 150
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <span className="text-gray-700 text-sm hidden sm:block">
                    Quantity
                  </span>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button className="p-2 hover:bg-gray-100">
                      <FaMinus size={16} />
                    </button>
                    <span className="px-4 py-2 font-medium">1</span>
                    <button className="p-2 hover:bg-gray-100">
                      <FaPlus size={16} />
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="text-[#CC7722] font-bold">৳ 300</p>
                  </div>
                  <button className="text-red-600 hover:text-red-700 ml-4">
                    <FaXmark size={22} />
                  </button>
                </div>
              </div>

              {/* Cart Item 2 */}
              <div className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#B7B7B7]">
                <div className="flex flex-row gap-5">
                  <Image
                    src="/images/featured-product1.jpg"
                    alt="Monstera Deliciosa"
                    width={80}
                    height={80}
                    className="rounded-lg w-24 h-24"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#2D5016]">
                      Monstera Deliciosa
                    </h3>
                    <p className="text-sm text-gray-600">6" Pot</p>
                    <p className="text-[#CC7722] font-bold text-lg mt-1">
                      ৳ 150
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <span className="text-gray-700 text-sm hidden sm:block">
                    Quantity
                  </span>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button className="p-2 hover:bg-gray-100">
                      <FaMinus size={16} />
                    </button>
                    <span className="px-4 py-2 font-medium">1</span>
                    <button className="p-2 hover:bg-gray-100">
                      <FaPlus size={16} />
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="text-[#CC7722] font-bold">৳ 300</p>
                  </div>
                  <button className="text-red-600 hover:text-red-700 ml-4">
                    <FaXmark size={22} />
                  </button>
                </div>
              </div>

              {/* Cart Item 3 */}
              <div className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex flex-row gap-5">
                  <Image
                    src="/images/featured-product2.jpg"
                    alt="Vermi Compost"
                    width={80}
                    height={80}
                    className="rounded-lg w-24 h-24"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#2D5016]">
                      Vermi Compost
                    </h3>
                    <p className="text-sm text-gray-600">6" Pot</p>
                    <p className="text-[#CC7722] font-bold text-lg mt-1">
                      ৳ 150
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <span className="text-gray-700 text-sm hidden sm:block">
                    Quantity
                  </span>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button className="p-2 hover:bg-gray-100">
                      <FaMinus size={16} />
                    </button>
                    <span className="px-4 py-2 font-medium">1</span>
                    <button className="p-2 hover:bg-gray-100">
                      <FaPlus size={16} />
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="text-[#CC7722] font-bold">৳ 300</p>
                  </div>
                  <button className="text-red-600 hover:text-red-700 ml-4">
                    <FaXmark size={22} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg sticky top-6">
              <div className="border-b border-[#B7B7B7] p-8">
                <h2 className="text-2xl font-bold text-[#2D5016] mb-4">
                  Order Summary
                </h2>

                <div className="space-y-4 text-lg">
                  <div className="flex justify-between">
                    <span className="text-[#404040]">Sub Total</span>
                    <span className="font-bold text-[#CC7722]">৳ 900</span>
                  </div>
                </div>
              </div>

              {/*Delivery Charge and Coupon Code */}
              <div className="border-b border-[#B7B7B7] p-8">
                <div className="flex justify-between mb-5">
                  <span className="text-[#404040]">Delivery Charge</span>
                  <span className="font-bold text-[#CC7722]">৳ 100</span>
                </div>
                <p className="text-[#404040] font-medium mb-3">Coupon Code</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter Code"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                  <button className="bg-[#2D5016] text-[#F5F5DC] px-3 py-2 rounded-lg font-semibold">
                    Apply
                  </button>
                </div>
              </div>

              {/* Total */}
              <div className="p-8">
                <div className="flex justify-between text-xl">
                  <span className="font-bold text-[#404040]">Total</span>
                  <span className="font-bold text-[#CC7722]">৳ 1000</span>
                </div>

                {/* Checkout Button */}
                <Link href='/checkout-page'>
                <button className="w-full mt-8 bg-[#2D5016] text-[#F5F5DC] py-3 rounded-xl font-semibold text-lg">
                  Proceed to Checkout
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
