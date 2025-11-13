import Image from "next/image";
import Link from "next/link";
import React from "react";

const posts = [
  {
    title: "Caring for succulent & beginners guide",
    date: "May 24, 2025",
  },
  {
    title: "Growing perfect tomatoes for this season",
    date: "May 23, 2025",
  },

  {
    title: "Natural Pest Control Methods That Actually...",
    date: "May 20, 2025",
  },
  {
    title: "Natural Pest Control Methods That Actually...",
    date: "May 20, 2025",
  },
];

const BlogsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#404040]">
            The TriGardening Journal
          </h1>
          <p className="text-xl text-gray-600 mt-3">Your slogan goes here</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Main Content - Left */}
          <div className="lg:col-span-3 space-y-12">
            {/* Hero Featured Post */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-96 md:h-[520px] lg:h-[600px] group">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/images/blog-image1.jpg')",
                }}
              />

              {/* Content - Bottom Left */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white z-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight max-w-4xl">
                  Your Blogpost Title goes here:
                </h2>
                <p className="text-base md:text-lg lg:text-xl mt-4 max-w-3xl leading-relaxed opacity-95">
                  Your blogpost first paragraph sentence goes here....
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 mt-8">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/images/blog-author.png"
                      alt="blog author"
                      width={40}
                      height={40}
                      className="w-12 h-12 rounded-full"
                    />
                    <p className="text-base">Writers Name</p>
                    <p className="text-sm opacity-90">September 19, 2025</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* blog 1 */}
              <Link href="/blog">
                <article className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition">
                  <div>
                    <Image
                      src="/images/blog-image2.jpg"
                      alt="blog image"
                      width={200}
                      height={200}
                      className="w-full "
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-[#42C847] text-xs font-semibold mb-4">
                      Post Type
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      10 Essential Tips for Indoor Plant Care
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Discover the secrets to keeping your houseplants healthy
                      and thriving year-round with these expert tips...
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>September 19, 2025</span>
                      <span>5 min read</span>
                    </div>
                  </div>
                </article>
              </Link>

              {/* blog 2 */}
              <Link href="/blog">
                <article className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition">
                  <div>
                    <Image
                      src="/images/blog-image1.jpg"
                      alt="blog image"
                      width={200}
                      height={200}
                      className="w-full"
                    />
                  </div>
                  <div className="p-6">
                    <span className=" text-[#42C847] text-xs font-semibold mb-4">
                      Post Type
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      10 Essential Tips for Indoor Plant Care
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Discover the secrets to keeping your houseplants healthy
                      and thriving year-round with these expert tips...
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>September 19, 2025</span>
                      <span>5 min read</span>
                    </div>
                  </div>
                </article>
              </Link>

              {/* blog 3 */}
              <Link href="/blog">
                <article className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition">
                  <div>
                    <Image
                      src="/images/blog-image1.jpg"
                      alt="blog image"
                      width={200}
                      height={200}
                      className="w-full "
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-[#42C847] text-xs font-semibold mb-4">
                      Post Type
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      10 Essential Tips for Indoor Plant Care
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Discover the secrets to keeping your houseplants healthy
                      and thriving year-round with these expert tips...
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>September 19, 2025</span>
                      <span>5 min read</span>
                    </div>
                  </div>
                </article>
              </Link>

              {/* blog 4 */}
              <Link href="/blog">
                <article className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition">
                  <div>
                    <Image
                      src="/images/blog-image2.jpg"
                      alt="blog image"
                      width={200}
                      height={200}
                      className="w-full "
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-[#42C847] text-xs font-semibold mb-4">
                      Post Type
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      10 Essential Tips for Indoor Plant Care
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Discover the secrets to keeping your houseplants healthy
                      and thriving year-round with these expert tips...
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>September 19, 2025</span>
                      <span>5 min read</span>
                    </div>
                  </div>
                </article>
              </Link>
            </div>

            {/* Load More Button */}
            <div className="text-center mt-16">
              <button className="bg-green-700 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-green-800 transition shadow-lg hover:shadow-xl">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sidebar - Right */}
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
                    key={post.title}
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
      </div>
    </div>
  );
};

export default BlogsPage;
