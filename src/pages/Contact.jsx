
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [volunteerSuccess, setVolunteerSuccess] = useState(false);

  // ================= CONTACT FORM =================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("YOUR_BACKEND_API/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: e.target[0].value,
          email: e.target[1].value,
          subject: e.target[2].value,
          message: e.target[3].value,
        }),
      });

      setSuccess(true);
      e.target.reset();
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  // ================= VOLUNTEER FORM =================
  const handleVolunteerSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("YOUR_BACKEND_API/volunteer", {
        method: "POST",
        body: new FormData(e.target),
      });

      setVolunteerSuccess(true);
      e.target.reset();

      setTimeout(() => {
        setShowForm(false);
        setVolunteerSuccess(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="pt-24 px-6 md:px-20 bg-slate-100">

      {/* HERO */}
      <section className="bg-blue-100 py-16 rounded-2xl mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Get In Touch With Us
        </h1>
        <p className="text-gray-600 mt-4">
          Together, we can create a safer and brighter future.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12">

        {/* CONTACT INFO */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

          <div className="space-y-4 text-blue-600 font-semibold">

            <a href="mailto:info@snehalfoundation.org" className="flex items-center gap-3 hover:text-blue-800 transition">
              <Mail size={20} className="stroke-[2.5]" />
              info@snehalfoundation.org
            </a>

            <a href="tel:+919876543210" className="flex items-center gap-3 hover:text-blue-800 transition">
              <Phone size={20} className="stroke-[2.5]" />
              +91 98765 43210
            </a>

            <a href="https://maps.google.com?q=Pune,Maharashtra" target="_blank" rel="noreferrer"
              className="flex items-center gap-3 hover:text-blue-800 transition">
              <MapPin size={20} className="stroke-[2.5]" />
              Pune, Maharashtra
            </a>

            <div className="flex items-center gap-3">
              <Clock size={20} className="stroke-[2.5]" />
              Mon - Sat (10:00 AM – 6:00 PM)
            </div>

          </div>

          {/* SOCIAL ICONS */}
          <div className="mt-8">
            <h2 className="font-semibold text-2xl mb-3">Follow Us</h2>

            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-11 h-11 flex items-center justify-center rounded-full bg-blue-600 text-white shadow hover:bg-blue-800 hover:scale-110 transition">
                  <Icon size={20} strokeWidth={2.5} />
                </a>
              ))}
            </div>
          </div>

          {/* MAP */}
          <iframe
            src="https://www.google.com/maps?q=Pune,Maharashtra&output=embed"
            className="w-full h-64 rounded-xl mt-8 shadow"
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>

        {/* CONTACT FORM */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow space-y-5">

          <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>

          <input className="w-full p-3 border rounded-lg" placeholder="Your Name" required />
          <input className="w-full p-3 border rounded-lg" placeholder="Your Email" required />
          <input className="w-full p-3 border rounded-lg" placeholder="Subject" required />
          <textarea className="w-full p-3 border rounded-lg h-32" placeholder="Your Message" required />

          {/* SUCCESS MESSAGE */}
          {success && (
            <div className="bg-green-100 text-green-700 p-3 rounded text-center font-semibold">
              ✅ Message sent successfully!
            </div>
          )}

          <button className="bg-blue-600 text-white py-3 rounded-full w-full">
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

      </div>

      {/* CTA */}
      <section className="bg-gray-300 text-center py-16 rounded-2xl mt-20">
        <h2 className="text-3xl font-bold">Want to Volunteer With Us?</h2>
        <button
          onClick={() => setShowForm(true)}
          className="mt-6 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold"
        >
          Become a Volunteer
        </button>
      </section>

      {/* MODAL */}
      {showForm && (
        <div onClick={() => setShowForm(false)} className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div onClick={(e) => e.stopPropagation()} className="bg-white p-8 rounded-2xl w-full max-w-2xl">

            <h2 className="text-xl font-bold mb-4 text-center">Volunteer Form</h2>

            <form onSubmit={handleVolunteerSubmit} className="space-y-4">

              <input className="w-full p-3 border rounded" placeholder="Full Name" required />
              <input className="w-full p-3 border rounded" placeholder="Email" required />
              <input className="w-full p-3 border rounded" placeholder="Mobile" required />

              {/* SUCCESS */}
              {volunteerSuccess && (
                <p className="text-green-600 text-center font-semibold">
                  ✅ Registration successful!
                </p>
              )}

              <button className="bg-yellow-400 w-full py-3 rounded font-bold">
                Submit
              </button>

            </form>

          </div>
        </div>
      )}
    </main>
  );
};

export default Contact;