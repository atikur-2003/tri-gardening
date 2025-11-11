import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#2D5016] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-10">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Logo & Slogan - Left */}
          <div className="md:col-span-4 space-y-4">
            <h2 className="text-3xl font-bold tracking-wider">TriGardening</h2>
            <p className="text-gray-300 text-sm max-w-[300px]">
              Discover beautiful plants, eco-friendly tools and personalized
              advice to make your home greener. Hand-picked products to nurture
              your indoor jungle.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="#" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Referral Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-5">Categories</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Plants
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Tools
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Fertilizers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Pesticides
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect With Us - Right */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-lg font-semibold">Connect With Us</h3>

            {/* Social Icons */}
            <div className="flex gap-5">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-gray-300 transition"
              >
                <FaFacebook size={28} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-gray-300 transition"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-gray-300 transition"
              >
                <FaTwitter size={28} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="hover:text-gray-300 transition"
              >
                <FaYoutube size={28} />
              </a>
            </div>

            {/* Email */}
            <div className="pt-2">
              <p className="text-white text-sm">support@trigardening.com</p>
            </div>

            {/* Call Now */}
            <div>
              <p className="text-lg text-[#F5F5DC] font-semibold mb-1">
                Call Now
              </p>
              <p className="text-base ">+8801234567890</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-white/60">
          <p className="text-center text-sm text-white">
            © {currentYear} TriGardening. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
