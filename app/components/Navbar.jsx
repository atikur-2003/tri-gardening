"use client";

import { useState } from "react";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { IoIosSearch, IoMdMenu } from "react-icons/io";
import { FaUser, FaXmark } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Blog", path: "/blog" },
    { name: "Plant Clinic", path: "/plant-clinic" },
  ];

  return (
    <nav className="w-full bg-[#2D5016] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Left: Logo */}

        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            className="mt-2 -mr-5"
            width={70}
            height={70}
            alt="logo"
          />
          <span className="text-white text-xl font-semibold">TriGardening</span>
        </div>
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="hover:text-[#FFD166] transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}

          {/* Call Now Button */}
          <div className="bg-[#CC7722] hover:bg-[#D97706] text-white flex items-center gap-3 px-3 py-2 rounded-md font-medium transition-colors">
            <BsTelephoneFill />
            Call Now
          </div>

          {/* Search bar */}
          <div className="flex items-center justify-end">
            <input
              type="text"
              placeholder="Search plants, tools"
              className="relative border border-white placeholder:text-white placeholder:text-base text-white px-3 py-1 rounded-full focus:outline-none"
            />
            <IoIosSearch size={20} className="absolute mr-2 text-[#B7B7B7]" />
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 ml-2">
            <PiShoppingCartSimpleFill className="w-5 h-5 hover:text-[#FFD166] cursor-pointer" />
            <FaUser className="w-5 h-5 hover:text-[#FFD166] cursor-pointer" />
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <FaXmark className="w-6 h-6" />
          ) : (
            <IoMdMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#2E5C2C] px-6 py-4 space-y-4 border-t border-white/20">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="block text-white font-medium hover:text-[#FFD166]"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className="flex flex-col gap-3">
            <div className="bg-[#CC7722] hover:bg-[#D97706] text-white flex items-center gap-3 px-3 py-2 rounded-md font-medium transition-colors">
              <BsTelephoneFill />
              Call Now
            </div>

            <div className="flex items-center relative">
              <input
                type="text"
                placeholder="Search plants, tools"
                className=" border border-white placeholder:text-white placeholder:text-base text-white px-3 py-1 rounded-full focus:outline-none"
              />
              <IoIosSearch size={20} className="absolute top-2 right-27 mr-2 text-[#B7B7B7]" />
            </div>

            <div className="flex items-center justify-center space-x-6 pt-2">
              <PiShoppingCartSimpleFill className="w-5 h-5 hover:text-[#FFD166] cursor-pointer" />
              <FaUser className="w-5 h-5 hover:text-[#FFD166] cursor-pointer" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
