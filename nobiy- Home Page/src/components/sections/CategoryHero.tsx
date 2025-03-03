
import React from "react";
import { Link } from "react-router-dom";

export const CategoryHero: React.FC = () => {
  return (
    <section className="bg-black text-white py-4 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">Clothing</h1>
        <div className="flex mt-2 space-x-6">
          <Link to="#" className="text-sm text-white hover:text-white/80 font-medium">Top</Link>
          <Link to="#" className="text-sm text-white/60 hover:text-white/80">Short</Link>
          <Link to="#" className="text-sm text-white/60 hover:text-white/80">Skirt</Link>
          <Link to="#" className="text-sm text-white/60 hover:text-white/80">Dress</Link>
        </div>
      </div>
    </section>
  );
};
