import Image from "next/image";
import Link from "next/link";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    category: "Indore Plant",
    price: "৳ 2000 - 3400",
    rating: 5,
    reviews: 24,
    image: "/images/featured-product1.jpg",
  },
  {
    id: 2,
    name: "Organic Compost Fertilizer",
    category: "Fertilizer",
    price: "৳ 60 - 440",
    rating: 4,
    reviews: 12,
    image: "/images/featured-product2.jpg",
  },
  {
    id: 3,
    name: "Pruning Shears",
    category: "Equipment",
    price: "৳ 180 - 450",
    rating: 4,
    reviews: 34,
    image: "/images/featured-product3.jpg",
  },
  {
    id: 4,
    name: "Snake Plant",
    category: "Indore Plant",
    price: "৳ 150 - 500",
    rating: 4,
    reviews: 35,
    image: "/images/featured-product4.jpg",
  },
];

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) stars.push(<FaStar key={i} className="text-[#F59E0B]" />);
    else if (rating >= i - 0.5)
      stars.push(<FaStarHalfAlt key={i} className="text-[#F59E0B]" />);
    else stars.push(<FaRegStar key={i} className="text-[#F59E0B]" />);
  }
  return stars;
};

const PopularProducts = () => {
  return (
    <section className="w-full py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#2D5016]">
          Popular Products
        </h2>
        <p className="text-[#2D5016] font-normal mt-2">Discover our most popular gardening essentials</p>

        {/* Product Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm cursor-pointer hover:shadow-xl transition-all duration-300"
            >
              {/* Product Image + Hover Overlay */}
              <div className="relative w-full h-64">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product Details */}
              <div className="p-5 text-left">
                <h1 className="text-[#2D5016] font-medium">{item.name}</h1>
                <p className="text-sm text-[#A7A7A7]">{item.category}</p>
                <p className="flex items-center mt-2 text-[#CC7722] text-lg font-semibold">
                  {item.price}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-2">
                  {renderStars(item.rating)}
                  <span className="text-sm text-[#14532d] ml-1">
                    ({item.reviews})
                  </span>
                </div>

                {/* Default Add to Cart */}
                <Link
                  href="#"
                  className="inline-block w-full text-center mt-4 bg-[#2D5016] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#15803d] transition"
                >
                  Add to Cart
                </Link>
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-white/40 backdrop-blur-xs flex flex-col items-center justify-between pt-8 opacity-0 group-hover:opacity-100  transition-all duration-300">
                <button className="bg-[#2D5016] cursor-pointer text-white px-5 py-2 rounded-lg font-medium transition">
                  Add to Cart
                </button>
                <button className="bg-[#7A9B57] text-white w-full py-4 rounded-b-lg font-medium cursor-pointer transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
