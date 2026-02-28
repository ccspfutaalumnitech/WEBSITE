'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'

export default function GalleryPageClient() {
  const galleryItems = [
    { id: 1, title: 'Fellowship Moments' },
    { id: 2, title: 'Worship Service' },
    { id: 3, title: 'Community Prayer' },
    { id: 4, title: 'Church Members' },
    { id: 5, title: 'Celebration' },
    { id: 6, title: 'Gathering' },
    { id: 7, title: 'Song Service' },
    { id: 8, title: 'Testimony' },
    { id: 9, title: 'Together in Faith' },
    { id: 10, title: 'Rejoicing' },
    { id: 11, title: 'Devotion' },
    { id: 12, title: 'Community' },
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
              <motion.div
                key={item.id}
                className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-center text-gray-600 font-medium px-4">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </motion.main>
  )
}
