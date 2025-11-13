import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsCheck } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa6";

const ThankYouPage = () => {
  return (
    <div
      className="min-h-screen px-4 py-12 relative"
      style={{
        backgroundImage: "url('/images/thankyou-page-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Progress bar */}
      <div className="bg-white shadow-sm mb-8 mx-4 md:mx-10 lg:mx-20 rounded-lg">
        <div className="max-w-5xl mx-auto px-2 md:px-4 py-6">
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
              <div className="w-8 h-8 bg-[#7A9B57] rounded-full flex items-center justify-center text-[#F5F5DC]">
                3
              </div>
              <span className="text-[#2D5016] text-lg ">Order Confirmed!</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto w-full relative z-10">
        {/* Main Card */}
        <div className="bg-white/95 backdrop-blur-sm border border-[#2D5016] rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="text-center pt-12 pb-8 px-8">
            <h1 className="text-2xl md:text-3xl font-semibold text-[#2D5016] mb-4 leading-tight">
              Thank you for purchasing <br /> from TriGardening
            </h1>
            <div className="font-semibold text-2xl mt-7 text-[#2D5016]">
              <span>Order Confirmed</span>
            </div>
            <p className="text-[#2D5016] font-medium mt-5 text-lg ">
              Your order has been placed successfully
            </p>
            <p className="text-[#2D5016] font-medium mt-3">
              Delivery Method: Cash on Delivery
              <br />
              Estimated Date: 25 - 30 Sep 2025
            </p>
          </div>

          {/* Order Details Card */}
          <div className="max-w-2/3 mx-auto">
            <div className="bg-white rounded-3xl shadow-lg border border-[#B7B7B7]">
              <div className="px-3 py-8 border-b">
                <h2 className="text-2xl font-bold text-[#2D5016] mb-6">
                  Order #10012
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
                    <span className="font-bold text-[#CC7722] pb-3">
                      ৳ 1000
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Return Button */}
          <div className="flex items-center justify-center h-40 pb-10 bg-[#2D5016] relative -mt-16 -z-10">
            <Link
              href="/cart-page"
              className="flex items-center gap-4  text-white px-10 py-5 rounded-full font-medium text-lg mt-20"
            >
              <FaArrowLeft size={24} />
              Return to My Orders List
            </Link>
          </div>
        </div>

        {/* Customer Info Card */}
        <div className="mt-10 bg-[#2D5016] text-white rounded-3xl shadow-2xl p-10 border border-[#7A9B57]">
          <h3 className="text-3xl  mb-8 text-center md:text-left">
            Your Information
          </h3>
          <div className=" gap-8 text-lg">
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <p className="font-light">Full Name</p>
                <p className="font-medium">Mohammad Noman</p>
              </div>
              <div className="text-sm">
                <p className="font-light">Phone Number</p>
                <p className="font-medium">+880 1712-345678</p>
              </div>
            </div>
            <div className="mt-10 text-sm">
              <p className="font-light">Delivery Address</p>
              <p className="font-medium">
                House 25, Road 12 Dhanmondi, Dhaka-1205
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
