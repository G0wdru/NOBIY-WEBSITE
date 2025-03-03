
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "@/components/ui/ProductCard";

export const NewArrivals: React.FC = () => {
  const stickyRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!stickyRef.current || !containerRef.current) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate how far we've scrolled into the section
      const scrollProgress = Math.max(0, Math.min(1, -containerTop / (containerHeight - windowHeight)));
      
      // Apply a subtle parallax effect to the sticky image
      if (stickyRef.current) {
        stickyRef.current.style.transform = `translateY(${scrollProgress * 20}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="box-border bg-black m-0 p-10 relative">
      <div className="box-border text-center mb-10 m-0 p-0">
        <h2 className="box-border text-white text-[42px] mb-2.5 m-0 p-0 animate-fade-in">
          New Arrivals
        </h2>
        <Link
          to="/new-arrivals"
          className="box-border text-white text-base m-0 p-0 hover:text-gray-300 transition-colors"
        >
          See All New Arrivals
        </Link>
      </div>

      <div className="box-border grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[30px] m-0 p-0 max-sm:grid-cols-[1fr]">
        <div ref={stickyRef} className="sticky top-20 h-fit transition-transform duration-500 ease-out">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/925b9cfaca2adc592cc43a968a5ad906fede9fc8"
            alt="Featured collection"
            className="box-border w-full h-auto m-0 p-0 rounded-[15px] hover:opacity-90 transition-opacity duration-300"
          />
        </div>
        <div className="box-border grid grid-cols-2 gap-5 m-0 p-0">
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
      </div>
    </section>
  );
};
