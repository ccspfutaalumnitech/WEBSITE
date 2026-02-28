"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { useAnimationControls } from "@/hooks/use-animation-controls"

export default function WorshipSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2, delay: 100 })
  const { getAnimationDuration, prefersReducedMotion } = useAnimationControls()

  const services = [
    { title: "Sunrise", time: "Early Service", description: "6am" },
    { title: "Main Service", time: "Morning Service", description: "9am" },
    { title: "Praise", time: "Afternoon Service", description: "3pm" },
    { title: "All worship of the Church", time: "Evening Service", description: "6pm" },
  ]

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: getAnimationDuration(0.5) },
    },
    whileHover: {
      y: -8,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
    },
  }

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: getAnimationDuration(0.6) }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-dark mb-2 sm:mb-4 leading-tight">
            Join Us for Worship
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Gather with a vibrant gospel family, connect lovers, spend time in spirit.
          </p>
        </motion.div>

        {/* Service Cards with staggered animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
          variants={containerVariants}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100"
              variants={cardVariants}
              whileHover="whileHover"
            >
              <h3 className="text-base sm:text-lg font-semibold text-navy-dark mb-2 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-4">{service.time}</p>
              <motion.p
                className="text-xl sm:text-2xl font-bold text-gold"
                animate={hoveredIndex === index ? { scale: 1.1 } : { scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Dots */}
        <motion.div
          className="flex justify-center gap-2 mt-6 sm:mt-8"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: getAnimationDuration(0.6), delay: 0.4 }}
        >
          <motion.button
            className="w-3 h-3 rounded-full bg-gray-400 hover:bg-navy-dark transition-all duration-300"
            whileHover={{ scale: 1.5 }}
          />
          <motion.button
            className="w-3 h-3 rounded-full bg-navy-dark hover:scale-150 transition-all duration-300"
            whileHover={{ scale: 1.5 }}
          />
        </motion.div>
      </div>
    </section>
  )
}
