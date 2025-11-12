import Image from "next/image";
import React from "react";

const products = [
  {
    id: 1,
    name: "Fiddle Leaf Plant",
    image: "/images/fiddle-leaf.jpg",
    price: 180,
    cat: "Indoor Plant",
  },
  {
    id: 2,
    name: "Snake Plant",
    image: "/images/featured-product4.jpg",
    price: 150,
    category: "Indoor Plant",
  },
  {
    id: 3,
    name: "Monstera Deliciosa",
    image: "/images/featured-product1.jpg",
    price: 3400,
    category: "Indoor Plant",
  },
  {
    id: 4,
    name: "Vermi Compost Fertilizer",
    image: "/images/featured-product2.jpg",
    price: 200,
    category: "Fertilizer",
  },
  {
    id: 5,
    name: "Vine Outdoor Plant",
    image: "/images/vine.jpg",
    price: 400,
    category: "Outdoor Plant",
  },
];

const SuggestedProducts = () => {
  return (
    
      <div className="lg:col-span-3">
        <div className="bg-white rounded-3xl shadow-lg p-6">
          <h3 className="font-semibold  text-lg mb-5">You may also like</h3>
          <div className="space-y-5">
            {products.map((product) => (
              <div key={product.id} className="flex gap-3">
                <div className="w-16 h-16 bg-gray-200 rounded-xl overflow-hidden shrink-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-sm text-[#404040] line-clamp-2">
                    {product.name}
                  </p>
                  <p className="text-xs text-[#8C8C8C]">{product.category}</p>
                  <p className="text-[#CC7722] font-semibold">
                    ৳ {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default SuggestedProducts;
