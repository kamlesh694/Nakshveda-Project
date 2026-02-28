import Image from "next/image";

export default function Achievements() {
  return (<>
    <section className="bg-white text-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Image */}
        <div className="relative w-full h-[550px]">
          <Image
            src="/images/praman.jpeg"
            alt="Astrology Achievements"
            fill
            className=" rounded-2xl shadow-xl"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="text-yellow-500">Achievements</span>
          </h2>

          <p className="text-gray-600 mb-10 leading-relaxed">
            Nakshveda has proudly served thousands of clients with accurate
            predictions and trusted astrological guidance across the globe.
            Our dedication and expertise make us a trusted name in Vedic astrology.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">

            <div className="bg-gray-50 p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition">
              <h3 className="text-3xl font-bold text-yellow-500">10K+</h3>
              <p className="text-gray-600 text-sm mt-2">Happy Clients</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition">
              <h3 className="text-3xl font-bold text-yellow-500">15+</h3>
              <p className="text-gray-600 text-sm mt-2">Years Experience</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition">
              <h3 className="text-3xl font-bold text-yellow-500">12+</h3>
              <p className="text-gray-600 text-sm mt-2">Astrology Specializations</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition">
              <h3 className="text-3xl font-bold text-yellow-500">98%</h3>
              <p className="text-gray-600 text-sm mt-2">Client Satisfaction</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  


    

    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Image - Mobile First */}
        <div className="relative w-full h-[550px] order-1 md:order-2">
          <Image
            src="/images/manish.jpeg"
            alt="Manish Pandit"
            fill
            className="object-cover rounded-2xl shadow-xl"
          />
        </div>

        {/* Content */}
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Experience of 
            <span className="text-yellow-500"> Manish Pandit Ji</span>
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            With more than 15 years of experience in Vedic Astrology,
            Manish Pandit Ji has guided thousands of individuals
            in career, marriage, and life decisions.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>✔ 15+ Years of Experience</li>
            <li>✔ 5000+ Consultations Completed</li>
            <li>✔ Specialist in Kundli & Marriage Matching</li>
            <li>✔ Trusted Across India</li>
          </ul>
        </div>

      </div>
    </section>

</>)}