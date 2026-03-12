
import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import heroImg from "../assets/WhatsApp Image 2026-01-20 at 2.41.45 PM.jpeg";

const Home = () => {
  const navigate = useNavigate();
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);

  return (
    <main className="pt-2">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* Gradient Overlay (top & bottom darker, middle clear) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70"></div>

        {/* TOP TEXT */}
        <div className="absolute top-[10%] md:top-[8%] left-1/2 -translate-x-1/2 w-full text-center z-10 px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white font-serif tracking-wide">
            HOPE BEGINS WHERE FEAR ENDS
          </h1>
        </div>

        {/* BOTTOM TEXT */}
        <div className="absolute top-[88%] left-0 w-full -translate-y-1/2 z-10 text-center px-4">
          <p className="text-lg md:text-2xl font-bold text-gray-200 font-serif ">
            A Social Initiative Inspired by the Vision of Dr. B. R. Ambedkar
          </p>
        </div>
      </section>


      {/* ================= MISSION & VISION ================= */}
      <section className="py-24 bg-gray-50 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our Mission & Vision
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Vision */}
          <div className="bg-blue-100 p-10 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              Our Vision
            </h3>

            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                To create a safe and dignified society where every girl and woman lives free from fear, violence, and exploitation.
              </li>

              <li>
                To ensure holistic rehabilitation of survivors, addressing their physical, emotional, and social well-being.
              </li>

              <li>
                To empower women and girls through education, skill development, and self-reliance for a sustainable future.
              </li>

              <li>
                To build a compassionate community that protects, supports, and stands up for the vulnerable.
              </li>
            </ul>
          </div>


          {/* Mission */}
          <div className="bg-green-100 p-10 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Our Mission
            </h3>

            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                Rescue, rehabilitate, and reintegrate victims of human trafficking and sexual exploitation.
              </li>

              <li>
                Prevent trafficking through awareness, education, and community engagement.
              </li>

              <li>
                Empower women through skill development, education, and entrepreneurship.
              </li>

              <li>
                Collaborate with government, law enforcement, and NGOs for systemic change.
              </li>
            </ul>
          </div>

        </div>
      </section>


      {/* ================= PROGRAMS ================= */}
      <section className="py-24 bg-white px-6 md:px-20">

        <h2 className="text-4xl font-bold text-center mb-16">
          Our Key Programs
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {/* Program 1 */}
          <div className="p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition duration-300">

            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80"
              alt="Education"
              className="rounded-lg mb-6 w-full h-52 object-cover"
            />

            <h3 className="text-xl font-bold text-blue-700 mb-3">
              Education Support
            </h3>

            <p className="text-gray-600">
              Scholarships, school supplies, and mentoring programs for underprivileged children.
            </p>

          </div>


          {/* Program 2 */}
          <div className="p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition duration-300">

            <img
              src="https://images.unsplash.com/photo-1580281657527-47f249e8f3f6?auto=format&fit=crop&w=400&q=80"
              alt="Healthcare"
              className="rounded-lg mb-6 w-full h-52 object-cover"
            />

            <h3 className="text-xl font-bold text-green-700 mb-3">
              Healthcare Initiatives
            </h3>

            <p className="text-gray-600">
              Free medical camps, health awareness programs, and emergency support.
            </p>

          </div>


          {/* Program 3 */}
          <div className="p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition duration-300">

            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80"
              alt="Skill Development"
              className="rounded-lg mb-6 w-full h-52 object-cover"
            />

            <h3 className="text-xl font-bold text-purple-700 mb-3">
              Skill Development
            </h3>

            <p className="text-gray-600">
              Vocational training and workshops to help individuals become financially independent.
            </p>

          </div>

        </div>
      </section>


      {/* ================= IMPACT ================= */}
      <section className="py-24 bg-blue-50 text-center px-6">

        <h2 className="text-4xl font-bold mb-12">
          Our Impact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div>
            <h3 className="text-5xl font-extrabold text-blue-700">
              5000+
            </h3>
            <p className="text-gray-700 mt-2">
              Students Educated
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-extrabold text-blue-700">
              120+
            </h3>
            <p className="text-gray-700 mt-2">
              Medical Camps
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-extrabold text-blue-700">
              300+
            </h3>
            <p className="text-gray-700 mt-2">
              Volunteers
            </p>
          </div>

        </div>
      </section>

      {/* ================= VOLUNTEER CTA ================= */}
