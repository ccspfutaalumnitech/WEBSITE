"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, MapPin, Phone, Facebook, Instagram, Youtube } from "lucide-react"
import { motion } from "framer-motion"
import { useAnimationControls } from "@/hooks/use-animation-controls"

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const { getAnimationDuration } = useAnimationControls()

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

  const itemVariants = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: getAnimationDuration(0.4) },
    },
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          {/* About */}
          <motion.div variants={itemVariants}>
            <motion.div className="flex items-center gap-2 mb-4" whileHover={{ scale: 1.05 }}>
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                    <img
              src="CeleFuta Logo (thin border).png"
              alt="Church Congregation"
              className="w-full h-full object-cover"
            />
                <span className="text-gray-900 text-sm font-bold"></span>
              </div>
              <span className="text-white font-semibold">CCCSP FUTA</span>
            </motion.div>
            <p className="text-sm">
              Celestial Church of Christ Students' Parish FUTA. Serving the community with faith and fellowship.
            </p>
          </motion.div>

          {/* Units */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold mb-4">Units</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/units/brothers", label: "Brothers' unit" },
                { href: "/units/sisters", label: "Sisters' unit" },
                { href: "/units/evangelism", label: "Evangelism unit" },
                { href: "/units/choir", label: "Choir unit" },
                { href: "/units/drama", label: "Drama unit" },
                { href: "/units/academic", label: "Academic unit" },
                { href: "/units/welfare", label: "Welfare unit" },
                { href: "/units/ushering", label: "Ushering unit" },
                { href: "/units/publicity", label: "Publicity unit" },
              ].map((link) => (
                <motion.li key={link.href} whileHover={{ x: 4 }}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors duration-300"
                    onMouseEnter={() => setHoveredLink(link.href)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* About Us Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold mb-4">About us</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/about", label: "About Celefuta" },
                { href: "/contact", label: "Contact us" },
                { href: "/events", label: "Upcoming events" },
                { href: "/gallery", label: "Outings and calls" },
              ].map((link) => (
                <motion.li key={link.href} whileHover={{ x: 4 }}>
                  <Link href={link.href} className="hover:text-white transition-colors duration-300">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold mb-4">Social</h3>
            <ul className="space-y-3">
              {[
                { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
                { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
                { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
              ].map((social) => (
                <motion.li key={social.label} whileHover={{ scale: 1.1, x: 4 }}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors duration-300"
                  >
                    <social.icon size={18} />
                    {social.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Contact Info */}
        <motion.div className="mb-8" variants={itemVariants} initial="initial" animate="animate">
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <div className="space-y-3 text-sm">
            {[
              { icon: Mail, text: "info@ccfuta.org", href: "mailto:info@ccfuta.org" },
              { icon: Phone, text: "+234 (0) 801-234-5678", href: "tel:+2348012345678" },
              { icon: MapPin, text: "Federal University of Technology, Akure, Nigeria", href: "#" },
            ].map((contact, idx) => (
              <motion.div key={idx} className="flex items-start gap-3" whileHover={{ x: 4 }}>
                <contact.icon size={18} className="mt-0.5 flex-shrink-0" />
                <a href={contact.href} className="hover:text-white transition-colors duration-300">
                  {contact.text}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div className="border-t border-gray-700 my-8" />

        {/* Bottom Footer */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center text-sm"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.p variants={itemVariants}>© 2025 Celestial Church of Christ. All rights reserved.</motion.p>
          <motion.div
            className="flex gap-4 mt-4 md:mt-0"
            variants={containerVariants}
            initial="initial"
            animate="animate"
          >
            {[
              { href: "#", label: "Privacy Policy" },
              { href: "#", label: "Terms of Service" },
            ].map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
