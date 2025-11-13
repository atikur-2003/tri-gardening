import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeft, FaCheck } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const UserCheckoutPage = () => {
  return (
    <div className="min-h-screen bg-[#F3F3F3] px-4 md:px-10 lg:px-14 py-16">
      {/* Progress Bar */}
      <div className="bg-white shadow-sm mb-8 rounded-lg">
        <div className="max-w-7xl mx-auto px-2 md:px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-center gap-2 md:gap-5 lg:gap-8 px-4 md:px-0 text-sm font-medium">
            <div className="flex items-center gap-1">
              <Image
                src="/images/tikmark2.png"
                alt="tikmark"
                width={20}
                height={20}
                className="w-8 h-8"
              />
              <span className="text-[#2D5016] text-lg font-semibold">
                Shopping Cart
              </span>
            </div>
            <div className="hidden md:block w-24 h-0.5 bg-[#7A9B57]"></div>
            <div className="block md:hidden h-10 w-0.5 ml-20 bg-[#7A9B57]"></div>
            <div className="flex items-center gap-2 font-semibold">
              <div className="w-8 h-8 bg-[#7A9B57] rounded-full flex items-center justify-center text-[#F5F5DC]">
                2
              </div>
              <span className="text-[#2D5016] text-lg">Review & Checkout</span>
            </div>
            <div className="hidden md:block w-24 h-0.5 bg-[#7A9B57]"></div>
            <div className="block md:hidden h-10 w-0.5 ml-20 bg-[#7A9B57]"></div>
            <div className="flex items-center gap-2 font-semibold">
              <div className="w-8 h-8 bg-[#D8D8D8] rounded-full flex items-center justify-center text-[#868686]">
                3
              </div>
              <span className="text-gray-600 text-lg ">Order Confirmed!</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mt-5">
          <h1 className="text-3xl font-bold text-[#2D5016]">
            Review & Checkout
          </h1>
        </div>
        <p className="text-gray-600 mt-2 mb-5">
          <Link href="/cart" className="flex items-center gap-1 text-[#A3A3A3]">
            <Image
              src="/images/left-arrow.png"
              alt="left arrow"
              width={20}
              height={20}
            />
            Back to Cart
          </Link>
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: Address Card */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-lg px-8 py-12">
              <div className="bg-[#F9F9F9] border border-[#B7B7B7] px-5 py-2 rounded-md mb-5">
                <div className="flex justify-between mb-3">
                  <h3 className="font-semibold text-lg">Shipping Address</h3>
                  <button className="bg-[#2D5016] text-xs text-[#F5F5DC] border border-[#D9D9D9] rounded-lg px-3 py-0.5"
                  >
                    Select
                  </button>
                </div>
                <div>
                  <p >Thana: Bagerhat</p>
                  <p>District: Khulna</p>
                  <p>Matrichaya Neer, 12/3, Mokles Goli, Sakerpara, Bagerhat</p>
                </div>
              </div>

              <div className="bg-[#F5F5DC] border-2 border-[#7A9B57] px-5 py-2 rounded-md">
                <div className="flex justify-between mb-3">
                  <h3 className="font-semibold text-lg">Address 2</h3>
                  
                </div>
                <div>
                  <p >Thana: Bagerhat</p>
                  <p>District: Khulna</p>
                  <p>Matrichaya Neer, 12/3, Mokles Goli, Sakerpara, Bagerhat</p>
                </div>
              </div>
              <Link href="/thank-you-page">
                <button className="w-full mt-8 bg-[#2D5016] text-[#F5F5DC] py-3 rounded-xl font-semibold text-lg shadow-lg">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-lg sticky top-6">
              <div className="px-3 py-8 border-b">
                <h2 className="text-2xl font-bold text-[#2D5016] mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4">
                  {/* Product 1 */}
                  <div className="flex justify-between items-end bg-[#F5F5DC] rounded-xl p-4">
                    <div className="flex gap-2">
                      <Image
                        src="/images/fiddle-leaf.jpg"
                        alt="fiddle leaf"
                        width={80}
                        height={80}
                        className="rounded-lg w-16 h-16"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-[#2D5016]">
                          Fiddle Leaf Plant
                        </p>
                        <p className="text-sm text-gray-600">6" Pot</p>
                        <p className="text-sm text-[#CC7722]">Qty: 2</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-[#CC7722]">৳ 300</p>
                    </div>
                  </div>

                  {/* Product 2 */}
                  <div className="flex justify-between items-center bg-[#F5F5DC] rounded-xl p-4">
                    <div className="flex gap-2">
                      <Image
                        src="/images/featured-product1.jpg"
                        alt="Monstera Deliciosa"
                        width={80}
                        height={80}
                        className="rounded-lg w-16 h-16"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-[#2D5016]">
                          Monstera Deliciosa
                        </p>
                        <p className="text-sm text-gray-600">6" Pot</p>
                        <p className="text-sm text-[#CC7722]">Qty: 2</p>
                      </div>
                    </div>
                    <p className="font-bold text-[#CC7722]">৳ 300</p>
                  </div>

                  {/* Product 3 */}
                  <div className="flex justify-between items-center bg-[#F5F5DC] rounded-xl p-4">
                    <div className="flex gap-2">
                      <Image
                        src="/images/featured-product2.jpg"
                        alt="Vermi Compost"
                        width={80}
                        height={80}
                        className="rounded-lg w-16 h-16"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-[#2D5016]">
                          Vermi Compost
                        </p>
                        <p className="text-sm text-gray-600">6" Pot</p>
                        <p className="text-sm text-[#CC7722]">Qty: 2</p>
                      </div>
                    </div>
                    <p className="font-bold text-[#CC7722]">৳ 300</p>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className=" space-y-4">
                  <div className="flex justify-between text-lg">
                    <span className="text-[#404040]">Sub Total</span>
                    <span className="font-medium">৳ 900</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="text-[#404040]">Delivery Charge</span>
                    <span className="font-medium">৳ 100</span>
                  </div>
                  <div className="flex justify-between text-xl">
                    <span className="font-bold text-[#404040]">Total</span>
                    <span className="font-bold text-[#CC7722] pb-3">৳ 1000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCheckoutPage;
