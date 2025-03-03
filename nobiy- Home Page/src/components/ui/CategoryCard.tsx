
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  image: string;
  title: string;
  description: string;
  color?: string;
  delay?: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  image,
  title,
  description,
  color = "bg-white",
  delay = "0",
}) => {
  const getCategoryPath = (title: string) => {
    // Convert the title to lowercase and use it as the path
    return `/${title.toLowerCase()}`;
  };

  return (
    <div 
      className={`box-border relative overflow-hidden ${color} shadow-[0px_4px_20px_rgba(0,0,0,0.15)] m-0 p-0 rounded-[20px] transition-all duration-500 hover:scale-[1.03] hover:shadow-[0px_10px_25px_rgba(0,0,0,0.2)] h-full`}
    >
      <div className="relative overflow-hidden rounded-t-[20px]">
        <img
          src={image}
          alt={title}
          className="box-border w-full h-auto m-0 p-0 transition-transform duration-700 hover:scale-110"
        />
      </div>
      <div className="box-border m-0 p-[15px] md:p-[20px]">
        <div className="box-border text-[#5D5C66] text-[18px] md:text-[22px] font-medium mb-1 md:mb-2 m-0 p-0">
          {title}
        </div>
        <div className="box-border text-black text-xs md:text-sm mb-2 md:mb-3 m-0 p-0 line-clamp-2">
          {description}
        </div>
        <Link to={getCategoryPath(title)}>
          <button className="box-border text-[#5D5C66] text-[12px] md:text-[14px] tracking-[1.5px] m-0 px-[15px] md:px-[20px] py-1.5 md:py-2 rounded-[30px] border-[1.5px] border-solid border-[#5D5C66] hover:bg-[#5D5C66] hover:text-white transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-1.5">
            Shop Now
            <ArrowRight size={14} />
          </button>
        </Link>
      </div>
    </div>
  );
};
