
import React, { useState } from "react";
import { ProductCard } from "@/components/ui/ProductCard";

const categories = ["Sweatshirts", "Lounge Pants", "T-Shirts"];

export const BestSellers: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="box-border bg-black m-0 p-10">
      <div className="box-border text-center mb-10 m-0 p-0">
        <h2 className="box-border text-white text-[42px] mb-2.5 m-0 p-0">
          Explore Our Best Sellers
        </h2>
        <p className="text-white">
          The right pair of sunnies are the cherry on top of any outfit and
          these natural
        </p>
      </div>

      <div className="box-border flex justify-center gap-5 mb-10 m-0 p-0">
        {categories.map((category, index) => (
          <button
            key={category}
            onClick={() => setActiveCategory(index)}
            className={`box-border text-[15px] text-[#505050] cursor-pointer bg-[#F9F9F9] m-0 px-[30px] py-2.5 rounded-[3px] ${
              activeCategory === index
                ? "bg-opacity-100"
                : "bg-opacity-80 hover:bg-opacity-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="box-border grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] m-0 p-0">
        <ProductCard
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/a7010127f5e959bc7df050757e1bfc0b8875ede4"
          price="₹ 999.00"
          name="Kokoro Lina T-Shirt"
        />
        <ProductCard
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/b082519add6e0aad17e2855a49d925018b1992a6"
          price="₹ 999.00"
          name="Kokoro Lina T-Shirt"
        />
        <ProductCard
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/45c1f269cc6904a0f3044aa87b7558d3ee124349"
          price="₹ 999.00"
          name="Kokoro Lina T-Shirt"
        />
        <ProductCard
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/bb41981dabcd9c4e11b7e495335837a7ddc16694"
          price="₹ 999.00"
          name="Kokoro Lina T-Shirt"
        />
      </div>

      <div className="box-border flex justify-center gap-2.5 mt-5 m-0 p-0">
        {[0, 1, 2].map((dot) => (
          <button
            key={dot}
            className="box-border w-[18px] h-[18px] bg-[#D9D9D9] m-0 p-0 rounded-[50%] hover:bg-[#B0B0B0] transition-colors"
            aria-label={`Go to slide ${dot + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
