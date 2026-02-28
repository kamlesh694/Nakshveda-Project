"use client"
import { useState } from "react"

export default function ServicesFAQ() {

  const faqs = [
    {
      question: "How accurate are your astrology predictions?",
      answer: "Our predictions are based on detailed birth chart analysis, planetary positions and Vedic astrology principles to ensure maximum accuracy."
    },
    {
      question: "What details are required for consultation?",
      answer: "You need to provide your date of birth, time of birth and place of birth for accurate kundli analysis."
    },
    {
      question: "How can I book a consultation?",
      answer: "You can easily book a consultation through WhatsApp by clicking the consultation button available on our website."
    },
    {
      question: "Do you provide remedies for problems?",
      answer: "Yes, we provide simple and effective remedies based on your horoscope and planetary conditions."
    },
    {
      question: "Is online consultation available?",
      answer: "Yes, we provide complete online consultation via call and WhatsApp for clients worldwide."
    }
  ]

  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-gray-50 py-20 px-6">

      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-4">
            Find answers to common questions about our astrology services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden transition duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center"
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-40 py-4 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <p className="text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}