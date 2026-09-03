
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  ShieldCheck,
  HeartHandshake,
  GraduationCap,
  Users,
  CheckCircle,
} from "lucide-react";

import founder from "../assets/founder.jpeg";
import heroImg from "../assets/WhatsApp Image 2026-01-20 at 2.41.45 PM.jpeg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="w-full max-w-full  overflow-x-hidden pt-0">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section
         className="relative min-h-[850px] sm:min-h-screen bg-cover bg-center flex items-center pt-20 md:pt-24"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55"></div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent"></div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl text-white">

            <p className="text-blue-300 font-semibold uppercase tracking-[0.25em] text-sm md:text-base mb-5">
              Snehal Foundation
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-serif">
              Hope Begins
              <br />
              Where Fear Ends
            </h1>

            <p className="mt-5 text-base md:text-lg lg:text-xl font-medium text-blue-200 italic">
              A Social Initiative Inspired by the Vision of Dr. B. R. Ambedkar
            </p>

            <div className="h-1 w-24 bg-blue-700 rounded-full mt-7 mb-7"></div>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl">
              Working towards a safer, more dignified and empowered
              society through education, healthcare, rehabilitation
              and community support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-9">

              <button
                onClick={() => navigate("/donate")}
                className="bg-blue-500 hover:bg-blue-800 text-white px-8 py-4 rounded-full font-bold text-lg transition duration-300 shadow-lg hover:scale-105"
              >
                Donate Now
              </button>

              <button
                onClick={() => navigate("/volunteer")}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-full font-bold text-lg transition duration-300 hover:scale-105"
              >
                Become a Volunteer
              </button>

            </div>
          </div>
        </div>
{/* ================= SCROLL INDICATOR ================= */}
<div
  className="
    absolute
    bottom-4
    sm:bottom-6
    md:bottom-7
    left-1/2
    -translate-x-1/2
    z-20
    text-white
    text-center
    cursor-pointer
  "
  onClick={() =>
    document.getElementById("impact")?.scrollIntoView({
      behavior: "smooth",
    })
  }
>
  <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-medium mb-2 opacity-90 whitespace-nowrap">
    Scroll to explore
  </p>

  <div className="mx-auto w-6 h-9 sm:w-7 sm:h-11 border-2 border-white/80 rounded-full flex justify-center pt-2">
    <div className="w-1 h-2.5 bg-white rounded-full animate-bounce"></div>
  </div>

  <div className="mt-1 text-base animate-bounce">
    ↓
  </div>
