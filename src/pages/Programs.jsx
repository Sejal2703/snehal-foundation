import React from "react";
import { useNavigate } from "react-router-dom";
import {
  GraduationCap,
  HeartPulse,
  BriefcaseBusiness,
  ShieldCheck,
  Users,
  HandHeart,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const Programs = () => {
  const navigate = useNavigate();

  const corePrograms = [
    {
      title: "Education",
      subtitle: "Education & Girl Child Empowerment",
      description:
        "Creating opportunities for children and girls to access education, overcome barriers, and build a stronger and more hopeful future.",
      icon: GraduationCap,
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=85",
      route: "/programs/education",
    },
    {
      title: "Healthcare & Wellness",
      subtitle: "Health, Awareness & Well-Being",
      description:
        "Improving access to healthcare, health awareness, and supportive services for vulnerable individuals and communities.",
      icon: HeartPulse,
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
      route: "/programs/healthcare",
    },
    {
      title: "Skill Development & Livelihood",
      subtitle: "Skills, Opportunity & Independence",
      description:
        "Building vocational skills and creating opportunities that help youth and women move towards greater confidence, self-reliance, and financial independence.",
      icon: BriefcaseBusiness,
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
      route: "/programs/skill-development",
    },
  ];

  const supportingAreas = [
    {
      title: "Anti-Human Trafficking & Prevention",
      icon: ShieldCheck,
    },
    {
      title: "Child Protection",
      icon: ShieldCheck,
    },
    {
      title: "Rescue, Rehabilitation & Reintegration",
      icon: HandHeart,
    },
    {
      title: "Women Empowerment",
      icon: Users,
    },
    {
      title: "Disaster Relief",
      icon: HandHeart,
    },
    {
      title: "Digital Literacy",
      icon: Sparkles,
    },
    {
      title: "Environmental Sustainability",
      icon: Sparkles,
    },
    {
      title: "Senior Citizen Welfare",
      icon: Users,
    },
    {
      title: "Disability Inclusion",
      icon: HandHeart,
    },
  ];

  return (
    <main className="w-full overflow-hidden bg-white">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative min-h-[620px] flex items-center overflow-hidden bg-slate-950">

        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=2000&q=90"
            alt="Children learning together"
            className="w-full h-full object-cover object-center"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/30" />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20 pt-28 pb-20">

          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-blue-500/10 backdrop-blur-md px-4 py-2 text-sm font-medium text-blue-200 mb-7">
              <Sparkles size={16} />
              Our Programmes
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-[-0.04em] leading-[0.98] text-white">
              Creating Opportunities.
              <span className="block text-blue-300 mt-2">
                Protecting Futures.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base md:text-lg lg:text-xl leading-8 text-slate-200">
              Snehal Foundation works to create a safer, more equal, and
              dignified society through education, healthcare, empowerment,
              protection, and community participation.
            </p>

            <p className="mt-5 text-sm md:text-base font-medium text-blue-200">
              Protect the Vulnerable. Empower Communities. Build a Safer Future.
            </p>

          </div>
        </div>
      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section className="relative py-20 md:py-28 px-6 md:px-10 lg:px-16">

        <div className="max-w-5xl mx-auto text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Our Approach
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Turning Compassion Into Action
          </h2>

          <p className="mt-7 text-base md:text-lg leading-8 text-slate-600">
            Snehal Foundation believes that every human being deserves safety,
            dignity, equality, education, opportunity, and freedom from
            exploitation, discrimination, and fear.
          </p>

          <p className="mt-5 text-base md:text-lg leading-8 text-slate-600">
            Our programmes are designed around prevention, protection,
            empowerment, rehabilitation, education, community participation,
            and long-term capacity building to create meaningful and
            sustainable social change.
          </p>

        </div>
      </section>


      {/* =====================================================
          CORE PROGRAMS
      ===================================================== */}
      <section className="relative bg-slate-50 py-20 md:py-28 px-6 md:px-10 lg:px-16">

        <div className="max-w-[1400px] mx-auto">

          {/* Section Heading */}
          <div className="max-w-3xl mb-14">

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Our Core Programmes
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              Where Our Work Creates the Greatest Impact
            </h2>

            <p className="mt-5 text-base md:text-lg leading-8 text-slate-600">
              Our core programmes focus on creating access to essential
              opportunities and strengthening the ability of individuals and
              communities to build secure and independent lives.
            </p>

          </div>


          {/* Program Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {corePrograms.map((program) => {
              const Icon = program.icon;

              return (
                <article
                  key={program.title}
                  className="group bg-white rounded-[28px] overflow-hidden border border-slate-200 shadow-[0_15px_50px_rgba(15,23,42,0.07)] hover:shadow-[0_25px_70px_rgba(15,23,42,0.13)] transition-all duration-500 hover:-translate-y-2"
                >

                  {/* Image */}
                  <div className="relative h-[260px] overflow-hidden">

                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />

                    {/* Icon */}
                    <div className="absolute left-6 bottom-6 w-14 h-14 rounded-2xl bg-white/95 backdrop-blur-sm flex items-center justify-center text-blue-600 shadow-xl">
                      <Icon size={27} />
                    </div>

                  </div>


                  {/* Content */}
                  <div className="p-7">

                    <p className="text-xs uppercase tracking-[0.16em] font-semibold text-blue-600">
                      {program.subtitle}
                    </p>

                    <h3 className="mt-3 text-2xl font-bold text-slate-900">
                      {program.title}
                    </h3>

                    <p className="mt-4 text-slate-600 leading-7">
                      {program.description}
                    </p>


                    {/* Explore Button */}
                    <button
                      onClick={() => navigate(program.route)}
                      className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-800 transition-colors group/button"
                    >
                      Explore Programme

                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover/button:translate-x-1"
                      />
                    </button>

                  </div>

                </article>
              );
            })}

          </div>
        </div>
      </section>


      {/* =====================================================
          PROGRAMME PHILOSOPHY
      ===================================================== */}
      <section className="py-20 md:py-28 px-6 md:px-10 lg:px-16">

        <div className="max-w-[1200px] mx-auto">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Programme Philosophy
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              People First. Opportunity Always.
            </h2>

            <p className="mt-6 text-base md:text-lg leading-8 text-slate-600">
              Our programmes are guided by a rights-based, survivor-centered,
              inclusive, and community-based approach.
            </p>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">

            {[
              "Human Dignity First",
              "Prevention Before Crisis",
              "Protection & Immediate Support",
              "Empowerment Through Opportunity",
              "Community-Based Development",
              "Survivor-Centered Approach",
              "Rights-Based Approach",
              "Long-Term Capacity Building",
            ].map((item, index) => (

              <div
                key={item}
                className="group rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >

                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-900 leading-7">
                  {item}
                </h3>

              </div>

            ))}

          </div>
        </div>
      </section>


      {/* =====================================================
          SUPPORTING PROGRAMME AREAS
      ===================================================== */}
      <section className="bg-slate-950 py-20 md:py-28 px-6 md:px-10 lg:px-16">

        <div className="max-w-[1300px] mx-auto">

          <div className="max-w-3xl">

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Wider Programme Areas
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Working Across Communities
            </h2>

            <p className="mt-5 text-base md:text-lg leading-8 text-slate-300">
              Alongside our core programmes, Snehal Foundation works across
              several areas that contribute to protection, inclusion,
              resilience, and community well-being.
            </p>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">

            {supportingAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-5 hover:bg-white/[0.08] hover:border-blue-400/30 transition-all duration-300"
                >

                  <div className="shrink-0 w-11 h-11 rounded-xl bg-blue-500/10 text-blue-300 flex items-center justify-center">
                    <Icon size={21} />
                  </div>

                  <span className="text-sm md:text-base font-medium text-slate-200">
                    {area.title}
                  </span>

                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="relative overflow-hidden py-20 md:py-28 px-6">

        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900" />

        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-blue-950/20 blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">

          <span className="inline-flex items-center gap-2 text-blue-100 text-sm font-semibold uppercase tracking-[0.2em]">
            Be Part of the Change
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Together, We Can Build a Safer Future
          </h2>

          <p className="mt-6 text-base md:text-lg leading-8 text-blue-50 max-w-2xl mx-auto">
            Whether you contribute your time, skills, or resources, your
            support can help create opportunities and strengthen communities.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row justify-center gap-4">

            <button
              onClick={() => navigate("/donate")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-blue-700 shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              Donate Now
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => navigate("/volunteer")}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 bg-transparent px-7 py-4 text-base font-semibold text-white hover:bg-white hover:text-blue-700 hover:-translate-y-1 transition-all duration-300"
            >
              Become a Volunteer
              <ArrowRight size={18} />
            </button>

          </div>

        </div>
      </section>

    </main>
  );
};

export default Programs;