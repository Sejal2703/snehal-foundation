import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Chatbot from "../components/Chatbot";

import {
  ShieldCheck,
  HeartHandshake,
  GraduationCap,
  Users,
  CheckCircle,
} from "lucide-react";

import founder from "../assets/founder.jpeg";
import heroImg from "../assets/firstimg.png";


const Home = () => {
  const navigate = useNavigate();

  const values = [
    {
      number: "01",
      title: "Compassion & Care",
      text: "We approach every person with empathy, respect and genuine care.",
    },
    {
      number: "02",
      title: "Safety & Protection",
      text: "We work to create safer environments where vulnerable people can live without fear.",
    },
    {
      number: "03",
      title: "Empowerment Through Education",
      text: "We believe education and skills can open doors to independence and opportunity.",
    },
    {
      number: "04",
      title: "Equality & Dignity",
      text: "Every individual deserves equal opportunities, dignity and respect.",
    },
    {
      number: "05",
      title: "Community & Lasting Impact",
      text: "Sustainable change becomes possible when communities work together.",
    },
  ];

  return (
    <main className="w-full max-w-full overflow-x-hidden pt-0">

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}
      <style>{`

      /* =====================================================
   HERO IMAGE
===================================================== */

@keyframes heroCinematicZoom {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }

  100% {
    transform: scale(1.15);
    opacity: 1;
  }
}

.cinematic-hero-image {
  animation: heroCinematicZoom 3.5s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
  transform-origin: center center;
  will-change: transform, opacity;
}
           /* =====================================================
           HERO GLOW
        ===================================================== */

        @keyframes ambientPulse {
          0%,
          100% {
            opacity: 0.16;
            transform: scale(1);
          }

          50% {
            opacity: 0.28;
            transform: scale(1.08);
          }
        }

        .hero-glow {
          animation: ambientPulse 7s ease-in-out infinite;
        }


        /* =====================================================
           HERO TEXT REVEAL
        ===================================================== */

        @keyframes revealUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-reveal {
          animation: revealUp 0.9s ease-out both;
        }

        .hero-reveal-delay-1 {
          animation-delay: 0.12s;
        }

        .hero-reveal-delay-2 {
          animation-delay: 0.24s;
        }

        .hero-reveal-delay-3 {
          animation-delay: 0.36s;
        }

        .hero-reveal-delay-4 {
          animation-delay: 0.48s;
        }


        /* =====================================================
           SCROLL INDICATOR
        ===================================================== */

        @keyframes scrollPulse {
          0%,
          100% {
            opacity: 0.45;
            transform: translateY(0);
          }

          50% {
            opacity: 1;
            transform: translateY(5px);
          }
        }

        .scroll-pulse {
          animation: scrollPulse 2s ease-in-out infinite;
        }


        /* =====================================================
           VALUE NODE
        ===================================================== */

        @keyframes valuePulse {
          0%,
          100% {
            box-shadow:
              0 0 0 0 rgba(37, 99, 235, 0);
          }

          50% {
            box-shadow:
              0 0 0 7px rgba(37, 99, 235, 0.08);
          }
        }

        .value-node {
          animation: valuePulse 3s ease-in-out infinite;
        }


        /* =====================================================
           PREMIUM CARD SHINE
        ===================================================== */

        .premium-card {
          position: relative;
          overflow: hidden;
        }

        .premium-card::before {
          content: "";

          position: absolute;
          top: -20%;
          left: -85%;

          width: 45%;
          height: 140%;

          background:
            linear-gradient(
              100deg,
              transparent,
              rgba(255, 255, 255, 0.18),
              transparent
            );

          transform: skewX(-20deg);

          transition:
            left 900ms cubic-bezier(.22,.61,.36,1),
            opacity 300ms ease;

          opacity: 0;

          pointer-events: none;

          z-index: 20;
        }

        .premium-card:hover::before {
          left: 145%;
          opacity: 1;
        }

        .premium-card::after {
          content: "";

          position: absolute;
          inset: 0;

          border-radius: inherit;

          pointer-events: none;

          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.22);
        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .cinematic-hero-image,
          .hero-glow,
          .hero-reveal,
          .scroll-pulse,
          .value-node {
            animation: none !important;
          }

        }

      `}</style>

      {/* =====================================================
          HERO
      ===================================================== */}
      <section
         className="
  relative
  w-full
  h-auto
  min-h-[780px]
  sm:h-screen
  sm:min-h-[700px]
  overflow-hidden
  flex
  items-center
  bg-slate-950
"
      >

        {/* ===================================================
            HERO BACKGROUND
        =================================================== */}
       <div
  className="
    absolute
    inset-x-0
    top-0
    h-[400px]
    sm:inset-0
    sm:h-full
    overflow-hidden
  "
>

    <img
  src={heroImg}
  alt="Snehal Foundation initiative"
  className="
    absolute
    inset-0
    w-full
    h-full
    object-cover
    object-[72%_center]
    cinematic-hero-image
    sm:object-[56%_center]
  "
/>

{/* ===================================================
    DARK CINEMATIC LEFT GRADIENT
=================================================== */}
<div
  className="
    absolute
    inset-0
    bg-gradient-to-r
    from-slate-950/90
    via-slate-950/40
    to-transparent
    pointer-events-none
  "
/>
          {/* SUBTLE BOTTOM FADE */}
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-[15%]
              bg-gradient-to-t
              from-slate-950/35
              to-transparent
            "
          />


          {/* BLUE GLOW */}
          <div
            className="
              hero-glow
              absolute
              -left-40
              top-[20%]
              w-[450px]
              h-[450px]
              rounded-full
              bg-blue-600/10
              blur-[130px]
              pointer-events-none
            "
          />

        </div>


        {/* ===================================================
            HERO CONTENT
        =================================================== */}
        <div
          className="
            relative
            z-10
            w-full
            max-w-[1500px]
            h-full
            mx-auto
            px-6
            md:px-10
            lg:px-16
            xl:px-20
            flex
            items-center
             pt-[105px]
             sm:pt-[90px]
             md:pt-[60px]
             pb-[70px]
          "
        >

          {/* =================================================
              LEFT CONTENT
          ================================================= */}
          <div className="max-w-[850px]">

            {/* EYEBROW */}
            <div
              className="
                hero-reveal
                flex
                items-center
                gap-5
              "
            >

              <span className="h-[2px] w-12 bg-blue-400" />

              <p
                className="
                  text-blue-300
                  uppercase
                  tracking-[0.34em]
                  text-xs
                  sm:text-sm
                  font-semibold
                "
              >
                Snehal Foundation
              </p>

            </div>


            {/* =================================================
                MAIN HEADING
            ================================================= */}
            <h1
             className="
  hero-reveal
  hero-reveal-delay-1
  mt-6
  text-white
  font-extrabold
  tracking-[-0.045em]
  leading-[0.95]
  text-[2.6rem]
sm:text-5xl
  md:text-6xl
  lg:text-[4.5rem]
  xl:text-[4.9rem]
  2xl:text-[5.1rem]
"
            >

              <span className="block">
                Hope Begins
              </span>

              <span className="block text-blue-300">
                Were Fear Ends
              </span>

            </h1>


            {/* =================================================
                AMBEDKAR LINE
            ================================================= */}
            <p
              className="
                hero-reveal
                hero-reveal-delay-2
                mt-5
                max-w-[720px]
                text-base
                sm:text-lg
                md:text-xl
                text-white/90
                leading-relaxed
                italic
              "
            >
              A Social Initiative Inspired by the Vision of
              Dr. B. R. Ambedkar
            </p>


            {/* =================================================
                DECORATIVE LINES
            ================================================= */}
            <div
              className="
                hero-reveal
                hero-reveal-delay-2
                mt-4
                flex
                items-center
                gap-3
              "
            >

              <span className="h-[2px] w-16 bg-blue-400" />
              <span className="h-px w-7 bg-white/40" />
              <span className="h-px w-3 bg-white/20" />

            </div>


            {/* =================================================
                DESCRIPTION
            ================================================= */}
            <p
              className="
                hero-reveal
                hero-reveal-delay-3
                mt-4
                max-w-[680px]
                text-sm
                sm:text-base
                md:text-lg
                text-white/80
                leading-7
                md:leading-8
              "
            >
              Working towards a safer, more dignified and empowered society
              through education, healthcare, rehabilitation and community support.
            </p>


            {/* =================================================
                BUTTONS
            ================================================= */}
            <div
              className="
                hero-reveal
                hero-reveal-delay-4
                mt-6
                flex
                flex-col
                sm:flex-row
                gap-4
              "
            >

              {/* DONATE */}
              <button
                onClick={() => navigate("/donate")}
                
                className="
  group
  inline-flex
  items-center
  justify-center
  gap-2
  w-full
  max-w-[280px]
  sm:w-auto
  sm:max-w-none
  sm:min-w-[225px]
  rounded-full
  bg-blue-600
  hover:bg-blue-700
  px-5
  py-3
  sm:px-7
  sm:py-4
  text-sm
  sm:text-base
  md:text-lg
  font-semibold
  text-white
  shadow-[0_15px_40px_rgba(37,99,235,.35)]
  transition-all
  duration-300
  hover:-translate-y-1
  hover:shadow-[0_20px_50px_rgba(37,99,235,.45)]
"
              >

                Donate Now

                <span
  className="
    text-lg
    sm:text-xl
    transition-transform
    duration-300
    group-hover:translate-x-1
  "
>
  →
</span>

              </button>


              {/* VOLUNTEER */}
              <button
                onClick={() => navigate("/volunteer")}
                className="
  group
  inline-flex
  items-center
  justify-center
  gap-2
  w-full
  max-w-[280px]
  sm:w-auto
  sm:max-w-none
  sm:min-w-[300px]
  rounded-full
  border
  border-white/60
  bg-transparent
  px-5
  py-3
  sm:px-7
  sm:py-4
  text-sm
  sm:text-base
  md:text-lg
  font-semibold
  text-white
  transition-all
  duration-300
  hover:-translate-y-1
  hover:bg-white
  hover:text-slate-900
"
              >

                Become a Volunteer

                <span
  className="
    text-lg
    sm:text-xl
    transition-transform
    duration-300
    group-hover:translate-x-1
  "
>
  →
</span>

              </button>

            </div>
            


            {/* =================================================
                MOBILE STATS
            ================================================= */}
            <div
              className="
                mt-8
                grid
                grid-cols-3
                gap-3
                max-w-xl
                lg:hidden
              "
            >

              <div
                className="
                  rounded-2xl
                  border
                  border-white/15
                  bg-black/20
                  backdrop-blur-md
                  p-3
                  sm:p-4
                "
              >

                <p className="text-xl sm:text-2xl font-bold text-white">
                  5000+
                </p>

                <p className="mt-1 text-[10px] sm:text-xs text-white/60">
                  Students
                </p>

              </div>


              <div
                className="
                  rounded-2xl
                  border
                  border-white/15
                  bg-black/20
                  backdrop-blur-md
                  p-3
                  sm:p-4
                "
              >

                <p className="text-xl sm:text-2xl font-bold text-white">
                  120+
                </p>

                <p className="mt-1 text-[10px] sm:text-xs text-white/60">
                  Medical Camps
                </p>

              </div>


              <div
                className="
                  rounded-2xl
                  border
                  border-white/15
                  bg-black/20
                  backdrop-blur-md
                  p-3
                  sm:p-4
                "
              >

                <p className="text-xl sm:text-2xl font-bold text-white">
                  300+
                </p>

                <p className="mt-1 text-[10px] sm:text-xs text-white/60">
                  Volunteers
                </p>

              </div>

            </div>

          </div>
{/* =====================================================
    IMPACT HIGHLIGHT — 5000+ LIVES TOUCHED
===================================================== */}
<div
  className="
    hidden
    lg:block
    absolute
    right-[0px]
xl:right-[20px]
2xl:right-[45px]
    top-[57%]
    -translate-y-1/2
    w-[300px]
    xl:w-[340px]
    2xl:w-[370px]
    h-[480px]
    pointer-events-none
  "
>
  {/* GLOWING ORGANIC CURVE */}
<svg
  className="absolute inset-0 w-full h-full overflow-visible"
  viewBox="0 0 370 480"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  {/* soft glow */}
<path
  d="
    M 135 105
    C 190 45, 300 70, 350 160
    C 375 245, 330 330, 255 390
    C 205 425, 155 445, 115 450
  "
  stroke="rgba(96,165,250,0.55)"
  strokeWidth="10"
  strokeLinecap="round"
  filter="blur(8px)"
/>

  {/* main line */}
  <path
    d="
      M 135 105
      C 190 45, 300 70, 350 160
      C 375 245, 330 330, 255 390
      C 205 425, 155 445, 115 450
    "
    stroke="rgba(96,165,250,0.72)"
    strokeWidth="1.2"
    strokeLinecap="round"
  />

  {/* small inner highlight */}
  <path
    d="
      M 140 108
      C 195 55, 295 78, 340 160
      C 360 240, 320 320, 250 380
    "
    stroke="rgba(147,197,253,0.35)"
    strokeWidth="0.7"
    strokeLinecap="round"
  />
</svg>

  {/* 5000+ CONTENT */}
  <div
    className="
      absolute
      right-[0px]
xl:right-[5px]
2xl:right-[15px]
      top-[51%]
      -translate-y-1/2
      w-[175px]
      xl:w-[190px]
      text-white
      text-center
    "
  >
    <p
      className="
        text-[2.5rem]
        xl:text-[2.8rem]
        2xl:text-[3rem]
        font-extrabold
        tracking-[-0.04em]
        leading-none
        drop-shadow-[0_0_18px_rgba(96,165,250,0.35)]
      "
    >
      5000+
    </p>

    <div className="mt-3">
      <span
        className="
          block
          text-[0.65rem]
          xl:text-xs
          uppercase
          tracking-[0.28em]
          font-semibold
          text-blue-200
        "
      >
        Lives Touched
      </span>

      <span
        className="
          block
          mt-1
          text-[0.65rem]
          xl:text-xs
          uppercase
          tracking-[0.22em]
          text-white/65
        "
      >
        and Counting
      </span>
    </div>

    {/* small decorative leaf/dot */}
    <div className="mt-5 flex justify-center items-center gap-2">
      <span className="h-px w-8 bg-blue-300/40" />

      <span
        className="
          block
          w-2
          h-2
          rounded-full
          bg-blue-300
          shadow-[0_0_12px_rgba(96,165,250,0.8)]
        "
      />

      <span className="h-px w-8 bg-blue-300/40" />
    </div>
  </div>
</div>

        </div>


        {/* =====================================================
            EXPLORE OUR IMPACT
        ===================================================== */}
        <a
          href="#impact"
          className="
            absolute
            bottom-5
            left-1/2
            -translate-x-1/2
            z-20
            hidden
            sm:flex
            flex-col
            items-center
            text-white/70
            hover:text-white
            transition-colors
          "
        >

          {/* Mouse */}
          <span
            className="
              flex
              h-8
              w-5
              items-start
              justify-center
              rounded-full
              border
              border-white/65
              pt-1
            "
          >
            <span className="h-2 w-[2px] rounded-full bg-white" />
          </span>


          {/* Text */}
          <span
            className="
              mt-2
              text-[10px]
              uppercase
              tracking-[0.28em]
            "
          >
            Explore Our Impact
          </span>


          {/* Arrow */}
          <span className="scroll-pulse mt-1 text-lg">
            ↓
          </span>

        </a>

      </section>


      {/* =====================================================
          OUR IMPACT
      ===================================================== */}
      <section
        id="impact"
        className="
          relative
          w-full
          overflow-hidden
          bg-slate-100
          py-20
          md:py-24
        "
      >

        <div
          className="
            absolute
            -top-32
            left-1/2
            h-72
            w-72
            -translate-x-1/2
            rounded-full
            bg-blue-200/30
            blur-3xl
          "
        />


        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

          <div className="text-center max-w-3xl mx-auto">

            <div className="inline-flex items-center gap-3">

              <span className="h-px w-8 bg-blue-500" />

              <p className="text-blue-600 font-semibold uppercase tracking-[0.22em] text-sm">
                Our Impact
              </p>

              <span className="h-px w-8 bg-blue-500" />

            </div>


            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Creating Change, Building Hope
            </h2>


            <p className="mt-5 text-slate-600 leading-7 text-base md:text-lg">
              Our work focuses on creating meaningful opportunities,
              strengthening communities and helping vulnerable people move
              towards safer and more dignified lives.
            </p>

          </div>


          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Education */}
            <div
              className="
                group
                premium-card
                relative
                flex
                min-h-[300px]
                flex-col
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-7
                shadow-sm
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-blue-200
                hover:shadow-[0_25px_60px_rgba(15,23,42,0.10)]
              "
            >

              <div className="absolute inset-x-0 top-0 h-1 bg-blue-600 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />

              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-105">
                <GraduationCap size={30} strokeWidth={1.8} />
              </div>


              <h3 className="relative z-10 mt-6 text-xl font-bold text-slate-900">
                Education
              </h3>


              <p className="relative z-10 mt-3 text-slate-600 leading-7">
                Creating access to education and opportunities that help
                children and young people build a stronger future.
              </p>