</div>
       
      </section>


      {/* =====================================================
          OUR IMPACT
      ===================================================== */}
      <section
        id="impact"
        className="w-full overflow-hidden bg-slate-100 py-16 md:py-20"
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

          <div className="text-center max-w-3xl mx-auto">

            <p className="text-blue-700 font-bold uppercase tracking-[0.2em] text-sm md:text-base">
              Our Impact
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-serif">
              Creating Change, Building Hope
            </h2>

            <p className="mt-5 text-gray-700 text-base md:text-lg leading-relaxed">
              Snehal Foundation works to create meaningful and lasting change
              by supporting individuals, families and communities through
              education, healthcare, rehabilitation and skill development.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

            {/* Education */}
            <div className="group bg-white rounded-2xl p-7 text-center border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:bg-blue-500 transition-all duration-300">

              <div className="mx-auto w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300">
                <GraduationCap className="w-8 h-8 text-blue-700 group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
                Education
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600 group-hover:text-blue-50 transition-colors duration-300">
                Promoting access to education and creating opportunities
                for a brighter future.
              </p>

            </div>


            {/* Healthcare */}
            <div className="group bg-white rounded-2xl p-7 text-center border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:bg-blue-500 transition-all duration-300">

              <div className="mx-auto w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300">
                <HeartHandshake className="w-8 h-8 text-blue-700 group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
                Healthcare
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600 group-hover:text-blue-50 transition-colors duration-300">
                Supporting better health, dignity and access to essential
                healthcare services.
              </p>

            </div>


            {/* Skill Development */}
            <div className="group bg-white rounded-2xl p-7 text-center border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:bg-blue-500 transition-all duration-300">

              <div className="mx-auto w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300">
                <Users className="w-8 h-8 text-blue-700 group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
                Skill Development
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600 group-hover:text-blue-50 transition-colors duration-300">
                Helping people build skills, confidence and opportunities
                for sustainable growth.
              </p>

            </div>


            {/* Community Support */}
            <div className="group bg-white rounded-2xl p-7 text-center border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:bg-blue-500 transition-all duration-300">

              <div className="mx-auto w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300">
                <ShieldCheck className="w-8 h-8 text-blue-700 group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
                Community Support
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600 group-hover:text-blue-50 transition-colors duration-300">
                Building safer and stronger communities through care,
                support and collective action.
              </p>

            </div>

          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 text-base md:text-2xl font-medium">
              Together, we can turn compassion into action and hope into
              lasting change.
            </p>
          </div>

        </div>
      </section>


      {/* =====================================================
          ABOUT / WHO WE ARE
      ===================================================== */}
      <section className="w-full overflow-hidden bg-white py-20 md:py-24">

        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* LEFT — CONTENT */}
            <div>

              <p className="text-blue-700 font-semibold uppercase tracking-[0.2em] text-sm md:text-base mb-4">
                Who We Are
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-serif leading-tight">
                Working Together to Build
                <span className="text-blue-700"> a Better Tomorrow</span>
              </h2>

              <div className="h-1 w-20 bg-blue-700 rounded-full mt-6 mb-7"></div>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-5">
                Snehal Foundation is committed to creating a safer, more
                dignified and empowered society by supporting individuals,
                families and communities in need.
              </p>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                Through education, healthcare, rehabilitation, skill development
                and community support, we work to create opportunities that help
                people move towards a more secure and independent future.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-700 mt-2.5 shrink-0"></div>
                  <p className="text-gray-700 font-medium">
                    Supporting vulnerable communities
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-700 mt-2.5 shrink-0"></div>
                  <p className="text-gray-700 font-medium">
                    Promoting dignity and self-reliance
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-700 mt-2.5 shrink-0"></div>
                  <p className="text-gray-700 font-medium">
                    Creating meaningful opportunities
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-700 mt-2.5 shrink-0"></div>
                  <p className="text-gray-700 font-medium">
                    Building stronger communities
                  </p>
                </div>

              </div>

              <button
                onClick={() => navigate("/about")}
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-800 text-white px-7 py-3.5 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                Learn More About Us
              </button>

            </div>


            {/* RIGHT — BRANDED VISUAL PANEL */}
            <div className="relative">

              <div className="relative overflow-hidden rounded-3xl bg-blue-100 shadow-2xl px-8 py-12 md:px-12 md:py-14">

                {/* Decorative circles */}
                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/30"></div>

                <div className="absolute -bottom-28 -left-24 w-72 h-72 rounded-full bg-blue-300/30"></div>

                {/* Decorative line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-700"></div>

                <div className="relative z-10">

                  {/* Small Heading */}
                  <div className="flex items-center gap-3 mb-8">

                    <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center">
                      <HeartHandshake className="w-5 h-5 text-white" />
                    </div>

                    <p className="text-blue-800 uppercase tracking-[0.2em] text-sm font-semibold">
                      Our Commitment
                    </p>

                  </div>


                  {/* Main Heading */}
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-serif leading-tight">
                    Compassion
                    <br />
                    Into Action
                  </h3>

                  <div className="h-1 w-16 bg-blue-700 rounded-full mt-6 mb-7"></div>


                  {/* Motto */}
                  <p className="text-blue-900 text-lg md:text-xl leading-relaxed font-medium">
                    Empowering Lives.
                    <br />
                    Protecting Futures.
                    <br />
                    Building Strong Communities.
                  </p>


                  {/* Values */}
                  <div className="mt-10 grid grid-cols-2 gap-5">

                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-blue-700 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-5 h-5 text-white" />
                      </div>

                      <span className="text-gray-900 text-sm md:text-base font-medium">
                        Safety
                      </span>
                    </div>


                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-blue-700 flex items-center justify-center shrink-0">
                        <GraduationCap className="w-5 h-5 text-white" />
                      </div>

                      <span className="text-gray-900 text-sm md:text-base font-medium">
                        Education
                      </span>
                    </div>


                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-blue-700 flex items-center justify-center shrink-0">
                        <HeartHandshake className="w-5 h-5 text-white" />
                      </div>

                      <span className="text-gray-900 text-sm md:text-base font-medium">
                        Compassion
                      </span>
                    </div>


                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-blue-700 flex items-center justify-center shrink-0">
                        <Users className="w-5 h-5 text-white" />
                      </div>

                      <span className="text-gray-900 text-sm md:text-base font-medium">
                        Community
                      </span>
                    </div>

                  </div>


                  {/* Bottom Message */}
                  <div className="mt-10 pt-7 border-t border-blue-400/50">

                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      Together, we can create safer communities, expand
                      opportunities and build a future rooted in dignity and hope.
                    </p>

                  </div>

                </div>
              </div>


              {/* Floating Badge */}
              <div className="absolute -bottom-6 right-5 md:right-8 bg-white rounded-2xl shadow-xl border border-gray-100 px-6 py-4">

                <p className="text-blue-700 font-bold text-lg">
                  Together
                </p>

                <p className="text-gray-600 text-sm">
                  Turning hope into action
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

