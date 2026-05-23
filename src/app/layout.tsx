// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Optimize font loading
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Enhanced SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://joycekitchen.com"), // Replace with your actual domain
  title: {
    default: "Joyce Kitchen | Authentic South Indian Homemade Food",
    template: "%s | Joyce Kitchen",
  },
  description: "Experience authentic South Indian homemade food delivered fresh from our cloud kitchen in Tambaram. Traditional recipes, hygienic preparation, and timely delivery.",
  keywords: [
    "Joyce Kitchen",
    "South Indian food",
    "homemade food delivery",
    "cloud kitchen Tambaram",
    "authentic Tamil food",
    "breakfast delivery",
    "lunch delivery",
    "dinner delivery",
    "weekly tiffin service",
    "homely food Chennai"
  ],
  authors: [{ name: "Joyce Kitchen" }],
  creator: "Joyce Kitchen",
  publisher: "Joyce Kitchen",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Joyce Kitchen | Authentic South Indian Homemade Food",
    description: "Experience authentic South Indian homemade food delivered fresh from our cloud kitchen. Traditional recipes made with love and care.",
    url: "https://joycekitchen.com",
    siteName: "Joyce Kitchen",
    images: [
      {
        url: "/og-image.jpg", // Create this image (1200x630px)
        width: 1200,
        height: 630,
        alt: "Joyce Kitchen - Authentic South Indian Food",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joyce Kitchen | Authentic South Indian Homemade Food",
    description: "Experience authentic South Indian homemade food delivered fresh from our cloud kitchen.",
    images: ["/og-image.jpg"],
    creator: "@joycekitchen", // Add your Twitter handle if available
  },
  icons: {
    icon: [
      { url: "/jlogo.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/jlogo.jpg", sizes: "180x180", type: "image/jpeg" },
    ],
    shortcut: ["/jlogo.png"],
  },
  manifest: "/site.webmanifest", // Create this file
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification
    // yandex: "your-yandex-verification-code",
    // other: {},
  },
  category: "Food & Restaurant",
  classification: "Cloud Kitchen, Food Delivery",
};

// Viewport configuration for mobile optimization
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F0E8" },
    { media: "(prefers-color-scheme: dark)", color: "#2C1E1A" },
  ],
  colorScheme: "light dark",
};

// Structured Data for Local Business (JSON-LD)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Joyce Kitchen",
  alternateName: "Joyce Kitchen Cloud Kitchen",
  description: "Authentic South Indian homemade food delivery in Tambaram, Chennai.",
  url: "https://joycekitchen.com",
  telephone: "+919790735405",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No.54, Venkatesan Street, West Tambaram",
    addressLocality: "Tambaram",
    addressRegion: "Chennai",
    postalCode: "600045",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.9278883,
    longitude: 80.1143366,
  },
  priceRange: "₹₹",
  servesCuisine: ["South Indian", "Tamil", "Homemade"],
  openingHours: ["Mo-Su 07:00-22:00"],
  offersDelivery: true,
  hasMenu: "https://joycekitchen.com/menu",
  acceptsReservations: false,
  paymentAccepted: ["Cash", "UPI", "Google Pay", "PhonePe"],
  areaServed: {
    "@type": "City",
    name: "Tambaram, Chennai",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    ratingCount: "128",
  },
  image: "https://joycekitchen.com/og-image.jpg",
  sameAs: [
    "https://www.instagram.com/joycekitchen28",
    "https://www.google.com/maps/place/Joyce+kitchen+home",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Structured Data Script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-gold focus:text-dark-brown focus:rounded-lg"
        >
          Skip to main content
        </a>
        
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}