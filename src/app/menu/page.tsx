// app/menu/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, BookOpen, Coffee, Utensils, Moon, Calendar } from "lucide-react";

export default function MenuPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const pages = [
    {
      title: "Breakfast Menu",
      icon: <Coffee size={28} />,
      items: [
        { name: "Idli", tamil: "இட்லி" },
        { name: "Dosa", tamil: "தோசை" },
        { name: "Pongal", tamil: "பொங்கல்" },
        { name: "Poori", tamil: "பூரி" },
        { name: "Upma", tamil: "உப்புமா" },
        { name: "Paniyaram", tamil: "குழி பணியாரம்" },
        { name: "Rava Kichadi", tamil: "ரவா கிச்சடி" },
        { name: "Sambar", tamil: "சாம்பார்" },
        { name: "Chutney", tamil: "சட்னி" },
        { name: "Kara Chutney", tamil: "கார சட்னி" },
        { name: "Vadai", tamil: "வடை" },
        { name: "Tea", tamil: "டீ" },
        { name: "Coffee", tamil: "காபி" },
      ]
    },
    {
      title: "Lunch Menu",
      icon: <Utensils size={28} />,
      items: [
        { name: "Sambar", tamil: "சாம்பார்" },
        { name: "Rasam", tamil: "ரசம்" },
        { name: "Mor Kuzhambu", tamil: "மோர் குழம்பு" },
        { name: "Vathal Kuzhambu", tamil: "வத்த குழம்பு" },
        { name: "Poriyal", tamil: "பொரியல்" },
        { name: "Kootu", tamil: "கூட்டு" },
        { name: "Appalam", tamil: "அப்பளம்" },
        { name: "Curd", tamil: "தயிர்" },
        { name: "Rice varieties", tamil: "அன்ன வகைகள்" },
      ]
    },
    {
      title: "Dinner Menu",
      icon: <Moon size={28} />,
      items: [
        { name: "Chapathi", tamil: "சப்பாத்தி" },
        { name: "Idiyappam", tamil: "இடியாப்பம்" },
        { name: "Paniyaram", tamil: "குழி பணியாரம்" },
        { name: "Dosa", tamil: "தோசை" },
        { name: "Chutney", tamil: "சட்னி" },
        { name: "Sambar", tamil: "சாம்பார்" },
        { name: "Kurma", tamil: "குருமா" },
      ]
    }
  ];

  const weeklyMenu = [
    { 
      day: "Monday", 
      tamil: "திங்கள்",
      morning: [
        { en: "Idli", ta: "இட்லி" },
        { en: "Kichadi", ta: "கிச்சடி" },
        { en: "Chutney", ta: "சட்னி" },
        { en: "Sambar", ta: "சாம்பார்" }
      ],
      afternoon: [
        { en: "Sambar", ta: "சாம்பார்" },
        { en: "Sambar Poriyal", ta: "சாம்பார் பொரியல்" },
        { en: "Kootu", ta: "கூட்டு" },
        { en: "Rasam", ta: "ரசம்" },
        { en: "Mor", ta: "மோர்" },
        { en: "Appalam", ta: "அப்பளம்" }
      ],
      night: [
        { en: "Chapathi", ta: "சப்பாத்தி" },
        { en: "Channa", ta: "சென்னா" },
        { en: "Idli", ta: "இட்லி" },
        { en: "Chutney", ta: "சட்னி" }
      ]
    },
    { 
      day: "Tuesday", 
      tamil: "செவ்வாய்",
      morning: [
        { en: "Pongal", ta: "பொங்கல்" },
        { en: "Vadai", ta: "வடை" },
        { en: "Sambar", ta: "சாம்பார்" },
        { en: "Idli", ta: "இட்லி" },
        { en: "Chutney", ta: "சட்னி" }
      ],
      afternoon: [
        { en: "Sambar", ta: "சாம்பார்" },
        { en: "Mor Kuzhambu", ta: "மோர் குழம்பு" },
        { en: "Vathal Kuzhambu", ta: "வத்த குழம்பு" },
        { en: "Urulai Kilangu Varuval", ta: "உருளை கிழங்கு வறுவல்" },
        { en: "Poriyal", ta: "பொரியல்" },
        { en: "Appalam", ta: "அப்பளம்" }
      ],
      night: [
        { en: "Idli", ta: "இட்லி" },
        { en: "Dosa", ta: "தோசை" },
        { en: "Kothamalli Chutney", ta: "கொத்தமல்லி சட்னி" },
        { en: "Sambar", ta: "சாம்பார்" }
      ]
    },
    { 
      day: "Wednesday", 
      tamil: "புதன்",
      morning: [
        { en: "Semiya Kichadi", ta: "சேமியா கிச்சடி" },
        { en: "Idli", ta: "இட்லி" },
        { en: "Sambar", ta: "சாம்பார்" },
        { en: "Chutney", ta: "சட்னி" }
      ],
      afternoon: [
        { en: "Sambar", ta: "சாம்பார்" },
        { en: "Kootu", ta: "கூட்டு" },
        { en: "Poriyal", ta: "பொரியல்" },
        { en: "Rasam", ta: "ரசம்" },
        { en: "Appalam", ta: "அப்பளம்" },
        { en: "Mor", ta: "மோர்" }
      ],
      night: [
        { en: "Ragi Dosa", ta: "ராகி தோசை" },
        { en: "Godhumai Dosa", ta: "கோதுமை தோசை" },
        { en: "Idli", ta: "இட்லி" },
        { en: "Chutney", ta: "சட்னி" },
        { en: "Sambar", ta: "சாம்பார்" }
      ]
    },
    { 
      day: "Thursday", 
      tamil: "வியாழன்",
      morning: [
        { en: "Uthappam", ta: "உத்தப்பம்" },
        { en: "Kuzhi Paniyaram", ta: "குழி பணியாரம்" },
        { en: "Chutney", ta: "சட்னி" },
        { en: "Kara Chutney", ta: "கார சட்னி" }
      ],
      afternoon: [
        { en: "Urundai Kuzhambu", ta: "உருண்டை குழம்பு" },
        { en: "Keerai", ta: "கீரை" },
        { en: "Kootu", ta: "கூட்டு" },
        { en: "Poriyal", ta: "பொரியல்" },
        { en: "Appalam", ta: "அப்பளம்" },
        { en: "Rasam", ta: "ரசம்" },
        { en: "Mor", ta: "மோர்" }
      ],
      night: [
        { en: "Chapathi", ta: "சப்பாத்தி" },
        { en: "Paneer Butter Dosa / Idiyappam", ta: "பன்னீர் பட்டர் தோசை / இடியாப்பம்" },
        { en: "Chutney", ta: "சட்னி" },
        { en: "Sambar", ta: "சாம்பார்" }
      ]
    },
    { 
      day: "Friday", 
      tamil: "வெள்ளி",
      morning: [
        { en: "Poori", ta: "பூரி" },
        { en: "Kizhangu", ta: "கிழங்கு" },
        { en: "Idli", ta: "இட்லி" },
        { en: "Sambar", ta: "சாம்பார்" }
      ],
      afternoon: [
        { en: "Sambar", ta: "சாம்பார்" },
        { en: "Karunai Prai", ta: "கருணை பிரை" },
        { en: "Kootu", ta: "கூட்டு" },
        { en: "Poriyal", ta: "பொரியல்" },
        { en: "Rasam", ta: "ரசம்" },
        { en: "Mor", ta: "மோர்" },
        { en: "Appalam", ta: "அப்பளம்" }
      ],
      night: [
        { en: "Idli", ta: "இட்லி" },
        { en: "Dosa", ta: "தோசை" },
        { en: "Kara Chutney", ta: "காரசட்னி" },
        { en: "Sambar", ta: "சாம்பார்" }
      ]
    },
    { 
      day: "Saturday", 
      tamil: "சனி",
      morning: [
        { en: "Samba Godhumai Rava Kichadi", ta: "சம்பா கோதுமை ரவா கிச்சடி" },
        { en: "Idli", ta: "இட்லி" },
        { en: "Dosa", ta: "தோசை" },
        { en: "Sambar", ta: "சாம்பார்" },
        { en: "Chutney", ta: "சட்னி" }
      ],
      afternoon: [
        { en: "Vendakkai Kara Kuzhambu", ta: "வெண்டைக்காய் காரகுழம்பு" },
        { en: "Kootu", ta: "கூட்டு" },
        { en: "Poriyal", ta: "பொரியல்" },
        { en: "Rasam", ta: "ரசம்" },
        { en: "Mor", ta: "மோர்" },
        { en: "Appalam", ta: "அப்பளம்" }
      ],
      night: [
        { en: "Chapathi", ta: "சப்பாத்தி" },
        { en: "Kurma", ta: "குருமா" },
        { en: "Idli", ta: "இட்லி" },
        { en: "Dosa", ta: "தோசை" },
        { en: "Chutney", ta: "சட்னி" },
        { en: "Sambar", ta: "சாம்பார்" }
      ]
    },
    { 
      day: "Sunday", 
      tamil: "ஞாயிறு",
      morning: [
        { en: "Idiyappam", ta: "இடியாப்பம்" },
        { en: "Vadakari", ta: "வடகறி" },
        { en: "Thengai Paal", ta: "தேங்காய் பால்" },
        { en: "Idli", ta: "இட்லி" },
        { en: "Chutney", ta: "சட்னி" }
      ],
      afternoon: [
        { en: "Murungai Keerai Sambar", ta: "முருங்கை கீரை சாம்பார்" },
        { en: "Mor", ta: "மோர்" },
        { en: "Appalam", ta: "அப்பளம்" },
        { en: "Rasam", ta: "ரசம்" },
        { en: "Kootu", ta: "கூட்டு" },
        { en: "Poriyal", ta: "பொரியல்" }
      ],
      night: [
        { en: "Idli", ta: "இட்லி" },
        { en: "Dosa", ta: "தோசை" },
        { en: "Chutney", ta: "சட்னி" },
        { en: "Sambar", ta: "சாம்பார்" }
      ]
    },
  ];

  const [selectedWeekDay, setSelectedWeekDay] = useState(0);
  const [showWeekly, setShowWeekly] = useState(false);

  const nextPage = () => {
    if (!isFlipping && currentPage < pages.length - 1) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setTimeout(() => setIsFlipping(false), 300);
      }, 300);
    }
  };

  const prevPage = () => {
    if (!isFlipping && currentPage > 0) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setTimeout(() => setIsFlipping(false), 300);
      }, 300);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Images */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0">
          <Image
            src="/img3.jpg"
            alt="Menu Background"
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
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-20 h-8 md:h-12 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold to-transparent animate-shine" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 pt-24">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white drop-shadow-2xl">Our Premium</span>
            <span className="shine-text block">Menu Collection</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Experience the authentic flavors of South India with our carefully crafted menu
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-12 animate-slide-up animation-delay-200">
          <button
            onClick={() => setShowWeekly(false)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              !showWeekly
                ? "bg-gradient-to-r from-gold to-gold-dark text-white shadow-gold"
                : "glass-premium text-white/70 hover:text-white"
            }`}
          >
            <BookOpen className="inline mr-2" size={18} />
            Regular Menu
          </button>
          <button
            onClick={() => setShowWeekly(true)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              showWeekly
                ? "bg-gradient-to-r from-gold to-gold-dark text-white shadow-gold"
                : "glass-premium text-white/70 hover:text-white"
            }`}
          >
            <Calendar className="inline mr-2" size={18} />
            Weekly Special
          </button>
        </div>

        {/* Book-Style Menu */}
        {!showWeekly ? (
          <div className="max-w-6xl mx-auto">
            <div className="relative perspective-1000">
              <div
                className={`relative transition-all duration-500 transform-style-3d ${
                  isFlipping ? "scale-95 opacity-50" : "scale-100 opacity-100"
                }`}
              >
                <div className="glass-premium rounded-3xl overflow-hidden border border-gold/30 backdrop-blur-xl bg-black/40">
                  <div className="grid md:grid-cols-2">
                    {/* Left Page */}
                    <div className="p-8 border-r border-gold/20">
                      <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gold/20">
                        <div className="text-gold">{pages[currentPage].icon}</div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gold">
                          {pages[currentPage].title}
                        </h2>
                      </div>
                      <div className="space-y-4">
                        {pages[currentPage].items.map((item, idx) => (
                          <div
                            key={idx}
                            className="group hover:translate-x-2 transition-all duration-300"
                          >
                            <div>
                              <span className="text-white font-medium text-lg">{item.name}</span>
                              <p className="text-gold-light/70 text-sm">{item.tamil}</p>
                            </div>
                            <div className="mt-2 h-px bg-gradient-to-r from-gold/20 to-transparent"></div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Page */}
                    <div className="p-8">
                      <div className="mb-8">
                        <h3 className="text-gold-light text-xl font-semibold mb-4">Chef's Note</h3>
                        <p className="text-white/70 leading-relaxed">
                          All our dishes are prepared fresh daily with traditional recipes 
                          and premium ingredients. Each meal is crafted with love and 
                          attention to authentic South Indian flavors.
                        </p>
                      </div>
                      <div className="mt-8">
                        <h3 className="text-gold-light text-xl font-semibold mb-4">Our Promise</h3>
                        <div className="glass-premium rounded-xl p-4 border border-gold/20">
                          <p className="text-white/80">✓ Homemade & Hygienic</p>
                          <p className="text-white/80 mt-2">✓ Freshly Cooked Every Day</p>
                          <p className="text-white/80 mt-2">✓ Made with Care & Cleanliness</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Book Spine */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-full bg-gradient-to-r from-gold/40 via-gold to-gold/40"></div>
                </div>

                {/* Page Navigation */}
                <div className="flex justify-between mt-8 gap-4">
                  <button
                    onClick={prevPage}
                    disabled={currentPage === 0}
                    className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                      currentPage === 0
                        ? "opacity-30 cursor-not-allowed"
                        : "glass-premium text-white hover:shadow-gold"
                    }`}
                  >
                    <ChevronLeft size={18} />
                    Previous
                  </button>
                  <div className="text-white/60 text-sm">
                    Page {currentPage + 1} of {pages.length}
                  </div>
                  <button
                    onClick={nextPage}
                    disabled={currentPage === pages.length - 1}
                    className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                      currentPage === pages.length - 1
                        ? "opacity-30 cursor-not-allowed"
                        : "glass-premium text-white hover:shadow-gold"
                    }`}
                  >
                    Next
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Weekly Menu Section
          <div className="max-w-7xl mx-auto animate-fade-in">
            {/* Day Selector */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {weeklyMenu.map((day, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedWeekDay(idx)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    selectedWeekDay === idx
                      ? "bg-gradient-to-r from-gold to-gold-dark text-white shadow-gold"
                      : "glass-premium text-white/70 hover:text-white"
                  }`}
                >
                  {day.day}
                </button>
              ))}
            </div>

            {/* Weekly Menu Content */}
            <div className="glass-premium rounded-3xl p-8 border border-gold/30 backdrop-blur-xl bg-black/40">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gold mb-2">
                  {weeklyMenu[selectedWeekDay].day}
                </h2>
                <p className="text-gold-light text-xl">{weeklyMenu[selectedWeekDay].tamil}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Morning */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-gold/30 pb-2">
                    <Coffee size={20} className="text-gold" />
                    <h3 className="text-xl font-semibold text-gold-light">Morning (காலை)</h3>
                  </div>
                  <div className="space-y-3">
                    {weeklyMenu[selectedWeekDay].morning.map((item, idx) => (
                      <div key={idx} className="border-l-2 border-gold/30 pl-3 hover:border-gold transition-all duration-300">
                        <p className="text-white/90 font-medium">{item.en}</p>
                        <p className="text-gold-light/60 text-sm">{item.ta}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Afternoon */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-gold/30 pb-2">
                    <Utensils size={20} className="text-gold" />
                    <h3 className="text-xl font-semibold text-gold-light">Afternoon (மதியம்)</h3>
                  </div>
                  <div className="space-y-3">
                    {weeklyMenu[selectedWeekDay].afternoon.map((item, idx) => (
                      <div key={idx} className="border-l-2 border-gold/30 pl-3 hover:border-gold transition-all duration-300">
                        <p className="text-white/90 font-medium">{item.en}</p>
                        <p className="text-gold-light/60 text-sm">{item.ta}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Night */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-gold/30 pb-2">
                    <Moon size={20} className="text-gold" />
                    <h3 className="text-xl font-semibold text-gold-light">Night (இரவு)</h3>
                  </div>
                  <div className="space-y-3">
                    {weeklyMenu[selectedWeekDay].night.map((item, idx) => (
                      <div key={idx} className="border-l-2 border-gold/30 pl-3 hover:border-gold transition-all duration-300">
                        <p className="text-white/90 font-medium">{item.en}</p>
                        <p className="text-gold-light/60 text-sm">{item.ta}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
}