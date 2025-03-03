
import React, { useState, useEffect } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
  videoSrc: string;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ 
  onLoadingComplete, 
  videoSrc 
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // After video finishes, hide the loading screen
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onLoadingComplete();
      }, 500); // Wait for fade out animation to complete
    }, 3000); // Adjust this time based on your video length

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500">
      <video 
        autoPlay 
        muted 
        playsInline
        className="w-full h-full object-cover"
        onEnded={() => setIsVisible(false)}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
