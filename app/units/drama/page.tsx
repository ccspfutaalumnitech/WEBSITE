import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export const metadata = {
  title: "Drama Unit - Celestial Church of Christ",
  description: "Drama Unit - Coming Soon",
}

export default function DramaUnitPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      <Navigation />
      <section className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">⛪</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12">Coming Soon</h1>
          <div className="mb-12">
            <svg className="w-full max-w-md mx-auto h-48" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="craneGrad5" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: "#ff6b6b", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#ff8787", stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <rect x="20" y="160" width="260" height="40" fill="#e8e8e8" />
              <rect
                x="80"
                y="100"
                width="40"
                height="60"
                fill="none"
                stroke="#d0d0d0"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              <rect
                x="150"
                y="80"
                width="40"
                height="80"
                fill="none"
                stroke="#d0d0d0"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              <line x1="150" y1="40" x2="150" y2="80" stroke="url(#craneGrad5)" strokeWidth="8" />
              <line x1="150" y1="50" x2="100" y2="20" stroke="url(#craneGrad5)" strokeWidth="6" />
              <line x1="150" y1="50" x2="200" y2="20" stroke="url(#craneGrad5)" strokeWidth="6" />
              <circle cx="180" cy="40" r="3" fill="#333" />
              <line x1="180" y1="43" x2="180" y2="60" stroke="#333" strokeWidth="2" />
              <line x1="100" y1="60" x2="100" y2="100" stroke="#999" strokeWidth="6" />
              <line x1="100" y1="70" x2="60" y2="50" stroke="#999" strokeWidth="5" />
              <line x1="100" y1="70" x2="140" y2="50" stroke="#999" strokeWidth="5" />
              <rect x="40" y="140" width="20" height="20" fill="#ff6b6b" />
              <rect x="70" y="145" width="15" height="15" fill="#333" />
              <rect x="220" y="130" width="25" height="30" fill="#ff6b6b" />
              <rect x="245" y="140" width="15" height="20" fill="#333" />
            </svg>
          </div>
          <p className="text-lg text-gray-500 mb-8">This section is under construction currently</p>
          <p className="text-sm text-gray-600">©2025 Celefuta. All rights reserved.</p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
