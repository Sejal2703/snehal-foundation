import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import founderImg from "../assets/founder.jpeg";
import member1Img from "../assets/member1.jpeg";
import member2Img from "../assets/member2.jpeg";

import {
  ArrowRight,
  ArrowLeft,
  HeartHandshake,
  ShieldCheck,
  Users,
  X,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const OurTeam = () => {
  const navigate = useNavigate();

  const [selectedMember, setSelectedMember] = useState(null);
  const [selectedFounder, setSelectedFounder] = useState(false);

  // =====================================================
  // TEAM MEMBERS
  // =====================================================

  const teamMembers = [
    {
      id: 1,
      name: "Narendra Meshram",
      designation: "Director",
      image: member1Img,
      description:
        "As the Director of the Snehal Foundation and the founder of Minarva Recording Studio, my life’s work bridges social impact with the power of expression. Through the Snehal Foundation, we are deeply committed to driving sustainable change by focusing on education, women’s empowerment, and skill development. Parallel to this, Minarva Recording Studio serves as a creative hub, providing a professional space for voices, music, and stories to be amplified.",
    },
    {
      id: 2,
      name: "Snehal Desai",
      designation: "Director",
      image: member2Img,
      description:
        "As a journalist and the Director of the Snehal Foundation, my professional journey is driven by a singular purpose: bridging the power of truthful storytelling with sustainable community development. Through investigative and impactful journalism, I aim to shed light on critical societal issues. Through the Snehal Foundation, we translate that awareness into action, focusing our efforts on education, women’s empowerment, and skill development.",
    },
  ];

  // =====================================================
  // FOUNDER DESCRIPTION
  // =====================================================

  const founderDescription = `
FOREWORD FROM THE FOUNDER'S DESK

Dear Patrons, Partners, Members, and Well-wishers,

It is with a sense of profound humility, responsibility, and collective hope that I present this supreme charter of the Snehal Foundation.

The name "Snehal" is derived directly from values associated with affection, compassion, kindness, empathy, care, and human connection—principles that form the active operational heartbeat of every initiative we undertake.

The Foundation was established as an independent, non-political, and non-religious public benefit organization, incorporated under Section 8 of the Indian Companies Act, 2013, with a perpetual succession dedicated entirely to charitable services.

Across our nation, many vulnerable children, women, and marginalized groups face systemic barriers to safety, dignity, education, and livelihood, which often trap them in cycles of poverty and severe exploitation.

At Snehal Foundation, our guiding philosophy is built on the rule of "Prevention First". We believe that proactive community education, grassroots awareness, and early intervention are infinitely more effective and sustainable than reacting only after a crisis or tragedy has unfolded.

Our operational focus is centered around our flagship motto:

"Empowering Lives. Protecting Futures. Building Strong Communities."

To translate this philosophy into a tangible reality, our Vision 2035 Strategic Roadmap operates through five interconnected, high-impact pillars:

• Strategic Pillar I – Prevention: Stopping social vulnerabilities before they occur through intensive child safety and safe migration campaigns.

• Strategic Pillar II – Protection: Building robust grassroots protective environments and safe referral networks in direct coordination with statutory law enforcement and child welfare authorities.

• Strategic Pillar III – Empowerment: Equipping women, dropouts, and youth with digital literacy, vocational training, financial inclusion, and micro-enterprise models that foster long-term self-reliance over dependency.

• Strategic Pillar IV – Partnership: Building trust-based alliances with government bodies, corporate CSR partners, schools, and local communities to maximize our collective social impact.

• Strategic Pillar V – Sustainability: Enforcing the highest benchmarks of good governance, dual-signature financial controls, and complete operational transparency.

Our journey is guided by ten non-negotiable Core Values: Integrity, Compassion, Equality, Accountability, Transparency, Respect, Diversity, Innovation, Volunteerism, and Human Dignity.

To protect those we serve, we enforce a strict, zero-tolerance Child Safeguarding Policy and POSH framework across all tiers of our organization.

Our programs, from Nagpur's flagship integrated skills lab (Project Snehal-Shakti) to our community volunteer networks, are built to place beneficiaries at the center of every decision.

True and lasting social transformation cannot be achieved by a single hand. It requires a dedicated, passionate, and professionally aligned network of general base members, trained ambassadors, student clubs, and corporate partners.

By stepping forward to support our work, you are choosing to stand actively on the frontlines of social justice, child safety, and women's leadership.

Let us work together to ensure that no child's future is compromised, no survivor is left without hope, and every marginalized individual has the opportunity to live with freedom, dignity, and equal opportunity.

This is our promise.
This is our responsibility.
This is our commitment.

`;

  // =====================================================
  // SHARED VALUES
  // =====================================================

  const values = [
    {
      icon: HeartHandshake,
      title: "Compassion",
      description:
        "We approach every individual and community with empathy, care and respect.",
    },
    {
      icon: ShieldCheck,
      title: "Protection",
      description:
        "We work to create safer environments where vulnerable people can live with dignity.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "We believe lasting social change grows through participation, partnership and collective action.",
    },
  ];

  return (
    <main className="w-full overflow-hidden bg-white">

     {/* =====================================================
    HERO SECTION
===================================================== */}

<section className="relative min-h-[72vh] md:min-h-[78vh] flex items-center overflow-hidden bg-slate-950">

  {/* Hero Background Image */}
  <img
    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2000&q=90"
    alt="People working together for positive community change"
    className="
      absolute inset-0
      w-full h-full
      object-cover
      object-center
    "
  />

  {/* Cinematic Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/35"></div>

  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30"></div>

  {/* Blue Ambient Glow */}
  <div className="absolute -left-32 top-1/3 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>

  <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

  {/* Content */}
  <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-28 pb-20 md:pt-32 md:pb-24">

    <div className="max-w-3xl">

      {/* Eyebrow */}
      <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md">

        <Sparkles size={15} className="text-blue-300" />

        <span className="text-sm font-semibold tracking-[0.18em] uppercase text-blue-200">
          Snehal Foundation
        </span>

      </div>

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] font-serif">

        The People Behind

        <span className="block text-blue-300 mt-2">
          the Mission.
        </span>

      </h1>

      {/* Description */}
      <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed">
        Meet the people who help turn Snehal Foundation's vision into
        meaningful action through leadership, compassion, commitment and
        community-driven change.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">

        <button
          onClick={() => navigate("/volunteer")}
          className="
            inline-flex items-center justify-center gap-2
            rounded-xl bg-blue-600 px-6 py-3.5
            font-semibold text-white
            shadow-lg shadow-blue-950/30
            transition-all duration-300
            hover:-translate-y-1 hover:bg-blue-500
          "
        >
          Become a Volunteer
          <ArrowRight size={18} />
        </button>

        <button
          onClick={() => navigate("/about")}
          className="
            inline-flex items-center justify-center gap-2
            rounded-xl border border-white/30
            bg-white/10 px-6 py-3.5
            font-semibold text-white
            backdrop-blur-md
            transition-all duration-300
            hover:bg-white/20
          "
        >
          Discover Our Story
        </button>

      </div>

    </div>

  </div>

  {/* Bottom Fade */}
  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>

</section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="relative bg-white py-20 md:py-24">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="text-blue-700 font-semibold uppercase tracking-[0.2em] text-sm md:text-base mb-4">
            Leadership With Purpose
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 font-serif leading-tight">
            People Who Believe in
            <span className="text-blue-700"> Meaningful Change</span>
          </h2>

          <div className="flex items-center justify-center gap-3 mt-6">

            <span className="h-px w-12 bg-blue-200"></span>

            <span className="w-3 h-3 bg-blue-700 rounded-full"></span>

            <span className="h-px w-12 bg-blue-200"></span>

          </div>

          <p className="mt-7 text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Snehal Foundation is guided by people who believe that social
            transformation begins with compassion and becomes sustainable
            through responsibility, partnership and action.
          </p>

        </div>

      </section>


      {/* =====================================================
          FOUNDER SECTION
      ===================================================== */}

      <section
        id="founder"
        className="relative bg-slate-50 py-20 md:py-28 overflow-hidden"
      >

        {/* Decorative Glows */}
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-blue-100/70 blur-2xl"></div>

        <div className="absolute -bottom-32 -right-20 w-80 h-80 rounded-full bg-blue-100/60 blur-2xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">

            <p className="text-blue-700 font-semibold uppercase tracking-[0.2em] text-sm md:text-base mb-3">
              Leadership
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 font-serif">
              Meet Our Founder
            </h2>

            <div className="flex items-center justify-center gap-3 mt-5">

              <span className="h-px w-12 bg-blue-200"></span>

              <span className="w-3 h-3 bg-blue-700 rounded-full"></span>

              <span className="h-px w-12 bg-blue-200"></span>

            </div>

            <p className="mt-6 text-slate-600 text-base md:text-lg leading-relaxed">
              The vision and leadership behind Snehal Foundation's mission
              to create meaningful and lasting social change.
            </p>

          </div>


          {/* Founder Card */}
          <div className="flex justify-center">

            <div
              onClick={() => setSelectedFounder(true)}
              className="
                group relative w-full max-w-[390px]
                bg-white rounded-[2rem] overflow-hidden
                border border-slate-200
                shadow-xl shadow-slate-900/10
                cursor-pointer
                transition-all duration-500
                hover:-translate-y-2
                hover:shadow-2xl hover:shadow-blue-900/15
              "
            >

              {/* Image */}
              <div className="relative h-[520px] md:h-[570px] overflow-hidden bg-slate-100">

                <img
                  src={founderImg}
                  alt="Mr. Viplav Narendra Meshram"
                  className="
                    w-full h-full object-contain object-center
                    transition-transform duration-700
                    group-hover:scale-[1.025]
                  "
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent pointer-events-none"></div>

                {/* Blue Glow */}
                <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

                {/* Information */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7 text-white">

                  <p className="text-blue-300 text-xs md:text-sm uppercase tracking-[0.2em] font-semibold mb-2">
                    Founder & Leadership
                  </p>

                  <h3 className="text-2xl md:text-3xl font-bold">
                    Mr. Viplav Narendra Meshram
                  </h3>

                  <p className="text-blue-300 font-semibold mt-1">
                    Founder, MD & CEO
                  </p>

                  <div
                    className="
                      mt-5 inline-flex items-center gap-2
                      rounded-xl border border-white/30
                      bg-white/10 px-4 py-2.5
                      text-sm font-semibold
                      backdrop-blur-md
                      transition-all duration-300
                      group-hover:bg-white
                      group-hover:text-blue-700
                    "
                  >
                    View Profile
                    <ArrowRight size={16} />
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TEAM MEMBERS
      ===================================================== */}

      <section
        id="team"
        className="relative bg-white py-20 md:py-28 overflow-hidden"
      >

        {/* Background Decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[220px] bg-blue-50/70 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">

            <p className="text-blue-700 font-semibold uppercase tracking-[0.2em] text-sm md:text-base mb-3">
              The People Behind Our Mission
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 font-serif">
              Meet Our Team
            </h2>

            <div className="flex items-center justify-center gap-3 mt-5">

              <span className="h-px w-12 bg-blue-200"></span>

              <span className="w-3 h-3 bg-blue-700 rounded-full"></span>

              <span className="h-px w-12 bg-blue-200"></span>

            </div>

            <p className="mt-6 text-slate-600 text-base md:text-lg leading-relaxed">
              Our dedicated team works together with passion and commitment
              to make a meaningful difference in the lives of individuals
              and communities.
            </p>

          </div>


          {/* Team Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">

            {teamMembers.map((member) => (

              <div
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="
                  group relative
                  bg-white rounded-[2rem] overflow-hidden
                  border border-slate-200
                  shadow-lg shadow-slate-900/5
                  cursor-pointer
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl hover:shadow-blue-900/10
                "
              >

                {/* Image */}
                <div className="relative h-[500px] md:h-[550px] overflow-hidden bg-slate-100">

                  <img
                    src={member.image}
                    alt={member.name}
                    className="
                      w-full h-full
                      object-cover object-[50%_25%]
                      transition-transform duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent pointer-events-none"></div>

                  {/* Subtle Blue Glow */}
                  <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

                  {/* Member Information */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7 text-white">

                    <p className="text-blue-300 text-xs md:text-sm uppercase tracking-[0.18em] font-semibold mb-2">
                      Leadership Team
                    </p>

                    <h3 className="text-2xl md:text-3xl font-bold">
                      {member.name}
                    </h3>

                    <p className="text-blue-300 font-semibold mt-1">
                      {member.designation}
                    </p>

                    <div
                      className="
                        mt-5 inline-flex items-center gap-2
                        rounded-xl border border-white/30
                        bg-white/10 px-4 py-2.5
                        text-sm font-semibold
                        backdrop-blur-md
                        transition-all duration-300
                        group-hover:bg-white
                        group-hover:text-blue-700
                      "
                    >
                      View Profile
                      <ArrowRight size={16} />
                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          SHARED VALUES / TEAM PHILOSOPHY
      ===================================================== */}

      <section className="relative bg-slate-950 py-20 md:py-24 overflow-hidden">

        {/* Ambient Blue Glows */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-700/15 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">

            <p className="text-blue-300 font-semibold uppercase tracking-[0.2em] text-sm md:text-base mb-3">
              What Guides Us
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-serif">
              One Mission. Shared Values.
            </h2>

            <p className="mt-6 text-slate-300 text-base md:text-lg leading-relaxed">
              The strength of Snehal Foundation comes from a shared commitment
              to dignity, protection, compassion and community-driven action.
            </p>

          </div>


          {/* Value Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {values.map((value) => {

              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="
                    group
                    rounded-3xl
                    border border-white/10
                    bg-white/[0.05]
                    p-7 md:p-8
                    backdrop-blur-sm
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:bg-white/[0.08]
                    hover:border-blue-400/30
                  "
                >

                  <div
                    className="
                      w-14 h-14
                      rounded-2xl
                      bg-blue-600/15
                      border border-blue-400/20
                      flex items-center justify-center
                      text-blue-300
                      mb-6
                      transition-all duration-300
                      group-hover:bg-blue-600
                      group-hover:text-white
                    "
                  >
                    <Icon size={25} />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-slate-300 leading-relaxed">
                    {value.description}
                  </p>

                </div>
              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          BLUE IMPACT SECTION
      ===================================================== */}

      <section className="relative bg-blue-800 py-20 md:py-24 overflow-hidden">

        {/* Decorative Circles */}
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-2xl"></div>

        <div className="absolute -bottom-32 -right-24 w-96 h-96 rounded-full bg-blue-950/20 blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">

          <div className="mx-auto w-16 h-16 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center text-white mb-7">

            <HeartHandshake size={30} />

          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-serif">
            Change Happens Together
          </h2>

          <p className="mt-6 text-blue-100 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Behind every meaningful initiative is a group of people willing
            to listen, lead, serve and take action. Together, our leadership,
            team members, volunteers, partners and communities can help build
            safer futures and create opportunities for dignity and hope.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm md:text-base text-white font-semibold">

            <span className="inline-flex items-center gap-2">
              <CheckCircle2 size={18} />
              Compassion
            </span>

            <span className="inline-flex items-center gap-2">
              <CheckCircle2 size={18} />
              Responsibility
            </span>

            <span className="inline-flex items-center gap-2">
              <CheckCircle2 size={18} />
              Community
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative bg-white py-20 md:py-24 overflow-hidden">

        {/* Soft Background Glow */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-blue-50 rounded-full blur-3xl"></div>

        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-blue-50 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto px-6 md:px-10">

          <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-14 md:px-12 md:py-16 text-center shadow-2xl">

            {/* Card Glows */}
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>

            <div className="absolute -bottom-28 -right-24 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-3xl mx-auto">

              <p className="text-blue-300 font-semibold uppercase tracking-[0.2em] text-sm mb-4">
                Be Part of the Journey
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-serif leading-tight">
                Together, We Can Build
                <span className="block text-blue-300 mt-2">
                  a Safer Future.
                </span>
              </h2>

              <p className="mt-6 text-slate-300 text-base md:text-lg leading-relaxed">
                Whether through volunteering, partnership or simply sharing
                our mission, every contribution can help create opportunities,
                protect vulnerable communities and strengthen the future.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">

                <button
                  onClick={() => navigate("/volunteer")}
                  className="
                    w-full sm:w-auto
                    inline-flex items-center justify-center gap-2
                    rounded-xl bg-blue-600 px-6 py-3.5
                    font-semibold text-white
                    shadow-lg shadow-blue-950/30
                    transition-all duration-300
                    hover:-translate-y-1 hover:bg-blue-500
                  "
                >
                  Become a Volunteer
                  <ArrowRight size={18} />
                </button>

                <button
                  onClick={() => navigate("/contact")}
                  className="
                    w-full sm:w-auto
                    inline-flex items-center justify-center gap-2
                    rounded-xl border border-white/25
                    bg-white/10 px-6 py-3.5
                    font-semibold text-white
                    backdrop-blur-md
                    transition-all duration-300
                    hover:bg-white
                    hover:text-slate-950
                  "
                >
                  Contact Us
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOUNDER MODAL
      ===================================================== */}

      {selectedFounder && (

        <div
          className="
            fixed inset-0 z-[100]
            flex items-center justify-center
            bg-slate-950/75 backdrop-blur-md
            px-4 py-6
          "
          onClick={() => setSelectedFounder(false)}
        >

          <div
            className="
              relative w-full max-w-4xl
              max-h-[90vh]
              overflow-y-auto
              bg-white
              rounded-[2rem]
              shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button */}
            <button
              onClick={() => setSelectedFounder(false)}
              className="
                absolute top-4 right-4 z-20
                w-10 h-10
                flex items-center justify-center
                rounded-full
                bg-white
                shadow-lg
                text-slate-700
                transition-all duration-300
                hover:bg-blue-700
                hover:text-white
              "
              aria-label="Close founder profile"
            >
              <X size={21} />
            </button>


            {/* Modal Header */}
            <div className="p-6 md:p-10">

              <div className="flex flex-col sm:flex-row items-center gap-7">

                {/* Founder Photo */}
                <div className="relative flex-shrink-0">

                  <div className="absolute -inset-2 rounded-2xl bg-blue-100"></div>

                  <div className="relative w-36 h-48 sm:w-40 sm:h-52 overflow-hidden rounded-2xl shadow-md bg-slate-100">

                    <img
                      src={founderImg}
                      alt="Mr. Viplav Narendra Meshram"
                      className="w-full h-full object-contain"
                    />

                  </div>

                </div>


                {/* Name */}
                <div className="text-center sm:text-left">

                  <p className="text-blue-700 text-sm font-semibold uppercase tracking-[0.18em] mb-2">
                    Snehal Foundation
                  </p>

                  <h2 className="text-2xl md:text-4xl font-bold text-slate-900 font-serif">
                    Mr. Viplav Narendra Meshram
                  </h2>

                  <p className="text-blue-700 font-semibold text-lg mt-2">
                    Founder, MD & CEO
                  </p>

                  <p className="mt-3 text-slate-500 text-sm">
                    Founder & Leadership
                  </p>

                </div>

              </div>


              {/* Divider */}
              <div className="h-px bg-slate-200 my-8"></div>


              {/* Founder Description */}
              <div>

                <div className="flex items-center gap-3 mb-5">

                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-700">
                    <HeartHandshake size={20} />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                    From the Founder's Desk
                  </h3>

                </div>

                <div className="text-slate-600 leading-7 text-base md:text-lg whitespace-pre-line break-words">
                  {founderDescription}

                  <div className="mt-6 font-bold text-slate-900">

                    <p>In service and solidarity,</p>

                    <p className="mt-3">
                      Shri. Viplav Narendra Meshram
                    </p>

                    <p>
                      Founder & Managing Director
                    </p>

                    <p>
                      Snehal Foundation
                    </p>

                  </div>

                </div>

              </div>


              {/* Quote */}
              <div className="mt-8 rounded-2xl bg-blue-50 border border-blue-100 p-5 md:p-6">

                <p className="text-blue-800 italic text-base md:text-lg leading-relaxed font-bold">
                  “Empowering Lives. Protecting Futures. Building Strong Communities.”
                </p>

              </div>

            </div>

          </div>

        </div>

      )}


      {/* =====================================================
          TEAM MEMBER MODAL
      ===================================================== */}

      {selectedMember && (

        <div
          className="
            fixed inset-0 z-[100]
            flex items-center justify-center
            bg-slate-950/75 backdrop-blur-md
            px-4 py-6
          "
          onClick={() => setSelectedMember(null)}
        >

          <div
            className="
              relative w-full max-w-3xl
              max-h-[90vh]
              overflow-y-auto
              bg-white
              rounded-[2rem]
              shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="
                absolute top-4 right-4 z-20
                w-10 h-10
                flex items-center justify-center
                rounded-full
                bg-white
                shadow-lg
                text-slate-700
                transition-all duration-300
                hover:bg-blue-700
                hover:text-white
              "
              aria-label="Close team member profile"
            >
              <X size={21} />
            </button>


            <div className="p-6 md:p-10">

              {/* Profile Header */}
              <div className="flex flex-col sm:flex-row items-center gap-7">

                {/* Photo */}
                <div className="relative flex-shrink-0">

                  <div className="absolute -inset-2 rounded-2xl bg-blue-100"></div>

                  <div className="relative w-32 h-40 sm:w-36 sm:h-44 overflow-hidden rounded-2xl shadow-md bg-slate-100">

                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-full h-full object-cover object-center"
                    />

                  </div>

                </div>


                {/* Name & Designation */}
                <div className="text-center sm:text-left">

                  <p className="text-blue-700 text-sm font-semibold uppercase tracking-[0.18em] mb-2">
                    Snehal Foundation
                  </p>

                  <h2 className="text-2xl md:text-4xl font-bold text-slate-900 font-serif">
                    {selectedMember.name}
                  </h2>

                  <p className="text-blue-700 font-semibold text-lg mt-2">
                    {selectedMember.designation}
                  </p>

                </div>

              </div>


              {/* Divider */}
              <div className="h-px bg-slate-200 my-8"></div>


              {/* About */}
              <div>

                <div className="flex items-center gap-3 mb-5">

                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-700">
                    <Users size={20} />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                    About
                  </h3>

                </div>

                <p className="text-slate-600 leading-7 text-base md:text-lg">
                  {selectedMember.description}
                </p>

              </div>


              {/* Closing Message */}
              <div className="mt-8 rounded-2xl bg-slate-50 border border-slate-200 p-5">

                <div className="flex items-start gap-3">

                  <ShieldCheck
                    size={20}
                    className="text-blue-700 mt-0.5 flex-shrink-0"
                  />

                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Working together with Snehal Foundation to support
                    communities through meaningful and sustainable action.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      )}

    </main>
  );
};

export default OurTeam;