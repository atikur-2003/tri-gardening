import Image from "next/image";
import React from "react";
import { LuThumbsDown, LuThumbsUp } from "react-icons/lu";

const UserReviews = () => {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="space-y-8">
          {/* card 1 */}
          <div className="bg-white rounded-3xl shadow-md overflow-hidden">
            {/* User Review */}
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
                <div className="flex text-yellow-500 text-xl">★★★★★</div>
              </div>

              {/* Review Text */}
              <div className="mt-4 border border-[#D9D9D9] p-4 rounded-md">
                <p className="text-[#2D5016] leading-relaxed">
                  এই গাছটা একেবারেই দারুণ! একদম ভালো অবস্থায় পৌঁছেছে এবং আমার
                  বাগানে দারুণভাবে বেড়ে উঠছে। এর মান আমার প্রত্যাশার থেকেও ভালো
                  এবং ইতিমধ্যেই নতুন কুঁড়ি গজাচ্ছে। নতুন কিংবা অভিজ্ঞ উভয়
                  ধরনের মালীদের জন্যই আমি এটি অত্যন্ত সুপারিশ করছি।
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

            {/* Admin Reply from TriGardening */}
            <div className="bg-green-50 rounded-2xl mx-6 ml-20 mb-10 p-5 border-l-4 border-green-600">
              <div className="flex items-center gap-3 mb-3">
                
                  <p className="font-semibold text-[#2D5016]">
                    Reply from TriGardening
                  </p>
                  <p className="text-sm text-[#2D5016]">(12 September, 2025)</p>
                
              </div>
              <p className="text-[#2D5016] leading-relaxed">
                আপনাকে অনেক ধন্যবাদ আমাদের গাছ নিয়ে এত সুন্দর অভিজ্ঞতা শেয়ার
                করার জন্য। আপনার বাগানে গাছটা ভালোভাবে বেড়ে উঠছে জেনে আমরা ভীষণ
                খুশি। ভবিষ্যতেও আপনাকে মানসম্মত গাছ ও গার্ডেনিং সামগ্রী দেওয়ার
                প্রতিশ্রুতি দিচ্ছি। শুভকামনা রইলো ।
              </p>
            </div>
          </div>

          {/* card 2 */}
          <div className="bg-white rounded-3xl shadow-md overflow-hidden">
            {/* User Review */}
            <div className="p-6 pb-4">
              {/* Header: User + Rating */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="">
                    <Image
                      src="/images/profile2.png"
                      alt="Ismita Image"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Aminul Islam
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
                        1 Week ago (4 September, 2025)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex text-yellow-500 text-xl">★★★★☆</div>
              </div>

              {/* Review Text */}
              <div className="mt-4 border border-[#D9D9D9] p-4 rounded-md">
                <p className="text-[#2D5016] leading-relaxed">
                  গাছের মান ভালো ছিল, প্যাকেজিংও দারুণ হয়েছে। শুধু ছবির তুলনায়
                  গাছটা একটু ছোট হওয়ায় ৪ স্টার দিলাম। তারপরও কেনাকাটা নিয়ে
                  খুশি এবং আবারও কিনতে চাই।
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

            {/* Admin Reply from TriGardening */}
            <div className="bg-green-50 rounded-2xl mx-6 ml-20 mb-10 p-5 border-l-4 border-green-600">
              <div className="flex items-center gap-3 mb-3">
                <p className="font-semibold text-[#2D5016]">
                  Reply from TriGardening
                </p>
                <p className="text-sm text-[#2D5016]">(5 September, 2025)</p>
              </div>
              <p className="text-[#2D5016] leading-relaxed">
                আপনার মতামতের জন্য ধন্যবাদ। গাছের মান ও প্যাকেজিং ভালো লেগেছে
                জেনে আমরা খুশি। সাইজের ব্যাপারটা আমরা নোট করে নিচ্ছি, ভবিষ্যতে
                আরও স্পষ্টভাবে উল্লেখ করার চেষ্টা করবো। আপনার সন্তুষ্টিই আমাদের
                সবচেয়ে বড় অগ্রাধিকার। আবারও আপনাকে সেবা দেওয়ার অপেক্ষায়
                রইলাম ।
              </p>
            </div>
          </div>

          {/* card 3 */}
          <div className="bg-white rounded-3xl shadow-md overflow-hidden">
            {/* User Review */}
            <div className="p-6 pb-4">
              {/* Header: User + Rating */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="">
                    <Image
                      src="/images/profile3.png"
                      alt="Ismita Image"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Hridoy Shil</h4>
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
                        2 Week ago (1 August, 2025)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex text-yellow-500 text-xl">★★★★☆</div>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/images/review-image1.png"
                  alt="review image"
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <Image
                  src="/images/review-image2.png"
                  alt="review image"
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
              </div>

              {/* Review Text */}
              <div className="mt-4 border border-[#D9D9D9] p-4 rounded-md">
                <p className="text-[#2D5016] leading-relaxed">
                  আমার ইনডোর গার্ডেনের জন্য একেবারে পারফেক্ট সংযোজন! গাছটা একদম
                  সুস্থ অবস্থায় এসেছে এবং খুব সুন্দরভাবে বেড়ে উঠছে। ২ সপ্তাহ
                  পরের অগ্রগতি দেখানোর জন্য কিছু ছবি সংযুক্ত করেছি। কাস্টমার
                  সার্ভিসও খুব দ্রুত রেসপন্স করেছে যখন আমি প্রশ্ন করেছি।
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
          {/* Load More Reviews Button */}
          <div className="text-center pt-8">
            <button className="px-12 py-4 border border-[#7A9B57] text-[#7A9B57] font-semibold rounded-lg  shadow-md">
              Load More Reviews
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserReviews;
