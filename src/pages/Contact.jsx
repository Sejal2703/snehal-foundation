import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock , Facebook,
  Instagram,
  Linkedin} from "lucide-react";

const Contact = () => {

  const [showForm, setShowForm] = useState(false);

  return (
    <main className="pt-24 px-6 md:px-20 bg-slate-100">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-blue-100 py-16 rounded-2xl mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Get In Touch With Us
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Together, we can create a safer and brighter future.
        </p>
      </section>


      {/* ================= CONTACT SECTION ================= */}
      <div className="grid md:grid-cols-2 gap-12">


        {/* ================= CONTACT INFO ================= */}
        <div>

          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

          <div className="space-y-4 text-gray-700">

            {/* EMAIL */}
            <a
              href="mailto:info@snehalfoundation.org"
              className="flex items-center gap-3 hover:text-blue-600 font-semibold hover:text-blue-800 transition cursor-pointer"
            >
              <Mail size={20}
               className="text-blue-600 stroke-[2.5] group-hover:text-blue-800" />
              info@snehalfoundation.org
            </a>


            {/* PHONE */}
            <a
              href="tel:+919876543210"
              className="flex items-center gap-3 hover:text-blue-600 font-semibold hover:text-blue-800 transition cursor-pointer"
            >
              <Phone size={20}
               className="text-blue-600 stroke-[2.5]" />
              +91 98765 43210
            </a>


            {/* LOCATION */}
            <a
              href="https://maps.google.com?q=Pune,Maharashtra"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-blue-600  font-semibold hover:text-blue-800 transition cursor-pointer"
            >
              <MapPin size={20} 
               className="text-blue-600 stroke-[2.5]"/>
              Pune, Maharashtra
            </a>


            {/* WORKING HOURS */}
            <div className="flex items-center gap-3 hover:text-blue-600  font-semibold hover:text-blue-800 transition cursor-pointer">
              <Clock size={20} 
              className="text-blue-600 stroke-[2.5]"/>
              Mon - Sat (10:00 AM – 6:00 PM)
            </div>

          </div>


          {/* ================= SOCIAL LINKS ================= */}
          <div className="mt-8">

            <h2 className="font-semibold text-2xl mb-3">Follow Us </h2>

            <div className="flex gap-6">
 {/* Facebook */}
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      className="
        w-11 h-11
        flex items-center justify-center
        rounded-full
        bg-blue-600
        text-white
        shadow-md
        hover:bg-blue-800
        hover:scale-110
        transition
        duration-300
        cursor-pointer
      "
    >
      <Facebook size={20} strokeWidth={2.5} />
    </a>


    {/* Instagram */}
    <a
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="
        w-11 h-11
        flex items-center justify-center
        rounded-full
        bg-blue-600
        text-white
        shadow-md
        hover:bg-blue-800
        hover:scale-110
        transition
        duration-300
        cursor-pointer
      "
    >
      <Instagram size={20} strokeWidth={2.5} />
    </a>


    {/* LinkedIn */}
    <a
      href="https://linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      className="
        w-11 h-11
        flex items-center justify-center
        rounded-full
        bg-blue-600
        text-white
        shadow-md
        hover:bg-blue-800
        hover:scale-110
        transition
        duration-300
        cursor-pointer
      "
    >
      <Linkedin size={20} strokeWidth={2.5} />
    </a>

  </div>

</div>

          {/* ================= GOOGLE MAP ================= */}
          <iframe
            src="https://www.google.com/maps?q=Pune,Maharashtra&output=embed"
            className="w-full h-64 rounded-xl mt-8 shadow"
            loading="lazy"
            title="Google Map"
          ></iframe>

        </div>



        {/* ================= CONTACT FORM ================= */}
        <form className="bg-gray-50 p-8 rounded-2xl shadow space-y-5">

          <h2 className="text-2xl font-bold mb-4">
            Send Us a Message
          </h2>

          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="text"
            placeholder="Subject"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            placeholder="Your Message"
            required
            className="w-full p-3 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-full w-full font-medium cursor-pointer"
          >
            Send Message
          </button>

        </form>

      </div>



      {/* ================= VOLUNTEER CTA ================= */}
      <section className="bg-gray-300 text-black text-center py-16 rounded-2xl mt-20">

        <h2 className="text-3xl md:text-4xl font-bold">
          Want to Volunteer With Us?
        </h2>

        <p className="mt-4 text-black text-xl">
          Join hands with us to create impact and change lives.
        </p>

        <button
          onClick={() => setShowForm(true)}
          className="mt-6 bg-gray-100 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition cursor-pointer"
        >
          Become a Volunteer
        </button>

      </section>



      {/* ================= VOLUNTEER FORM MODAL ================= */}
      {showForm && (

        <div
          onClick={() => setShowForm(false)}
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-auto"
        >

          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-3xl p-8 rounded-2xl shadow-xl relative max-h-[90vh] overflow-y-auto"
          >

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-xl font-bold cursor-pointer"
            >
              ✕
            </button>


            <h2 className="text-2xl font-bold mb-6 text-center">
              SNEHAL FOUNDATION – VOLUNTEER REGISTRATION FORM
            </h2>


            <form className="space-y-6">

              {/* Personal Info */}
              <div>
                <h3 className="font-bold mb-2">1. Personal Information</h3>

                <input className="w-full p-3 border rounded mb-3" placeholder="Full Name (as per Aadhaar)" />

                <input className="w-full p-3 border rounded mb-3" placeholder="Father/Mother/Spouse Name" />

                <input className="w-full p-3 border rounded mb-3" type="date" />

                <select className="w-full p-3 border rounded mb-3">
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>

                <input className="w-full p-3 border rounded" placeholder="Nationality" />

              </div>


              {/* Contact */}
              <div>
                <h3 className="font-bold mb-2">2. Contact Details</h3>

                <input className="w-full p-3 border rounded mb-3" placeholder="Mobile Number" />

                <input className="w-full p-3 border rounded mb-3" placeholder="Alternate Mobile" />

                <input className="w-full p-3 border rounded" placeholder="Email" type="email" />

              </div>


              {/* Address */}
              <div>
                <h3 className="font-bold mb-2">3. Address</h3>

                <input className="w-full p-3 border rounded mb-3" placeholder="Full Address" />

                <input className="w-full p-3 border rounded mb-3" placeholder="City/District" />

                <input className="w-full p-3 border rounded mb-3" placeholder="State" />

                <input className="w-full p-3 border rounded" placeholder="PIN Code" />

              </div>


              {/* Aadhaar */}
              <div>
                <h3 className="font-bold mb-2">4. Aadhaar Verification</h3>

                <input className="w-full p-3 border rounded mb-3" placeholder="Aadhaar Number" />

                <input className="w-full p-3 border rounded" type="file" />

              </div>


              {/* Skills */}
              <div>
                <h3 className="font-bold mb-2">5. Skills & Interests</h3>

                <textarea className="w-full p-3 border rounded" placeholder="Your Skills"></textarea>

              </div>


              {/* Submit */}
              <button
                type="submit"
                className="bg-yellow-400 w-full py-3 rounded-lg font-bold hover:bg-yellow-500 cursor-pointer"
              >
                Submit Form
              </button>

            </form>

          </div>

        </div>

      )}

    </main>
  );
};

export default Contact;