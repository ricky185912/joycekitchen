// app/order/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, MessageCircle, Clock, MapPin, Coffee, Utensils, Moon, ChevronRight, Sparkles, Heart, Star } from "lucide-react";

export default function OrderPage() {
  const [isHovering, setIsHovering] = useState<string | null>(null);

  const phoneNumber = "9790735405";
  const whatsappNumber = "9790735405";
  const alternateNumbers = ["9363791814", "8438166305"];

  const orderOptions = [
    {
      title: "Call to Order",
      icon: <Phone size={32} />,
      description: "Speak directly with our team",
      action: `tel:${phoneNumber}`,
      color: "from-blue-500 to-blue-700",
      delay: "animation-delay-200"
    },
    {
      title: "WhatsApp Order",
      icon: <MessageCircle size={32} />,
      description: "Chat & order instantly",
      action: `https://wa.me/91${whatsappNumber}`,
      color: "from-green-500 to-green-700",
      delay: "animation-delay-400"
    }
  ];

  const specials = [
    { icon: <Clock />, text: "Freshly Prepared", subtext: "Made to order" },
    { icon: <Sparkles />, text: "Homemade Taste", subtext: "Traditional recipes" },
    { icon: <Heart />, text: "Hygienic", subtext: "Clean & safe" },
    { icon: <Star />, text: "Premium Quality", subtext: "Best ingredients" }
  ];

  const popularItems = [
    { name: "Special Breakfast Combo", tamil: "சிறப்பு காலை உணவு", time: "7 AM - 10:30 AM" },
    { name: "Traditional Lunch Thali", tamil: "சாத்திய சாப்பாடு", time: "12 PM - 3 PM" },
    { name: "Healthy Dinner Pack", tamil: "ஆரோக்கியமான இரவு உணவு", time: "7 PM - 9:30 PM" }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Images with Crossfade */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0">
          <Image
            src="/img4.jpg"
            alt="Order Background"
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

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 pt-24">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 glass-premium rounded-full px-5 py-2 mb-6 border border-gold/30">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold"></span>
            </span>
            <span className="text-gold-light text-sm tracking-wider">ORDER NOW</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white drop-shadow-2xl">Place Your</span>
            <span className="shine-text block">Order Today</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Experience authentic homemade food delivered fresh to your doorstep
          </p>
        </div>

        {/* Order Options Grid */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {orderOptions.map((option, idx) => (
              <a
                key={idx}
                href={option.action}
                target={option.title === "WhatsApp Order" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 animate-slide-up ${option.delay}`}
                onMouseEnter={() => setIsHovering(option.title)}
                onMouseLeave={() => setIsHovering(null)}
              >
                {/* Glass Background */}
                <div className="glass-premium backdrop-blur-xl border border-gold/30 rounded-2xl p-8 h-full relative z-10">
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <div className="flex items-start justify-between">
                    <div>
                      <div className={`text-gold mb-4 transform transition-transform duration-300 group-hover:scale-110`}>
                        {option.icon}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {option.title}
                      </h2>
                      <p className="text-white/60 mb-4">{option.description}</p>
                      <div className="flex items-center gap-2 text-gold group-hover:gap-3 transition-all duration-300">
                        <span className="font-semibold">Order Now</span>
                        <ChevronRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="hidden md:block opacity-20 group-hover:opacity-40 transition-opacity">
                      {option.title === "Call to Order" ? (
                        <Phone size={80} />
                      ) : (
                        <MessageCircle size={80} />
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${option.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Numbers Section */}
        <div className="max-w-4xl mx-auto mb-16 animate-slide-up animation-delay-600">
          <div className="glass-premium rounded-2xl p-6 border border-gold/30 backdrop-blur-xl">
            <h3 className="text-gold text-xl font-semibold mb-4 text-center">📞 Direct Contact Numbers</h3>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center justify-center gap-3 px-6 py-3 glass-beige rounded-xl hover:bg-gold/10 transition-all duration-300 group"
              >
                <Phone size={20} className="text-gold group-hover:scale-110 transition-transform" />
                <span className="text-white font-medium">{phoneNumber}</span>
                <span className="text-gold-light text-sm">(Primary)</span>
              </a>
              {alternateNumbers.map((num, idx) => (
                <a
                  key={idx}
                  href={`tel:${num}`}
                  className="flex items-center justify-center gap-3 px-6 py-3 glass-beige rounded-xl hover:bg-gold/10 transition-all duration-300 group"
                >
                  <Phone size={20} className="text-gold group-hover:scale-110 transition-transform" />
                  <span className="text-white/80 font-medium">{num}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* WhatsApp Direct Section */}
        <div className="max-w-4xl mx-auto mb-16 animate-slide-up animation-delay-800">
          <div className="glass-premium rounded-2xl p-6 border border-gold/30 backdrop-blur-xl bg-gradient-to-r from-green-500/5 to-transparent">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                  <MessageCircle size={32} className="text-green-400" />
                </div>
                <div>
                  <h3 className="text-gold text-xl font-semibold">Order on WhatsApp</h3>
                  <p className="text-white/60">Click the button to chat with us directly</p>
                </div>
              </div>
              <a
                href={`https://wa.me/91${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
              >
                <MessageCircle size={20} />
                <span>Chat on WhatsApp</span>
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Specials Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gold mb-8 animate-slide-up animation-delay-200">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {specials.map((item, idx) => (
              <div
                key={idx}
                className="glass-premium rounded-xl p-4 text-center border border-gold/20 hover:border-gold/50 transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                <div className="text-gold mb-2 flex justify-center">{item.icon}</div>
                <p className="text-white/90 text-sm font-semibold">{item.text}</p>
                <p className="text-gold-light/60 text-xs mt-1">{item.subtext}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Items Section */}
        <div className="max-w-4xl mx-auto mb-16 animate-slide-up animation-delay-600">
          <div className="glass-premium rounded-2xl p-6 border border-gold/30 backdrop-blur-xl">
            <h3 className="text-gold text-xl font-semibold mb-6 text-center flex items-center justify-center gap-2">
              <Star size={20} className="fill-gold" />
              Popular Orders
              <Star size={20} className="fill-gold" />
            </h3>
            <div className="space-y-4">
              {popularItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row justify-between items-center p-4 glass-beige rounded-xl hover:bg-gold/5 transition-all duration-300"
                >
                  <div>
                    <p className="text-white font-semibold">{item.name}</p>
                    <p className="text-gold-light/60 text-sm">{item.tamil}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-2 md:mt-0">
                    <Clock size={14} className="text-gold" />
                    <span className="text-white/60 text-sm">{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Delivery Info */}
        <div className="max-w-4xl mx-auto text-center animate-slide-up animation-delay-800">
          <div className="glass-premium rounded-2xl p-6 border border-gold/30">
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin size={18} className="text-gold" />
              <p className="text-gold-light font-semibold">Delivery Information</p>
            </div>
            <p className="text-white/70 text-sm">
              Free delivery within 5km • Minimum order ₹100 • Delivery time: 30-45 mins
            </p>
            <p className="text-gold-light/60 text-xs mt-2">
              No.54, Venkatesan Street, West Tambaram – 600045 (Opp to Sundharam Finance)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}