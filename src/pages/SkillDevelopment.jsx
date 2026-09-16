import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BriefcaseBusiness,
  Users,
  GraduationCap,
  HandHeart,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const SkillDevelopment = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full overflow-x-hidden bg-white text-slate-900">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative min-h-[620px] flex items-center overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=90)",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/25" />

        {/* Ambient Glow */}
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 lg:px-8">

          {/* Back Button */}
          <button
            onClick={() => navigate("/programs")}
            className="
              inline-flex items-center gap-2
              text-sm font-medium text-white/80
              hover:text-white
              transition-colors duration-300
              mb-8
            "
          >
            <ArrowLeft size={18} />
            
          </button>

          <div className="max-w-3xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
              <BriefcaseBusiness size={17} />
              Skill Development & Livelihood
            </div>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Skills Create
              <span className="block text-blue-300">
                Opportunities.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              Empowering individuals with knowledge, practical skills and
              opportunities that can strengthen confidence, independence and
              sustainable livelihoods.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

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
<section className="relative bg-white py-20 lg:py-28">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

      {/* =================================================
          IMAGE — LEFT
      ================================================= */}
      <div className="relative order-2 lg:order-1">

        {/* Soft Blue Glow */}
        <div className="absolute -inset-4 rounded-[2rem] bg-blue-100/70 blur-2xl" />

        <div className="relative overflow-hidden rounded-[2rem] shadow-xl">

          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=90"
            alt="Skill development and livelihood training"
            className="
              h-[360px] w-full
              object-cover
              object-center
              transition-transform duration-700
              hover:scale-105
              sm:h-[430px]
              lg:h-[500px]
            "
          />

          {/* Bottom Gradient */}
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-slate-950/60 to-transparent" />

          {/* Image Label */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">

            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
              <BriefcaseBusiness size={16} />
              Skills • Confidence • Opportunity
            </div>

          </div>
        </div>
      </div>


      {/* =================================================
          CONTENT — RIGHT
      ================================================= */}
      <div className="order-1 lg:order-2">

        <div className="mb-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
          <Sparkles size={17} />
          Empowerment Through Opportunity
        </div>

        <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Skills for
          <span className="text-blue-700">
            {" "}Independence & Dignity
          </span>
        </h2>

        <div className="mt-6 space-y-5 text-base leading-8 text-slate-600 sm:text-lg">

          <p>
            Skill development can create pathways toward greater
            confidence, economic participation and independence.
          </p>

          <p>
            Snehal Foundation focuses on creating opportunities for
            vulnerable individuals and communities to learn practical
            skills, strengthen their abilities and explore sustainable
            livelihood opportunities.
          </p>

          <p>
            Our approach is centred on dignity, inclusion,
            participation and long-term empowerment.
          </p>

        </div>

        {/* Supporting Points */}
        <div className="mt-8 space-y-4">

          {[
            "Practical skill development",
            "Confidence and capacity building",
            "Livelihood-oriented opportunities",
            "Community participation",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3"
            >
              <CheckCircle2
                size={20}
                className="mt-1 shrink-0 text-blue-700"
              />

              <span className="text-slate-700">
                {item}
              </span>
            </div>
          ))}

        </div>

      </div>

    </div>
  </div>
</section>


      {/* =====================================================
          OBJECTIVES
      ===================================================== */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Our Focus
            </p>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Creating Opportunities That Empower
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              Our skill development initiatives aim to strengthen individual
              capacity while supporting pathways toward greater independence
              and community well-being.
            </p>

          </div>


          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: GraduationCap,
                title: "Build Skills",
                text: "Encourage practical learning and useful skills that can support personal and professional growth.",
              },
              {
                icon: BriefcaseBusiness,
                title: "Support Livelihoods",
                text: "Create pathways toward livelihood opportunities and greater economic participation.",
              },
              {
                icon: Users,
                title: "Strengthen Communities",
                text: "Promote community participation, knowledge sharing and collective capacity building.",
              },
              {
                icon: HandHeart,
                title: "Promote Independence",
                text: "Help individuals build confidence, capability and greater control over their future.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    group rounded-3xl border border-slate-200
                    bg-white p-7 shadow-sm
                    transition-all duration-300
                    hover:-translate-y-2
                    hover:shadow-xl
                  "
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition-colors duration-300 group-hover:bg-blue-700 group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
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
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                Who We Support
              </p>

              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                Opportunities for People and Communities
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                Our programmes are designed to respond to the needs of
                individuals and communities facing social and economic
                challenges.
              </p>

            </div>


            <div className="grid gap-4 sm:grid-cols-2">

              {[
                "Vulnerable children and young people",
                "Girls and women facing social or economic challenges",
                "Economically disadvantaged communities",
                "Youth seeking skills and opportunities",
                "Individuals requiring livelihood support",
                "Communities working toward greater self-reliance",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex items-start gap-3 rounded-2xl
                    border border-slate-200 bg-slate-50
                    p-5 transition-all duration-300
                    hover:border-blue-200 hover:bg-blue-50/50
                  "
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-blue-700"
                  />

                  <span className="leading-6 text-slate-700">
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
      <section className="bg-slate-950 py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
              Our Approach
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Empowerment That Lasts
            </h2>

            <p className="mt-5 text-base leading-7 text-white/70 sm:text-lg">
              We focus on creating supportive pathways that combine learning,
              participation, confidence and opportunity.
            </p>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                title: "Learning & Practical Skills",
                text: "Encouraging useful knowledge and practical abilities that can be applied in everyday life and livelihood settings.",
              },
              {
                title: "Inclusion & Equality",
                text: "Ensuring opportunities are approached with respect for dignity, equality and individual circumstances.",
              },
              {
                title: "Confidence Building",
                text: "Supporting people to recognise their abilities, strengthen confidence and participate actively in their communities.",
              },
              {
                title: "Community Participation",
                text: "Working with communities to identify needs, encourage participation and build local capacity.",
              },
              {
                title: "Livelihood Opportunities",
                text: "Connecting skill development with pathways that may support greater economic independence.",
              },
              {
                title: "Long-Term Empowerment",
                text: "Focusing on sustainable capacity building rather than short-term intervention alone.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="
                  rounded-3xl border border-white/10
                  bg-white/[0.05] p-7
                  backdrop-blur-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-white/[0.08]
                "
              >

                <div className="mb-5 h-2 w-12 rounded-full bg-blue-500" />

                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-white/65">
                  {item.text}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* =====================================================
          IMPACT MESSAGE
      ===================================================== */}
      <section className="relative overflow-hidden bg-blue-800 py-20 lg:py-24">

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-md">
            <HandHeart size={31} />
          </div>

          <h2 className="mt-7 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Skills Can Open New Doors
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/85 sm:text-lg">
            When people have access to knowledge, skills and meaningful
            opportunities, they can strengthen their confidence, contribute
            to their communities and work toward a more secure future.
          </p>

        </div>
      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          <div className="rounded-[2rem] bg-slate-950 px-7 py-12 text-center shadow-2xl sm:px-12 lg:px-16">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
              Be Part of the Change
            </p>

            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
              Help Build Pathways to Opportunity
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              Your time, skills and support can contribute to programmes that
              help people build confidence, capability and hope for the future.
            </p>

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
      </section>

    </div>
  );
};

export default SkillDevelopment;