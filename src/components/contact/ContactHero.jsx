"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function ContactHero() {

    const whatsappNumber = "918200261494";
    const message = "Hello Manish Joshi Ji, I want to book a consultation regarding my problem.";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <section className="bg-gray-50 py-20 px-6">
            <div className="max-w-6xl mx-auto text-center bg-white shadow-xl rounded-3xl p-12">

                {/* Heading */}
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight">
                    
                    <span className="text-red-600">Astrologer</span>{" "}
                    <span className="text-yellow-500">Manish Joshi</span>
                </h1>

                {/* Subheading */}
                <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
                    समाधान पाएँ प्रेम विवाह, रिलेशनशिप समस्या, पति-पत्नी विवाद,
                    करियर और बिज़नेस रुकावट जैसी सभी ज्योतिषीय समस्याओं का।
                    Online & Offline Consultation Available.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">

                    {/* Call Button */}
                    <a
                        href="tel:+918200261494"
                        className="bg-red-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-red-700 transition duration-300"
                    >
                        📞 Call Now
                    </a>

                    {/* WhatsApp Enquiry Button */}
                    <a
                        href={whatsappURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-green-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
                    >
                        <FaWhatsapp size={20} />
                          WhatsApp
                    </a>

                </div>

            </div>
        </section>
    );
}