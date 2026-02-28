"use client"
import { useState, useEffect } from "react"

export default function Hero() {

  const images = [
    "https://images.unsplash.com/photo-1534447677768-be436bb09401",
    "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0",
    "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa"
  ]

  const [current, setCurrent] = useState(0)

  // 🔮 Pandit Contact Details
  const phoneNumber = "918200261494" 
  const whatsappMessage = "Namaste Guruji, Mujhe apni Kundali check karwani hai."

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Slider */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 scale-105" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt="cosmic background"
            className="w-full h-full object-cover transition-transform duration-[5000ms]"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#0a001f]/80 to-black/90"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-400 mb-6 tracking-wide">
          Discover Your Destiny With NakshVeda
        </h1>

        <p className="text-gray-200 max-w-2xl mb-8 text-sm sm:text-base md:text-lg">
          Unlock the secrets of your stars, kundli insights, and personalized astrology guidance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-full transition duration-300 shadow-lg shadow-yellow-500/30 text-center"
          >
            Get Your Kundli
          </a>

          {/* Call Button */}
          <a
            href={`tel:${phoneNumber}`}
            className="border border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-black px-8 py-3 rounded-full transition duration-300 text-center"
          >
            Talk To Astrologer
          </a>

        </div>

      </div>

    </section>
  )
}