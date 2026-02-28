"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"


export default function Navbar() {






    const [isOpen, setIsOpen] = useState(false)


    const phoneNumber = "918200261494"
    const message = "Hello Nakshveda, I want to book a horoscope consultation."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);


    return (
        <>





            {/* MOBILE SLIDE MENU */}

            <div>
                {isOpen && (
                    <div
                        className="fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-black/40 backdrop-blur-sm z-30"
                        onClick={() => setIsOpen(false)}
                    ></div>
                )}


                <div
                    className={`fixed right-0 top-[100px] 
  w-[70%] h-[calc(100vh-100px)]
  bg-white shadow-lg 
  transform transition-transform duration-300 ease-in-out z-50
  ${isOpen ? "translate-x-0" : "translate-x-full"}`}
                >


                    {/* spinner */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none animate-spin-slow">
                        <svg
                            viewBox="20 20 160 160"
                            className="w-40 h-40 text-orange-500"
                            fill="currentColor"
                        >
                            <path d="M98.322 180v-60.16c0-4.101-3.345-6.551-6.58-6.551-1.714 0-3.341.684-4.584 1.927l-42.54 42.54-2.374-2.374 42.54-42.54c1.906-1.906 2.449-4.637 1.417-7.127s-3.346-4.037-6.042-4.037H20v-3.356h60.16c2.695 0 5.01-1.547 6.042-4.037 1.031-2.49.489-5.221-1.417-7.127l-42.54-42.54 2.374-2.374 42.54 42.54c1.242 1.243 2.87 1.927 4.584 1.927 3.234 0 6.58-2.451 6.58-6.551V20h3.356v60.16c0 1.841.724 3.531 2.039 4.758a6.72 6.72 0 0 0 4.542 1.793c1.714 0 3.341-.684 4.584-1.927l42.54-42.54 2.374 2.374-42.54 42.54c-1.906 1.906-2.449 4.637-1.417 7.127s3.346 4.037 6.042 4.037H180v3.356h-60.16c-2.695 0-5.01 1.547-6.042 4.037s-.489 5.221 1.417 7.127l42.54 42.54-2.374 2.374-42.54-42.54c-1.242-1.243-2.87-1.927-4.584-1.927-3.234 0-6.58 2.451-6.58 6.551V180z" />
                        </svg>
                    </div>

                    {/* NakshVeda */}


                    <h1 className="absolute bottom-4 left-1/2 -translate-x-1/2 
text-6xl font-black tracking-[6px]
bg-gradient-to-r from-yellow-400 to-orange-500
bg-clip-text text-transparent opacity-10
select-none pointer-events-none px-4 z-50">
                        NAKSH VEDA
                    </h1>



                    {/* /////////////// */}


                    <div className="p-6 flex flex-col gap-6 text-lg font-medium text-gray-800">

                        <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link href="/about" onClick={() => setIsOpen(false)} >About</Link>
                        <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
                        <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>

                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="relative overflow-hidden group 
  inline-flex items-center justify-center
  bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-500
  text-white text-sm md:text-base
  px-4 md:px-6 py-2.5 md:py-3
  rounded-full font-semibold
  shadow-md transition-all duration-300 ease-in-out
  hover:scale-105 hover:shadow-xl
  active:scale-95 w-full"
                        >
                            <span className="relative z-10 whitespace-nowrap">
                                Book Consultation
                            </span>

                            {/* Shine Effect */}
                            <span className="absolute inset-0 bg-white/20 
  translate-x-[-100%] group-hover:translate-x-[100%]
  transition-transform duration-700 ease-in-out"></span>
                        </a>
                    </div>
                </div>
            </div>







            {/* 🔥 TOP MOVING STRIP (NOT FIXED) */}
            <div className="hidden md:block  bg-gradient-to-r from-red-600 to-yellow-500 text-white text-sm py-2 overflow-hidden">
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
                                onClick={() => setIsOpen(false)}
                                className="relative overflow-hidden group 
  bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-500
  text-white px-6 py-3 rounded-full text-center font-semibold
  shadow-lg transition-all duration-300 ease-in-out
  hover:scale-105 hover:shadow-2xl active:scale-95"
                            >
                                <span className="relative z-10">Book Consultation</span>

                                {/* Shine Effect */}
                                <span className="absolute inset-0 bg-white/20 
  translate-x-[-100%] group-hover:translate-x-[100%]
  transition-transform duration-700 ease-in-out"></span>
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