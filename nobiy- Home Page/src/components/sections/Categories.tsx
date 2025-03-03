
import React from "react";
import { Link } from "react-router-dom";
import { CategoryCard } from "@/components/ui/CategoryCard";

export const Categories: React.FC = () => {
  return (
    <section className="box-border bg-black m-0 p-10 overflow-hidden">
      <div className="box-border text-center mb-10 m-0 p-0">
        <h2 className="box-border text-white text-[42px] mb-2.5 m-0 p-0">
          Shop By Category
        </h2>
        <Link
          to="/category"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Browse all categories
        </Link>
      </div>

      <div className="box-border max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 m-0 p-0">
        <Link to="/category" className="col-span-1">
          <CategoryCard
            image="https://www.nobily.work/_astro/tops-vertical_ZT6jlMsH.jpg"
            title="Tops"
            description="Elevate your style with our premium collection of trendy tops for every occasion!"
            color="bg-[#E5DEFF]"
            delay="0"
          />
        </Link>
        <Link to="/category" className="col-span-1">
          <CategoryCard
            image="https://www.nobily.work/_astro/bottoms_ZaGpIb7h.jpg"
            title="Bottoms"
            description="Complete your look with our versatile bottoms, designed for comfort and style!"
            color="bg-[#FEF7CD]"
            delay="0.1"
          />
        </Link>
        <Link to="/category" className="col-span-1">
          <CategoryCard
            image="https://www.nobily.work/_astro/jackets_ZUEM8EzA.jpg"
            title="Jackets"
            description="Stay warm and stylish with our premium selection of jackets for all seasons!"
            color="bg-[#D3E4FD]"
            delay="0.2"
          />
        </Link>
        <Link to="/category" className="col-span-1">
          <CategoryCard
            image="https://www.nobily.work/_astro/shorts_ZyCdA6X.jpg"
            title="Shorts"
            description="Beat the heat in style with our comfortable and trendy shorts collection!"
            color="bg-[#F2FCE2]"
            delay="0.3"
          />
        </Link>
      </div>
    </section>
  );
};
