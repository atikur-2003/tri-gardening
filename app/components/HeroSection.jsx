import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="relative w-full min-h-[400px] lg:min-h-[500px] flex items-center"
      aria-label="Hero"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Content container */}
      <div className="relative z-10 px-5 md:px-7 lg:px-20 ">
        {/* Left: Text */}
        <div className="">
          <h1 className="text-white font-semibold leading-tight text-4xl">
            Nurture Your Green Paradise
          </h1>

          <p className="mt-4 text-white/90 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base">
            Discover beautiful plants, eco-friendly tools and personalized
            advice to make your home greener. Hand-picked products to nurture
            your indoor jungle.
          </p>

          <div className="mt-8 flex items-center justify-start gap-4">
            <Link
              href="/products"
              className="inline-block text-white bg-[#CC7722] hover:bg-[#d97706] font-medium px-6 py-3 rounded-full shadow-md transition"
            >
              Shop Now
            </Link>

            <button className="inline-block bg-[#CC7722] hover:bg-[#d97706] text-white font-medium px-6 py-3 cursor-pointer rounded-full shadow-md transition">
              Call Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