{/* ================= OUR FOUNDER ================= */}
<section
id="founder"
className="w-full overflow-hidden bg-blue-50 py-20 md:py-24">
  <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

      {/* ================= FOUNDER PHOTO ================= */}
      <div className="relative">

        {/* Decorative background shape */}
        <div className="absolute -top-5 -left-5 w-32 h-32 bg-blue-100 rounded-3xl"></div>

        {/* Founder Photo */}
        <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden bg-slate-100 border border-gray-200 shadow-xl">
          
          <img
            src={founder}
            alt="Founder of Snehal Foundation"
            className="w-full h-full object-cover object-[center_20%]"
          />

        </div>

        {/* Decorative bottom shape */}
        <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-blue-100 rounded-2xl -z-0"></div>

      </div>


      {/* ================= FOUNDER INFORMATION ================= */}
      <div>

        {/* Small Heading */}
        <p className="text-blue-700 font-semibold uppercase tracking-[0.2em] text-sm md:text-base mb-4">
          Meet Our Founder
        </p>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-serif leading-tight">
          The Vision Behind
          <span className="text-blue-700"> Snehal Foundation</span>
        </h2>

        {/* Divider */}
        <div className="h-1 w-20 bg-blue-700 rounded-full mt-6 mb-7"></div>

        {/* Founder Name */}
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif">
          Mr. Viplav Narendra Meshram
        </h3>

        <p className="mt-2 text-blue-700 font-semibold text-base md:text-lg">
          Founder , MD & CEO
        </p>

        {/* Information */}
        <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
          Snehal Foundation was founded with a vision to create a safer,
          more dignified and empowered society where vulnerable individuals
          receive the support, opportunities and care they deserve.
        </p>

        <p className="mt-5 text-gray-600 text-base md:text-lg leading-relaxed">
          Through a commitment to education, protection, healthcare,
          rehabilitation and empowerment, the Foundation works towards
          creating meaningful opportunities and lasting social change.
        </p>

        {/* Founder Quote */}
        <div className="mt-7 border-l-4 border-blue-700 pl-5">

          <p className="text-gray-800 text-lg md:text-xl font-serif italic leading-relaxed">
            "Empowering Lives. Protecting Futures. Building Strong Communities."
          </p>

        </div>

        {/* Explore Team Button */}
        <div className="mt-9">

          <button
            onClick={() => navigate("/our-team")}
            className="
              inline-flex items-center justify-center
              bg-blue-700
              hover:bg-blue-800
              text-white
              px-8 py-3.5
              rounded-full
              font-semibold
              shadow-md
              hover:shadow-lg
              transition-all duration-300
              hover:-translate-y-1
            "
          >
            Explore Our Team →
          </button>

        </div>

      </div>

    </div>

  </div>
