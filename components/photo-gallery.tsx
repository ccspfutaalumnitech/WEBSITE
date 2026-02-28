"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { useAnimationControls } from "@/hooks/use-animation-controls"
import Link from "next/link"

export default function PhotoGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2, delay: 100 })
  const { getAnimationDuration } = useAnimationControls()

  const galleryItems = [
    { color: "bg-red-500", span: "col-span-2 row-span-2" },
    { color: "bg-green-600", span: "col-span-1 row-span-1" },
    { color: "bg-green-800", span: "col-span-1 row-span-2" },
    { color: "bg-purple-500", span: "col-span-1 row-span-3" },
    { color: "bg-yellow-600", span: "col-span-1 row-span-1" },
    { color: "bg-red-700", span: "col-span-2 row-span-1" },
    { color: "bg-gray-400", span: "col-span-1 row-span-1" },
  ]

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: getAnimationDuration(0.4) },
    },
  }

  return (
    <section className="py-16 lg:py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: getAnimationDuration(0.6) }}
        >
          <p className="text-xs uppercase tracking-widest text-gray-600 mb-2">Photo Room</p>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-navy-dark">
            Stay connected in fellowship, see all events and gatherings coming up
          </h2>
        </motion.div>

        {/* Masonry Grid with staggered animations */}
        <motion.div
          className="grid grid-cols-4 gap-4 auto-rows-[200px]"
          variants={containerVariants}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`${item.span} ${item.color} rounded-lg overflow-hidden cursor-pointer relative group`}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {/* Overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ opacity: 0 }}
                animate={hoveredIndex === index ? { opacity: 1 } : { opacity: 0 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: getAnimationDuration(0.6), delay: 0.5 }}
        >
          <Link href="/gallery">
            <motion.button
              className="bg-navy-dark text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg"
              whileHover={{ scale: 1.05, backgroundColor: "#0f1c2e" }}
              whileTap={{ scale: 0.95 }}
            >
              View More
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
