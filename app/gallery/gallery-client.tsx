'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function GalleryPageClient() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryItems = [
    { id: 1, image: '/images/member-1.jpg', title: 'Church Member' },
    { id: 2, image: '/images/member-2.jpg', title: 'In Worship' },
    { id: 3, image: '/images/member-3.jpg', title: 'Devoted' },
    { id: 4, image: '/images/member-4.jpg', title: 'Celebrating' },
    { id: 5, image: '/images/member-5.jpg', title: 'Joyful' },
    { id: 6, image: '/images/member-6.jpg', title: 'Peaceful' },
    { id: 7, image: '/images/member-7.jpg', title: 'Engaged' },
    { id: 8, image: '/images/member-8.jpg', title: 'Praying' },
    { id: 9, image: '/images/member-9.jpg', title: 'Community' },
  ]

  return (
    <motion.main
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation />

      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-dark mb-4">
              Life at CCCSP FUTA
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Discover moments of worship, fellowship, and community life captured through our journey together
            </p>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => setSelectedImage(item.image)}
                className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                  <span className="text-white text-sm font-semibold">Click to View</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-2xl w-full h-96 sm:h-[600px] md:h-[700px]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Full size"
                className="w-full h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 -right-10 text-white hover:text-gray-300 transition-colors"
              >
                <X size={32} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </motion.main>
  )
}
