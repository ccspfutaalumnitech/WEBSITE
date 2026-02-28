"use client"

import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import WorshipSection from "@/components/worship-section"
import FeaturedArticle from "@/components/featured-article"
import NewsletterSection from "@/components/newsletter-section"
import MapSection from "@/components/map-section"
import Footer from "@/components/footer"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <motion.main
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation />
      <Hero />
      <WorshipSection />
      <FeaturedArticle />
      <NewsletterSection />
      <MapSection />
      <Footer />
    </motion.main>
  )
}
