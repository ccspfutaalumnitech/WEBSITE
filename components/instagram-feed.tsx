"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { useAnimationControls } from "@/hooks/use-animation-controls"
import { Instagram, ExternalLink } from "lucide-react"

interface InstagramPost {
  id: string
  media_url: string
  permalink: string
  caption?: string
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM"
  thumbnail_url?: string
}

interface InstagramFeedProps {
  limit?: number
  showTitle?: boolean
  gridCols?: "3" | "4"
  variant?: "masonry" | "grid"
}

export default function InstagramFeed({
  limit = 9,
  showTitle = true,
  gridCols = "3",
  variant = "grid",
}: InstagramFeedProps) {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const { ref, isVisible } = useScrollReveal({ threshold: 0.2, delay: 100 })
  const { getAnimationDuration } = useAnimationControls()

  useEffect(() => {
    fetchInstagramPosts()
  }, [limit])

  const fetchInstagramPosts = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/instagram?limit=${limit}`)

      if (!response.ok) {
        throw new Error("Failed to fetch Instagram posts")
      }

      const data = await response.json()
      setPosts(data.data || [])
    } catch (err) {
      console.error("[v0] Instagram fetch error:", err)
      setError("Unable to load Instagram photos")
      // Use fallback images from your church
      setPosts(getFallbackImages().slice(0, limit))
    } finally {
      setLoading(false)
    }
  }

  const getFallbackImages = (): InstagramPost[] => {
    return [
      {
        id: "1",
        media_url: "/2.jpg",
        permalink: "https://instagram.com/celestialchurchfuta",
        media_type: "IMAGE",
      },
      {
        id: "2",
        media_url: "/3.jpg",
        permalink: "https://instagram.com/celestialchurchfuta",
        media_type: "IMAGE",
      },
      {
        id: "3",
        media_url: "/5.jpg",
        permalink: "https://instagram.com/celestialchurchfuta",
        media_type: "IMAGE",
      },
      {
        id: "4",
        media_url: "/1.jpg",
        permalink: "https://instagram.com/celestialchurchfuta",
        media_type: "IMAGE",
      },
      {
        id: "5",
        media_url: "/4.jpg",
        permalink: "https://instagram.com/celestialchurchfuta",
        media_type: "IMAGE",
      },
      {
        id: "6",
        media_url: "/6.jpg",
        permalink: "https://instagram.com/celestialchurchfuta",
        media_type: "IMAGE",
      },
      {
        id: "7",
        media_url: "/7.jpg",
        permalink: "https://instagram.com/celestialchurchfuta",
        media_type: "IMAGE",
      },
      {
        id: "8",
        media_url: "/8.jpg",
        permalink: "https://instagram.com/celestialchurchfuta",
        media_type: "IMAGE",
      },
      {
        id: "9",
        media_url: "/9.jpg",
        permalink: "https://instagram.com/celestialchurchfuta",
        media_type: "IMAGE",
      },
    ]
  }

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: getAnimationDuration(0.4) },
    },
  }

  const gridColsClass = gridCols === "4" ? "md:grid-cols-4 lg:grid-cols-4" : "md:grid-cols-3 lg:grid-cols-3"

  if (loading) {
    return (
      <section className="py-16 lg:py-24 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {showTitle && (
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-gray-600 mb-2">Instagram</p>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-navy-dark">Loading from Instagram...</h2>
            </div>
          )}
          {variant === 'masonry' ? (
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {Array.from({ length: limit }).map((_, i) => (
                <div key={i} className="break-inside-avoid bg-gray-200 rounded-lg aspect-square animate-pulse" />
              ))}
            </div>
          ) : (
            <div className={`grid grid-cols-2 ${gridColsClass} gap-4`}>
              {Array.from({ length: limit }).map((_, i) => (
                <div key={i} className="aspect-square bg-gray-200 rounded-lg animate-pulse" />
              ))}
            </div>
          )}
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 lg:py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: getAnimationDuration(0.6) }}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Instagram className="w-5 h-5 text-pink-600" />
              <p className="text-xs uppercase tracking-widest text-gray-600">Follow Us on Instagram</p>
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-navy-dark">
              Stay connected in fellowship, see all events and gatherings
            </h2>
          </motion.div>
        )}

        {error && (
          <div className="text-center mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-800 text-sm">{error}</p>
          </div>
        )}

        {variant === 'masonry' ? (
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {posts.map((post, index) => (
              <motion.a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 break-inside-avoid bg-gray-100"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={post.media_type === "VIDEO" ? post.thumbnail_url || post.media_url : post.media_url}
                  alt={post.caption || "Instagram post"}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="text-white w-6 h-6" />
                </div>

                {/* Video indicator */}
                {post.media_type === "VIDEO" && (
                  <div className="absolute top-2 right-2 bg-black/70 rounded-full p-2">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                )}
              </motion.a>
            ))}
          </div>
        ) : (
          <motion.div
            className={`grid grid-cols-2 ${gridColsClass} gap-4`}
            variants={containerVariants}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
          >
            {posts.map((post, index) => (
              <motion.a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-square bg-gray-100"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={post.media_type === "VIDEO" ? post.thumbnail_url || post.media_url : post.media_url}
                  alt={post.caption || "Instagram post"}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="text-white w-8 h-8" />
                </div>

                {/* Video indicator */}
                {post.media_type === "VIDEO" && (
                  <div className="absolute top-2 right-2 bg-black/70 rounded-full p-2">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                )}
              </motion.a>
            ))}
          </motion.div>
        )}

        {/* Follow button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: getAnimationDuration(0.6), delay: 0.5 }}
        >
          <motion.a
            href="https://instagram.com/celestialchurchfuta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram className="w-5 h-5" />
            Follow @celestialchurchfuta
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
