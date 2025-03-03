import React from "react";

interface AdvantageItemProps {
  title: string;
  description: string;
}

const AdvantageItem: React.FC<AdvantageItemProps> = ({
  title,
  description,
}) => (
  <div className="box-border flex gap-5 mb-[30px] m-0 p-0">
    <div className="box-border w-20 h-20 bg-[#F9F9F9] m-0 p-0 rounded-[5px]" />
    <div>
      <h3 className="box-border text-[#45454C] font-bold mb-2.5 m-0 p-0">
        {title}
      </h3>
      <p className="box-border text-[#45454C] m-0 p-0">{description}</p>
    </div>
  </div>
);

export const Advantages: React.FC = () => {
  return (
    <section className="box-border flex bg-white mx-0 my-10 p-0 rounded-[10px] max-sm:flex-col">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/646cbbe660187ec36cc422228bf2a69878a72f5a"
        alt="Advantages"
        className="box-border w-6/12 h-auto object-cover m-0 p-0 max-sm:w-full"
      />
      <div className="box-border m-0 p-10">
        <h2 className="box-border text-[#45454C] text-[42px] mb-10 m-0 p-0">
          Advantages to shopping with us!!
        </h2>
        <div>
          <AdvantageItem
            title="Inclusive Fashion"
            description="Celebrate individuality with clothing for everyone."
          />
          <AdvantageItem
            title="Comfort & Versatility"
            description="Designed to fit all styles and needs."
          />
          <AdvantageItem
            title="Support Equality"
            description="Be part of a movement for diversity and acceptance."
          />
        </div>
      </div>
    </section>
  );
};
