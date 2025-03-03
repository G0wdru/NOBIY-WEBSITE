
import React from "react";
import { ChevronDown, Filter, X } from "lucide-react";

export const CategoryFilters: React.FC = () => {
  return (
    <section className="bg-black border-t border-b border-gray-800 py-3 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <span className="text-xs text-gray-400">All (20)</span>
            <button className="bg-white/10 text-white text-xs rounded-full px-3 py-1 flex items-center space-x-1">
              <span>Category</span>
              <X size={12} />
            </button>
            <button className="bg-white/10 text-white text-xs rounded-full px-3 py-1 flex items-center space-x-1">
              <span>Top</span>
              <X size={12} />
            </button>
            <button className="bg-white/10 text-white text-xs rounded-full px-3 py-1 flex items-center space-x-1">
              <span>Sale</span>
              <X size={12} />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-400">Sort by:</span>
            <button className="text-white text-xs flex items-center">
              <span>Featured</span>
              <ChevronDown size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
