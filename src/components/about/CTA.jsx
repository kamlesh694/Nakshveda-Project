"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function CTA() {
  const phoneNumber = "918200261494";

  const message =
    "Hello Manish Pandit ji, mujhe astrology consultation chahiye.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section className="bg-gray-100 py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
          Apni Kundli Ka Vishleshan Karwaye
        </h2>

        <p className="text-gray-600 text-lg mb-8">
          15+ saal ke anubhav ke saath Manish Pandit ji se paaiye
          sahi aur satik margdarshan. Career, Vivah, Love, Business
          ya Grah Dosh — har samasya ka samadhan.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition duration-300 shadow-md"
        >
          <FaWhatsapp size={22} />
          WhatsApp 
        </a>

      </div>
    </section>
  );
}