</section>


      {/* =====================================================
          MISSION & VISION
      ===================================================== */}
      <section className="w-full overflow-hidden bg-slate-100 py-20 md:py-24">

        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

          <div className="text-center max-w-3xl mx-auto mb-14">

            <p className="text-blue-700 font-semibold uppercase tracking-[0.2em] text-sm md:text-base">
              Our Purpose
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-serif">
              Our Mission & Vision
            </h2>

            <p className="mt-5 text-gray-600 text-base md:text-lg leading-relaxed">
              We believe every child deserves safety, every girl deserves
              opportunity, and every woman deserves dignity and independence.
            </p>

          </div>


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* VISION */}
            <div className="group bg-white rounded-3xl p-8 md:p-10 shadow-md border border-gray-200 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:border-blue-200">

              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                <ShieldCheck className="w-8 h-8 text-blue-500 group-hover:text-white transition-colors duration-300" />
              </div>

              <p className="text-blue-700 font-semibold uppercase tracking-wider text-sm mb-2">
                Our Vision
              </p>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-5">
                A Safer and More Equal Future
              </h3>

              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                To build a world where every child is safe, every girl is
                empowered, every woman lives with dignity, and every community
                is free from human trafficking, exploitation, discrimination,
                and inequality.
              </p>

              <div className="mt-7 space-y-3">

                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-blue-700 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">
                    Safe and nurturing environments for children
                  </p>
                </div>

                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-blue-700 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">
                    Education and equal opportunities for girls
                  </p>
                </div>

                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-blue-700 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">
                    Empowered women and stronger communities
                  </p>
                </div>

              </div>

            </div>


            {/* MISSION */}
            <div className="group bg-white rounded-3xl p-8 md:p-10 shadow-md border border-gray-200 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:border-blue-200">

              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                <HeartHandshake className="w-8 h-8 text-blue-500 group-hover:text-white transition-colors duration-300" />
              </div>

              <p className="text-blue-700 font-semibold uppercase tracking-wider text-sm mb-2">
                Our Mission
              </p>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-5">
                Creating Lasting Social Impact
              </h3>

              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                To create lasting social impact by empowering vulnerable
                communities through education, protection, healthcare,
                livelihood opportunities, and advocacy.
              </p>

              <div className="mt-7 space-y-3">

                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-blue-700 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">
                    Prevent human trafficking through awareness
                  </p>
                </div>

                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-blue-700 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">
                    Protect children from abuse and exploitation
                  </p>
                </div>

                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-blue-700 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">
                    Empower women through education and skills
                  </p>
                </div>

                <div className="flex gap-3 items-start">
                  <CheckCircle className="text-blue-700 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">
                    Support survivors through rehabilitation and livelihood
                  </p>
                </div>

              </div>

            </div>

          </div>


          <div className="text-center mt-10">

            <button
              onClick={() => navigate("/about")}
              className="inline-flex items-center justify-center border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300"
            >
              Read More About Our Mission & Vision
            </button>

          </div>

        </div>
      </section>


      {/* =====================================================
          PROGRAMS
      ===================================================== */}
      <section className="w-full overflow-hidden bg-white py-20 md:py-24">

        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

          <div className="text-center max-w-3xl mx-auto mb-14">

            <p className="text-blue-700 font-semibold uppercase tracking-[0.2em] text-sm md:text-base">
              What We Do
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-serif">
              Our Key Programs
            </h2>

            <div className="h-1 w-20 bg-blue-700 mx-auto mt-5 rounded-full"></div>

            <p className="mt-5 text-gray-800 text-base md:text-lg leading-relaxed">
              Our programs focus on creating opportunities, protecting
              vulnerable communities, and helping individuals build a
              safer and more independent future.
            </p>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* EDUCATION */}
            <Link to="/programs#education" className="group block">

              <div className="h-full bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-md transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:border-blue-200">

                <div className="relative overflow-hidden">

                  <img
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
                    alt="Education Support"
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                  <span className="absolute bottom-4 left-5 bg-blue-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                    Education
                  </span>

                </div>

                <div className="p-7">

                  <h3 className="text-2xl font-bold text-gray-900 font-serif">
                    Education Support
                  </h3>

                  <div className="h-1 w-12 bg-blue-700 rounded-full mt-3 mb-4"></div>

                  <p className="text-gray-600 leading-relaxed">
                    Supporting vulnerable children and girls through
                    education, learning opportunities, mentoring, and
                    access to essential educational resources.
                  </p>

                  <div className="mt-6 text-blue-700 font-semibold group-hover:translate-x-1 transition-transform duration-300">
                    Learn More →
                  </div>

                </div>

              </div>
            </Link>


            {/* HEALTHCARE */}
            <Link to="/programs#healthcare" className="group block">

              <div className="h-full bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-md transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:border-blue-200">

                <div className="relative overflow-hidden">

                  <img
                    src="https://images.unsplash.com/photo-1580281657527-47f249e8f3f6?auto=format&fit=crop&w=800&q=80"
                    alt="Healthcare Initiatives"
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                  <span className="absolute bottom-4 left-5 bg-blue-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                    Healthcare
                  </span>

                </div>

                <div className="p-7">

                  <h3 className="text-2xl font-bold text-gray-900 font-serif">
                    Healthcare Initiatives
                  </h3>

                  <div className="h-1 w-12 bg-blue-700 rounded-full mt-3 mb-4"></div>

                  <p className="text-gray-600 leading-relaxed">
                    Promoting better health and well-being through
                    healthcare awareness, medical support, preventive
                    care, and community health initiatives.
                  </p>

                  <div className="mt-6 text-blue-700 font-semibold group-hover:translate-x-1 transition-transform duration-300">
                    Learn More →
                  </div>

                </div>

              </div>
            </Link>


            {/* SKILL DEVELOPMENT */}
            <Link to="/programs#skills" className="group block">

              <div className="h-full bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-md transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:border-blue-200">

                <div className="relative overflow-hidden">

                  <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
                    alt="Skill Development"
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                  <span className="absolute bottom-4 left-5 bg-blue-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                    Empowerment
                  </span>

                </div>

                <div className="p-7">

                  <h3 className="text-2xl font-bold text-gray-900 font-serif">
                    Skill Development
                  </h3>

                  <div className="h-1 w-12 bg-blue-700 rounded-full mt-3 mb-4"></div>

                  <p className="text-gray-600 leading-relaxed">
                    Providing vocational training, practical skills,
                    and livelihood opportunities that help individuals
                    become confident and financially independent.
                  </p>

                  <div className="mt-6 text-blue-700 font-semibold group-hover:translate-x-1 transition-transform duration-300">
                    Learn More →
                  </div>

                </div>

              </div>
            </Link>

          </div>


          <div className="text-center mt-12">

            <Link
              to="/programs"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-800 text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-md"
            >
              Explore All Programs →
            </Link>

          </div>

        </div>
      </section>


      {/* ================= OUR VALUES ================= */}
