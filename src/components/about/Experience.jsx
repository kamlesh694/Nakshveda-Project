import React from 'react'

export default function Experience() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Professional <span className="text-yellow-500">Experience</span>
          </h2>
          <p className="text-gray-600 mt-4">
            A journey of dedication, spiritual wisdom, and trusted guidance in Vedic Astrology.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-12 border-l-4 border-yellow-500 pl-8">

          {/* Item 1 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Senior Vedic Astrologer
            </h3>
            <p className="text-yellow-500 font-medium">2010 - Present</p>
            <p className="text-gray-600 mt-2">
              Providing accurate horoscope readings, kundli analysis, and life guidance
              to clients across India and abroad.
            </p>
          </div>

          {/* Item 2 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Marriage & Career Specialist
            </h3>
            <p className="text-yellow-500 font-medium">2013 - Present</p>
            <p className="text-gray-600 mt-2">
              Specialized in marriage compatibility (Kundli Milan),
              career predictions, and planetary remedies.
            </p>
          </div>

          {/* Item 3 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Spiritual Consultant
            </h3>
            <p className="text-yellow-500 font-medium">2015 - Present</p>
            <p className="text-gray-600 mt-2">
              Helping individuals overcome life challenges through
              spiritual solutions and personalized astrological remedies.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}