"use client"

import Navigation from "@/components/navigation"
import HeroParallax from "@/components/hero-parallax"
import CommunityBanner from "@/components/community-banner"
import WorshipSection from "@/components/worship-section"
import FeaturedArticle from "@/components/featured-article"
import NewsletterSection from "@/components/newsletter-section"
import MapSection from "@/components/map-section"
import Footer from "@/components/footer"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <motion.main
      className="min-h-screen bg-background dark:bg-background transition-colors"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation />
      <HeroParallax />
      <CommunityBanner />
      <WorshipSection />
      <FeaturedArticle />
      <NewsletterSection />
      <MapSection />
      <Footer />
    </motion.main>
  )
}
