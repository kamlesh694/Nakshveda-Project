import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactInfo() {
    return (
        <section className="bg-gray-200 py-16 px-6">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">
                    Get In Touch With{" "}
                    <span>
                        <span className="text-red-600">Naksh</span>
                        <span className="text-black ">
                            Veda
                        </span>
                    </span>
                </h2>
                <p className="text-gray-500 mt-3">
                    We are here to guide you through your spiritual journey.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">

                {/* Address */}
                <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
                    <MapPin className="text-yellow-500 mx-auto mb-4" size={40} />
                    <h3 className="text-xl font-semibold mb-2">Our Address</h3>
                    <p className="text-gray-600">
                        102 samruddhi residency nr sabarmati railway, <br />
                        station nr kela devi mandir, <br />
                        power house road  sabarmati, <br />
                        Ahmedabad, Gujarat 380005

                    </p>
                </div>

                {/* Phone */}
                <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center">
                    <Phone className="text-yellow-500 mx-auto mb-4" size={40} />
                    <h3 className="text-xl font-semibold mb-2">Call Us</h3>

                    <p className="text-gray-600 mb-4">
                        +91 82002 61494 <br />
                        Mon - Sat (9:00 AM - 7:00 PM)
                    </p>

                    <a
                        href="tel:+918200261494"
                        className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full transition"
                    >
                        Call Now
                    </a>
                </div>

                {/* Email */}
                <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center">

                    <Mail className="text-yellow-500 mx-auto mb-4" size={40} />

                    <h3 className="text-xl font-semibold mb-2">Email Us</h3>

                    <p className="text-gray-600 mb-4">
                        joshimanish1801@gmail.com
                    </p>

                    <a
                        href="mailto:joshimanish1801@gmail.com?subject=Astrology Consultation Enquiry&body=Hello Nakshveda, I would like to book a consultation."
                        className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-full transition font-medium"
                    >
                        Enquiry Now
                    </a>

                </div>

            </div>
            <div className="mt-16">
                <iframe
                    src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.6088969404914!2d72.58674909678953!3d23.07479590000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83dbce8281c9%3A0x8041970590a2937e!2sSamruddhi%20Residency!5e0!3m2!1sen!2sin!4v1772206976692!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className="rounded-2xl shadow-lg"
                ></iframe>
            </div>
        </section>
    );
}