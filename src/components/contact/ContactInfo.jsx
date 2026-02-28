"use client"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

export default function ContactInfo() {

  const phoneNumber = "918200261494"
  const message = "Hello Manish Joshi, I want to book a horoscope consultation."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Contact <span className="text-red-600">Naksh</span>
            <span className="text-gray-900">Veda</span>
          </h2>
          <p className="text-gray-600 mt-3">
            Get expert astrology consultation from Manish Joshi
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-8">

          {/* Call Card */}
          <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-2 border border-gray-100">
            <Phone className="text-red-600 mb-5 group-hover:scale-110 transition duration-300" size={40} />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">
              +91 8200261494 <br />
              Mon - Sat (9AM - 7PM)
            </p>
            <a
              href="tel:+918200261494"
              className="inline-block bg-red-600 text-white px-5 py-2 rounded-full text-sm hover:bg-black transition"
            >
              Call Now
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-2 border border-gray-100">
            <MessageCircle className="text-green-600 mb-5 group-hover:scale-110 transition duration-300" size={40} />
            <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
            <p className="text-gray-600 mb-4">
              Quick response for instant astrology guidance.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-5 py-2 rounded-full text-sm hover:bg-black transition"
            >
              Chat Now
            </a>
          </div>

          {/* Email Card */}
          <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-2 border border-gray-100">
            <Mail className="text-yellow-500 mb-5 group-hover:scale-110 transition duration-300" size={40} />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600 mb-10">
              joshimanish1801@gmail.com
            </p>
            <a
              href="mailto:joshimanish1801@gmail.com"
              className="inline-block bg-yellow-500 text-white px-5 py-2 rounded-full text-sm hover:bg-black transition"
            >
              Send Email
            </a>
          </div>

          {/* Location Card */}
          <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-2 border border-gray-100">
            <MapPin className="text-blue-600 mb-5 group-hover:scale-110 transition duration-300" size={40} />
            <h3 className="text-xl font-semibold mb-2">Our Location</h3>
            <p className="text-gray-600 mb-4">
              Ahmedabad, Gujarat <br />
              India
            </p>
            <a
              href="https://maps.app.goo.gl/7hmxbWVfAxMTt6YaA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full text-sm hover:bg-black transition"
            >
              View Map
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}