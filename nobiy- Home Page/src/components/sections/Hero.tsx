
import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="box-border relative w-full h-[600px] m-0 p-0 overflow-hidden">
      {/* Video background instead of image */}
      <video 
        autoPlay 
        muted 
        loop 
        className="box-border w-full h-full object-cover m-0 p-0 absolute top-0 left-0"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-model-walking-in-a-city-street-at-night-14632-large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay to improve text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4be9b9581388a4742a0243dd6e38b809436e01d"
        alt="Featured product"
        className="box-border absolute -translate-x-2/4 -translate-y-2/4 w-[300px] h-[300px] shadow-[11px_13px_31px_0px_#000] m-0 p-0 left-2/4 top-2/4 max-lg:w-[280px] max-lg:h-[280px] max-md:w-[250px] max-md:h-[250px] max-sm:w-[180px] max-sm:h-[180px] z-10"
      />

      {/* Single row layout for all screen sizes */}
      <div className="box-border absolute -translate-x-2/4 flex items-center gap-4 m-0 p-0 left-2/4 bottom-8 w-full justify-center px-2 z-10 max-sm:gap-1.5 max-xs:gap-1">
        {/* Virtual trial room */}
        <div className="box-border flex items-center justify-center gap-2 text-white text-sm opacity-75 m-0 p-0 whitespace-nowrap max-md:text-xs max-sm:text-[10px] max-sm:gap-1">
          <span>virtual trial room</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/21f35ffbc12df51095a6221a9131b822ad43268c"
            alt="Virtual trial"
            className="w-4 h-4 max-md:w-3.5 max-md:h-3.5 max-sm:w-2.5 max-sm:h-2.5"
          />
        </div>

        {/* Shop now button */}
        <button className="box-border text-white text-sm tracking-[1.5px] m-0 px-6 py-2.5 rounded-[30px] border-[1.5px] border-solid border-white hover:bg-white hover:text-black transition-colors max-md:px-4 max-md:py-2 max-md:text-xs max-sm:px-3 max-sm:py-1.5 max-sm:text-[10px] max-sm:tracking-[1px] max-sm:border-[1px]">
          SHOP NOW
        </button>

        {/* Virtual store */}
        <div className="box-border flex items-center justify-center gap-2 text-white text-sm opacity-75 m-0 p-0 whitespace-nowrap max-md:text-xs max-sm:text-[10px] max-sm:gap-1">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/21f35ffbc12df51095a6221a9131b822ad43268c"
            alt="Virtual store"
            className="w-4 h-4 max-md:w-3.5 max-md:h-3.5 max-sm:w-2.5 max-sm:h-2.5"
          />
          <span>virtual store</span>
        </div>
      </div>
    </section>
  );
};
