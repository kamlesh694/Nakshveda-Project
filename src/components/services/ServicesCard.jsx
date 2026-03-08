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
    { title: "Janam Kundli Analysis", desc: "Complete birth chart reading with detailed planetary analysis.", img: "/images/janamkundli.png" },
    { title: "Marriage Compatibility", desc: "Kundli matching and compatibility report.", img: "/images/kundli.png" },
    { title: "Love Problem Solution", desc: "Astrological remedies for relationship issues.", img: "/images/LoveProblem.png" },
    { title: "Career Guidance", desc: "Career prediction and job success timing.", img: "/images/carrer.png" },
    { title: "Business Astrology", desc: "Business growth and partnership prediction.", img: "/images/bussiness.png" },
    { title: "Financial Astrology", desc: "Wealth yog and investment timing.", img: "/images/financial.png" },
    { title: "Vastu Consultation", desc: "Home and office vastu correction.", img: "/images/Vastu.png" },
    { title: "Gemstone Recommendation", desc: "Personalized gemstone suggestions.", img: "/images/gemstone.png" },
    { title: "Numerology Report", desc: "Lucky numbers and destiny analysis.", img: "/images/number.png" },
    { title: "Palm Reading", desc: "Hand line analysis and life insights.", img: "/images/palm.png" },
    { title: "Mangal Dosha Analysis", desc: "Complete Mangal dosha remedies.", img: "/images/mangal.png" },
    { title: "Foreign Settlement", desc: "Foreign travel and settlement prediction.", img: "/images/foreign.png" }
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
                className="w-full h-56 object-cover object-[center_45%]  group-hover:scale-110 transition duration-500"
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