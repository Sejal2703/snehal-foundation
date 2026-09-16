import React from "react";
import { useNavigate } from "react-router-dom";
import {
  HeartPulse,
  ShieldCheck,
  Users,
  HeartHandshake,
  Stethoscope,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const Healthcare = () => {
  const navigate = useNavigate();

  const objectives = [
    {
      icon: HeartPulse,
      title: "Promote Health & Well-Being",
      text: "Support access to healthcare and promote awareness that helps individuals and communities work towards healthier and more dignified lives.",
    },
    {
      icon: ShieldCheck,
      title: "Support Vulnerable Communities",
      text: "Focus on children, women, families, and communities facing social or economic challenges and barriers to essential support.",
    },
    {
      icon: Stethoscope,
      title: "Encourage Preventive Care",
      text: "Promote awareness, early support, and community participation to help address health concerns before they become more serious.",
    },
    {
      icon: HeartHandshake,
      title: "Build Community Support",
      text: "Work with communities, healthcare providers, institutions, volunteers, and other stakeholders to strengthen access to support.",
    },
  ];

  const beneficiaries = [
    "Vulnerable and at-risk children",
    "Girls and women facing social or economic challenges",
    "Marginalized and economically disadvantaged communities",
    "People affected by crisis or difficult circumstances",
    "Communities requiring greater awareness and access to healthcare support",
  ];

  const approaches = [
    "Human dignity and respect",
    "Prevention and early support",
    "Community participation",
    "Inclusion and equality",
    "Rights-based approach",
    "Long-term community well-being",
  ];

  return (
    <main className="w-full overflow-hidden bg-white">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative min-h-[650px] flex items-center overflow-hidden bg-slate-950">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=90"
            alt="Healthcare professional supporting a patient"
            className="w-full h-full object-cover object-center"
          />

          {/* Left Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/20" />

          {/* Bottom Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20 pt-28 pb-20">

          {/* Simple Back Button */}
          <button
            onClick={() => navigate("/programs")}
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-medium
              text-white/80
              hover:text-white
              transition-colors
              duration-300
              mb-8
            "
          >
            <ArrowLeft size={18} />
        
          </button>

          {/* Hero Text */}
          <div className="max-w-3xl">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-blue-500/10 backdrop-blur-md px-4 py-2 text-sm font-medium text-blue-200 mb-7">
              <HeartPulse size={17} />
              Healthcare & Wellness
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-[-0.04em] leading-[0.98] text-white">
              Health Is a Foundation
              <span className="block text-blue-300 mt-3">
                for a Dignified Life.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base md:text-lg lg:text-xl leading-8 text-slate-200">
              We work to strengthen awareness, access, and community support
              so that vulnerable individuals and communities can move towards
              healthier and more secure lives.
            </p>

            {/* Hero Buttons */}
            <div className="mt-9 flex flex-col sm:flex-row gap-4">

              <button
                              onClick={() => navigate("/volunteer")}
                              className="
                                inline-flex items-center justify-center gap-2
                                rounded-xl bg-blue-600 px-6 py-3.5
                                font-semibold text-white
                                shadow-lg shadow-blue-900/30
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
                                inline-flex items-center justify-center gap-2
                                rounded-xl border border-white/30
                                bg-white/10 px-6 py-3.5
                                font-semibold text-white
                                backdrop-blur-md
                                transition-all duration-300
                                hover:bg-white/20
                              "
                            >
                              Get Involved
                            </button>

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16">

        <div className="max-w-5xl mx-auto">

          <div className="text-center">

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Healthcare & Wellness
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              Health, Dignity & Well-Being
            </h2>

          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-8 text-slate-600">

            <p className="text-base md:text-lg leading-8">
              Good health is an important part of living with dignity,
              security, and opportunity. Vulnerable individuals and
              communities can face additional barriers when seeking healthcare
              support and reliable health information.
            </p>

            <p className="text-base md:text-lg leading-8">
              Snehal Foundation's healthcare and wellness approach focuses on
              awareness, prevention, early support, community participation,
              and connections with relevant healthcare providers and
              stakeholders.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          OBJECTIVES
      ===================================================== */}
      <section className="bg-slate-50 py-20 md:py-28 px-6 md:px-10 lg:px-16">

        <div className="max-w-[1300px] mx-auto">

          <div className="max-w-3xl mb-14">

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Our Objectives
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              Building Healthier Communities
            </h2>

            <p className="mt-5 text-base md:text-lg leading-8 text-slate-600">
              Our healthcare and wellness work is guided by the belief that
              every person deserves dignity, care, awareness, and the
              opportunity to live a healthier life.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {objectives.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    group
                    bg-white
                    rounded-3xl
                    border
                    border-slate-200
                    p-7
                    shadow-sm
                    hover:shadow-xl
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >

                  <div className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-blue-50
                    text-blue-600
                    flex
                    items-center
                    justify-center
                    group-hover:bg-blue-600
                    group-hover:text-white
                    transition-colors
                    duration-300
                  ">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-slate-600 leading-7">
                    {item.text}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          WHO WE SUPPORT
      ===================================================== */}
      <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16">

        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Image */}
          <div className="relative">

            <div className="overflow-hidden rounded-[32px] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=90"
                alt="Healthcare support and community well-being"
                className="w-full h-[430px] md:h-[520px] object-cover"
              />
            </div>

            {/* Floating Info Card */}
            <div className="
              absolute
              -bottom-6
              -right-4
              md:-right-8
              bg-white
              rounded-2xl
              shadow-xl
              border
              border-slate-100
              p-5
              max-w-[230px]
            ">

              <div className="flex items-center gap-3">

                <div className="
                  w-11
                  h-11
                  rounded-xl
                  bg-blue-50
                  text-blue-600
                  flex
                  items-center
                  justify-center
                ">
                  <HeartPulse size={22} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Well-Being
                  </p>

                  <p className="text-xs text-slate-500">
                    Health creates dignity
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* Content */}
          <div>

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Who We Support
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Reaching Communities That Need Support
            </h2>

            <p className="mt-6 text-base md:text-lg leading-8 text-slate-600">
              Our healthcare and wellness programme keeps vulnerable
              individuals and communities at the centre of its work, with
              dignity, inclusion, and accessibility guiding the approach.
            </p>

            <div className="mt-8 space-y-4">

              {beneficiaries.map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={21}
                    className="shrink-0 mt-1 text-blue-600"
                  />

                  <span className="text-base md:text-lg text-slate-700">
                    {item}
                  </span>
                </div>

              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          OUR APPROACH
      ===================================================== */}
      <section className="bg-slate-950 py-20 md:py-28 px-6 md:px-10 lg:px-16">

        <div className="max-w-[1200px] mx-auto">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Our Approach
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Healthcare With Dignity, Inclusion & Care
            </h2>

            <p className="mt-6 text-base md:text-lg leading-8 text-slate-300">
              Our healthcare work follows the wider Snehal Foundation
              programme philosophy, placing human dignity, prevention,
              inclusion, community participation, and long-term well-being
              at the centre.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">

            {approaches.map((item, index) => (

              <div
                key={item}
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-6
                  hover:bg-white/[0.08]
                  hover:border-blue-400/30
                  transition-all
                  duration-300
                "
              >

                <div className="flex items-center gap-4">

                  <div className="
                    w-10
                    h-10
                    shrink-0
                    rounded-xl
                    bg-blue-500/10
                    text-blue-300
                    flex
                    items-center
                    justify-center
                    font-bold
                    text-sm
                  ">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="text-base md:text-lg font-semibold text-white">
                    {item}
                  </h3>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          HEALTH & SAFER FUTURE
      ===================================================== */}
      <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16">

        <div className="max-w-4xl mx-auto text-center">

          <div className="
            mx-auto
            w-16
            h-16
            rounded-2xl
            bg-blue-50
            text-blue-600
            flex
            items-center
            justify-center
          ">
            <Sparkles size={28} />
          </div>

          <h2 className="mt-7 text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Health Strengthens Communities
          </h2>

          <p className="mt-6 text-base md:text-lg leading-8 text-slate-600">
            When people have greater awareness, support, and opportunities
            to access healthcare, they are better positioned to protect their
            well-being and participate in their communities.
          </p>

          <p className="mt-5 text-base md:text-lg leading-8 text-slate-600">
            By strengthening healthcare and wellness initiatives, we contribute
            to Snehal Foundation's wider vision of building safer communities
            where every person can live with dignity and hope.
          </p>

        </div>
      </section>

{/* =====================================================
    IMPACT MESSAGE
===================================================== */}
<section className="relative overflow-hidden bg-blue-800 py-20 lg:py-24">

  {/* Soft background glow */}
  <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
  <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-blue-900/20 blur-3xl" />

  <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">

    {/* Icon */}
    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-md">
      <HeartPulse size={31} />
    </div>

    {/* Heading */}
    <h2 className="mt-7 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
      Health Strengthens Communities
    </h2>

    {/* Description */}
    <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/85 sm:text-lg">
      When people have access to healthcare support, awareness and
      compassionate care, they can live with greater dignity, confidence
      and well-being.
    </p>

  </div>
</section>


{/* =====================================================
    CTA
===================================================== */}
<section className="bg-white py-20 lg:py-24">

  <div className="mx-auto max-w-5xl px-6 lg:px-8">

    <div
      className="
        relative overflow-hidden rounded-[2rem]
        bg-slate-950
        px-7 py-12
        text-center
        shadow-2xl
        sm:px-12
        lg:px-16
      "
    >

      {/* Decorative glow */}
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10">

        {/* Eyebrow */}
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
          Be Part of the Change
        </p>

        {/* Heading */}
        <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
          Help Build a Healthier Future
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
          Your time, encouragement and support can help communities access
          healthcare awareness, compassionate support and opportunities for
          healthier, more dignified lives.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

          <button
            onClick={() => navigate("/volunteer")}
            className="
              inline-flex items-center justify-center gap-2
              rounded-xl bg-blue-600 px-7 py-3.5
              font-semibold text-white
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
              inline-flex items-center justify-center
              rounded-xl border border-white/20
              px-7 py-3.5
              font-semibold text-white
              transition-all duration-300
              hover:bg-white/10
            "
          >
            Contact Us
          </button>

        </div>

      </div>
    </div>

  </div>
</section>

    </main>
  );
};

export default Healthcare;