<div className="relative z-10 mt-auto pt-6">
  <Link
    to="/programs/education"
    className="inline-flex items-center text-sm font-semibold text-blue-600 transition-all duration-300 hover:translate-x-1"
  >
    Building Futures
    <span className="ml-2">→</span>
  </Link>
</div>
              

            </div>


            {/* Healthcare */}
            <div
              className="
                group
                premium-card
                relative
                flex
                min-h-[300px]
                flex-col
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-7
                shadow-sm
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-blue-200
                hover:shadow-[0_25px_60px_rgba(15,23,42,0.10)]
              "
            >

              <div className="absolute inset-x-0 top-0 h-1 bg-blue-600 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />

              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-105">
                <HeartHandshake size={30} strokeWidth={1.8} />
              </div>


              <h3 className="relative z-10 mt-6 text-xl font-bold text-slate-900">
                Healthcare
              </h3>


              <p className="relative z-10 mt-3 text-slate-600 leading-7">
                Supporting healthcare awareness and access for communities
                that need it most.
              </p>

<Link
  to="/programs/healthcare"
  className="inline-flex items-center text-sm font-semibold text-blue-600 transition-all duration-300 group-hover:translate-x-1"
>
  Caring for Communities
  <span className="ml-2">→</span>
</Link>
              

            </div>


            {/* Skill Development */}
            <div
              className="
                group
                premium-card
                relative
                flex
                min-h-[300px]
                flex-col
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-7
                shadow-sm
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-blue-200
                hover:shadow-[0_25px_60px_rgba(15,23,42,0.10)]
              "
            >

              <div className="absolute inset-x-0 top-0 h-1 bg-blue-600 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />

              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-105">
                <Users size={30} strokeWidth={1.8} />
              </div>


              <h3 className="relative z-10 mt-6 text-xl font-bold text-slate-900">
                Skill Development
              </h3>


              <p className="relative z-10 mt-3 text-slate-600 leading-7">
                Helping individuals develop skills and opportunities for
                greater independence and livelihood.
              </p>


              <Link
  to="/programs/skill-development"
  className="inline-flex items-center text-sm font-semibold text-blue-600 transition-all duration-300 group-hover:translate-x-1"
