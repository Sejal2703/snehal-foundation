import React, { useState } from "react";
import about from "../assets/About.jpeg";

const About = () => {

  const [showForm, setShowForm] = useState(false);

  return (
    <main className="pt-24 px-6 md:px-20 bg-slate-100">

      {/* ================= HERO ================= */}
      <section className="mb-20 text-center max-w-4xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About Snehal Foundation
        </h1>

        <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6 rounded"></div>

        <p className="text-gray-600 text-lg leading-relaxed"> The Founder & Director of Snehal Foundation is a committed social worker driven by a deep concern for the safety and dignity of minor girls and vulnerable women. With a strong belief that silence enables exploitation, the foundation was established to take meaningful action against human trafficking and abuse.
           <br /><br /> 
           Through Snehal Foundation, the Director aims to create awareness at the grassroots level, support rescue and rehabilitation efforts, and empower survivors with education and life skills.
            <br /><br /> 
            The vision is to build a society where no girl is treated as a commodity and every woman has the right to live with dignity, safety, and independence. </p>

      </section>


      {/* ================= WHO WE ARE ================= */}
      <section className="grid md:grid-cols-2 gap-12 mb-24 items-center">

        <img
          src={about}
          alt="Snehal Foundation"
          className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
        />

        <div>

          <h2 className="text-3xl font-bold mb-4">
            Who We Are
          </h2>

          <div className="h-1 w-16 bg-yellow-400 mb-6 rounded"></div>

          <p className="text-gray-600 leading-relaxed text-lg "> Snehal Foundation is a non-profit organization dedicated to protecting minor girls and vulnerable women from human trafficking, sexual exploitation, and abuse. <br /><br /> We work at the grassroots level to create awareness, support rescue and rehabilitation efforts, and empower survivors through education and skill development. <br /><br /> Guided by compassion and driven by action, Snehal Foundation stands for dignity, safety, and justice. </p>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="bg-yellow-300 rounded-2xl py-16 text-center mb-16">

        <h2 className="text-3xl font-bold mb-4">
          Be Part of the Change
        </h2>

        <p className="mb-6 text-lg">
          Together, we can create a safer future.
        </p>

        <button
          onClick={() => setShowForm(true)}
          className="bg-black text-yellow-400 px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          Join as a volunteer
        </button>

      </section>


      {/* ================= VOLUNTEER FORM MODAL ================= */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-auto">

          <div className="bg-white w-full max-w-3xl p-8 rounded-2xl shadow-xl relative max-h-[90vh] overflow-y-auto">

            {/* Close button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-xl font-bold"
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

export default About;