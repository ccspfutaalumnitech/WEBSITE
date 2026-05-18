"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Moon, Sun } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useAnimationControls } from "@/hooks/use-animation-controls"
import { useTheme } from "next-themes"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { getAnimationDuration } = useAnimationControls()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

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

  if (!mounted) return null

  return (
    <nav className="glass dark:glass sticky top-0 z-50 border-b border-white/20 dark:border-slate-700/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Link href="/" className="flex items-center gap-2 group">
              <motion.img
                src="/favicon.ico"
                alt="Logo"
                className="w-8 h-8 sm:w-10 sm:h-10"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              />
              <span className="text-foreground font-display font-bold text-sm sm:text-base hidden sm:inline">CCCSP FUTA</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation with staggered animation */}
          <motion.div
            className="hidden md:flex items-center gap-6 lg:gap-8"
            variants={containerVariants}
            initial="initial"
            animate="animate"
          >
            {navLinks.map((link, index) => (
              <motion.div key={link.href} variants={itemVariants}>
              <Link
                href={link.href}
                className="text-foreground hover:text-primary font-medium transition-colors duration-200 text-sm lg:text-base"
              >
                {link.label}
              </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Theme toggle and mobile menu button */}
          <div className="flex items-center gap-3 sm:gap-4">
            <motion.button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="glass dark:glass p-2 rounded-lg transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-slate-600" />
              )}
            </motion.button>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden glass dark:glass p-2 rounded-lg transition-colors"
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
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} className="text-foreground" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} className="text-foreground" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation with smooth expand animation */}
        <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden glass dark:glass border-t border-white/20 dark:border-slate-700/20 overflow-hidden"
            variants={mobileMenuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-3 sm:space-y-4">
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={itemVariants}>
                  <Link
                    href={link.href}
                    className="block text-foreground hover:text-primary font-medium py-2 sm:py-3 transition-colors duration-200 text-base sm:text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
