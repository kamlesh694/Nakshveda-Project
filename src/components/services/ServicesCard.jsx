"use client"
import { useState, useEffect } from "react"

export default function Services() {

  const [showAll, setShowAll] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const phoneNumber = "918200261494"
  const message = "Namaste Guruji, Mujhe astrology consultation chahiye."

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint
    }

    checkScreen()
    window.addEventListener("resize", checkScreen)

    return () => window.removeEventListener("resize", checkScreen)
  }, [])

  const services = [
    { title: "Janam Kundli Analysis", desc: "Complete birth chart reading with detailed planetary analysis.", img: "https://images.unsplash.com/photo-1505506874110-6a7a69069a08" },
    { title: "Marriage Compatibility", desc: "Kundli matching and compatibility report.", img: "https://images.unsplash.com/photo-1519741497674-611481863552" },
    { title: "Love Problem Solution", desc: "Astrological remedies for relationship issues.", img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2" },
    { title: "Career Guidance", desc: "Career prediction and job success timing.", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d" },
    { title: "Business Astrology", desc: "Business growth and partnership prediction.", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf" },
    { title: "Financial Astrology", desc: "Wealth yog and investment timing.", img: "https://images.unsplash.com/photo-1565514158740-064f34bd6f66" },
    { title: "Vastu Consultation", desc: "Home and office vastu correction.", img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511" },
    { title: "Gemstone Recommendation", desc: "Personalized gemstone suggestions.", img: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2" },
    { title: "Numerology Report", desc: "Lucky numbers and destiny analysis.", img: "https://images.unsplash.com/photo-1520975922326-47f98b8c8e5f" },
    { title: "Palm Reading", desc: "Hand line analysis and life insights.", img: "https://images.unsplash.com/photo-1603575449299-9f7e0c3d75bd" },
    { title: "Mangal Dosha Analysis", desc: "Complete Mangal dosha remedies.", img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308" },
    { title: "Foreign Settlement", desc: "Foreign travel and settlement prediction.", img: "https://images.unsplash.com/photo-1502920917128-1aa500764b95" }
  ]

  // 📱 Mobile → show 6
  // 💻 Desktop → show all
  const visibleServices = isMobile
    ? (showAll ? services : services.slice(0, 6))
    : services

  return (
    <section className="bg-white py-20 px-6">

      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          Our Complete Astrology Services
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Authentic Vedic astrology solutions with accurate predictions.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">

        {visibleServices.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden group"
          >
            <div className="overflow-hidden">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                {service.desc}
              </p>

              <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-5 py-2 rounded-full text-sm transition duration-300"
              >
                Consult Now
              </a>
            </div>
          </div>
        ))}

      </div>

      {/* View More Button - Mobile Only */}
      {isMobile && !showAll && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-700 transition duration-300"
          >
            View More Services
          </button>
        </div>
      )}

    </section>
  )
}