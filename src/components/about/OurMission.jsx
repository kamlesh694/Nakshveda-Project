export default function OurMission() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          Our <span className="text-yellow-500">Mission</span>
        </h2>

        {/* Main Text */}
        <p className="text-gray-600 leading-relaxed mb-8">
          Our mission is to spread the authentic knowledge of Vedic Astrology 
          and provide honest, accurate, and practical guidance to individuals 
          seeking clarity in life decisions.
        </p>

        {/* Points */}
        <div className="grid sm:grid-cols-2 gap-6 mt-8 text-left">

          <div className="bg-white p-6 rounded-2xl shadow-md">
            ✔ Promote authentic Vedic Astrology
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            ✔ Provide ethical and transparent consultations
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            ✔ Help people make confident life decisions
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            ✔ Offer personalized astrological remedies
          </div>

        </div>

      </div>
    </section>
  );
}