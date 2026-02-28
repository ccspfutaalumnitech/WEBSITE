"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Send } from "lucide-react"
import { motion } from "framer-motion"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { useAnimationControls } from "@/hooks/use-animation-controls"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2, delay: 100 })
  const { getAnimationDuration } = useAnimationControls()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  const containerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: getAnimationDuration(0.6) },
    },
  }

  return (
    <section className="py-16 lg:py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          variants={containerVariants}
        >
          <motion.p className="text-xs uppercase tracking-widest text-gray-600 mb-2" variants={containerVariants}>
            Newsletter
          </motion.p>
          <motion.h2 className="text-3xl lg:text-4xl font-serif font-bold text-navy-dark" variants={containerVariants}>
            Stay connected in fellowship, see all events
          </motion.h2>
        </motion.div>

        {/* Newsletter Form with animations */}
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: getAnimationDuration(0.5), delay: 0.2 }}
        >
          <motion.div className="flex gap-2" whileHover={{ scale: 1.02 }}>
            <motion.div className="flex-1 relative" whileFocus={{ scale: 1.02 }}>
              <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
              <motion.input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-dark"
                whileFocus={{ boxShadow: "0 0 0 3px rgba(26, 43, 74, 0.1)" }}
              />
            </motion.div>
            <motion.button
              type="submit"
              className="bg-navy-dark text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy-darker transition flex items-center gap-2"
              whileHover={{ scale: 1.05, backgroundColor: "#0f1c2e" }}
              whileTap={{ scale: 0.95 }}
            >
              <Send size={18} />
              <span className="hidden sm:inline">Subscribe</span>
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  )
}
