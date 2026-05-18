'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function HeroParallax() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const slides = [
    {
      id: 1,
      image: '/1.jpg',
      title: 'Welcome to',
      subtitle: 'Celestial Church of Christ Students\' Parish FUTA',
      tagline: 'Where we worship God in the beauty of his Holiness',
    },
    {
      id: 2,
      image: '/9.jpg',
      title: 'Worship',
      subtitle: 'Experience Spiritual Growth',
      tagline: 'Join us in fellowship and praise',
    },
    {
      id: 3,
      image: '/5.jpg',
      title: 'Community',
      subtitle: 'Stand Together in Faith',
      tagline: 'Building connections that strengthen our bond',
    },
    {
      id: 4,
      image: '/17.jpg',
      title: 'Brothers\' Unit',
      subtitle: 'Men of Valour',
      tagline: 'Raising godly men who lead, serve, and protect the faith',
      buttonText: 'Join Brothers',
      buttonLink: '/units/brothers',
    },
    {
      id: 5,
      image: '/12.jpg',
      title: 'Sisters\' Unit',
      subtitle: 'Virtuous Women of Excellence',
      tagline: 'Empowering women to shine God\'s light and impact their world',
      buttonText: 'Join Sisters',
      buttonLink: '/units/sisters',
    },
    {
      id: 6,
      image: '/18.jpg',
      title: 'Evangelism Unit',
      subtitle: 'Go Ye Therefore',
      tagline: 'Sharing the good news of Christ to all nations, one soul at a time',
      buttonText: 'Join Evangelism',
      buttonLink: '/units/evangelism',
    },
    {
      id: 7,
      image: '/19.jpg',
      title: 'Choir Unit',
      subtitle: 'Celestial Voices',
      tagline: 'Lifting hearts through heavenly melodies and spirit-filled praise',
      buttonText: 'Join Choir',
      buttonLink: '/units/choir',
    },
    {
      id: 8,
      image: '/20.jpg',
      title: 'Drama Unit',
      subtitle: 'Acting for Christ',
      tagline: 'Using creative arts to tell Bible stories and share the Gospel',
      buttonText: 'Join Drama',
      buttonLink: '/units/drama',
    },
    {
      id: 9,
      image: '/26.jpg',
      title: 'Academic Unit',
      subtitle: 'Excellence for God\'s Glory',
      tagline: 'Balancing faith and studies while pursuing academic excellence',
      buttonText: 'Join Academic',
      buttonLink: '/units/academic',
    },
    {
      id: 10,
      image: '/16.jpg',
      title: 'Welfare Unit',
      subtitle: 'Hands of Compassion',
      tagline: 'Caring for members, supporting the needy, and showing God\'s love',
      buttonText: 'Join Welfare',
      buttonLink: '/units/welfare',
    },
    {
      id: 11,
      image: '/21.jpg',
      title: 'Ushering Unit',
      subtitle: 'God\'s Doorkeepers',
      tagline: 'Welcoming all with warmth, order, and excellence in God\'s house',
      buttonText: 'Join Ushering',
      buttonLink: '/units/ushering',
    },
    {
      id: 12,
      image: '/15.jpg',
      title: 'Publicity Unit',
      subtitle: 'Voices of the Parish',
      tagline: 'Spreading the message, managing media, and showcasing God\'s works',
      buttonText: 'Join Publicity',
      buttonLink: '/units/publicity',
    },
  ];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentSlide((prev) => (prev + newDirection + slides.length) % slides.length)
    setIsAutoPlay(false)
  }

  useEffect(() => {
    if (!isAutoPlay) return
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlay, slides.length])

  return (
    <div className="relative w-full h-screen md:h-[600px] overflow-hidden bg-background">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          className="absolute inset-0"
        >
          {/* Background image with parallax */}
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            animate={{ scale: [1, 1.05] }}
            transition={{ duration: 8, ease: 'easeInOut' }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </motion.div>

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <p className="text-primary/80 text-sm md:text-base font-display font-semibold uppercase tracking-widest mb-4">
                {slides[currentSlide].title}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-white mb-4 text-balance">
                {slides[currentSlide].subtitle}
              </h1>
              <p className="text-base md:text-xl text-gray-200 text-pretty max-w-2xl mx-auto">
                {slides[currentSlide].tagline}
              </p>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center pt-2">
                <motion.div className="w-1 h-2 bg-white rounded-full" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <motion.button
        onClick={() => paginate(-1)}
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-10 glass p-2 md:p-3 hover:glass-light transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </motion.button>

      <motion.button
        onClick={() => paginate(1)}
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-10 glass p-2 md:p-3 hover:glass-light transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </motion.button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1)
              setCurrentSlide(index)
              setIsAutoPlay(false)
            }}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50 w-2'
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </div>
  )
}
