"use client"
import Image from "next/image"

export default function HeroSection() {
  const phoneNumber = "918200261494"
  const message = "Hello Astrologer Manish Joshi, I want to book a consultation."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <section className="relative w-full min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/Astrology-banner.avif"  
        alt="Astrology Consultation"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-5 md:px-6 max-w-4xl">

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-5">
          Trusted Astrology Guidance by <br />
          <span className="text-yellow-400 text-3xl ">Astrologer <span className="text-7xl"> Manish Joshi</span></span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8">
          Love Problem, Relationship Issues, Marriage Delay,
          Career Growth, Business Obstacles & Accurate Horoscope Predictions.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <a
            href="tel:+918200261494"
            className="bg-white text-red-600 font-semibold px-7 py-3 rounded-full shadow-lg hover:bg-yellow-400 hover:text-black transition duration-300"
          >
            📞 Call Now
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-yellow-500 to-orange-500 px-7 py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition"
          >
            💬 WhatsApp Now
          </a>

        </div>

      </div>

    </section>
  )
}
      

  