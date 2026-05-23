// app/reviews/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, MessageCircle, ArrowLeft, ExternalLink, Quote, ThumbsUp } from "lucide-react";

interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  time: string;
  helpful?: number;
}

const allReviews: Review[] = [
  {
    id: "1",
    author: "Priya S.",
    rating: 5,
    text: "Absolutely delicious homely food! The quality is consistently great and delivery is always on time. Highly recommend their breakfast specials. The idli and sambar taste just like home.",
    time: "2 weeks ago",
    helpful: 24,
  },
  {
    id: "2",
    author: "Rajesh K.",
    rating: 5,
    text: "Best South Indian food in Tambaram. The weekly menu is amazing - authentic taste like home. Must try their Idiyappam and Kurma! Delivery is always prompt and packaging is excellent.",
    time: "1 month ago",
    helpful: 18,
  },
  {
    id: "3",
    author: "Meena R.",
    rating: 4,
    text: "Great value for money. Hygienic packing and fresh food. The lunch thali is very satisfying with multiple options. Will order again!",
    time: "2 months ago",
    helpful: 12,
  },
  {
    id: "4",
    author: "Sundar P.",
    rating: 5,
    text: "Been ordering from Joyce Kitchen for 6 months now. Never disappointed. Their customer service is excellent too! They're very responsive on WhatsApp.",
    time: "2 months ago",
    helpful: 31,
  },
  {
    id: "5",
    author: "Lakshmi N.",
    rating: 5,
    text: "The sambar and chutney taste just like my mom's. So happy to find authentic home food in Tambaram! The portion sizes are generous too.",
    time: "3 months ago",
    helpful: 27,
  },
  {
    id: "6",
    author: "Karthik M.",
    rating: 5,
    text: "Perfect place for daily meals. Healthy, hygienic, and affordable. The monthly package is a great deal for bachelors!",
    time: "3 months ago",
    helpful: 19,
  },
  {
    id: "7",
    author: "Divya R.",
    rating: 4,
    text: "Love their variety in weekly menu. Never gets boring! The chapathi and kurma combo is my favorite.",
    time: "4 months ago",
    helpful: 14,
  },
  {
    id: "8",
    author: "Vijay A.",
    rating: 5,
    text: "Finally found a cloud kitchen that delivers authentic South Indian food. Their pongal on Tuesday is a must-try!",
    time: "4 months ago",
    helpful: 22,
  },
];

export default function ReviewsPage() {
  const [reviews] = useState<Review[]>(allReviews);
  const [filter, setFilter] = useState<number | null>(null);

  const filteredReviews = filter ? reviews.filter(r => r.rating === filter) : reviews;
  const averageRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);

  // Use the full Google Maps URL that works
  const GOOGLE_REVIEW_URL = "https://www.google.com/maps/place/Joyce+kitchen+home/@12.9278883,80.1143366,17z/data=!4m8!3m7!1s0x3a525f2686d392fd:0x7bb02d112a1e4094!8m2!3d12.9278883!4d80.1143366!9m1!1b1!16s%2Fg%2F11ts39v23q?entry=ttu";

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={`${
              i < rating ? "fill-gold text-gold" : "text-white/20"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0">
          <Image
            src="/img5.jpg"
            alt="Reviews Background"
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

      {/* Gold Borders */}
      <div className="fixed top-0 left-0 right-0 z-20 h-8 md:h-12 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold to-transparent animate-shine" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 pt-24">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors mb-6 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white drop-shadow-2xl">Customer</span>
              <span className="shine-text block">Reviews</span>
            </h1>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <div className="text-3xl font-bold text-gold">{averageRating}</div>
                <div>
                  {renderStars(Math.round(parseFloat(averageRating)))}
                  <p className="text-white/60 text-xs">Based on {reviews.length} reviews</p>
                </div>
              </div>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setFilter(null)}
              className={`px-4 py-1.5 rounded-full text-sm transition-all duration-300 ${
                filter === null
                  ? "bg-gradient-to-r from-gold to-gold-dark text-white"
                  : "glass-premium text-white/70 hover:text-white"
              }`}
            >
              All
            </button>
            {[5, 4, 3].map(rating => (
              <button
                key={rating}
                onClick={() => setFilter(rating)}
                className={`px-4 py-1.5 rounded-full text-sm transition-all duration-300 flex items-center gap-1 ${
                  filter === rating
                    ? "bg-gradient-to-r from-gold to-gold-dark text-white"
                    : "glass-premium text-white/70 hover:text-white"
                }`}
              >
                <Star size={14} className={filter === rating ? "text-white" : "text-gold"} />
                {rating}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews List */}
        <div className="max-w-4xl mx-auto space-y-4 mb-10">
          {filteredReviews.map((review, idx) => (
            <div
              key={review.id}
              className="glass-premium rounded-2xl p-6 border border-gold/30 hover:border-gold/50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <div className="flex items-start gap-4">
                <Quote size={32} className="text-gold/30 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <div>
                      <p className="text-white font-semibold">{review.author}</p>
                      <div className="flex items-center gap-2 mt-1">
                        {renderStars(review.rating)}
                        <span className="text-gold-light/50 text-xs">{review.time}</span>
                      </div>
                    </div>
                    {review.helpful && (
                      <div className="flex items-center gap-1 text-gold-light/50 text-xs">
                        <ThumbsUp size={12} />
                        <span>{review.helpful}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed mt-2">
                    "{review.text}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Write Review CTA - Using the correct URL */}
        <div className="text-center mt-8">
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-gold to-gold-dark text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            <MessageCircle size={20} />
            <span>Write a Review on Google</span>
            <ExternalLink size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}