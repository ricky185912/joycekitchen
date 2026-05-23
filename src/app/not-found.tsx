// app/not-found.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Home, ChefHat, Utensils } from "lucide-react";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 2) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/img4.jpg"
            alt="Page Not Found"
            fill
            className="object-cover brightness-50 contrast-125"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
          <div className="absolute inset-0 bg-dark-brown/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/60" />
        </div>
      </div>

      {/* Animated Gold Borders */}
      <div className="fixed top-0 left-0 right-0 z-20 h-8 md:h-12 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold to-transparent animate-shine" />
        <div className="absolute -top-4 -left-4 w-16 h-16 md:w-24 md:h-24">
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute top-0 left-0 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-br from-gold to-gold-dark rounded-full shadow-gold animate-float" />
            <div className="absolute top-4 left-4 w-2 h-2 md:w-3 md:h-3 bg-gradient-to-br from-gold-light to-gold rounded-full shadow-gold animate-float-delayed" />
          </div>
        </div>
        <div className="absolute -top-4 -right-4 w-16 h-16 md:w-24 md:h-24">
          <div className="absolute inset-0 animate-spin-slow-reverse">
            <div className="absolute top-0 right-0 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-bl from-gold to-gold-dark rounded-full shadow-gold animate-float-delayed" />
            <div className="absolute top-4 right-4 w-2 h-2 md:w-3 md:h-3 bg-gradient-to-bl from-gold-light to-gold rounded-full shadow-gold animate-float" />
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-20 h-8 md:h-12 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold to-transparent animate-shine" />
        <div className="absolute -bottom-4 -left-4 w-16 h-16 md:w-24 md:h-24">
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute bottom-0 left-0 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-tr from-gold to-gold-dark rounded-full shadow-gold animate-float" />
          </div>
        </div>
        <div className="absolute -bottom-4 -right-4 w-16 h-16 md:w-24 md:h-24">
          <div className="absolute inset-0 animate-spin-slow-reverse">
            <div className="absolute bottom-0 right-0 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-tl from-gold to-gold-dark rounded-full shadow-gold animate-float-delayed" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <div className="max-w-2xl mx-auto">
          {/* Animated Chef Hat / Utensil Icon */}
          <div className="relative mb-8">
            <div 
              className="w-32 h-32 mx-auto relative animate-bounce-slow"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-gold-dark/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="relative w-32 h-32 bg-glass-premium rounded-full flex items-center justify-center border border-gold/40 backdrop-blur-md">
                <ChefHat size={64} className="text-gold animate-pulse-slow" />
              </div>
            </div>
            
            {/* Steam Animation */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="flex gap-2">
                <div className="w-1 h-6 bg-gold/40 rounded-full animate-steam-1"></div>
                <div className="w-1 h-8 bg-gold/40 rounded-full animate-steam-2"></div>
                <div className="w-1 h-5 bg-gold/40 rounded-full animate-steam-3"></div>
              </div>
            </div>
          </div>

          {/* 404 Number */}
          <h1 className="text-8xl md:text-9xl font-bold mb-4 animate-slide-up">
            <span className="text-white/20 drop-shadow-2xl">4</span>
            <span className="shine-text">0</span>
            <span className="text-white/20 drop-shadow-2xl">4</span>
          </h1>

          {/* Message */}
          <div className="mb-8 animate-slide-up animation-delay-200">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              This Page Is Still
              <span className="shine-text block mt-2">Cooking... 🍳</span>
            </h2>
            <p className="text-white/70 text-lg max-w-md mx-auto">
              Our chefs are busy preparing something delicious for this page. 
              It's not ready yet, but we promise it'll be worth the wait!
            </p>
          </div>

          {/* Cooking Animation - Pots and Pans */}
          <div className="flex justify-center gap-4 mb-10 animate-slide-up animation-delay-400">
            <div className="relative">
              <div className="w-12 h-8 bg-gold/20 rounded-t-full border-t-2 border-gold/40 animate-shake"></div>
              <div className="w-8 h-1 bg-gold/40 mx-auto mt-1 rounded-full"></div>
            </div>
            <div className="relative">
              <div className="w-14 h-10 bg-gold/20 rounded-t-full border-t-2 border-gold/40 animate-shake-delayed"></div>
              <div className="w-10 h-1 bg-gold/40 mx-auto mt-1 rounded-full"></div>
            </div>
            <div className="relative">
              <div className="w-10 h-9 bg-gold/20 rounded-t-full border-t-2 border-gold/40 animate-shake"></div>
              <div className="w-7 h-1 bg-gold/40 mx-auto mt-1 rounded-full"></div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-600">
            <Link
              href="/"
              className="px-8 py-3 glass-premium text-white font-semibold rounded-full border border-gold/40 hover:border-gold transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
            >
              <Home size={18} className="group-hover:-translate-y-0.5 transition-transform" />
              <span>Go Back Home</span>
            </Link>
            
            <Link
              href="/menu"
              className="px-8 py-3 bg-gradient-to-r from-gold to-gold-dark text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
            >
              <Utensils size={18} />
              <span>Explore Our Menu</span>
            </Link>
          </div>

          {/* Cute Cooking Quote */}
          <p className="text-gold-light/50 text-sm mt-10 animate-fade-in animation-delay-800">
             Estimated wait time: A few moments... Just like good food!
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        @keyframes steam-1 {
          0% {
            transform: translateY(0) scaleY(1);
            opacity: 0.6;
          }
          100% {
            transform: translateY(-30px) scaleY(2);
            opacity: 0;
          }
        }
        
        @keyframes steam-2 {
          0% {
            transform: translateY(0) scaleY(1);
            opacity: 0.5;
          }
          100% {
            transform: translateY(-35px) scaleY(2);
            opacity: 0;
          }
        }
        
        @keyframes steam-3 {
          0% {
            transform: translateY(0) scaleY(1);
            opacity: 0.4;
          }
          100% {
            transform: translateY(-25px) scaleY(2);
            opacity: 0;
          }
        }
        
        @keyframes shake {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(3deg);
          }
          75% {
            transform: rotate(-3deg);
          }
        }
        
        @keyframes shake-delayed {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-3deg);
          }
          75% {
            transform: rotate(3deg);
          }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        
        .animate-steam-1 {
          animation: steam-1 2s ease-in-out infinite;
        }
        
        .animate-steam-2 {
          animation: steam-2 2.5s ease-in-out infinite;
        }
        
        .animate-steam-3 {
          animation: steam-3 1.8s ease-in-out infinite;
        }
        
        .animate-shake {
          animation: shake 0.5s ease-in-out infinite;
        }
        
        .animate-shake-delayed {
          animation: shake-delayed 0.5s ease-in-out infinite 0.25s;
        }
      `}</style>
    </div>
  );
}