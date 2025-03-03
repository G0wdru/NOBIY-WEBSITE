
import React from "react";

interface ProductCardProps {
  image: string;
  price: string;
  name: string;
  discount?: string | null;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  price,
  name,
  discount,
}) => {
  return (
    <div className="overflow-hidden bg-[#1A1A1A] rounded-lg">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-[200px] object-cover"
        />
        {discount && (
          <div className="absolute top-2 left-2 bg-white text-black text-xs px-2 py-1 rounded">
            {discount}
          </div>
        )}
      </div>
      <div className="p-3">
        <div className="flex justify-between items-center mb-1">
          <div className="text-white font-medium text-sm">{price}</div>
          <button className="text-xs border border-white/30 text-white px-3 py-1 rounded-full hover:bg-white/10 transition-colors">
            + Add
          </button>
        </div>
        <div className="text-gray-400 text-xs">
          {name}
        </div>
      </div>
    </div>
  );
};
