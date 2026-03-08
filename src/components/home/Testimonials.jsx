"use client"
import { useEffect, useState } from "react"
import Image from "next/image"

const testimonials = [
  {
    name: "Rohit Sharma",
    review:
      "Manish Joshi ji ne meri love problem 7 din me solve kar di. Bahut accurate prediction tha.",
    image: "/images/rohit.png",
  },
  {
    name: "Priya Patel",
    review:
      "Marriage delay ka solution mila. Ab meri shaadi fix ho chuki hai. Highly recommended astrologer.",
    image: "/images/priya.png",
  },
  {
    name: "Amit Verma",
    review:
      "Business loss chal raha tha, guidance ke baad growth start ho gayi. Thank you sir.",
    image: "/images/amit.png",
  },
  
]

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          What Our Clients Say
        </h2>

        <div className="relative overflow-hidden">

          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="min-w-full px-4"
              >
                <div className="bg-white shadow-xl rounded-3xl p-8 md:p-12">

                  <div className="flex justify-center mb-6">
                    <div className="relative w-20 h-20">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="rounded-full object-[center_20%] object-cover"
                      />
                    </div>
                  </div>

                  <p className="text-gray-600 text-base md:text-lg mb-6">
                    “{item.review}”
                  </p>

                  <h4 className="font-semibold text-lg">
                    {item.name}
                  </h4>

                  <div className="text-yellow-500 mt-2">
                    ⭐⭐⭐⭐⭐
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                current === index ? "bg-red-600" : "bg-gray-400"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}