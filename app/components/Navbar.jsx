"use client";

import { useState } from "react";
// import { Menu, X, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";

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
          <Image src="/images/logo.png" className="mt-2 -mr-5" width={70} height={70} alt="logo" />
          <span className="text-white text-xl font-semibold">TriGardening</span>
        </div>
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
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
          <Link
            href="tel:+8801234567890"
            className="bg-[#F59E0B] hover:bg-[#D97706] text-white px-4 py-2 rounded-md font-medium transition-colors"
          >
            Call Now
          </Link>

          {/* Search bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search plants, tools"
              className="pl-10 pr-4 py-2 rounded-md text-gray-700 focus:outline-none w-60"
            />
            {/* <Search className="absolute left-3 top-2.5 text-gray-500 w-4 h-4" /> */}
            <IoIosSearch/>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 ml-2">
            {/* <ShoppingCart className="w-5 h-5 hover:text-[#FFD166] cursor-pointer" />
            <User className="w-5 h-5 hover:text-[#FFD166] cursor-pointer" /> */}
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />} */}
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
            <Link
              href="tel:+8801234567890"
              className="bg-[#F59E0B] hover:bg-[#D97706] text-center text-white py-2 rounded-md font-medium transition-colors"
            >
              Call Now
            </Link>

            <div className="relative">
              <input
                type="text"
                placeholder="Search plants, tools"
                className="pl-10 pr-4 py-2 rounded-md text-gray-700 focus:outline-none w-full"
              />
              {/* <Search className="absolute left-3 top-2.5 text-gray-500 w-4 h-4" /> */}
            </div>

            <div className="flex items-center justify-center space-x-6 pt-2">
              {/* <ShoppingCart className="w-5 h-5 hover:text-[#FFD166] cursor-pointer" />
              <User className="w-5 h-5 hover:text-[#FFD166] cursor-pointer" /> */}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
