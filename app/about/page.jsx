import Image from "next/image";
import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { FaFacebook, FaWhatsapp } from "react-icons/fa6";

const AboutPage = () => {
  return (
    <div>
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero.jpg')",
          }}
        />

        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 gradient-to-t from-black/80 via-black/80 to-black/80"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 md:px-12 max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Your Trusted Partner in
            <br />
            <span className="text-green-400">Gardening</span>
          </h1>

          <p className="text-base md:text-lg text-white my-10 max-w-3xl">
            Cultivating expertise, growing communities, and nurturing your green
            dreams for over a decade
          </p>

          <a
            href="#"
            className="bg-[#CC7722] text-white font-bold px-10 py-4 rounded-full text-lg shadow-2xl"
          >
            Meet Our Team
          </a>
        </div>
      </div>

      {/* Team member section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16 text-center">
          {/* Section Title */}
          <h2 className="text-2xl md:text-4xl font-semibold text-[#2D5016] mb-4">
            Meet Our Gardening Experts
          </h2>
          <p className="text-lg text-[#2D5016] max-w-3xl mx-auto mb-16 ">
            Our passionate team of horticulturists and plant specialists brings
            years of combined experience to help your garden flourish
          </p>

          {/* Team Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Team Member 1 */}
            <div className="bg-[#F5F5DC] rounded-3xl p-8 shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <Image
                  src="/images/member1.jpg"
                  alt="member image"
                  width={100}
                  height={100}
                  className="w-24 h-24 rounded-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                Aminul Islam Sagor
              </h3>
              <p className="text-[#7A9B57] font-semibold my-4">
                CEO & Gardening Expert
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                With years of hands-on gardening experience, Sagor leads
                TriGardening with passion and expertise, ensuring our customers
                always get the best advice, experience and quality.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-[#F5F5DC] rounded-3xl p-8 shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <Image
                  src="/images/member2.jpg"
                  alt="member image"
                  width={100}
                  height={100}
                  className="w-24 h-24 rounded-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                Mariam Nipu
              </h3>
              <p className="text-[#7A9B57] font-semibold my-4">
                Plant Care Specialist
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                From curating gardening blogs to personalized plant consultancy,
                Nipu helps our community learn, grow, and stay inspired.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-[#F5F5DC] rounded-3xl p-8 shadow-lg">
              <div className="flex items-center justify-center my-4">
                <Image
                  src="/images/member1.jpg"
                  alt="member image"
                  width={100}
                  height={100}
                  className="w-24 h-24 rounded-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                Another Person
              </h3>
              <p className="text-[#7A9B57] font-semibold mb-4">Designation</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                With years of hands-on gardening experience, Sagor leads
                TriGardening with passion and expertise, ensuring our customers
                always get the best advice, experience and quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* commitment section */}
      <section className="py-20 bg-[#F5F5DC]">
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 text-center">
          {/* Section Title */}
          <h2 className="text-2xl md:text-4xl font-bold text-[#2D5016] mb-4">
            Our Commitment to You
          </h2>
          <p className="text-lg text-[#2D5016] max-w-3xl mx-auto mb-16 ">
            We're dedicated to providing you with the knowledge, tools, and
            support needed for gardening success
          </p>

          {/* Commitment Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1: Plant Clinic Analysis */}
            <div className="group">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <Image
                    src="/images/image1.png"
                    alt="image"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Plant Clinic Analysis
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed px-4">
                Get expert diagnosis for plant problems with our comprehensive
                AI analysis service. Upload photos and receive detailed
                treatment plans.
              </p>
            </div>

            {/* Card 2: Expert Blog Content */}
            <div className="group">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <Image
                    src="/images/image2.png"
                    alt="image"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Expert Blog Content
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed px-4">
                Access weekly articles, seasonal guides, and in-depth tutorials
                written by our certified horticulturists and plant specialists.
              </p>
            </div>

            {/* Card 3: Satisfaction Guarantee */}
            <div className="group">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <Image
                    src="/images/image3.png"
                    alt="image"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Satisfaction Guarantee
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed px-4">
                We stand behind our advice and products. If you're not
                completely satisfied, we'll work with you until we find the
                right solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* community section */}
      <section className="py-20  text-white bg-[#7A9B57]">
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20">
          {/* Title & Subtitle */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              Join Our TriGardening Community
            </h2>
            <p className="text-lg text-green-100 max-w-3xl mx-auto leading-relaxed">
              We're dedicated to providing you with the knowledge, tools, and
              support needed for gardening success
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-between">
            {/* Left: Community Links */}
            <div className="space-y-10">
              {/* Facebook Group */}
              <div className="flex items-start gap-5 group">
                <Image
                  src="/images/community1.png"
                  alt="image"
                  width={100}
                  height={100}
                  
                />
                <div>
                  <h3 className="text-xl font-bold mb-1">
                    Facebook Community Forum
                  </h3>
                  <p className="text-green-100 text-sm leading-relaxed">
                    Connect with 10,000+ gardeners across the Bangladesh. Ask
                    questions, share tips, and celebrate your growing journey.
                  </p>
                </div>
              </div>

              {/* YouTube Channel */}
              <div className="flex items-start gap-5 group">
                <Image
                  src="/images/community2.png"
                  alt="image"
                  width={70}
                  height={70}
                />
                <div>
                  <h3 className="text-xl font-bold mb-1">
                    TriGardening YouTube Channel
                  </h3>
                  <p className="text-green-100 text-sm leading-relaxed">
                    Join us on YouTube for quick gardening tips, tricks, and
                    guides to grow smarter.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <a
                  href="#"
                  className="inline-flex items-center bg-white text-[#2D5016] font-medium px-8 py-3 rounded-full text-lg shadow-xl"
                >
                  Join Our Community
                </a>
              </div>
            </div>

            {/* Right: Image */}
            <div className="hidden lg:block">
              <Image
                src="/images/community3.jpg"
                alt="image"
                width={200}
                height={200}
                className="w-[420px] rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* contact section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20">
          {/* Title & Subtitle */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D5016] mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-[#2D5016] max-w-2xl mx-auto">
              Have questions? We're here to help you grow your gardening
              knowledge
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Contact Info */}
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 bg-[#7A9B57] text-white rounded-full flex items-center justify-center">
                  <BsTelephoneFill/>
                </div>
                <div>
                  <p className="font-semibold text-[#2D5016]">Phone</p>
                  <p className="text-[#2D5016]">01712-452342</p>
                </div>
              </div>

              {/* Facebook */}
              <div className="flex items-center gap-5 group">
               <div className="w-12 h-12 bg-[#7A9B57] text-white rounded-full flex items-center justify-center">
                  <FaFacebook />
                </div>
                <div>
                  <p className="font-semibold text-[#2D5016]">Facebook Page</p>
                  <p
                    className="text-[#2D5016]"
                  >
                    fb.com/gardening.tri
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 bg-[#7A9B57] text-white rounded-full flex items-center justify-center">
                  <FaWhatsapp/>
                </div>
                <div>
                  <p className="font-semibold text-[#2D5016]">WhatsApp</p>
                  <p className="text-[#2D5016]">01712-452342</p>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-[#B7B7B7]">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600 placeholder-gray-400"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600 placeholder-gray-400"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600 placeholder-gray-400"
                />

                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600 placeholder-gray-400 resize-none"
                />

                <button className="w-full bg-[#7A9B57] text-white font-semibold py-2 rounded-lg ">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
