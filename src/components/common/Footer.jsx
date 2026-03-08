"use client";

import { FaPhoneAlt, FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {

    const phoneNumber = "918200261494";
    const message = "Hello Manish Joshi Ji, I want to book a consultation.";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

                {/* About */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">
                        <span className="text-red-500">Naksh</span>
                        <span className="text-yellow-400">Veda</span>
                    </h2>
                    <p className="text-sm leading-6">
                        प्रेम विवाह, रिलेशनशिप समस्या, पति-पत्नी विवाद,
                        करियर और बिज़नेस रुकावट जैसी सभी ज्योतिषीय समस्याओं का
                        सटीक समाधान ज्योतिषाचार्य मनीष जोशी द्वारा।
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
                        <li><Link href="/about" className="hover:text-yellow-400">About</Link></li>
                        <li><Link href="/services" className="hover:text-yellow-400">Services</Link></li>
                        <li><Link href="/contact" className="hover:text-yellow-400">Contact</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Our Services</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Love Problem Solution</li>
                        <li>Marriage Consultation</li>
                        <li>Career Guidance</li>
                        <li>Black Magic Removal</li>
                        <li>Online Horoscope</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Contact Info</h3>
                    <div className="space-y-3 text-sm">

                        <a href="tel:+918200261494" className="flex items-center gap-2 hover:text-yellow-400">
                            <FaPhoneAlt /> +91 8200261494
                        </a>

                        <a
                            href={whatsappURL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-yellow-400"
                        >
                            <FaWhatsapp /> WhatsApp Chat
                        </a>

                        <p>📍 India (Online & Offline Consultation)</p>

                        {/* Social Icons */}
                        <div className="flex gap-4 pt-2">

                            <a
                                href="https://www.instagram.com/SAIBABAASTRO"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 p-2 rounded-full hover:bg-pink-500 hover:text-white transition duration-300"
                            >
                                <FaInstagram size={16} />
                            </a>

                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Line */}
            <div className="border-t border-gray-700 mt-12 mb-12 pt-6 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} NakshVeda | Designed & Developed by__  InfernoKS </div>
        </footer>
    );
}