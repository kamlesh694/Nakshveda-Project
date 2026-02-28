"use client"
import Image from "next/image"

const phoneNumber = "918200261494"

const problems = [
  { title: "लव प्रॉब्लम समाधान", img: "/images/loveproblem.jpg" },
  { title: "ब्रेकअप समस्या", img: "/images/breakup.webp" },
  { title: "विवाह में देरी", img: "/images/vivah.jpg" },
  { title: "पति-पत्नी विवाद", img: "/images/pati-patni.jpeg" },
  { title: "एक्स्ट्रा मैरिटल अफेयर", img: "/images/affair.jpg" },
  { title: "करियर समस्या", img: "/images/career.png" },
  { title: "बिजनेस में नुकसान", img: "/images/Bussinessloss.avif" },
  { title: "कोर्ट केस समस्या", img: "/images/court.webp" },
  { title: "काला जादू हटाएं", img: "/images/kala-jadu.jpeg" },
  { title: "कुंडली दोष समाधान", img: "/images/kundali.jpg" },
]

export default function ProblemsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          हमारी विशेष समस्याएँ
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">

          {problems.map((item, index) => {

            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
              `नमस्ते गुरुजी, मुझे ${item.title} के लिए निवारण चाहिए।`
            )}`

            return (
              <div
                key={index}
                className="group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative cursor-pointer h-40 sm:h-44 md:h-48 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Golden Bottom */}
                <div className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-center py-4 px-3 flex flex-col gap-3">

                  <h3 className="text-white font-semibold text-sm sm:text-base">
                    {item.title}
                  </h3>

                  {/* Button */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-yellow-700 font-semibold py-2 rounded-full text-sm hover:bg-black hover:text-white transition duration-300"
                  >
                    निवारण पाएँ
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