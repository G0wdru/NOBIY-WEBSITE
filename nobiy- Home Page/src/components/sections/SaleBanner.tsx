
import React from "react";

export const SaleBanner: React.FC = () => {
  return (
    <section className="box-border relative mx-0 my-10 p-0">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/06b7bed24b9521b5537370da29b9aa23a759ab4f"
        alt="Sale banner"
        className="box-border w-full h-auto m-0 p-0"
      />
      <div className="box-border absolute -translate-x-2/4 -translate-y-2/4 text-center text-white m-0 p-0 left-2/4 top-2/4 w-[85%] max-w-[400px]">
        <div className="box-border text-xl sm:text-2xl md:text-[32px] mb-3 md:mb-5 m-0 p-0">
          end of the season sale
        </div>
        <button className="box-border text-[#5D5C66] text-xs sm:text-sm md:text-[15px] tracking-[1px] md:tracking-[1.5px] m-0 px-4 sm:px-[30px] py-2 md:py-2.5 rounded-[30px] border-[1.5px] border-solid border-[#5D5C66] hover:bg-[#5D5C66] hover:text-white transition-colors">
          Shop Sale
        </button>
      </div>
    </section>
  );
};