<section className="py-24 bg-gray-300 text-center px-6">

  <h2 className="text-4xl font-bold mb-6">
    Become a Volunteer
  </h2>

  <p className="mb-8 text-lg">
    Your time and skills can help transform lives and build a safer society.
  </p>

  <button
    onClick={() => setShowVolunteerForm(true)}
    className="bg-black text-yellow-400 px-10 py-4 rounded-full font-semibold hover:scale-105 transition duration-300"
  >
    Join as a Volunteer
  </button>

</section>


      {/* ================= CTA ================= */}
      <section className="py-24 bg-yellow-200 text-center px-6">

        <h2 className="text-4xl font-bold mb-6">
          Your Support Can Change Lives
        </h2>

        <p className="mb-8 text-lg">
          Join us in creating a future full of opportunities and hope.
        </p>

        <button
          onClick={() => navigate("/donate")}
          className="bg-black text-yellow-400 px-10 py-4 rounded-full font-semibold hover:scale-105 transition duration-300"
        >
          Donate Today
        </button>

      </section>

      {/* ================= VOLUNTEER FORM MODAL ================= */}
{showVolunteerForm && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-auto">

    <div className="bg-white w-full max-w-3xl p-8 rounded-2xl shadow-xl relative max-h-[90vh] overflow-y-auto">

      {/* Close button */}
      <button
        onClick={() => setShowVolunteerForm(false)}
        className="absolute top-4 right-4 text-xl font-bold"
      >
        ✕
      </button>

      <h2 className="text-2xl font-bold mb-6 text-center">
        SNEHAL FOUNDATION – VOLUNTEER REGISTRATION FORM
      </h2>

      <form className="space-y-4">

        {/* Personal Info */}
              <div>
                <h3 className="font-bold mb-2">1. Personal Information</h3>

                <input className="input" placeholder="Full Name (as per Aadhaar)" />
                <input className="input" placeholder="Father/Mother/Spouse Name" />
                <input className="input" type="date" />

                <select className="input">
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>

                <input className="input" placeholder="Nationality" />
              </div>


              {/* Contact */}
              <div>
                <h3 className="font-bold mb-2">2. Contact Details</h3>

                <input className="input" placeholder="Mobile Number" />
                <input className="input" placeholder="Alternate Mobile" />
                <input className="input" placeholder="Email" type="email" />
              </div>


              {/* Address */}
              <div>
                <h3 className="font-bold mb-2">3. Address</h3>

                <input className="input" placeholder="Full Address" />
                <input className="input" placeholder="City/District" />
                <input className="input" placeholder="State" />
                <input className="input" placeholder="PIN Code" />
              </div>


              {/* Aadhaar */}
              <div>
                <h3 className="font-bold mb-2">4. Aadhaar Verification</h3>

                <input className="input" placeholder="Aadhaar Number" />
                <input className="input" type="file" />
              </div>


              {/* Education */}
              <div>
                <h3 className="font-bold mb-2">5. Education & Occupation</h3>

                <input className="input" placeholder="Qualification" />
                <input className="input" placeholder="Occupation" />
                <input className="input" placeholder="Organization / College" />
              </div>


              {/* Skills */}
              <div>
                <h3 className="font-bold mb-2">6. Skills & Interests</h3>

                <textarea className="input" placeholder="Your Skills"></textarea>
              </div>


              {/* Volunteering */}
              <div>
                <h3 className="font-bold mb-2">7. Volunteering Details</h3>

                <textarea className="input" placeholder="Reason to join"></textarea>
                <input className="input" placeholder="Available Days" />
                <input className="input" placeholder="Available Time" />
              </div>


              {/* Emergency */}
              <div>
                <h3 className="font-bold mb-2">8. Emergency Contact</h3>

                <input className="input" placeholder="Name" />
                <input className="input" placeholder="Relation" />
                <input className="input" placeholder="Mobile" />
              </div>


              {/* Declaration */}
              <label className="flex gap-2">
                <input type="checkbox" />
                I confirm that the above information is true and correct.
              </label>


              {/* Submit */}
              <button
                type="submit"
                className="bg-yellow-400 w-full py-3 rounded-lg font-bold hover:bg-yellow-500"
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

export default Home;