import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa6";
import { LuThumbsDown, LuThumbsUp } from "react-icons/lu";

const posts = [
  {
    id: 1,
    title: "Caring for succulent & beginners guide",
    date: "May 24, 2025",
  },
  {
    id: 2,
    title: "Growing perfect tomatoes for this season",
    date: "May 23, 2025",
  },

  {
    id: 3,
    title: "Natural Pest Control Methods That Actually...",
    date: "May 20, 2025",
  },
  {
    id: 4,
    title: "Natural Pest Control Methods That Actually...",
    date: "May 20, 2025",
  },
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Main Article */}
          <article className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100">
              <div>
                <Image
                  src="/images/blog-image2.jpg"
                  alt="blog image"
                  width={300}
                  height={300}
                  className="w-full rounded-t-2xl"
                />
              </div>
              <div className="px-8 py-10">
                <div className="flex flex-wrap items-center justify-between gap-6 text-sm text-gray-600 mb-8">
                  <span className="text-[#42C847] text-lg font-medium">
                    Post Type
                  </span>
                  <div className="flex items-center gap-8">
                    <span>5 min Read</span>
                    <span>September 19, 2025</span>
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8 leading-tight">
                  10 Essential Tips for Indoor Plant Care
                </h1>

                {/* Article Content */}
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                  <p>
                    রঙের কুহেলী তলে, তোমার জীবন ঊষার আকাশে শিশু রবি সম জ্বলে।
                    আজিও নিজেরে বিকাইতে পার ফুলের মালার দামে, রূপকথা শুনি
                    তোমাদের দেশে রূপকথা-দেয়া নামে। আজিও চেননি সোনার আদর, চেননি
                    মুক্তাহার, হাসি মুখে তাই সোনা ঝরে পড়ে তোমাদের যারতার। তরুণ
                    কিশোর ছেলে, আমরা আজিকে ভাবিয়া না পাই তুমি হেথা কেন এলে?
                    হায়রে কিশোর হায়! ফুলের পরাণ বিকাতে এসেছ এই পাপ-মথুরায়।{" "}
                    <br /> আজো নাকি সেই বাঁশীর রাজাটি তমাল-লতার ফাঁদে, চরণ জড়ায়ে
                    নূপুর হারায়ে পথের ধূলায় কাঁদে হায়রে কিশোর হায়! ফুলের পরাণ
                    বিকাতে এসেছ এই পাপ-মথুরায়। আজিও চেননি সোনার আদর, চেননি
                    মুক্তাহার, হাসি মুখে তাই সোনা ঝরে পড়ে তোমাদের যারতার। ঘরে
                    ফিরে যাও সোনার কিশোর! এ পাপমথুরাপুরী, তোমার সোনার অঙ্গেতে
                    দেবে বিষবান ছুঁড়ি ছুঁড়ি। সেই ব্রজধূলি আজো ত মুছেনি তোমার
                    সোনার গায়, কেন তবে ভাই, চরণ বাড়ালে যৌবন মথুরায়! <br /> হয়ত
                    তাহাও জানে না সে মেয়ে জানে না কুসুম-হার, এত যে আদরে গাঁথিছে
                    সে তাহা গলায় দোলাবে কার? ওপারে কিশোর, এপারে যুবক, রাজার দেউল
                    বাড়ি, পাষাণের দেশে কেন এলে ভাই। রাখালের দেশ ছাড়ি? বঁধুর
                    কোলেতে বধুয়া ঘুমায়, খোলেনি বাহুর বাঁধ, দীঘির জলেতে নাহিয়া
                    নাহিয়া মেটেনি তারার সাধ। ওপারে কিশোর, এপারে যুবক, রাজার দেউল
                    বাড়ি, পাষাণের দেশে কেন এলে ভাই। রাখালের দেশ ছাড়ি? আজিও চেননি
                    সোনার আদর, চেননি মুক্তাহার, হাসি মুখে তাই সোনা ঝরে পড়ে
                    তোমাদের যারতার। <br /> এখনো বসিয়া সেঁউতীর মালা গাঁথিছে ভোরের
                    তারা, ঊষার রঙিন শাড়ীখানি তার বুনান হয়নি সারা। আজো কানে গোঁজ
                    শিরীষ কুসুম কিংশুক-মঞ্জরী, অলকে বাঁধিয়া পাটল ফুলেতে ভরে লও
                    উত্তরী! তুমি ভাই সেই ব্রজের রাখাল, পাতার মুকুট পরি, তোমাদের
                    রাজা আজো নাকি খেলে গেঁয়ো মাঠখানি ভরি। এখনো পাখিরা উঠেনি
                    জাগিয়া, শিশির রয়েছে ঘুমে, কলঙ্কী চাঁদ পশ্চিমে হেলি
                    কৌমুদী-লতা চুমে। হায়রে করুণ হায়, এখনি যে সবে জাগিয়া উঠিবে
                    প্রভাতের কিনারায়। <br /> সেই ব্রজধূলি আজো ত মুছেনি তোমার
                    সোনার গায়, কেন তবে ভাই, চরণ বাড়ালে যৌবন মথুরায়! তরুণ কিশোর
                    ছেলে, আমরা আজিকে ভাবিয়া না পাই তুমি হেথা কেন এলে? আজো কানে
                    গোঁজ শিরীষ কুসুম কিংশুক-মঞ্জরী, অলকে বাঁধিয়া পাটল ফুলেতে ভরে
                    লও উত্তরী! রঙের কুহেলী তলে, তোমার জীবন ঊষার আকাশে শিশু রবি
                    সম জ্বলে। হয়ত তাহাও জানে না সে মেয়ে জানে না কুসুম-হার, এত যে
                    আদরে গাঁথিছে সে তাহা গলায় দোলাবে কার?
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-10">
            {/* Search Bar */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="font-bold text-gray-900 mb-4">Search Blog</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-5 py-4 pr-14 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-green-700">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Blog Categories */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="font-bold text-gray-900 mb-6">Blog Categories</h3>
              <ul className="space-y-4">
                {[
                  { name: "Plant Care", count: 12 },
                  { name: "Fert Control", count: 7 },
                  { name: "DIY Gardening", count: 11 },
                  { name: "Seasonal Tips", count: 20 },
                  { name: "Sustainability", count: 4 },
                ].map((cat) => (
                  <li
                    key={cat.name}
                    className="flex justify-between items-center hover:text-green-700 cursor-pointer transition"
                  >
                    <span className="font-medium">{cat.name}</span>
                    <span className="text-gray-500">{cat.count}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="font-bold text-gray-900 mb-6">Recent Posts</h3>
              <div className="space-y-5">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="flex gap-4 hover:bg-gray-50 -m-2 p-2 rounded-xl transition"
                  >
                    <div>
                      <Image
                        src="/images/blog-image1.jpg"
                        alt="blog image"
                        width={80}
                        height={80}
                        className="w-28 rounded-lg"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm line-clamp-2">
                        {post.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Add this anywhere in your blog detail page — below the article */}
        <div className="mt-16 bg-white rounded-3xl shadow-lg p-6 md:p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Comments</h2>

          {/* Comment Form */}
          <form className="mb-8 relative">
            <textarea
              placeholder="Write your comment"
              rows={4}
              className=" w-full p-4 border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none resize-none"
            />
            <div className="absolute right-2 bottom-3">
              <button className="bg-[#2D5016] text-[#F5F5DC] px-5 py-2 rounded-md font-semibold">
                Submit
              </button>
            </div>
          </form>

          <div className="border-t border-gray-200 pt-8 space-y-8">
            {/* Single Comment */}
            <div className="flex gap-4">
              <div className="p-6 pb-4">
                {/* Header: User + Rating */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="">
                      <Image
                        src="/images/profile1.png"
                        alt="Ismita Image"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Ismita Chowdhury
                      </h4>
                      <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm text-[#2D5016] mt-1">
                        <span className="bg-[#E8F5E9] flex items-center gap-1  px-2 py-1 rounded-full text-xs font-medium">
                          <Image
                            src="/images/tikmark.png"
                            alt="tikMark"
                            width={15}
                            height={15}
                          />
                          Verified Purchase
                        </span>
                        <span className="text-[#7A9B57]">
                          {" "}
                          4 Days ago (12 September, 2025)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <div className="mt-4 border border-[#D9D9D9] p-4 rounded-md">
                  <p className="text-[#2D5016] leading-relaxed">
                    এই গাছটা একেবারেই দারুণ! একদম ভালো অবস্থায় পৌঁছেছে এবং আমার
                    বাগানে দারুণভাবে বেড়ে উঠছে। এর মান আমার প্রত্যাশার থেকেও
                    ভালো এবং ইতিমধ্যেই নতুন কুঁড়ি গজাচ্ছে। নতুন কিংবা অভিজ্ঞ
                    উভয় ধরনের মালীদের জন্যই আমি এটি অত্যন্ত সুপারিশ করছি।
                  </p>
                </div>

                {/* Helpful / Not Helpful */}
                <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
                  <button className="flex items-center gap-2 text-[#2D5016]">
                    <LuThumbsUp />
                    Helpful (12)
                  </button>
                  <button className="flex items-center text-[#2D5016] gap-2">
                    <LuThumbsDown />
                    Not Helpful (0)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
