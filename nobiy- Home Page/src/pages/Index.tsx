
import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { NewArrivals } from "@/components/sections/NewArrivals";
import { Advantages } from "@/components/sections/Advantages";
import { Categories } from "@/components/sections/Categories";
import { BestSellers } from "@/components/sections/BestSellers";
import { SaleBanner } from "@/components/sections/SaleBanner";
import { TruthBanner } from "@/components/sections/TruthBanner";
import { LoadingScreen } from "@/components/ui/LoadingScreen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Replace this URL with your actual video URL
  const videoSrc = "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4";

  return (
    <>
      {isLoading && (
        <LoadingScreen 
          onLoadingComplete={() => setIsLoading(false)} 
          videoSrc={videoSrc}
        />
      )}
      
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500&family=Open+Sans:wght@300;400;600;700&family=Raleway:wght@400;500&family=Poppins:wght@300;400;500&family=Antonio:wght@600&family=Calvera&display=swap"
        rel="stylesheet"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <div className={`min-h-screen bg-black ${isLoading ? 'hidden' : 'animate-fade-in'}`}>
        <Header />
        <main>
          <Hero />
          <NewArrivals />
          <Advantages />
          <Categories />
          <BestSellers />
          <SaleBanner />
          <TruthBanner />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
