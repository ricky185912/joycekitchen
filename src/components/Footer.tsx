// components/Footer.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, Package, Heart, Truck, ChefHat } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-dark-brown/95 backdrop-blur-md border-t border-gold/20 pt-16 pb-8 mt-20">
      {/* Gold Shine Line at Top */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold to-transparent animate-shine"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Services / Features Section */}
          <div className="space-y-4">
            <h3 className="text-gold text-xl font-bold mb-6 relative inline-block">
              Services & Features
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gold rounded-full"></span>
            </h3>
            
            {/* Food Services */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gold-light">
                <ChefHat size={18} className="text-gold" />
                <span className="font-semibold text-beige">Food Services</span>
              </div>
              <div className="grid grid-cols-3 gap-2 pl-6">
                <span className="text-beige/80 text-sm">Breakfast</span>
                <span className="text-beige/80 text-sm">Lunch</span>
                <span className="text-beige/80 text-sm">Dinner</span>
              </div>
            </div>

            {/* Delivery */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gold-light">
                <Truck size={18} className="text-gold" />
                <span className="font-semibold text-beige">Delivery</span>
              </div>
              <div className="pl-6 space-y-1">
                <p className="text-beige/80 text-sm">✓ Daily door delivery</p>
                <p className="text-beige/80 text-sm">✓ On time delivery</p>
              </div>
            </div>

            {/* Food Quality */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gold-light">
                <Heart size={18} className="text-gold" />
                <span className="font-semibold text-beige">Food Quality</span>
              </div>
              <div className="pl-6 space-y-1">
                <p className="text-beige/80 text-sm">✓ Homemade & hygienic</p>
                <p className="text-beige/80 text-sm">✓ Freshly cooked every day</p>
                <p className="text-beige/80 text-sm">✓ Made with care and cleanliness</p>
              </div>
            </div>

            {/* Packages */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gold-light">
                <Package size={18} className="text-gold" />
                <span className="font-semibold text-beige">Packages</span>
              </div>
              <div className="pl-6 space-y-1">
                <p className="text-beige/80 text-sm">✓ Monthly packages available</p>
                <p className="text-beige/80 text-sm">✓ Affordable</p>
                <p className="text-beige/80 text-sm">✓ Healthy</p>
                <p className="text-beige/80 text-sm">✓ Convenient</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-gold text-xl font-bold mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gold rounded-full"></span>
            </h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Phone size={18} className="text-gold" />
                  <span className="font-semibold text-beige">Phone Numbers</span>
                </div>
                <div className="pl-6 space-y-2">
                  <a href="tel:9790735405" className="block text-beige/80 hover:text-gold transition-colors duration-300 text-sm">
                    97907 35405
                  </a>
                  <a href="tel:9363791814" className="block text-beige/80 hover:text-gold transition-colors duration-300 text-sm">
                    93637 91814
                  </a>
                  <a href="tel:8438166305" className="block text-beige/80 hover:text-gold transition-colors duration-300 text-sm">
                    84381 66305
                  </a>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                  <span className="font-semibold text-beige">WhatsApp</span>
                </div>
                <div className="pl-6">
                  <a href="https://wa.me/919790735405" target="_blank" rel="noopener noreferrer" className="text-beige/80 hover:text-gold transition-colors duration-300 text-sm">
                    97907 35405
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Quick Links */}
          <div className="space-y-4">
            <h3 className="text-gold text-xl font-bold mb-6 relative inline-block">
              Connect With Us
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gold rounded-full"></span>
            </h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                  <span className="font-semibold text-beige">Instagram</span>
                </div>
                <div className="pl-6">
                  <a href="https://instagram.com/joycekitchen28" target="_blank" rel="noopener noreferrer" className="text-beige/80 hover:text-gold transition-colors duration-300 text-sm">
                    @joycekitchen28
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-6">
              <h4 className="text-gold-light font-semibold mb-3">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/menu" className="block text-beige/80 hover:text-gold transition-colors duration-300 text-sm">
                  Our Menu
                </Link>
                <Link href="/order" className="block text-beige/80 hover:text-gold transition-colors duration-300 text-sm">
                  Order Online
                </Link>
                <Link href="/about" className="block text-beige/80 hover:text-gold transition-colors duration-300 text-sm">
                  About Us
                </Link>
              </div>
            </div>
          </div>

          {/* Address & Hours */}
          <div className="space-y-4">
            <h3 className="text-gold text-xl font-bold mb-6 relative inline-block">
              Visit Us
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gold rounded-full"></span>
            </h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex items-start gap-2 mb-3">
                  <MapPin size={18} className="text-gold mt-0.5" />
                  <span className="font-semibold text-beige">Address</span>
                </div>
                <div className="pl-6">
                  <p className="text-beige/80 text-sm leading-relaxed">
                    No.54, Venkatesan Street,<br />
                    West Tambaram – 600045<br />
                    (Opp to Sundharam Finance)
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={18} className="text-gold" />
                  <span className="font-semibold text-beige">Opening Hours</span>
                </div>
                <div className="pl-6 space-y-1">
                  <p className="text-beige/80 text-sm">Monday - Sunday</p>
                  <p className="text-beige/80 text-sm">7:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8">
                <Image
                  src="/jlogo.png"
                  alt="Joyce Kitchen"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <p className="text-beige/60 text-sm">
                © 2024 Joyce Kitchen. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}