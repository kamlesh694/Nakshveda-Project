"use client"
import Image from "next/image"

const phoneNumber = "918200261494"

export default function AboutPreview() {

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "नमस्ते गुरुजी, मुझे आपसे परामर्श लेना है।"
  )}`

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image Side */}
          <div className="relative group">
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/Om.jpg"
                alt="Astrologer"
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-3 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-4 rounded-2xl shadow-lg">
              <p className="text-2xl font-bold">15+ Years</p>
              <p className="text-sm">अनुभव</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="flex flex-col gap-6">

            <h2 className="text-3xl md:text-4xl font-bold">
              प्रसिद्ध ज्योतिषाचार्य मनीष जोशी
            </h2>

            <p className="text-gray-600 leading-relaxed">
              वर्षों के अनुभव और सटीक भविष्यवाणी के लिए प्रसिद्ध। 
              प्रेम विवाह, करियर, व्यवसाय, पारिवारिक विवाद एवं 
              काला जादू निवारण में विशेष विशेषज्ञता।
            </p>

            <p className="text-gray-600 leading-relaxed">
              हजारों संतुष्ट ग्राहकों का विश्वास और सफल समाधान 
              हमारा प्रमुख उद्देश्य है।
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
              >
                अभी परामर्श लें
              </a>

              <a
                href="/about"
                className="border border-gray-400 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                और जानें
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}