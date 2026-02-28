import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="bg-gradient-to-r bg-white text-black py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Discover the Power of <span className="text-yellow-400">Vedic Astrology</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto mb-6 leading-relaxed">
          Nakshveda is a modern astrology platform dedicated to delivering accurate
          horoscope readings, kundli analysis, and spiritual guidance based on
          ancient Vedic principles. We combine traditional knowledge with
          modern technology to provide meaningful insights for your life.
        </p>

        {/* Extra Details */}
        <div className="grid md:grid-cols-3 gap-6 mt-10 text-left">
          <div className="bg-gray-100 p-6 rounded-xl backdrop-blur-md">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">
              Accurate Predictions
            </h3>
            <p className="text-gray-800 text-sm">
              Get detailed horoscope reports and planetary analysis crafted by
              expert astrologers.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl backdrop-blur-md">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">
              Personalized Guidance
            </h3>
            <p className="text-gray-800 text-sm">
              Receive customized solutions and remedies tailored to your birth chart.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl backdrop-blur-md">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">
              Modern Technology
            </h3>
            <p className="text-gray-800 text-sm">
              Experience astrology services powered by secure and advanced web technology.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap mt-12">
          <Link href="/services">
            <button className="bg-yellow-400 cursor-pointer text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
              Explore Services
            </button>
          </Link>

          <Link href="/contact">
            <button className="border cursor-pointer border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition">
              Contact Us
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}