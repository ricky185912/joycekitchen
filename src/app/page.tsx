// app/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import MenuOverview from "@/components/MenuOverview";
import ReviewSection from "@/components/ReviewSection";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/img1.jpg", "/img2.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Images with Darker Overlay for Better Text Visibility */}
      <div className="fixed inset-0 z-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={img}
                alt={`Joyce Kitchen Background ${index + 1}`}
                fill
                className="object-cover brightness-90 contrast-125"
                priority={index === 0}
              />
              {/* Multiple Dark Overlays for Better Contrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
              <div className="absolute inset-0 bg-dark-brown/60 mix-blend-multiply" />
              {/* Vignette Effect for Focus on Center */}
              <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/60" />
            </div>
          </div>
        ))}
      </div>

      {/* Hero Content with Enhanced Text Visibility */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading with Stronger Text Shadows */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
            <span className="block text-white drop-shadow-2xl animate-slide-up [text-shadow:0_2px_10px_rgba(0,0,0,0.5)]">
              ICACIES FLAVORS
            </span>
            <span className="block shine-text animate-slide-up animation-delay-200 [text-shadow:0_2px_10px_rgba(0,0,0,0.3)]">
              & SEASONS
            </span>
          </h1>

          <p className="text-white/95 text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-slide-up animation-delay-400 leading-relaxed drop-shadow-lg">
            <span className="block shine-text animate-slide-up animation-delay-200 [text-shadow:0_2px_10px_rgba(0,0,0,0.3)]">
              EVENT ORDERS UNDERTAKEN
            </span>
          </p>

          <p className="text-white/95 text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-slide-up animation-delay-400 leading-relaxed drop-shadow-lg">
            Experience the perfect blend of traditional recipes and modern culinary artistry, 
            delivered fresh from our cloud kitchen to your doorstep.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-slide-up animation-delay-600">
            <Link
              href="/menu"
              className="px-8 py-3 glass-beige backdrop-blur-md text-white font-semibold rounded-full border border-gold/60 hover:border-gold transition-all duration-300 hover:scale-105 hover:shadow-gold bg-black/20"
            >
              EXPLORE MENU
            </Link>
            <Link href="/order"
                className="relative px-9 py-3 bg-gradient-to-r from-gold to-gold-dark text-dark-brown font-bold rounded-full shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-gold/50 overflow-hidden group"
              >
                <span className="relative z-10 text-white">ONLINE BOOKING NOW</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Link>
          </div>
        </div>
      </div>

      {/* Image Counter Indicator */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentImage
                ? "w-8 h-2 bg-gold shadow-gold"
                : "w-2 h-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
      {/* Menu Overview Section */}
      <MenuOverview />
      {/* Review Section */}
      <ReviewSection />
    </div>
  );
}