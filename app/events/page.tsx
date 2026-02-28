import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export const metadata = {
  title: "Events - Celestial Church of Christ",
  description: "Check out our upcoming events and activities",
}

interface Event {
  id: number
  title: string
  date: string
  time: string
  description: string
  theme?: string
  isFeatured?: boolean
}

export default function EventsPage() {
  const events: Event[] = [
    {
      id: 1,
      title: "Fatherhood 7.0",
      date: "Thursday 14th, August 2025",
      time: "9am",
      description:
        "Archbearers of Truth - Deuteronomy 6:4-7. A gathering focused on strengthening the father figure in our community. Join us for an impactful session on family values and spiritual leadership.",
      theme: "Father-hood",
      isFeatured: true,
    },
    {
      id: 2,
      title: "Brothers' and Sisters' Summit",
      date: "Coming Soon",
      time: "TBA",
      description:
        "Vivant unde background hit best pixel rectangle pencil effect vector. Plugin outline distribute content cubic. Clip ellipse blur stop pen home asset rotate content cubic line edit layout export bullet reseizing line content floating shadow.",
    },
    {
      id: 3,
      title: "Sisters' Weekend",
      date: "Coming Soon",
      time: "TBA",
      description:
        "Vivant unde background hit best pixel rectangle pencil effect vector. Plugin outline distribute content cubic. Clip ellipse blur stop pen home asset rotate content cubic line edit layout export bullet reseizing line content floating shadow.",
    },
    {
      id: 4,
      title: "Church Anniversary",
      date: "Coming Soon",
      time: "TBA",
      description:
        "Vivant unde background hit best pixel rectangle pencil effect vector. Plugin outline distribute content cubic. Clip ellipse blur stop pen home asset rotate content cubic line edit layout export bullet reseizing line content floating shadow.",
    },
    {
      id: 5,
      title: "Church Retreat",
      date: "Coming Soon",
      time: "TBA",
      description:
        "Vivant unde background hit best pixel rectangle pencil effect vector. Plugin outline distribute content cubic. Clip ellipse blur stop pen home asset rotate content cubic line edit layout export bullet reseizing line content floating shadow.",
    },
    {
      id: 6,
      title: "Brothers' Summit",
      date: "Coming Soon",
      time: "TBA",
      description:
        "Vivant unde background hit best pixel rectangle pencil effect vector. Plugin outline distribute content cubic. Clip ellipse blur stop pen home asset rotate content cubic line edit layout export bullet reseizing line content floating shadow.",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-navy-dark mb-2">Upcoming Events</h1>
          <p className="text-lg text-gray-600">Stay updated with our church activities and spiritual gatherings</p>
        </div>

        {events[0] && (
          <div className="mb-16">
            <div className="bg-gradient-to-r from-orange-400 to-orange-300 rounded-lg overflow-hidden p-8 text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-block bg-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    Theme: {events[0].theme}
                  </div>
                  <h2 className="text-5xl font-bold mb-4">{events[0].title}</h2>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="bg-orange-600 px-3 py-1 rounded text-xs font-semibold">Date</span>
                      <p className="text-lg">{events[0].date}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="bg-orange-600 px-3 py-1 rounded text-xs font-semibold">Time</span>
                      <p className="text-lg">{events[0].time}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed">{events[0].description}</p>
                </div>
                <div className="w-full h-80 bg-gradient-to-br from-orange-300 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl font-semibold opacity-50">Event Image</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-8">
          {events.slice(1).map((event) => (
            <div key={event.id} className="flex gap-6 pb-8 border-b border-gray-200 last:border-b-0">
              <div className="w-40 h-40 bg-gray-300 rounded-lg flex-shrink-0 flex items-center justify-center">
                <span className="text-gray-500 text-sm font-medium">Event Image</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-navy-dark mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                <div className="flex gap-6 text-sm text-gray-700">
                  <span className="font-semibold">Date: {event.date}</span>
                  <span className="font-semibold">Time: {event.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
