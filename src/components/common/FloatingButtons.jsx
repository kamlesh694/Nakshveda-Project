"use client";

import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {

    const phoneNumber = "918200261494";
    const message = "Hello Manish Joshi Ji, I want to book a consultation.";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="fixed bottom-9 md:bottom-7 right-6 md:left-6 md:right-auto flex flex-col gap-4 z-50">

            {/* Call Button */}
            <a
                href="tel:+918200261494"
                className="bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition duration-300 animate-bounce"
            >
                <FaPhoneAlt size={20} />
            </a>

            {/* WhatsApp Button */}
            <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
            >
                <FaWhatsapp size={22} />
            </a>

        </div>
    );
}