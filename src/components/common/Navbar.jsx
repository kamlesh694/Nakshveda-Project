"use client"
import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const phoneNumber = "918200261494"
    const message = "Hello Nakshveda, I want to book a horoscope consultation."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    return (
        <>
            {/* 🔥 TOP MOVING STRIP (NOT FIXED) */}
            <div className="bg-gradient-to-r from-red-600 to-yellow-500 text-white text-sm py-2 overflow-hidden">
                <div className="marquee whitespace-nowrap flex">

                    <div className="marquee-content">
                        ✨ Love Problem Solution | Relationship Issues | Breakup Patch-Up | Husband-Wife Disputes | Family Problems | Career & Business Growth | Court Case Solution | Child Blessings | Foreign Settlement | Black Magic Removal | Accurate Astrology Guidance by Manish Joshi | Call Now: +91 8200261494 ✨
                    </div>

                    <div className="marquee-content ml-16">
                        ✨ Love Problem Solution | Relationship Issues | Breakup Patch-Up | Husband-Wife Disputes | Family Problems | Career & Business Growth | Court Case Solution | Child Blessings | Foreign Settlement | Black Magic Removal | Accurate Astrology Guidance by Manish Joshi | Call Now: +91 8200261494 ✨
                    </div>

                </div>
            </div>

            {/* 🔥 HEADER + BOTTOM STRIP WRAPPER (STICKY) */}
            <div className="sticky top-0 z-50">

                {/* HEADER */}
                <header className="bg-white/90 backdrop-blur-md shadow-sm">
                    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                        {/* LOGO */}
                        <h1 className="text-2xl font-bold tracking-wide cursor-pointer">
                            <span className="text-red-600">Naksh</span>
                            <span className="text-gray-900">Veda</span>
                        </h1>

                        {/* DESKTOP MENU */}
                        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
                            <Link href="/" className="hover:text-red-600 transition">Home</Link>
                            <Link href="/about" className="hover:text-red-600 transition">About</Link>
                            <Link href="/services" className="hover:text-red-600 transition">Services</Link>
                            <Link href="/contact" className="hover:text-red-600 transition">Contact</Link>

                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-full shadow-md"
                            >
                                Book Consultation
                            </a>
                        </nav>

                        {/* MOBILE BUTTON */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden text-gray-800"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </header>

                {/* 🔥 BOTTOM STICKY STRIP */}
                <div className="bg-red-600 text-white font-bold py-2 overflow-hidden border-t">
                    <div className="marquee whitespace-nowrap flex">
                        <div className="marquee-content">
                            🔮 प्रेम विवाह में बाधा, रिलेशनशिप समस्या, ब्रेकअप के बाद सुलह, पति-पत्नी विवाद, परिवारिक कलह, नौकरी में रुकावट, बिज़नेस ग्रोथ समस्या, कोर्ट केस समाधान, संतान सुख, विदेश यात्रा योग, काला जादू निवारण एवं हर प्रकार की ज्योतिषीय समस्या का सटीक समाधान प्रसिद्ध ज्योतिषाचार्य मनीष जोशी द्वारा | संपर्क करें: +91 8200261494 🔮
                        </div>

                        <div className="marquee-content ml-16">
                            🔮 प्रेम विवाह में बाधा, रिलेशनशिप समस्या, ब्रेकअप के बाद सुलह, पति-पत्नी विवाद, परिवारिक कलह, नौकरी में रुकावट, बिज़नेस ग्रोथ समस्या, कोर्ट केस समाधान, संतान सुख, विदेश यात्रा योग, काला जादू निवारण एवं हर प्रकार की ज्योतिषीय समस्या का सटीक समाधान प्रसिद्ध ज्योतिषाचार्य मनीष जोशी द्वारा | संपर्क करें: +91 8200261494 🔮
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}