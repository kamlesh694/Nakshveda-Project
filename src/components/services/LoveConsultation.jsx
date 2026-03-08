"use client"

export default function LoveConsultation() {

  const phoneNumber = "918200261494"
  const message = "Namaste Guruji, Mujhe love consultation chahiye."

  return (
    <section className="bg-white py-20 px-6">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* Image Left (Desktop) */}
        <div className="order-2 lg:order-1">
          <img
            src="/images/relation.png"
            alt="Love Consultation"
            className="rounded-3xl shadow-2xl w-full ] md:h-80 lg:h-[550px] object-cover"
          />
        </div>

        {/* Content Right */}
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Love & Relationship Consultation
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Facing problems in your relationship? NakshVeda provides accurate 
            astrological solutions for love, marriage and emotional harmony.
          </p>

          <ul className="space-y-3 text-gray-700 mb-8">
            <li>✔ Love Marriage Possibility</li>
            <li>✔ Breakup Problem Solution</li>
            <li>✔ One Side Love Guidance</li>
            <li>✔ Husband-Wife Dispute Solution</li>
            <li>✔ Relationship Compatibility Check</li>
          </ul>

          <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded-full transition duration-300 shadow-md"
          >
            Get Love Consultation
          </a>
        </div>

      </div>

    </section>
  )
}