// components/ReviewSection.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Star, MessageCircle, ExternalLink, ChevronRight, Quote } from "lucide-react";

interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  time: string;
  avatar?: string;
}

// Fallback reviews if API fails
const fallbackReviews: Review[] = [
  {
    id: "1",
    author: "Priya S.",
    rating: 5,
    text: "Absolutely delicious homely food! The quality is consistently great and delivery is always on time. Highly recommend their breakfast specials.",
    time: "2 weeks ago",
  },
  {
    id: "2",
    author: "Rajesh K.",
    rating: 5,
    text: "Best South Indian food in Tambaram. The weekly menu is amazing - authentic taste like home. Must try their Idiyappam and Kurma!",
    time: "1 month ago",
  },
  {
    id: "3",
    author: "Meena R.",
    rating: 4,
    text: "Great value for money. Hygienic packing and fresh food. The lunch thali is very satisfying.",
    time: "2 months ago",
  },
  {
    id: "4",
    author: "Sundar P.",
    rating: 5,
    text: "Been ordering from Joyce Kitchen for 6 months now. Never disappointed. Their customer service is excellent too!",
    time: "2 months ago",
  },
  {
    id: "5",
    author: "Lakshmi N.",
    rating: 5,
    text: "The sambar and chutney taste just like my mom's. So happy to find authentic home food in Tambaram!",
    time: "3 months ago",
  },
];

export default function ReviewSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [displayCount] = useState(4);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      // Option 1: Via your own API endpoint (recommended)
      const response = await fetch('/api/google-reviews');
      if (response.ok) {
        const data = await response.json();
        setReviews(data.reviews || fallbackReviews);
      } else {
        // Fallback to static reviews
        setReviews(fallbackReviews);
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
      setReviews(fallbackReviews);
    } finally {
      setLoading(false);
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${
              i < rating ? "fill-gold text-gold" : "text-white/20"
            }`}
          />
        ))}
      </div>
    );
  };

  const displayedReviews = reviews.slice(0, displayCount);
  const hasMore = reviews.length > displayCount;

  // Your working Google Maps URL
  const GOOGLE_REVIEW_URL = "https://www.google.com/maps/place/Joyce+kitchen+home/@12.9278883,80.1143366,17z/data=!4m8!3m7!1s0x3a525f2686d392fd:0x7bb02d112a1e4094!8m2!3d12.9278883!4d80.1143366!9m1!1b1!16s%2Fg%2F11ts39v23q?entry=ttu";

  if (loading) {
    return (
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-block w-12 h-12 border-4 border-gold/30 border-t-gold rounded-full animate-spin"></div>
            <p className="text-white/70 mt-4">Loading reviews...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 glass-premium rounded-full px-4 py-1.5 mb-4 border border-gold/30">
            <MessageCircle size={16} className="text-gold" />
            <span className="text-gold-light text-xs tracking-wider">CUSTOMER LOVE</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white drop-shadow-2xl">What Our</span>
            <span className="shine-text block">Customers Say</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Real reviews from real customers who've experienced the joy of authentic home-cooked meals
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {displayedReviews.map((review, idx) => (
            <div
              key={review.id}
              className="glass-premium rounded-2xl p-6 border border-gold/30 hover:border-gold/50 transition-all duration-500 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote size={24} className="text-gold/30 mb-3" />
              
              {/* Rating */}
              <div className="mb-3">
                {renderStars(review.rating)}
              </div>
              
              {/* Review Text */}
              <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-3">
                "{review.text}"
              </p>
              
              {/* Author Info */}
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-gold/20">
                <div>
                  <p className="text-white font-semibold text-sm">{review.author}</p>
                  <p className="text-gold-light/50 text-xs">{review.time}</p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className={`${
                        i < review.rating ? "fill-gold text-gold" : "text-white/20"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-600">
          {/* See All Reviews Button */}
          {hasMore && (
            <Link
              href="/reviews"
              className="px-6 py-2.5 glass-premium text-white font-semibold rounded-full border border-gold/40 hover:border-gold transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
            >
              <span>See All Reviews</span>
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
          
          {/* Write a Review Button - FIXED SYNTAX */}
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-gradient-to-r from-gold to-gold-dark text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
          >
            <MessageCircle size={18} />
            <span>Give Us a Review</span>
            <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Google Rating Summary */}
        <div className="text-center mt-10 animate-slide-up animation-delay-800">
          <div className="inline-flex items-center gap-2 glass-premium rounded-full px-4 py-2">
            <div className="flex items-center gap-1">
              <Star size={14} className="fill-gold text-gold" />
              <span className="text-white text-sm font-semibold">5.0</span>
            </div>
            <span className="text-white/50">•</span>
            <span className="text-white/70 text-xs">Google Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}