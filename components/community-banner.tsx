'use client'

import { motion } from 'framer-motion'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

export default function CommunityBanner() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3, delay: 100 })

  return (
    <section className="py-8 lg:py-12 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="rounded-lg overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
          whileHover={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
        >
          <img
            src="church_Banner.png"
            alt="Welcome to CCCSP FUTA"
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
