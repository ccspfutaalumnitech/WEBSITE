"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPageClient() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="relative w-full h-64 md:h-80 overflow-hidden">
        <img
          src="/church-members-in-white-garments.jpg"
          alt="Church members in worship"
          className="w-full h-full object-cover"
        />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in touch with us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Project image layout undo layer flip colored union style phone. Composed editor must inspired component line
            union invite edit. Sash undefined.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="border-2 border-gray-300 rounded-3xl p-8 flex flex-col items-center text-center hover:border-gray-400 transition">
            <Phone size={32} className="text-gray-800 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
            <a href="tel:+2348015852976" className="text-gray-600 hover:text-gray-900 transition">
              +234-805-852-7976
            </a>
          </div>

          <div className="border-2 border-gray-300 rounded-3xl p-8 flex flex-col items-center text-center hover:border-gray-400 transition">
            <Mail size={32} className="text-gray-800 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
            <a href="mailto:support@celefuta.com" className="text-gray-600 hover:text-gray-900 transition">
              support@celefuta.com
            </a>
          </div>

          <div className="border-2 border-gray-300 rounded-3xl p-8 flex flex-col items-center text-center hover:border-gray-400 transition">
            <MapPin size={32} className="text-gray-800 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-600">Along Deeper-Life Street, Futa Narthgate, Akure.</p>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg mb-16 h-96">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.1234567890!2d5.246!3d7.257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104139c5c5c5c5c5%3A0x1234567890abcdef!2sFederal%20University%20of%20Technology%20Akure!5e0!3m2!1sen!2sng!4v1234567890"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section className="relative w-full">
        <img
          src="/church-members-praying-together.jpg"
          alt="Church members in testimony"
          className="w-full h-64 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-2">We have come this far by Faith</h3>
            <p className="text-lg">A testimony of God's grace and love in our journey</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition font-semibold">
            Learn more
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
