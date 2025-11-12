import React from "react";

const UserReview = () => {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Section Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Customer Reviews & Ratings
          </h2>
          <p className="text-gray-600 mt-2">
            See what other gardeners are saying about this product
          </p>
        </div>

        {/* Main Review Card */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Overall Rating */}
            <div className="text-center lg:text-left">
              <div className="text-6xl font-bold text-gray-900">4.7</div>
              <div className="flex justify-center lg:justify-start items-center gap-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl">
                    {i < 4 ? "★" : "★"}
                  </span>
                ))}
                <span className="text-yellow-500 text-2xl ml-1">★</span>
                <span className="text-gray-600 ml-2">(24)</span>
              </div>
              <p className="text-gray-600 mt-3">Based on 1,247 reviews</p>

              <button className="mt-8 bg-green-700 text-white font-semibold px-8 py-4 rounded-full flex items-center gap-3 mx-auto lg:mx-0 hover:bg-green-800 transition shadow-lg">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                Write Review
              </button>
            </div>

            {/* Right: Star Distribution */}
            <div className="space-y-4">
              {[5, 4, 3, 2, 1].map((star) => {
                const reviews =
                  star === 5
                    ? 847
                    : star === 4
                    ? 274
                    : star === 3
                    ? 75
                    : star === 2
                    ? 37
                    : 14;
                const percentage =
                  star === 5
                    ? 85
                    : star === 4
                    ? 40
                    : star === 3
                    ? 15
                    : star === 2
                    ? 8
                    : 4;
                const color =
                  star === 5
                    ? "bg-green-600"
                    : star === 4
                    ? "bg-green-500"
                    : star === 3
                    ? "bg-orange-500"
                    : star === 2
                    ? "bg-red-500"
                    : "bg-red-600";

                return (
                  <div key={star} className="flex items-center gap-4">
                    <span className="text-sm font-medium text-gray-700 w-8">
                      {star} Star
                    </span>
                    <div className="flex-1 h-8 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${color} transition-all duration-1000 ease-out`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 w-12 text-right">
                      {reviews}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Review Highlights */}
        <div className="mt-8 bg-white rounded-3xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Review Highlights
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              { text: "Easy to Grow", color: "bg-green-100 text-green-800" },
              { text: "Good Quality", color: "bg-blue-100 text-blue-800" },
              {
                text: "Arrived Healthy",
                color: "bg-purple-100 text-purple-800",
              },
              { text: "Great Value", color: "bg-yellow-100 text-yellow-800" },
              {
                text: "Smaller Than Expected",
                color: "bg-pink-100 text-pink-800",
              },
            ].map((tag) => (
              <span
                key={tag.text}
                className={`px-5 py-2 rounded-full text-sm font-medium ${tag.color}`}
              >
                {tag.text}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserReview;
