"use client"

import { motion } from "framer-motion"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { useAnimationControls } from "@/hooks/use-animation-controls"
import Link from "next/link"

export default function FeaturedArticle() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2, delay: 100 })
  const { getAnimationDuration } = useAnimationControls()

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const leftImageVariants = {
    initial: { opacity: 0, x: -40 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: getAnimationDuration(0.7) },
    },
  }

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: getAnimationDuration(0.6) },
    },
  }

  const bottomImagesVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: getAnimationDuration(0.6), delay: 0.2 },
    },
  }

  return (
    <section className="py-16 lg:py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
        >
          <motion.div
            className="relative h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl"
            variants={leftImageVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <img src="/images/c2.jpg" alt="Church member in worship" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div className="flex flex-col" variants={contentVariants}>
            {/* Label */}
            <motion.p className="text-sm font-mono text-gray-600 mb-4" variants={contentVariants}>
             About Us
            </motion.p>

            {/* Main heading */}
            <motion.h2
              className="text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight"
              variants={contentVariants}
            >
              Celefuta - A Breeding Ground for Men, Where We Encounter God,{" "}
              <span className="text-gray-400">Where No-one is a Stranger and Where Faith Grows Strong...</span>
            </motion.h2>

            {/* Description */}
            <motion.p className="text-base text-gray-600 leading-relaxed mb-6" variants={contentVariants}>
              The church is registered under the schools rule and regulations for religious activities and 
duly recognized as a bonafide religious group in the campus.
            </motion.p>

            {/* Learn more link */}
            <motion.div className="mb-8" variants={contentVariants}>
              <Link
                href="/about"
                className="text-gray-900 font-medium hover:text-blue-600 transition-colors inline-flex items-center group"
              >
                Learn more...
                <motion.span className="ml-2 inline-block" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  →
                </motion.span>
              </Link>
            </motion.div>

            <motion.div className="grid grid-cols-2 gap-4 mt-auto" variants={bottomImagesVariants}>
              <motion.div
                className="relative h-48 lg:h-56 rounded-lg overflow-hidden shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src="/d1.jpg" alt="Church fellowship" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div
                className="relative h-48 lg:h-56 rounded-lg overflow-hidden shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src="/d2.jpg" alt="Church member praying" className="w-full h-full object-cover" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
