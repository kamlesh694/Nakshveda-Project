"use client"
import { useEffect, useState } from "react"
import Image from "next/image"

const slides = [
    {
        title: "Love & Relationship Problem",
        desc: "Breakup, Marriage Delay, Family Objection Solutions",
        img: "/images/love-problems.jpg",
    },
    {
        title: "Career & Job Growth",
        desc: "Promotion, Government Job & Career Stability",
        img: "/images/career.webp",
    },
    {
        title: "Business & Finance",
        desc: "Business Loss Recovery & Financial Stability",
        img: "/images/bussiness-loss.jpg",
    },
    {
        title: "Kundli & Horoscope",
        desc: "Accurate Birth Chart & Future Predictions",
        img: "/images/future.avif",
    },

    // 🔥 New Slides Added

    {
        title: "Marriage & Compatibility",
        desc: "Kundli Matching & Marriage Solutions",
        img: "/images/marriage.jpeg",
    },
    {
        title: "Health & Grah Dosh",
        desc: "Planetary Remedies & Health Guidance",
        img: "/images/grahDosh.jpg",
    },
    {
        title: "Vastu Consultation",
        desc: "Home & Office Vastu Correction",
        img: "/images/Vastu.jpg",
    },
    {
        title: "Child & Education Problem",
        desc: "Education, Focus & Future Guidance",
        img: "/images/education.avif",
    },
    {
        title: "Court Case & Legal Issues",
        desc: "Legal Matters & Dispute Solutions",
        img: "/images/court.webp",
    },
    {
        title: "Foreign Settlement",
        desc: "Visa, Abroad Travel & Settlement Guidance",
        img: "/images/foreign.jpg",
    },
]

export default function ServicesSlider() {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 text-center">

                <h2 className="text-3xl md:text-4xl font-bold mb-10">
                    Our Astrology Services
                </h2>

                <div className="relative w-full overflow-hidden rounded-3xl shadow-xl">

                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className="min-w-full relative h-[70vh] md:h-[80vh]"
                            >
                                <Image
                                    src={slide.img}
                                    alt={slide.title}
                                    fill
                                    priority
                                    className="object-cover object-center"
                                />

                                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex flex-col justify-center items-center text-white px-6 text-center">
                                    <h3 className="text-2xl md:text-4xl font-bold mb-4">
                                        {slide.title}
                                    </h3>
                                    <p className="text-base md:text-xl text-gray-200 max-w-2xl">
                                        {slide.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Dots */}
                <div className="flex justify-center gap-3 mt-6">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-3 h-3 rounded-full ${current === index ? "bg-red-600" : "bg-gray-400"
                                }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}