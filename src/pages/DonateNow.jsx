import React from "react";

const DonateNow = () => {
  return (
    <main className="pt-16">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-yellow-400 py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Your Donation Can Change Lives
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-gray-800">
          Your support helps us provide education, healthcare, rehabilitation,
          and empowerment to vulnerable women and children. Every contribution
          creates hope and builds a better future.
        </p>
      </section>


      {/* ================= HOW YOUR DONATION HELPS ================= */}
      <section className="py-24 px-6 md:px-20 bg-white">

        <h2 className="text-4xl font-bold text-center mb-16">
          How Your Donation Helps
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <HelpCard
            amount="₹500"
            desc="Provides books, stationery, and school essentials for one child."
          />

          <HelpCard
            amount="₹1000"
            desc="Supports healthcare checkups, medicines, and medical camps."
            highlight
          />

          <HelpCard
            amount="₹2500"
            desc="Funds skill development and vocational training programs."
          />

        </div>

      </section>


      {/* ================= WHERE YOUR DONATION IS USED ================= */}
      <section className="py-24 px-6 md:px-20 bg-gray-50">

        <h2 className="text-4xl font-bold text-center mb-16">
          Where Your Donation Is Used
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Education */}
          <InfoCard
            title="Education Support"
            color="text-blue-700"
            desc="Your donation helps provide school fees, books, uniforms, and mentoring support to underprivileged children."
          />

          {/* Healthcare */}
          <InfoCard
            title="Healthcare Services"
            color="text-green-700"
            desc="Funds are used to organize free medical camps, medicines, and health awareness programs."
          />

          {/* Women Empowerment */}
          <InfoCard
            title="Women Empowerment"
            color="text-purple-700"
            desc="Supports vocational training programs that help women become financially independent."
          />

          {/* Rescue */}
          <InfoCard
            title="Rescue & Rehabilitation"
            color="text-red-700"
            desc="Helps rescue victims and provides shelter, counseling, and rehabilitation support."
          />

        </div>

      </section>


      {/* ================= TRANSPARENCY ================= */}
      <section className="py-20 bg-white text-center px-6">

        <h2 className="text-3xl font-bold mb-6">
          Transparency & Trust
        </h2>

        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          We maintain full transparency in fund utilization. Regular reports,
          updates, and impact stories are shared with donors to ensure
          accountability and trust.
        </p>

      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="py-20 text-center bg-blue-600 text-white px-6">

        <h2 className="text-4xl font-bold mb-6">
          Join Us in Making a Difference
        </h2>

        <p className="mb-8 text-lg">
          Your support can transform lives and bring hope to those in need.
        </p>

        <button className="bg-yellow-400 text-black px-10 py-4 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg">
          Donate Now
        </button>

      </section>

    </main>
  );
};



/* ================= HELP CARD ================= */

const HelpCard = ({ amount, desc, highlight }) => {
  return (
    <div
      className={`p-8 rounded-2xl shadow-xl text-center transition duration-300 hover:scale-105
      ${highlight ? "bg-blue-50 border-2 border-blue-600" : "bg-white"}
      `}
    >

      <h3 className="text-3xl font-bold mb-4">
        {amount}
      </h3>

      <p className="text-gray-600 mb-6">
        {desc}
      </p>

      <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
        Donate {amount}
      </button>

    </div>
  );
};



/* ================= INFO CARD ================= */

const InfoCard = ({ title, desc, color }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">

      <h3 className={`text-2xl font-bold mb-4 ${color}`}>
        {title}
      </h3>

      <p className="text-gray-600">
        {desc}
      </p>

    </div>
  );
};


export default DonateNow;