"use client"

import { motion } from "framer-motion"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { useAnimationControls } from "@/hooks/use-animation-controls"

export default function MapSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2, delay: 100 })
  const { getAnimationDuration } = useAnimationControls()

  return (
    <section className="py-16 lg:py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: getAnimationDuration(0.6) }}
        >
          <p className="text-xs uppercase tracking-widest text-gray-600 mb-2">Contact Us</p>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-navy-dark mb-4">
            We look forward to worshipping with you! Locate our church with the map below.
          </h2>
        </motion.div>

        {/* Map Container with scale animation */}
        <motion.div
          className="rounded-lg overflow-hidden shadow-lg h-96 bg-gray-300"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: getAnimationDuration(0.6), delay: 0.2 }}
          whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.3688346369217!2d3.4890!3d7.2506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sFederal%20University%20of%20Technology%20Akure!5e0!3m2!1sen!2sng!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  )
}
