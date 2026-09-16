import React from "react";
import { useNavigate } from "react-router-dom";
import {
  GraduationCap,
  BookOpen,
  Users,
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const Education = () => {
  const navigate = useNavigate();

  const objectives = [
    {
      icon: GraduationCap,
      title: "Expand Access to Education",
      text: "Create opportunities for children and young people to access education and overcome barriers that may limit their future.",
    },
    {
      icon: ShieldCheck,
      title: "Support the Girl Child",
      text: "Promote education and opportunity for girls, helping create pathways towards greater confidence, dignity, and independence.",
    },
    {
      icon: Users,
      title: "Strengthen Communities",
      text: "Encourage families, communities, educational institutions, and other stakeholders to participate in creating supportive learning environments.",
    },
    {
      icon: HeartHandshake,
      title: "Empower Through Opportunity",
      text: "Use education as a foundation for empowerment, helping individuals build knowledge, confidence, and the ability to make informed choices.",
    },
  ];

  const beneficiaries = [
    "Vulnerable and at-risk children",
    "Children facing barriers to education",
    "School-age girls and young women",
    "Children and young people from marginalized communities",
    "Youth seeking opportunities for growth and development",
  ];

  const approaches = [
    "Human dignity and equality",
    "Prevention and early support",
    "Community participation",
    "Rights-based education",
    "Empowerment through opportunity",
    "Long-term capacity building",
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
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=2000&q=90"
            alt="Children learning together"
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
              <GraduationCap size={17} />
              Education Programme
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-[-0.04em] leading-[0.98] text-white">
              Education Opens Doors.
              <span className="block text-blue-300 mt-3">
                Opportunity Builds Futures.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base md:text-lg lg:text-xl leading-8 text-slate-200">
              We work to create meaningful educational opportunities for
              children and girls, particularly those facing vulnerability,
              inequality, and barriers to a better future.
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
                             Become Volunteer

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
                              Get involved
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
              Education & Girl Child Empowerment
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              Education Is More Than Learning
            </h2>

          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-8 text-slate-600">

            <p className="text-base md:text-lg leading-8">
              Education can provide individuals with knowledge, confidence,
              choices, and opportunities. For children and girls facing
              vulnerability or social and economic barriers, access to
              education can be an important foundation for a safer and more
              dignified future.
            </p>

            <p className="text-base md:text-lg leading-8">
              Snehal Foundation views education as an essential part of
              empowerment and social change. Our approach focuses on creating
              opportunities while working with communities and stakeholders
              to reduce barriers and strengthen long-term support.
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
              Creating Pathways Through Education
            </h2>

            <p className="mt-5 text-base md:text-lg leading-8 text-slate-600">
              Our education work is guided by the belief that every child
              deserves an opportunity to learn, grow, and build a hopeful
              future.
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
                src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1200&q=90"
                alt="Children participating in education"
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
                  <BookOpen size={22} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Knowledge
                  </p>

                  <p className="text-xs text-slate-500">
                    Creates opportunity
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
              Reaching Those Who Need Opportunity Most
            </h2>

            <p className="mt-6 text-base md:text-lg leading-8 text-slate-600">
              Our education programme is designed with vulnerable children,
              girls, young people, and communities facing social or economic
              challenges in mind.
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
              Education With Dignity, Equality & Empowerment
            </h2>

            <p className="mt-6 text-base md:text-lg leading-8 text-slate-300">
              Our work follows the wider Snehal Foundation programme
              philosophy, placing human dignity, rights, inclusion, community
              participation, and long-term empowerment at the centre.
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
    IMPACT MESSAGE
===================================================== */}
<section className="relative overflow-hidden bg-blue-800 py-20 lg:py-24">

  {/* Soft background glow */}
  <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
  <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-blue-900/20 blur-3xl" />

  <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">

    {/* Icon */}
    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-md">
      <GraduationCap size={31} />
    </div>

    {/* Heading */}
    <h2 className="mt-7 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
      Education Creates Lasting Change
    </h2>

    {/* Description */}
    <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/85 sm:text-lg">
      When children and young people have access to education, support and
      opportunity, they can build confidence, discover their potential and
      work toward a brighter future.
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
          Help Create Opportunities Through Education
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
          Your time, encouragement and support can help create meaningful
          educational opportunities for children and young people.
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

export default Education;