
import React from "react";

export const InstagramFeed: React.FC = () => {
  return (
    <section className="box-border bg-black m-0 p-5 md:p-10">
      <h2 className="box-border text-white text-3xl md:text-[42px] text-center mb-6 md:mb-10 m-0 pb-2.5 p-0">
        @nobiy on Instagram
      </h2>
      <div className="box-border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-[30px] m-0 p-0">
        <div className="overflow-hidden rounded-[15px] hover:scale-105 transition-transform duration-300">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/306528e93288147b889391c13c022320b1164d79"
            alt="Instagram post"
            className="box-border w-full h-60 md:h-80 object-cover m-0 p-0 hover:opacity-90 transition-opacity"
          />
        </div>
        <div className="overflow-hidden rounded-[15px] hover:scale-105 transition-transform duration-300">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/463e87cdc14265042760b83666b6a659dedd0965"
            alt="Instagram post"
            className="box-border w-full h-60 md:h-80 object-cover m-0 p-0 hover:opacity-90 transition-opacity"
          />
        </div>
        <div className="overflow-hidden rounded-[15px] hover:scale-105 transition-transform duration-300">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e67d7e11570bb858c12c3f1689fb149b8d36cc65"
            alt="Instagram post"
            className="box-border w-full h-60 md:h-80 object-cover m-0 p-0 hover:opacity-90 transition-opacity"
          />
        </div>
        <div className="overflow-hidden rounded-[15px] hover:scale-105 transition-transform duration-300">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4774c05816fa7bc1e765396a2ffbca66f6a9b953"
            alt="Instagram post"
            className="box-border w-full h-60 md:h-80 object-cover m-0 p-0 hover:opacity-90 transition-opacity"
          />
        </div>
      </div>
    </section>
  );
};
