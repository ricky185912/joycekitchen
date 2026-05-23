// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Order", href: "/order" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Letter animation for nav items
  const AnimatedText = ({ text, href }: { text: string; href: string }) => {
    const letters = text.split("");
    
    return (
      <Link
        href={href}
        className="relative px-3 py-2 overflow-hidden group"
        onMouseEnter={() => setActiveHover(text)}
        onMouseLeave={() => setActiveHover(null)}
      >
        <div className="flex">
          {letters.map((letter, index) => (
            <span
              key={index}
              className="inline-block text-white/80 group-hover:text-gold transition-all duration-300 transform group-hover:-translate-y-1 group-hover:scale-110"
              style={{
                transitionDelay: `${index * 30}ms`,
                textShadow: activeHover === text ? "0 0 8px rgba(212, 175, 55, 0.6)" : "none",
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold via-gold-light to-gold transition-all duration-500 group-hover:w-full"></span>
      </Link>
    );
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-dark-brown/95 backdrop-blur-xl shadow-2xl py-2"
            : "bg-black/40 backdrop-blur-md py-5"
        }`}
      >
        <nav className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo with shine effect */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <Image
                  src="/jlogo.png"
                  alt="Joyce Kitchen"
                  fill
                  className="object-contain rounded-full transition-all duration-500 group-hover:scale-110 group-hover:shadow-gold/50"
                  priority
                />
              </div>
              <div>
                <h1 className="text-base md:text-xl font-bold tracking-tight">
                  <span className="text-white drop-shadow-lg transition-all duration-300 group-hover:text-gold">JOYCE</span>
                  <span className="text-gold drop-shadow-lg transition-all duration-300 group-hover:text-gold-light"> KITCHEN</span>
                </h1>
                <p className="text-[10px] md:text-xs text-gold-light/90 tracking-wider font-medium">
                  CLOUD KITCHEN
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navItems.map((item) => (
                <AnimatedText key={item.name} text={item.name} href={item.href} />
              ))}
              
              {/* Order Now Button with improved contrast */}
              <div className="relative ml-6 overflow-hidden rounded-full group">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-gold-light/30 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <Link
                  href="/order"
                  className="relative px-6 py-2.5 bg-gradient-to-r from-gold to-gold-dark text-white font-bold rounded-full shadow-lg transition-all duration-300 hover:shadow-gold/50 hover:scale-105 block"
                >
                  ORDER NOW
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button - Better visibility */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-black/80 backdrop-blur-md border border-gold/50 text-gold transition-all duration-300 hover:scale-105 hover:bg-black/90"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation - Increased opacity for better visibility */}
          <div
            className={`md:hidden absolute top-full left-0 right-0 transition-all duration-500 overflow-hidden ${
              isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-black/95 backdrop-blur-xl mx-4 mt-3 rounded-2xl p-5 space-y-3 shadow-2xl border border-gold/30">
              {navItems.map((item, idx) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-5 py-3 text-white/90 hover:text-gold font-medium rounded-xl transition-all duration-300 hover:bg-gold/10 hover:translate-x-2"
                  style={{
                    animationDelay: `${idx * 100}ms`,
                  }}
                >
                  {item.name}
                </Link>
              ))}
              {/* Improved Order Now button in mobile menu */}
              <Link
                href="/order"
                onClick={() => setIsOpen(false)}
                className="block px-5 py-3 mt-4 bg-gradient-to-r from-gold to-gold-dark text-white font-bold rounded-xl text-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-gold/50"
              >
                ORDER NOW
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Spacer */}
      <div className="h-[72px] md:h-[84px]"></div>
    </>
  );
}