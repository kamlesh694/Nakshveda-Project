"use client"
import Image from "next/image"
import Link from "next/link"   // ✅ add this

const phoneNumber = "918200261494"

const services = [
  {
    title: "लव एवं रिलेशनशिप समाधान",
    desc: "प्रेम विवाह में बाधा, ब्रेकअप सुलह, परिवारिक विरोध समाप्त",
    img: "/images/loveproblem.jpg",
  },
  {
    title: "करियर एवं नौकरी मार्गदर्शन",
    desc: "सरकारी नौकरी, प्रमोशन, करियर ग्रोथ समाधान",
    img: "/images/career.png",
  },
  {
    title: "बिजनेस एवं धन समस्या समाधान",
    desc: "बिजनेस लॉस रिकवरी, आर्थिक स्थिरता, निवेश मार्गदर्शन",
    img: "/images/Bussiness-loss.jpg",
  },
]

export default function ServicePreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            हमारी प्रमुख सेवाएँ
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            प्रसिद्ध ज्योतिषाचार्य मनीष जोशी द्वारा सटीक भविष्यवाणी और प्रभावी उपाय।
          </p>

          {/* ✅ View More Button Added */}
          <Link
            href="/services"
            className="inline-block mt-6 bg-black text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500 hover:text-black transition"
          >
            View More
          </Link>

        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {services.map((service, index) => {

            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
              `नमस्ते गुरुजी, मुझे ${service.title} के बारे में जानकारी चाहिए।`
            )}`

            return (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-4">

                  <h3 className="text-xl font-semibold group-hover:text-red-600 transition">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm">
                    {service.desc}
                  </p>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition"
                  >
                    अभी परामर्श लें
                  </a>

                </div>
              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}