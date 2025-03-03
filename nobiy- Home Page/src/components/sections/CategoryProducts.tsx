
import React from "react";
import { ProductCard } from "@/components/ui/ProductCard";

export const CategoryProducts: React.FC = () => {
  // Mock product data
  const products = [
    {
      id: 1,
      name: "Black T-Shirt",
      price: "$39.00",
      image: "https://www.nobily.work/_astro/tops-vertical_ZT6jlMsH.jpg",
      discount: "30% OFF"
    },
    {
      id: 2,
      name: "Oversized Shirt",
      price: "$35.00",
      image: "https://www.nobily.work/_astro/bottoms_ZaGpIb7h.jpg",
      discount: null
    },
    {
      id: 3,
      name: "White T-Shirt",
      price: "$29.99",
      image: "https://www.nobily.work/_astro/jackets_ZUEM8EzA.jpg",
      discount: null
    },
    {
      id: 4,
      name: "Casual Shirt",
      price: "$45.00",
      image: "https://www.nobily.work/_astro/shorts_ZyCdA6X.jpg",
      discount: "25% OFF"
    },
    {
      id: 5,
      name: "Loose Fit Tee",
      price: "$39.00",
      image: "https://www.nobily.work/_astro/tops-vertical_ZT6jlMsH.jpg",
      discount: null
    },
    {
      id: 6,
      name: "Graphic Shirt",
      price: "$32.00",
      image: "https://www.nobily.work/_astro/bottoms_ZaGpIb7h.jpg",
      discount: "15% OFF"
    },
    {
      id: 7,
      name: "Black T-Shirt",
      price: "$39.00",
      image: "https://www.nobily.work/_astro/tops-vertical_ZT6jlMsH.jpg",
      discount: null
    },
    {
      id: 8,
      name: "Oversized Shirt",
      price: "$35.00",
      image: "https://www.nobily.work/_astro/bottoms_ZaGpIb7h.jpg",
      discount: null
    },
    {
      id: 9,
      name: "White T-Shirt",
      price: "$29.99",
      image: "https://www.nobily.work/_astro/jackets_ZUEM8EzA.jpg",
      discount: null
    },
  ];

  return (
    <section className="bg-black py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              discount={product.discount}
            />
          ))}
        </div>
        
        <div className="mt-8 flex justify-center">
          <button className="px-8 py-2 border border-gray-700 text-white rounded-md hover:bg-gray-800 hover:border-gray-600 transition-colors text-sm">
            Show More (11)
          </button>
        </div>
      </div>
    </section>
  );
};
