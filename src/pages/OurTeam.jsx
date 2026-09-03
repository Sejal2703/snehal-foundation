import React, { useState } from "react";

import founderImg from "../assets/founder.jpeg";
import member1Img from "../assets/member1.jpeg";
import member2Img from "../assets/member2.jpeg";

const OurTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Member Name 1",
      designation: "Designation",
      image: member1Img,
      description:
        "Write a short paragraph about this team member, their role, experience and contribution towards Snehal Foundation.",
    },
    {
      id: 2,
      name: "Member Name 2",
      designation: "Designation",
      image: member2Img,
      description:
        "Write a short paragraph about this team member, their role, experience and contribution towards Snehal Foundation.",
    },
  ];

  return (
    <div className="w-full bg-white">

      {/* =====================================================
          ================= PAGE HEADER ========================
          ===================================================== */}

      <section className="w-full bg-white pt-16 pb-10 md:pt-20 md:pb-12">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="text-blue-700 font-semibold uppercase tracking-[0.2em] text-sm md:text-base mb-3">
            The People Behind Snehal Foundation
          </p>

          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="h-px w-14 bg-blue-200"></span>

            <span className="w-3 h-3 bg-blue-700 rounded-full"></span>

            <span className="h-px w-14 bg-blue-200"></span>
          </div>

          <p className="max-w-2xl mx-auto mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
            Meet the passionate individuals who lead, support and work
            together to create meaningful change and build a stronger
            community.
          </p>

        </div>
      </section>


      {/* =====================================================
          ================= FOUNDER PROFILE ====================
          ===================================================== */}

      <section
        id="founder"
         className="w-full bg-white pt-4 pb-16 md:pt-6 md:pb-20"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

          {/* Section Heading */}

          <div className="text-center mb-12">
            <p className="text-blue-700 font-semibold uppercase tracking-[0.2em] text-sm mb-3">
              Leadership
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">
              Meet Our Founder
            </h2>

            <div className="w-16 h-1 bg-blue-700 rounded-full mx-auto mt-4"></div>
          </div>


          {/* Founder Profile */}

          <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] lg:grid-cols-[420px_1fr] gap-10 md:gap-14 lg:gap-20 items-center">

            {/* ================= FOUNDER IMAGE ================= */}

            <div className="flex justify-center">

              <div className="w-full max-w-[340px] h-[450px] md:max-w-[380px] md:h-[520px] rounded-2xl overflow-hidden bg-slate-100 border border-gray-200 shadow-lg">

                <img
                  src={founderImg}
                  alt="Mr. Viplav Narendra Meshram"
                  className="w-full h-full object-contain"
                />

              </div>

            </div>


            {/* ================= FOUNDER DESCRIPTION ================= */}

            <div>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif">
                Mr. Viplav Narendra Meshram
              </h3>

              <p className="mt-2 text-blue-700 font-semibold text-base md:text-lg">
                Founder, MD & CEO
              </p>

              <div className="w-12 h-1 bg-blue-700 rounded-full mt-5 mb-6"></div>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Snehal Foundation was founded with a vision to create a safer,
                more dignified and empowered society where vulnerable
                individuals receive the support, opportunities and care they
                deserve.
              </p>

              <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
                Through a commitment to education, protection, healthcare,
                rehabilitation and empowerment, the Foundation works towards
                creating meaningful opportunities and lasting social change.
              </p>

              <div className="mt-7 pl-5 border-l-4 border-blue-200">
                <p className="text-gray-700 italic text-base md:text-lg leading-relaxed">
                  “Empowering Lives. Protecting Futures. Building Strong
                  Communities.”
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          ================= MEET OUR TEAM ======================
          ===================================================== */}

      <section
        id="team"
        className="relative w-full bg-slate-50 py-20 md:py-24 overflow-hidden"
      >

        {/* Decorative Background Circles */}

        <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-50 rounded-full"></div>

        <div className="absolute -bottom-24 -right-20 w-72 h-72 bg-blue-50 rounded-full"></div>


        <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

          {/* ================= SECTION HEADING ================= */}

          <div className="text-center max-w-3xl mx-auto mb-14">

            <p className="text-blue-700 font-semibold uppercase tracking-[0.2em] text-sm md:text-base mb-3">
              The People Behind Our Mission
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-serif">
              Meet Our Team
            </h2>

            <div className="flex items-center justify-center gap-3 mt-5">

              <span className="h-px w-12 bg-blue-200"></span>

              <span className="w-3 h-3 bg-blue-700 rounded-full"></span>

              <span className="h-px w-12 bg-blue-200"></span>

            </div>

            <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
              Our dedicated team works together with passion and commitment
              to make a meaningful difference in the lives of individuals
              and communities.
            </p>

          </div>


          {/* ================= TEAM CARDS ================= */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">

            {teamMembers.map((member) => (

              <div
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

{/* ================= MEMBER IMAGE ================= */}

<div className="relative h-[500px] md:h-[560px] overflow-hidden bg-gray-100">

  <img
    src={member.image}
    alt={member.name}
    className="
      w-full
      h-full
      object-cover
      object-[50%_25%]
      transition-transform
      duration-700
      group-hover:scale-105
    "
  />

</div>

                {/* ================= GRADIENT OVERLAY ================= */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>


                {/* ================= MEMBER INFORMATION ================= */}

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">

                  <h3 className="text-2xl font-bold">
                    {member.name}
                  </h3>

                  <p className="text-blue-300 font-semibold mt-1">
                    {member.designation}
                  </p>


                  {/* View Profile */}

                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold border border-white/40 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full group-hover:bg-white group-hover:text-blue-700 transition-all duration-300">

                    View Profile

                    <span className="text-lg">
                      →
                    </span>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          ================= PROFILE MODAL ======================
          ===================================================== */}

      {selectedMember && (

        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4 py-6"
          onClick={() => setSelectedMember(null)}
        >

          {/* ================= MODAL ================= */}

          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* ================= CLOSE BUTTON ================= */}

            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg text-gray-700 text-2xl hover:bg-blue-700 hover:text-white transition-all duration-300"
              aria-label="Close"
            >
              ×
            </button>


            {/* ================= TOP PROFILE ================= */}

            <div className="p-6 md:p-8">

              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6">

                {/* ================= SMALL PHOTO ================= */}

                <div className="relative flex-shrink-0">

                  <div className="absolute -inset-2 bg-blue-100 rounded-2xl"></div>

                  <div className="relative w-32 h-40 sm:w-36 sm:h-44 overflow-hidden rounded-2xl shadow-md bg-gray-100">

                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-full h-full object-cover object-center"
                    />

                  </div>

                </div>


                {/* ================= NAME + DESIGNATION ================= */}

                <div className="text-center sm:text-left">

                  <p className="text-blue-700 text-sm font-semibold uppercase tracking-wider mb-2">
                    Snehal Foundation
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif">
                    {selectedMember.name}
                  </h2>

                  <p className="text-blue-700 font-semibold text-lg mt-2">
                    {selectedMember.designation}
                  </p>

                </div>

              </div>


              {/* ================= DIVIDER ================= */}

              <div className="h-px bg-gray-200 my-7"></div>


              {/* ================= ABOUT ================= */}

              <div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  About
                </h3>

                <p className="text-gray-600 leading-7 text-base md:text-lg">
                  {selectedMember.description}
                </p>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default OurTeam;