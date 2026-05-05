'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function GalleryPageClient() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryItems = [
    { id: 1, image: '/d1.jpg', title: 'Church Member', span: 'col-span-1 row-span-1' },
    { id: 2, image: '/d3.jpg', title: 'In Worship', span: 'col-span-1 row-span-2' },
    { id: 3, image: '/3.jpg', title: 'Devoted', span: 'col-span-1 row-span-1' },
    { id: 4, image: '/12.jpg', title: 'Celebrating', span: 'col-span-2 row-span-1' },
    { id: 5, image: '/13.jpg', title: 'Joyful', span: 'col-span-1 row-span-1' },
    { id: 6, image: '/6.jpg', title: 'Peaceful', span: 'col-span-1 row-span-1' },
    { id: 7, image: '/7.jpg', title: 'Engaged', span: 'col-span-1 row-span-2' },
    { id: 8, image: '/11.jpg', title: 'Praying', span: 'col-span-1 row-span-1' },
    { id: 9, image: '/10.jpg', title: 'Community', span: 'col-span-2 row-span-1' },
    { id: 8, image: '/37.jpg', title: 'Praying', span: 'col-span-1 row-span-1' },
    { id: 9, image: '/39.jpg', title: 'Community', span: 'col-span-2 row-span-1' },
    { id: 8, image: '/38.jpg', title: 'Praying', span: 'col-span-1 row-span-1' },
    { id: 9, image: '/33.jpg', title: 'Community', span: 'col-span-2 row-span-1' },
    { id: 8, image: '/32.jpg', title: 'Praying', span: 'col-span-1 row-span-1' },
    { id: 9, image: '/30.jpg', title: 'Community', span: 'col-span-2 row-span-1' },
    { id: 4, image: '/4.jpg', title: 'Celebrating', span: 'col-span-2 row-span-1' },
    { id: 5, image: '/CCC-140.jpg', title: 'Joyful', span: 'col-span-1 row-span-1' },
    { id: 6, image: '/25.jpg', title: 'Peaceful', span: 'col-span-1 row-span-1' },
  ]

  return (
    <motion.main
      className="min-h-screen bg-background dark:bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation />

      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-secondary/10 dark:from-primary/10 to-background dark:to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              Life at CCCSP FUTA
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              Discover moments of worship, fellowship, and community life captured through our journey together
            </p>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery Grid - Pinterest Style */}
      <section className="py-16 lg:py-24 bg-background dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-max gap-3 sm:gap-4 md:gap-5">
            {galleryItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => setSelectedImage(item.image)}
                className={`${item.span} rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group relative`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:brightness-50 transition-all duration-300"
                />
                {/* Overlay with info */}
                <div className="absolute inset-0 flex flex-col items-end justify-end p-3 sm:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                  <p className="text-white text-xs sm:text-sm font-semibold">{item.title}</p>
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
