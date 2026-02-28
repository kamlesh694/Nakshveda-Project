"use client"
import Link from "next/link"

const phoneNumber = "918200261494"

export default function CTASection() {

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "नमस्ते गुरुजी, मुझे ज्योतिष परामर्श चाहिए।"
  )}`

  return (
    <section className="relative py-20 bg-gradient-to-r from-black via-gray-900 to-black text-white overflow-hidden">

      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-[url('/images/stars-bg.png')] opacity-10 bg-cover bg-center"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-snug">
          क्या आप अपनी समस्याओं से परेशान हैं?
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-sm md:text-lg">
          प्रेम, विवाह, करियर, बिजनेस या किसी भी प्रकार की समस्या के लिए 
          आज ही ज्योतिषाचार्य से परामर्श लें और पाएँ सटीक समाधान।
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          {/* WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold px-8 py-3 rounded-full hover:scale-105 transition duration-300 shadow-lg"
          >
            अभी परामर्श लें
          </a>

          {/* Call Button */}
          <a
            href={`tel:+${phoneNumber}`}
            className="border border-yellow-400 text-yellow-400 px-8 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition duration-300"
          >
            अभी कॉल करें
          </a>

        </div>

      </div>
    </section>
  )
}