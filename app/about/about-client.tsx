'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

export default function AboutClient() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal({ threshold: 0.2 })
  const { ref: historyRef, isVisible: historyVisible } = useScrollReveal({ threshold: 0.2 })

  const historyContent = [
    {
      title: 'Our History - Part 1',
      text: 'The history of the church development in The Federal University of Technology, Akure is centered on year 1999. Before this year there was precarious existence of a group tagged "focus". It was recorded that they worshipped without observing the totality of service doctrine. Their belief and practice though influenced by their student status was viewed controversial. Following this era, around 1999, some Celestial Students in the University felt the great need and concern to assemble, relate and worship under the aegis of the church. These included Ayo Falayi, Olu Bankole, Remilekun Teniola, Akin Akinlalu, Banji Babatunde among others. They had no permanent site for their devotional activities.',
      image: '/22.jpg',
      imagePosition: 'left'
    },
    {
      title: 'Our History - Part 2',
      text: 'Not long after the establishment of IYANU Parish, the sign post of the church was noticed by the celestial students\' who were eager to discover the church. Authoritatively the motion to relocate the Student Parish to this new site was spearheaded by Wole Oni among others. Eventually the church decided and at large moved en masse to Iyanu Parish and met the waiting hands of the shepherd around October, 2000. The genesis of the church was passed down to the new members who seemed vigorous to move the church forward, though the bible study continued in the campus. The state headquarters of the church was in the full knowledge of the church and gladly embraced the upcoming of the student parish in this new place.',
      image: '/23.jpg',
      imagePosition: 'right'
    },
    {
      title: 'Our History - Part 3',
      text: 'An epochal occasion was held to Gospec Feasting which led to a strong division and eventually anarchy in the church. This took place August/September in year 2001. By this time new members had joined as the University had admitted new students. The concepts of Gospec to the new members not only seemed strange but fanatic and impostory and gradually smothered their anger and dissuaded their vigour and commitment. The effect of the feasting left behind an ugly image for the Parish in Ondo State, as the parish was regarded to belonged to a Rebellion. Several revelations were recorded about the future glory of the parish in terms of congregation size and spiritual glory.',
      image: '/24.jpg',
      imagePosition: 'left'
    },
    {
      title: 'Our History - Part 4',
      text: 'The idea of leaving Iyanu and an independent Student Parish did not go well with pan Gospec members. The tussle and puzzle was interrupted by ASUU strike in year 2002. On resumption back to campus a fresh movie was made in resurgence to reform the student parish that has almost lost its course into the so-called "Egypt of Iyanu Parish". The new course fought for the establishment of a formidable structure of a typical Student Parish with leadership structure and well institutionalized programmes for effective spiritual worship too meet the spiritual and academic objectives of Futariancelestians. A general church meeting was called and a seven-member committee was formed to select a pioneer Excos for the church.',
      image: '/27.jpg',
      imagePosition: 'right'
    }
  ]

  return (
    <main className="min-h-screen bg-background dark:bg-background transition-colors">
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-16 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-sm font-display font-semibold text-muted-foreground uppercase tracking-wide mb-4">About Us</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-6">
              A Breeding Ground for Men, Where We{'\n'}Encounter <span className="text-primary">GOD.</span>
            </h1>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={heroVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative h-80 sm:h-96 rounded-2xl overflow-hidden border-4 border-primary"
          >
            <img
              src="/Church Image.png"
              alt="Celestial Church of Christ"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* History Section - Alternating Layout */}
      <section ref={historyRef} className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {historyContent.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={historyVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`mb-20 sm:mb-28 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center ${
                section.imagePosition === 'right' ? 'md:grid-flow-dense' : ''
              }`}
            >
              {/* Text Column */}
              <div className={section.imagePosition === 'right' ? 'md:col-start-1' : ''}>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-6">{section.title}</h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {section.text}
                </p>
              </div>

              {/* Image Column */}
              <div className={`relative h-72 sm:h-96 rounded-2xl overflow-hidden ${section.imagePosition === 'right' ? 'md:col-start-2' : ''}`}>
                <motion.img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5 dark:from-primary/10 dark:via-background dark:to-secondary/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our spiritual journey and community
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              { title: 'Faith', description: 'Unwavering belief in God\'s word and authentic worship in the beauty of His holiness' },
              { title: 'Community', description: 'Building strong bonds through genuine fellowship, mutual support, and shared spiritual experiences' },
              { title: 'Growth', description: 'Continuous spiritual transformation and deepening knowledge of God\'s purpose for our lives' },
              { title: 'Service', description: 'Dedicated to serving others with compassion, extending God\'s love to our campus and beyond' },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="glass p-6 sm:p-8 rounded-2xl hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <h3 className="text-xl font-display font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
