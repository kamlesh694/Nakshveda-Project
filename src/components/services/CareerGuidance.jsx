"use client"

export default function CareerGuidance() {

  const phoneNumber = "918200261494"
  const message = "Namaste Guruji, Mujhe career guidance consultation chahiye."

  return (
    <section className="bg-gray-50 py-20 px-6">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Career Guidance Through Astrology
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Confused about your career path? NakshVeda provides accurate career predictions 
            based on your birth chart, planetary positions and dashas.
          </p>

          <ul className="space-y-3 text-gray-700 mb-8">
            <li>✔ Best Career Path Prediction</li>
            <li>✔ Government Job Chances</li>
            <li>✔ Promotion & Growth Timing</li>
            <li>✔ Business vs Job Decision</li>
            <li>✔ Foreign Career Opportunities</li>
          </ul>

          <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-full transition duration-300 shadow-md"
          >
            Get Career Consultation
          </a>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Career Guidance"
            className="rounded-3xl shadow-2xl w-full object-cover"
          />
        </div>

      </div>

    </section>
  )
}