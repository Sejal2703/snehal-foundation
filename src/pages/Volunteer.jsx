import React, { useState } from "react";

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name} for volunteering!`);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <main className="pt-28 px-4 md:px-16 min-h-screen bg-gray-50">
      <section className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-700">Become a Volunteer</h2>
        <p className="mb-6 text-gray-700 text-center">
          Join Snehal Foundation and help us make a difference in the lives of underprivileged communities.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="font-semibold text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter your name"
          />

          <label className="font-semibold text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter your email"
          />

          <label className="font-semibold text-gray-700">Phone</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter your phone number"
          />

          <label className="font-semibold text-gray-700">Message (Optional)</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Write something..."
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-green-400 to-green-300 text-black font-semibold px-6 py-3 rounded-full hover:scale-105 transition transform shadow-lg"
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  );
};

export default Volunteer;