<section
  id="values"
  className="w-full overflow-hidden bg-blue-50 py-20 md:py-24"
>
  <div className="w-full max-w-6xl mx-auto px-6 md:px-10">

    {/* Section Heading */}
    <div className="text-center max-w-3xl mx-auto mb-16">

      <p className="text-blue-700 font-semibold uppercase tracking-[0.25em] text-sm md:text-base">
        What We Believe
      </p>

      <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-serif">
        Our Core Values
      </h2>

      <div className="h-1 w-20 bg-blue-700 rounded-full mx-auto mt-5"></div>

      <p className="mt-5 text-gray-600 text-base md:text-lg leading-relaxed">
        Our values guide every decision we make and every life we touch.
        They form the foundation of our commitment to dignity, equality,
        safety and lasting social change.
      </p>

    </div>


    {/* ================= VALUES TIMELINE ================= */}
    <div className="relative max-w-5xl mx-auto">

      {/* Center Line - Desktop */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-blue-200 -translate-x-1/2"></div>


      {/* ================= VALUE 01 ================= */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-12">

        {/* Left */}
        <div className="md:text-right">

          <span className="text-6xl md:text-7xl font-bold text-blue-300 leading-none">
            01
          </span>

          <h3 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900 font-serif">
            Compassion & Care
          </h3>

          <p className="mt-3 text-gray-600 text-base md:text-lg leading-relaxed">
            We believe every individual deserves empathy, kindness,
            dignity and genuine support, especially those facing
            vulnerability and hardship.
          </p>

        </div>

        {/* Icon */}
        <div className="hidden md:flex justify-start">
          <div className="relative z-10 w-16 h-16 rounded-full bg-white border-4 border-blue-100 shadow-md flex items-center justify-center">
            <HeartHandshake className="w-7 h-7 text-blue-700" />
          </div>
        </div>

        {/* Mobile Icon */}
        <div className="flex md:hidden items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-blue-700 flex items-center justify-center shrink-0">
            <HeartHandshake className="w-6 h-6 text-white" />
          </div>

          <span className="text-sm font-bold tracking-widest text-blue-700">
            VALUE 01
          </span>
        </div>

      </div>


      {/* ================= VALUE 02 ================= */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-12">

        {/* Icon */}
        <div className="hidden md:flex justify-end">
          <div className="relative z-10 w-16 h-16 rounded-full bg-white border-4 border-blue-100 shadow-md flex items-center justify-center">
            <ShieldCheck className="w-7 h-7 text-blue-700" />
          </div>
        </div>

        {/* Right */}
        <div>

          <span className="text-6xl md:text-7xl font-bold text-blue-300 leading-none">
            02
          </span>

          <h3 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900 font-serif">
            Safety & Protection
          </h3>

          <p className="mt-3 text-gray-600 text-base md:text-lg leading-relaxed">
            We work towards safer environments for children, girls,
            women and vulnerable communities, protecting them from
            abuse, exploitation and trafficking.
          </p>

        </div>

        {/* Mobile Icon */}
        <div className="flex md:hidden items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-blue-700 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>

          <span className="text-sm font-bold tracking-widest text-blue-700">
            VALUE 02
          </span>
        </div>

      </div>


      {/* ================= VALUE 03 ================= */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-12">

        {/* Left */}
        <div className="md:text-right">

          <span className="text-6xl md:text-7xl font-bold text-blue-300 leading-none">
            03
          </span>

          <h3 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900 font-serif">
            Empowerment Through Education
          </h3>

          <p className="mt-3 text-gray-600 text-base md:text-lg leading-relaxed">
            We believe education, skills and meaningful opportunities
            can help individuals build confidence, independence and
            a more secure future.
          </p>

        </div>

        {/* Icon */}
        <div className="hidden md:flex justify-start">
          <div className="relative z-10 w-16 h-16 rounded-full bg-white border-4 border-blue-100 shadow-md flex items-center justify-center">
            <GraduationCap className="w-7 h-7 text-blue-700" />
          </div>
        </div>

        {/* Mobile Icon */}
        <div className="flex md:hidden items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-blue-700 flex items-center justify-center shrink-0">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>

          <span className="text-sm font-bold tracking-widest text-blue-700">
            VALUE 03
          </span>
        </div>

      </div>


      {/* ================= VALUE 04 ================= */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-12">

        {/* Icon */}
        <div className="hidden md:flex justify-end">
          <div className="relative z-10 w-16 h-16 rounded-full bg-white border-4 border-blue-300 shadow-md flex items-center justify-center">
            <Users className="w-7 h-7 text-blue-700" />
          </div>
        </div>

        {/* Right */}
        <div>

          <span className="text-6xl md:text-7xl font-bold text-blue-300 leading-none">
            04
          </span>

          <h3 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900 font-serif">
            Equality & Dignity
          </h3>

          <p className="mt-3 text-gray-600 text-base md:text-lg leading-relaxed">
            We promote equality, inclusion and respect for every
            person, recognizing the importance of human dignity
            and equal opportunities.
          </p>

        </div>

        {/* Mobile Icon */}
        <div className="flex md:hidden items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-blue-700 flex items-center justify-center shrink-0">
            <Users className="w-6 h-6 text-white" />
          </div>

          <span className="text-sm font-bold tracking-widest text-blue-700">
            VALUE 04
          </span>
        </div>

      </div>


      {/* ================= VALUE 05 ================= */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">

        {/* Left */}
        <div className="md:text-right">

          <span className="text-6xl md:text-7xl font-bold text-blue-300 leading-none">
            05
          </span>

          <h3 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900 font-serif">
            Community & Lasting Impact
          </h3>

          <p className="mt-3 text-gray-600 text-base md:text-lg leading-relaxed">
            We believe lasting change becomes possible when people
            and communities come together with shared responsibility,
            compassion and collective action.
          </p>

        </div>

        {/* Icon */}
        <div className="hidden md:flex justify-start">
          <div className="relative z-10 w-16 h-16 rounded-full bg-white border-4 border-blue-100 shadow-md flex items-center justify-center">
            <HeartHandshake className="w-7 h-7 text-blue-700" />
          </div>
        </div>

        {/* Mobile Icon */}
        <div className="flex md:hidden items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-blue-700 flex items-center justify-center shrink-0">
            <HeartHandshake className="w-6 h-6 text-white" />
          </div>

          <span className="text-sm font-bold tracking-widest text-blue-700">
            VALUE 05
          </span>
        </div>

      </div>

    </div>

<div className="mt-20">

  <div className="relative overflow-hidden rounded-3xl bg-blue-100 px-7 py-10 md:px-12 md:py-12 text-center shadow-xl">

    {/* Decorative circles */}
    <div className="absolute -top-20 -right-20 w-52 h-52 rounded-full bg-white/40"></div>
    <div className="absolute -bottom-24 -left-20 w-60 h-60 rounded-full bg-white/40"></div>

    <div className="relative z-10">

      {/* Small Heading */}
      <p className="text-blue-800 uppercase tracking-[0.25em] text-sm font-semibold">
        Our Promise
      </p>

      {/* Main Heading */}
      <h3 className="mt-4 text-2xl md:text-4xl font-bold text-gray-900 font-serif">
        Empowering Lives. Protecting Futures.
      </h3>

      {/* Subheading */}
      <p className="mt-3 text-blue-800 text-lg md:text-xl font-semibold">
        Building Strong Communities.
      </p>

      {/* Divider */}
      <div className="h-1 w-16 bg-blue-700 rounded-full mx-auto mt-6"></div>

      {/* Description */}
      <p className="mt-6 max-w-2xl mx-auto text-gray-700 text-sm md:text-base leading-relaxed">
        Together, we can turn compassion into action and create
        meaningful change that lasts for generations.
      </p>

    </div>
  </div>

</div>
    

  </div>
</section>

      {/* =====================================================
          VOLUNTEER CTA
      ===================================================== */}
      <section className="w-full overflow-hidden bg-slate-100 py-20 md:py-24 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <p className="text-blue-700 font-semibold uppercase tracking-[0.2em] text-sm md:text-base mb-4">
            Make a Difference
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-serif">
            Become a Volunteer
          </h2>

          <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto mt-5 mb-7"></div>

          <p className="max-w-3xl mx-auto text-gray-700 text-base md:text-lg leading-relaxed">
            Your time, skills, compassion, and support can help us create
            safer communities, empower vulnerable individuals, and build
            a better future for children, girls, and women.
          </p>

          <p className="mt-7 text-blue-700 text-xl md:text-2xl font-semibold italic">
            "Empowering Lives. Protecting Futures. Building Strong Communities."
          </p>

          <div className="mt-9">

            <button
              onClick={() => navigate("/volunteer")}
              className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-9 py-4 rounded-full font-bold text-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Join as a Volunteer →
            </button>

          </div>

        </div>
      </section>


      {/* =====================================================
          DONATE CTA
      ===================================================== */}
      <section className="w-full overflow-hidden bg-white py-20 md:py-24 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="relative bg-blue-100 rounded-3xl px-6 py-14 md:px-12 md:py-16 text-center overflow-hidden shadow-2xl">

            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/30 rounded-full"></div>

            <div className="absolute -bottom-24 -left-20 w-56 h-56 bg-white/30 rounded-full"></div>

            <div className="relative z-10">

              <p className="text-blue-800 font-semibold uppercase tracking-[0.2em] text-sm md:text-base mb-4">
                Support Our Mission
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-serif leading-tight">
                Your Support Can Change Lives
              </h2>

              <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto mt-5 mb-7"></div>

              <p className="max-w-3xl mx-auto text-gray-800 text-base md:text-lg leading-relaxed">
                Every contribution can help create opportunities, protect
                vulnerable communities, support education, and build a safer
                and more empowered future.
              </p>

              <div className="mt-8">

                <p className="text-blue-800 text-lg md:text-xl font-semibold italic">
                  "Together Against Human Trafficking.
                </p>

                <p className="text-blue-800 text-lg md:text-xl font-semibold italic">
                  Together for Every Girl's Future."
                </p>

              </div>

              <div className="mt-9">

                <button
                  onClick={() => navigate("/donate")}
                  className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  Donate Today →
                </button>

              </div>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
};

export default Home;