>
  Creating Opportunities
  <span className="ml-2">→</span>
</Link>

            </div>


            {/* Community Support */}
            <div
              className="
                group
                premium-card
                relative
                flex
                min-h-[300px]
                flex-col
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-7
                shadow-sm
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-blue-200
                hover:shadow-[0_25px_60px_rgba(15,23,42,0.10)]
              "
            >

              <div className="absolute inset-x-0 top-0 h-1 bg-blue-600 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />

              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-105">
                <ShieldCheck size={30} strokeWidth={1.8} />
              </div>


              <h3 className="relative z-10 mt-6 text-xl font-bold text-slate-900">
                Community Support
              </h3>


              <p className="relative z-10 mt-3 text-slate-600 leading-7">
                Working with communities to promote safety, dignity,
                equality and lasting social change.
              </p>


              <div className="relative z-10 mt-auto pt-6">
                <span className="text-sm font-semibold text-blue-600">
                  Strengthening Communities →
                </span>
              </div>

            </div>

          </div>


          <div className="mt-14 text-center">

            <p className="text-lg md:text-xl font-medium text-slate-700">
              Together, we can turn{" "}
              <span className="text-blue-600 font-semibold">
                compassion into action
              </span>{" "}
              and{" "}
              <span className="text-blue-600 font-semibold">
                hope into lasting change.
              </span>
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHO WE ARE
      ===================================================== */}
      <section className="w-full bg-white py-20 md:py-24 overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* LEFT */}
            <div>

              <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
                Who We Are
              </p>


              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Working Together to Build a Better Tomorrow
              </h2>


              <p className="mt-6 text-slate-600 leading-8">
                Snehal Foundation works towards building a safer, more
                dignified and empowered society where every individual has
                the opportunity to live with hope, equality and respect.
              </p>


              <p className="mt-4 text-slate-600 leading-8">
                Our initiatives focus on education, healthcare, protection,
                rehabilitation, skill development and community support,
                especially for vulnerable children, girls and women.
              </p>


              <div className="mt-7 space-y-4">

                {[
                  "Creating safer environments for vulnerable communities",
                  "Promoting education and meaningful opportunities",
                  "Supporting dignity, equality and empowerment",
                  "Building stronger and more compassionate communities",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="flex items-start gap-3 group"
                  >

                    <CheckCircle
                      size={21}
                      className="mt-1 shrink-0 text-blue-600 transition-transform duration-300 group-hover:scale-110"
                    />

                    <p className="text-slate-700 leading-7">
                      {item}
                    </p>

                  </div>

                ))}

              </div>


              <Link
                to="/about"
                className="group inline-flex items-center gap-2 mt-9 rounded-full bg-blue-600 hover:bg-blue-700 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                Learn More About Us

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

              </Link>

            </div>


            {/* RIGHT */}
            <div className="relative">

              <div
                className="
                  group
                  premium-card
                  relative
                  rounded-[2rem]
                  bg-gradient-to-br
                  from-blue-950
                  via-blue-900
                  to-slate-900
                  p-8
                  md:p-10
                  text-white
                  shadow-2xl
                  overflow-hidden
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:scale-[1.015]
                  hover:shadow-[0_30px_80px_rgba(15,23,42,.35)]
                "
              >

                <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl" />

                <div className="absolute -left-20 -bottom-20 w-56 h-56 rounded-full bg-blue-400/10 blur-3xl" />


                <div className="relative z-10">

                  <p className="text-blue-300 text-sm uppercase tracking-[0.25em] font-semibold">
                    Our Commitment
                  </p>


                  <h3 className="mt-5 text-3xl md:text-4xl font-bold leading-tight">
                    Compassion Into Action
                  </h3>


                  <p className="mt-5 text-white/70 leading-7">
                    We believe lasting change begins when compassion becomes
                    action and communities come together to protect, empower
                    and support one another.
                  </p>


                  <div className="mt-9 grid grid-cols-2 gap-4">

                    {[
                      ["Safety", ShieldCheck],
                      ["Education", GraduationCap],
                      ["Compassion", HeartHandshake],
                      ["Community", Users],
                    ].map(([label, Icon]) => (

                      <div
                        key={label}
                        className="
                          group/item
                          premium-card
                          rounded-2xl
                          border
                          border-white/10
                          bg-white/[0.07]
                          p-5
                          transition-all
                          duration-300
                          hover:bg-white/[0.12]
                          hover:border-blue-300/20
                          hover:-translate-y-1
                        "
                      >

                        <Icon
                          size={28}
                          className="relative z-10 text-blue-300 transition-transform duration-300 group-hover/item:scale-110"
                        />

                        <p className="relative z-10 mt-3 font-semibold text-white">
                          {label}
                        </p>

                      </div>

                    ))}

                  </div>


                  <div className="mt-8 border-t border-white/10 pt-6">

                    <p className="text-white/70">
                      Together, we can turn{" "}
                      <span className="text-blue-300 font-semibold">
                        hope
                      </span>{" "}
                      into{" "}
                      <span className="text-white font-semibold">
                        action.
                      </span>
                    </p>

                  </div>

                </div>

              </div>


              {/* FLOATING LABEL */}
              <div
                className="
                  absolute
                  -bottom-6
                  right-10
                  rounded-2xl
                  bg-white
                  shadow-xl
                  border
                  border-slate-100
                  px-5
                  py-4
                "
              >

                <p className="text-xs uppercase tracking-widest text-slate-400">
                  Together
                </p>

                <p className="font-bold text-slate-900">
                  Turning hope into action
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOUNDER
      ===================================================== */}
      <section
        id="founder"
        className="
          relative
          w-full
          overflow-hidden
          bg-blue-50
          py-20
          md:py-24
        "
      >

        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-200/30 blur-3xl pointer-events-none" />

        <div className="absolute -bottom-40 -right-32 w-96 h-96 rounded-full bg-blue-300/20 blur-3xl pointer-events-none" />


        <div className="relative max-w-7xl mx-auto px-6 md:px-10">

          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Founder Image */}
            <div className="relative">

              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-3xl border-2 border-blue-200 pointer-events-none" />

              <div className="absolute -bottom-4 -right-4 w-28 h-28 rounded-3xl bg-blue-600/10 pointer-events-none" />


              <div
                className="
                  group
                  premium-card
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  shadow-2xl
                  border
                  border-white/70
                  bg-white
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_30px_70px_rgba(15,23,42,.20)]
                "
              >

                <img
                  src={founder}
                  alt="Founder of Snehal Foundation"
                  className="
                    w-full
                    h-[500px]
                    md:h-[600px]
                    object-cover
                    object-[center_20%]
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.03]
                  "
                />


                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 via-transparent to-transparent opacity-70 pointer-events-none" />

              </div>

            </div>


            {/* Founder Text */}
            <div>

              <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
                Meet Our Founder
              </p>


              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                The Vision Behind Snehal Foundation
              </h2>


              <h3 className="mt-7 text-2xl md:text-3xl font-bold text-slate-900">
                Mr. Viplav Narendra Meshram
              </h3>


              <p className="mt-1 text-blue-600 font-semibold">
                Founder, MD & CEO
              </p>


              <p className="mt-6 text-slate-600 leading-8">
                Snehal Foundation is driven by a deep commitment to creating
                a safer and more dignified society, especially for vulnerable
                children, girls and women.
              </p>


              <p className="mt-4 text-slate-600 leading-8">
                Through community-focused initiatives, the Foundation works
                to create opportunities through education, healthcare, skill
                development and social support while standing against
                trafficking, exploitation, discrimination and inequality.
              </p>


              <blockquote
                className="
                  premium-card
                  relative
                  mt-8
                  rounded-2xl
                  border-l-4
                  border-blue-600
                  bg-white/70
                  px-6
                  py-5
                  shadow-sm
                "
              >

                <p className="relative z-10 text-xl md:text-2xl font-semibold italic text-slate-800 leading-relaxed">
                  "Empowering Lives. Protecting Futures. Building Strong Communities."
                </p>

              </blockquote>


              <Link
                to="/our-team"
                className="group inline-flex items-center gap-2 mt-9 rounded-full bg-blue-600 hover:bg-blue-700 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                Explore Our Team

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MISSION & VISION
      ===================================================== */}
      <section className="relative w-full overflow-hidden bg-white py-20 md:py-24">

        <div className="absolute -top-32 right-[-120px] w-96 h-96 rounded-full bg-blue-100/50 blur-3xl pointer-events-none" />

        <div className="absolute -bottom-32 left-[-120px] w-96 h-96 rounded-full bg-blue-50 blur-3xl pointer-events-none" />


        <div className="relative max-w-7xl mx-auto px-6 md:px-10">

          <div className="text-center max-w-3xl mx-auto">

            <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
              Our Purpose
            </p>


            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Mission & Vision
            </h2>


            <p className="mt-5 text-slate-600 leading-7">
              Guided by compassion and purpose, we work towards creating
              safer communities, empowering individuals and building a
              more dignified future for all.
            </p>

          </div>


          <div className="mt-12 grid lg:grid-cols-2 gap-7">

            {/* Vision */}
            <div
              className="
                group
                premium-card
                relative
                overflow-hidden
                rounded-[2rem]
                bg-blue-50
                p-8
                md:p-10
                border
                border-blue-100
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_25px_60px_rgba(37,99,235,.15)]
                hover:border-blue-200
              "
            >

              <div className="absolute -right-20 -top-20 w-56 h-56 rounded-full bg-blue-200/40 blur-3xl" />

              <div className="absolute top-0 left-0 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full" />


              <div className="relative z-10">

                <div className="flex items-center gap-4">

                  <div className="h-14 w-14 shrink-0 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/20">

                    <ShieldCheck size={27} />

                  </div>


                  <div>

                    <p className="text-xs uppercase tracking-widest text-blue-500 font-semibold">
                      Our
                    </p>

                    <h3 className="text-2xl font-bold text-slate-900">
                      Vision
                    </h3>

                  </div>

                </div>


                <p className="mt-7 text-slate-600 leading-8">
                  To build a world where every child is safe, every girl is
                  empowered, every woman lives with dignity, and every
                  community has the opportunity to thrive free from trafficking,
                  exploitation, discrimination and inequality.
                </p>


                <div className="mt-7 pt-5 border-t border-blue-200/70">

                  <p className="text-sm font-semibold text-blue-700">
                    A safer world begins with empowered lives.
                  </p>

                </div>

              </div>

            </div>


            {/* Mission */}
            <div
              className="
                group
                premium-card
                relative
                overflow-hidden
                rounded-[2rem]
                bg-gradient-to-br
                from-blue-950
                via-blue-900
                to-slate-900
                p-8
                md:p-10
                text-white
                border
                border-blue-900/50
                shadow-2xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:scale-[1.01]
                hover:shadow-[0_30px_70px_rgba(15,23,42,.30)]
              "
            >

              <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl" />

              <div className="absolute -left-20 -bottom-20 w-60 h-60 rounded-full bg-blue-400/10 blur-3xl" />

              <div className="absolute top-0 left-0 h-1 w-0 bg-blue-400 transition-all duration-500 group-hover:w-full" />


              <div className="relative z-10">

                <div className="flex items-center gap-4">

                  <div className="h-14 w-14 shrink-0 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg">

                    <HeartHandshake size={27} />

                  </div>


                  <div>

                    <p className="text-xs uppercase tracking-widest text-blue-300 font-semibold">
                      Our
                    </p>

                    <h3 className="text-2xl font-bold text-white">
                      Mission
                    </h3>

                  </div>

                </div>


                <p className="mt-7 text-white/70 leading-8">
                  To create meaningful pathways through education, protection,
                  healthcare, livelihood opportunities, rehabilitation and
                  advocacy while strengthening communities and promoting
                  dignity, equality and empowerment.
                </p>


                <div className="mt-7 pt-5 border-t border-white/10">

                  <p className="text-sm font-semibold text-blue-300">
                    Turning compassion into meaningful action.
                  </p>

                </div>

              </div>

            </div>

          </div>


          <div className="text-center mt-11">

            <Link
              to="/about#mission-vision"
              className="group inline-flex items-center gap-2 rounded-full border border-blue-600 px-7 py-3.5 font-semibold text-blue-700 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              Discover Our Story

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROGRAMS
      ===================================================== */}
      <section className="relative w-full overflow-hidden bg-slate-50 py-20 md:py-24">

        <div className="absolute -top-32 left-[-120px] w-96 h-96 rounded-full bg-blue-100/50 blur-3xl pointer-events-none" />

        <div className="absolute -bottom-40 right-[-120px] w-96 h-96 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />


        <div className="relative max-w-7xl mx-auto px-6 md:px-10">

          <div className="text-center max-w-3xl mx-auto">

            <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
              What We Do
            </p>


            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Our Programs
            </h2>


            <p className="mt-5 text-slate-600 leading-7">
              Our programs are designed to create practical, sustainable
              and meaningful opportunities that help individuals and
              communities move towards safer and more empowered lives.
            </p>

          </div>


          <div className="mt-12 grid md:grid-cols-3 gap-7">

            {/* Education */}
            <div
              className="
                group
                premium-card
                relative
                bg-white
                rounded-[2rem]
                overflow-hidden
                shadow-sm
                border
                border-slate-200
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_25px_60px_rgba(15,23,42,.15)]
                hover:border-blue-100
              "
            >

              <div className="absolute top-0 left-0 z-20 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full" />

              <div className="relative h-64 overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80"
                  alt="Education program"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-70" />

                <div className="absolute top-5 left-5 h-11 w-11 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-blue-700 font-bold shadow-lg">
                  01
                </div>

              </div>


              <div className="relative z-10 p-7">

                <h3 className="text-2xl font-bold text-slate-900">
                  Education
                </h3>


                <p className="mt-3 text-slate-600 leading-7">
                  Promoting access to education and helping children build
                  the confidence and skills they need for a brighter future.
                </p>


                <Link
                  to="/programs/education"
                  className="group/link inline-flex items-center gap-2 mt-6 font-semibold text-blue-600 hover:text-blue-800"
                >

                  Learn More

                  <span className="text-lg transition-transform duration-300 group-hover/link:translate-x-1">
                    →
                  </span>

                </Link>

              </div>

            </div>


            {/* Healthcare */}
            <div
              className="
                group
                premium-card
                relative
                bg-white
                rounded-[2rem]
                overflow-hidden
                shadow-sm
                border
                border-slate-200
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_25px_60px_rgba(15,23,42,.15)]
                hover:border-blue-100
              "
            >

              <div className="absolute top-0 left-0 z-20 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full" />

              <div className="relative h-64 overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1580281657527-47f249e8f3f6?auto=format&fit=crop&w=1200&q=80"
                  alt="Healthcare program"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-70" />

                <div className="absolute top-5 left-5 h-11 w-11 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-blue-700 font-bold shadow-lg">
                  02
                </div>

              </div>


              <div className="relative z-10 p-7">

                <h3 className="text-2xl font-bold text-slate-900">
                  Healthcare
                </h3>


                <p className="mt-3 text-slate-600 leading-7">
                  Supporting healthcare awareness, medical assistance and
                  access to essential services.
                </p>


                <Link
                  to="/programs/healthcare"
                  className="group/link inline-flex items-center gap-2 mt-6 font-semibold text-blue-600 hover:text-blue-800"
                >

                  Learn More

                  <span className="text-lg transition-transform duration-300 group-hover/link:translate-x-1">
                    →
                  </span>

                </Link>

              </div>

            </div>


            {/* Skill Development */}
            <div
              className="
                group
                premium-card
                relative
                bg-white
                rounded-[2rem]
                overflow-hidden
                shadow-sm
                border
                border-slate-200
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_25px_60px_rgba(15,23,42,.15)]
                hover:border-blue-100
              "
            >

              <div className="absolute top-0 left-0 z-20 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full" />

              <div className="relative h-64 overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
                  alt="Skill development program"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-70" />

                <div className="absolute top-5 left-5 h-11 w-11 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-blue-700 font-bold shadow-lg">
                  03
                </div>

              </div>


              <div className="relative z-10 p-7">

                <h3 className="text-2xl font-bold text-slate-900">
                  Skill Development
                </h3>


                <p className="mt-3 text-slate-600 leading-7">
                  Building practical skills and livelihood opportunities
                  that help individuals move towards greater independence.
                </p>


                <Link
                  to="/programs/skill-development"
                  className="group/link inline-flex items-center gap-2 mt-6 font-semibold text-blue-600 hover:text-blue-800"
                >

                  Learn More

                  <span className="text-lg transition-transform duration-300 group-hover/link:translate-x-1">
                    →
                  </span>

                </Link>

              </div>

            </div>

          </div>


          <div className="text-center mt-11">

            <Link
              to="/programs"
              className="group inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              Explore All Programs

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR VALUES
      ===================================================== */}
      <section className="relative w-full bg-white py-20 md:py-24 overflow-hidden">

        <div className="absolute top-20 left-[-180px] w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="absolute bottom-20 right-[-180px] w-[400px] h-[400px] bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />


        <div className="relative max-w-7xl mx-auto px-6 md:px-10">

          <div className="text-center max-w-3xl mx-auto">

            <p className="text-blue-600 font-semibold uppercase tracking-[0.22em] text-sm">
              What Guides Us
            </p>


            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Our Values
            </h2>


            <p className="mt-5 text-slate-600 leading-7 text-base md:text-lg">
              The principles that shape how we serve, protect and empower communities.
            </p>

          </div>


          <div className="relative max-w-5xl mx-auto mt-16">

            <div
              className="
                absolute
                left-3
                md:left-1/2
                top-0
                bottom-0
                w-[2px]
                bg-gradient-to-b
                from-blue-200
                via-blue-500
                to-blue-100
                md:-translate-x-1/2
              "
            />


            {values.map((value, index) => (

              <div
                key={value.number}
                className={`
                  relative
                  flex
                  items-center
                  mb-9
                  md:mb-12
                  ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}
                `}
              >

                <div className="relative z-10 w-full md:w-[46%] pl-10 md:pl-0">

                  <div className="group premium-card relative overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/70 p-6 md:p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(15,23,42,.14)] hover:border-blue-200">

                    <div className="absolute top-0 left-0 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full" />


                    <div className="relative z-10 flex items-start justify-between gap-5">

                      <div>

                        <p className="text-xs uppercase tracking-[0.25em] text-blue-600 font-semibold">
                          Our Value
                        </p>


                        <h3 className="mt-2 text-xl md:text-2xl font-bold text-slate-900">
                          {value.title}
                        </h3>


                        <p className="mt-3 text-slate-600 leading-7">
                          {value.text}
                        </p>

                      </div>


                      <span className="shrink-0 text-4xl md:text-5xl font-black text-blue-100 transition-all duration-300 group-hover:text-blue-200">
                        {value.number}
                      </span>

                    </div>

                  </div>

                </div>


                <div
                  className="
                    value-node
                    absolute
                    left-3
                    md:left-1/2
                    -translate-x-1/2
                    h-7
                    w-7
                    rounded-full
                    border-4
                    border-white
                    bg-blue-600
                    shadow-[0_0_0_5px_rgba(37,99,235,.12),0_8px_20px_rgba(37,99,235,.25)]
                    z-20
                  "
                />

              </div>

            ))}

          </div>


          {/* Our Promise */}
          <div
            className="
              premium-card
              relative
              mt-14
              overflow-hidden
              rounded-[2rem]
              bg-gradient-to-br
              from-blue-950
              via-blue-900
              to-slate-900
              p-9
              md:p-12
              text-center
              text-white
              shadow-2xl
              transition-all
              duration-500
              hover:-translate-y-1
              hover:shadow-[0_30px_70px_rgba(15,23,42,.25)]
            "
          >

            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />


            <div className="relative z-10">

              <p className="text-blue-300 uppercase tracking-[0.25em] text-sm font-semibold">
                Our Promise
              </p>


              <h3 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
                Empowering Lives. Protecting Futures.
              </h3>


              <p className="mt-2 text-xl md:text-2xl font-semibold text-white/80">
                Building Strong Communities.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          VOLUNTEER CTA
      ===================================================== */}
      <section className="relative w-full bg-blue-50 py-20 md:py-24 overflow-hidden">

        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-blue-200/40 blur-3xl pointer-events-none" />

        <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-blue-200/40 blur-3xl pointer-events-none" />


        <div className="relative max-w-5xl mx-auto px-6 md:px-10">

          <div className="text-center">

            <p className="text-blue-600 font-semibold uppercase tracking-[0.25em] text-sm">
              Make a Difference
            </p>


            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Become a Volunteer
            </h2>


            <p className="mt-5 max-w-3xl mx-auto text-slate-600 leading-8 text-base md:text-lg">
              Your time, skills and compassion can help us reach more people,
              support more communities and create meaningful change.
            </p>


            <blockquote className="mt-7 max-w-2xl mx-auto text-xl md:text-2xl italic font-semibold text-slate-800 leading-relaxed">
              “Together, small acts of kindness can create lasting change.”
            </blockquote>


            <div className="w-14 h-px bg-blue-300 mx-auto mt-8" />


            <Link
              to="/volunteer"
              className="group inline-flex items-center gap-3 mt-8 rounded-full bg-blue-600 hover:bg-blue-700 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              Join as a Volunteer

              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          DONATE CTA
      ===================================================== */}
      <section
        className="
          relative
          w-full
          overflow-hidden
          bg-gradient-to-br
          from-slate-950
          via-blue-950
          to-slate-950
          py-20
          md:py-24
        "
      >

        {/* Left Ring */}
        <div
          className="
            absolute
            -left-48
            -top-24
            w-[520px]
            h-[520px]
            rounded-full
            border
            border-blue-500/30
            shadow-[0_0_100px_rgba(37,99,235,.35)]
            pointer-events-none
          "
        />


        <div
          className="
            absolute
            -left-40
            -top-16
            w-[360px]
            h-[360px]
            rounded-full
            bg-blue-500/10
            blur-[80px]
            pointer-events-none
          "
        />


        {/* Right Ring */}
        <div
          className="
            absolute
            -right-52
            bottom-[-170px]
            w-[560px]
            h-[560px]
            rounded-full
            border
            border-blue-500/25
            shadow-[0_0_120px_rgba(37,99,235,.35)]
            pointer-events-none
          "
        />


        <div
          className="
            absolute
            -right-40
            bottom-[-100px]
            w-[380px]
            h-[380px]
            rounded-full
            bg-blue-500/10
            blur-[80px]
            pointer-events-none
          "
        />


        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">

          <div
            className="
              group
              premium-card
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-blue-400/40
              bg-gradient-to-br
              from-blue-900
              via-blue-950
              to-blue-900
              px-7
              py-12
              md:px-14
              md:py-16
              text-center
              text-white
              shadow-[0_30px_100px_rgba(0,0,0,.45)]
              transition-all
              duration-500
              hover:border-blue-400/60
              hover:shadow-[0_30px_100px_rgba(37,99,235,.20)]
            "
          >

            <div className="absolute left-1/2 top-[-180px] -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[100px] pointer-events-none" />


            <div className="absolute left-1/2 bottom-[-220px] -translate-x-1/2 w-[500px] h-[400px] rounded-full bg-blue-400/10 blur-[100px] pointer-events-none" />


            <div className="absolute inset-[1px] rounded-[2rem] border border-white/5 pointer-events-none" />


            <div className="relative z-10">

              <div className="flex items-center justify-center gap-5">

                <span className="hidden sm:block h-px w-12 bg-blue-400/70" />

                <p className="text-blue-300 font-semibold uppercase tracking-[0.25em] text-sm">
                  Support Our Mission
                </p>

                <span className="hidden sm:block h-px w-12 bg-blue-400/70" />

              </div>


              <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">

                Your Support Can

                <span className="block text-blue-300">
                  Change Lives
                </span>

              </h2>


              <p className="mt-6 max-w-3xl mx-auto text-white/75 leading-8 text-base md:text-lg">
                Every contribution helps us create safer environments, expand
                opportunities and support vulnerable communities with dignity
                and compassion.
              </p>


              <div className="mt-9">

                <p className="text-xl md:text-2xl font-bold text-white">
                  Together Against Human Trafficking.
                </p>

                <p className="mt-2 text-xl md:text-2xl font-bold text-blue-300">
                  Together for Every Girl’s Future.
                </p>

              </div>


              <div className="flex justify-center mt-9">

                <div className="h-1 w-16 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,.7)]" />

              </div>


              <Link
                to="/donate"
                className="
                  group/button
                  inline-flex
                  items-center
                  justify-center
                  gap-4
                  mt-9
                  min-w-[210px]
                  rounded-full
                  bg-gradient-to-r
                  from-blue-500
                  to-blue-600
                  hover:from-blue-400
                  hover:to-blue-500
                  px-9
                  py-4
                  text-base
                  md:text-lg
                  font-bold
                  text-white
                  border
                  border-blue-300/30
                  shadow-[0_12px_35px_rgba(37,99,235,.40)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_18px_50px_rgba(37,99,235,.55)]
                "
              >

                Donate Today

                <span className="text-2xl leading-none transition-transform duration-300 group-hover/button:translate-x-1">
                  →
                </span>

              </Link>


              <p className="mt-5 text-sm text-white/50">
                Every contribution, big or small, helps create meaningful change.
              </p>

            </div>

          </div>

        </div>

      </section>

       {/* ================= CHATBOT ================= */}
      <Chatbot />

    </main>
  );
};

export default Home;