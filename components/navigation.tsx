"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useAnimationControls } from "@/hooks/use-animation-controls"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { getAnimationDuration, prefersReducedMotion } = useAnimationControls()

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/events", label: "Events" },
    { href: "/gallery", label: "Gallery" },
  ]

  const containerVariants = {
    initial: { opacity: 0, y: -10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    initial: { opacity: 0, y: -10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: getAnimationDuration(0.3) },
    },
  }

  const mobileMenuVariants = {
    initial: { opacity: 0, height: 0 },
    animate: {
      opacity: 1,
      height: "auto",
      transition: { duration: getAnimationDuration(0.3) },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: getAnimationDuration(0.2) },
    },
  }

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: getAnimationDuration(0.4) }}
          >
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                className="w-8 h-8 bg-navy-dark rounded flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                 <img
              src="logo.png"
              alt="Church Congregation"
              className="w-full h-full object-cover"
            />
                <span className="text-white text-sm font-bold"></span>
              </motion.div>

              <span className="text-navy-dark font-semibold text-sm">CCCSP FUTA</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation with staggered animation */}
          <motion.div
            className="hidden md:flex items-center gap-8"
            variants={containerVariants}
            initial="initial"
            animate="animate"
          >
            {navLinks.map((link, index) => (
              <motion.div key={link.href} variants={itemVariants}>
                <Link
                  href={link.href}
                  className="text-gray-700 hover:text-navy-dark text-sm font-medium transition-colors duration-300 relative group"
                >
                  {link.label}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-navy-dark"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: getAnimationDuration(0.3) }}
                    style={{ originX: 0 }}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Connect Us Button with animation */}
          <motion.div className="hidden md:block" variants={itemVariants} initial="initial" animate="animate">
            <Link href="/contact">
              <motion.button
                className="bg-navy-dark text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg"
                whileHover={{ scale: 1.05, backgroundColor: "#1a2a4a" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Connect Us
              </motion.button>
            </Link>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: getAnimationDuration(0.2) }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: getAnimationDuration(0.2) }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation with smooth expand animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              variants={mobileMenuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <motion.div className="pb-4 space-y-2" variants={containerVariants} initial="initial" animate="animate">
                {navLinks.map((link) => (
                  <motion.div key={link.href} variants={itemVariants}>
                    <Link
                      href={link.href}
                      className="block text-gray-700 hover:text-navy-dark py-2 transition-colors duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={itemVariants}>
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <motion.button
                      className="w-full bg-navy-dark text-white px-6 py-2 rounded-full text-sm font-semibold mt-4"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Connect Us
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
