"use client"

export default function Pricing() {

  const phoneNumber = "919876543210"

  const plans = [
    {
      name: "Basic Kundli",
      price: "₹499",
      features: [
        "Detailed Birth Chart",
        "Planetary Analysis",
        "Basic Remedies",
        "PDF Report"
      ],
      popular: false
    },
    {
      name: "Premium Consultation",
      price: "₹1499",
      features: [
        "Complete Kundli Analysis",
        "Marriage & Career Guidance",
        "Personalized Remedies",
        "30 Min Call Consultation",
        "PDF Report + Follow Up"
      ],
      popular: true
    },
    {
      name: "Love & Relationship",
      price: "₹999",
      features: [
        "Compatibility Check",
        "Love Marriage Prediction",
        "Relationship Problem Solution",
        "Remedy Guidance"
      ],
      popular: false
    }
  ]

  return (
    <section className="bg-white py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Choose Your Astrology Plan
          </h2>
          <p className="text-gray-600 mt-4">
            Transparent pricing with powerful astrological insights.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 shadow-lg border transition duration-300 hover:shadow-2xl ${
                plan.popular
                  ? "border-yellow-500 scale-105"
                  : "border-gray-200"
              }`}
            >

              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {plan.name}
              </h3>

              <p className="text-3xl font-bold text-center text-yellow-500 mb-6">
                {plan.price}
              </p>

              <ul className="space-y-3 text-gray-600 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>

              <a
                href={`https://wa.me/${phoneNumber}?text=Namaste Guruji, Mujhe ${plan.name} plan book karna hai.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3 rounded-full font-semibold transition duration-300 ${
                  plan.popular
                    ? "bg-yellow-500 hover:bg-yellow-600 text-black"
                    : "bg-gray-900 hover:bg-black text-white"
                }`}
              >
                Book Now
              </a>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}