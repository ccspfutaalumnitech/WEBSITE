"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = ["/2.jpg", "/3.jpg", "/5.jpg", "/1.jpg", "/4.jpg", "/6.jpg"]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
        >
          <motion.p
            className="text-gray-600 text-xs sm:text-sm uppercase tracking-wider mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Welcome to
          </motion.p>

          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-navy-dark mb-2 leading-tight px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Celestial Church of Christ
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-navy-dark mb-4 sm:mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Students' Parish FUTA.
          </motion.h2>

          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Where no one is a stranger and believers come together in fellowship
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href="/about">
              <motion.button
                className="w-full sm:w-auto bg-navy-dark text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-xl text-sm sm:text-base transition-shadow"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                About + Services
              </motion.button>
            </Link>

            <Link href="/events">
              <motion.button
                className="w-full sm:w-auto border-2 border-navy-dark text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-navy-dark hover:text-white text-sm sm:text-base transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Upcoming Events
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <div className="overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeSlide}
                src={slides[activeSlide]}
                alt="Church community gathering"
                className="w-full h-56 sm:h-72 lg:h-96 object-cover"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>

            {/* Gradient overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
          </div>

          <motion.button
            onClick={prevSlide}
            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-2.5 shadow-lg hover:bg-white hover:shadow-xl transition-all"
            aria-label="Previous slide"
            whileHover={{ scale: 1.15, x: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={20} className="text-navy-dark sm:w-6 sm:h-6" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-2.5 shadow-lg hover:bg-white hover:shadow-xl transition-all"
            aria-label="Next slide"
            whileHover={{ scale: 1.15, x: 3 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={20} className="text-navy-dark sm:w-6 sm:h-6" />
          </motion.button>

          <motion.div
            className="flex justify-center gap-2 mt-4 sm:mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === activeSlide
                    ? "bg-navy-dark w-8 sm:w-10 h-2 sm:h-2.5"
                    : "bg-gray-300 w-2 sm:w-2.5 h-2 sm:h-2.5 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                animate={{ scale: index === activeSlide ? 1.1 : 1 }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
