// components/MenuOverview.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Coffee, Utensils, Moon, ArrowRight, Clock, Heart, Sparkles, ChefHat } from "lucide-react";

const menuCategories = [
  {
    title: "Breakfast",
    tamil: "காலை உணவு",
    icon: <Coffee size={28} />,
    description: "Start your day with authentic South Indian breakfast",
    items: ["Idli", "Dosa", "Pongal", "Poori", "Upma", "Paniyaram", "Vadai"],
    color: "from-orange-500/20 to-amber-500/20",
    delay: "animation-delay-200",
    image: "/breakfast-icon.png"
  },
  {
    title: "Lunch",
    tamil: "மதிய உணவு",
    icon: <Utensils size={28} />,
    description: "Wholesome traditional meals for a satisfying lunch",
    items: ["Sambar", "Rasam", "Mor Kuzhambu", "Vathal Kuzhambu", "Poriyal", "Kootu", "Rice Varieties"],
    color: "from-red-500/20 to-rose-500/20",
    delay: "animation-delay-400",
    image: "/lunch-icon.png"
  },
  {
    title: "Dinner",
    tamil: "இரவு உணவு",
    icon: <Moon size={28} />,
    description: "Light yet flavorful dinner options",
    items: ["Chapathi", "Idiyappam", "Dosa", "Kurma", "Paniyaram"],
    color: "from-purple-500/20 to-indigo-500/20",
    delay: "animation-delay-600",
    image: "/dinner-icon.png"
  }
];

const highlights = [
  {
    icon: <Heart size={20} />,
    text: "Homemade & Hygienic",
    description: "Prepared with love and care"
  },
  {
    icon: <Clock size={20} />,
    text: "Freshly Cooked",
    description: "Made fresh every day"
  },
  {
    icon: <Sparkles size={20} />,
    text: "Traditional Recipes",
    description: "Authentic South Indian taste"
  },
  {
    icon: <ChefHat size={20} />,
    text: "Expert Chefs",
    description: "Experienced culinary team"
  }
];

export default function MenuOverview() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 glass-premium rounded-full px-4 py-1.5 mb-4 border border-gold/30">
            <ChefHat size={16} className="text-gold" />
            <span className="text-gold-light text-xs tracking-wider">OUR MENU</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white drop-shadow-2xl">Discover Our</span>
            <span className="shine-text block">Signature Dishes</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Experience the authentic flavors of South India with our carefully crafted menu
          </p>
        </div>

        {/* Menu Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {menuCategories.map((category, idx) => (
            <div
              key={idx}
              className={`group relative animate-slide-up ${category.delay}`}
            >
              <div className="glass-premium rounded-2xl overflow-hidden border border-gold/30 hover:border-gold/60 transition-all duration-500 hover:transform hover:-translate-y-2 backdrop-blur-xl bg-black/40 h-full">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative p-6 z-10">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-gold transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{category.title}</h3>
                      <p className="text-gold-light/70 text-sm">{category.tamil}</p>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-white/60 text-sm mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  {/* Items List */}
                  <div className="space-y-2 mb-6">
                    <div className="flex flex-wrap gap-2">
                      {category.items.slice(0, 5).map((item, itemIdx) => (
                        <span
                          key={itemIdx}
                          className="text-xs px-2 py-1 rounded-full bg-gold/10 text-gold-light border border-gold/20"
                        >
                          {item}
                        </span>
                      ))}
                      {category.items.length > 5 && (
                        <span className="text-xs px-2 py-1 rounded-full text-white/50">
                          +{category.items.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* View Menu Link */}
                  <Link
                    href="/menu"
                    className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-all duration-300 group/link"
                  >
                    <span className="text-sm font-medium">View Full Menu</span>
                    <ArrowRight size={16} className="transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlights Section */}
        <div className="max-w-4xl mx-auto mb-12 animate-slide-up animation-delay-800">
          <div className="glass-premium rounded-2xl p-8 border border-gold/30 backdrop-blur-xl bg-black/40">
            <h3 className="text-gold text-xl font-semibold mb-6 text-center">Why Choose Our Food?</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="text-center group hover:transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-gold/20 transition-colors duration-300">
                    <div className="text-gold group-hover:scale-110 transition-transform duration-300">
                      {highlight.icon}
                    </div>
                  </div>
                  <p className="text-white font-semibold text-sm">{highlight.text}</p>
                  <p className="text-gold-light/50 text-xs mt-1">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Weekly Special Teaser */}
        <div className="max-w-4xl mx-auto animate-slide-up animation-delay-800">
          <div className="glass-premium rounded-2xl p-6 border border-gold/30 backdrop-blur-xl bg-gradient-to-r from-gold/5 to-transparent">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                  <Sparkles size={28} className="text-gold" />
                </div>
                <div>
                  <h3 className="text-gold text-xl font-semibold">Weekly Special Menu</h3>
                  <p className="text-white/60">Different menu for each day of the week</p>
                </div>
              </div>
              <Link
                href="/menu"
                className="px-6 py-2.5 bg-gradient-to-r from-gold to-gold-dark text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
              >
                <span>View Weekly Menu</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-slide-up animation-delay-800">
          <Link
            href="/order"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-gold to-gold-dark text-white font-bold rounded-full shadow-gold hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            <span>Order Now</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}