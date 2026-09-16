import React from "react";
import { ArrowRight, HeartHandshake, GraduationCap, HeartPulse, Users, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";

const DonateNow = () => {
  return (
    <main className="w-full overflow-hidden bg-white">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section
        className="
          relative overflow-hidden
          bg-gradient-to-br
          from-slate-950
          via-blue-950
          to-slate-950
          py-24 sm:py-28 lg:py-32
        "
      >

        {/* Ambient Glows */}
        <div
          className="
            pointer-events-none absolute
            -left-40 -top-32
            h-96 w-96
            rounded-full
            bg-blue-600/20
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none absolute
            -right-40 bottom-[-120px]
            h-[500px] w-[500px]
            rounded-full
            bg-blue-500/10
            blur-3xl
          "
        />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-8">

          <div className="mb-5 flex items-center justify-center gap-4">

            <span className="hidden h-px w-12 bg-blue-400/70 sm:block" />

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
              Support Our Mission
            </p>

            <span className="hidden h-px w-12 bg-blue-400/70 sm:block" />

          </div>

          <h1
            className="
              text-4xl font-bold
              leading-tight tracking-tight
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            Your Support Can
            <span className="block text-blue-300">
              Change Lives
            </span>
          </h1>

          <p
            className="
              mx-auto mt-6
              max-w-3xl
              text-base leading-8
              text-white/75
              sm:text-lg
            "
          >
            Your contribution helps Snehal Foundation create safer
            environments, expand opportunities, and support vulnerable
            women and children with dignity, compassion, and hope.
          </p>

        </div>
      </section>


      {/* =====================================================
          INTRO / SUPPORT MESSAGE
      ===================================================== */}
      <section className="bg-white py-20 lg:py-24">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <div
            className="
              relative overflow-hidden
              rounded-[2rem]
              border border-blue-100
              bg-blue-50/70
              px-7 py-10
              shadow-sm
              sm:px-10
              lg:px-14 lg:py-12
            "
          >

            {/* Decorative Glow */}
            <div
              className="
                pointer-events-none absolute
                -right-24 -top-24
                h-72 w-72
                rounded-full
                bg-blue-200/40
                blur-3xl
              "
            />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              <div className="max-w-3xl">

                <div className="mb-3 flex items-center gap-3">
                  <HeartHandshake
                    size={24}
                    className="text-blue-600"
                  />

                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                    Every Contribution Matters
                  </p>
                </div>

                <h2 className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
                  Help Build a Safer, More Empowered Future
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                  Your support can help strengthen education, healthcare,
                  rehabilitation, protection, and livelihood opportunities
                  for people and communities facing vulnerability.
                </p>

              </div>

              <div className="shrink-0">

                <button
                  onClick={() =>
                    document
                      .getElementById("donation-options")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="
                    group
                    inline-flex
                    w-full sm:w-auto
                    items-center justify-center
                    gap-2
                    rounded-xl
                    bg-blue-600
                    px-7 py-3.5
                    font-semibold
                    text-white
                    shadow-lg
                    shadow-blue-900/20
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:bg-blue-500
                  "
                >
                  Donate Now

                  <ArrowRight
                    size={18}
                    className="
                      transition-transform duration-300
                      group-hover:translate-x-1
                    "
                  />

                </button>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          HOW YOUR DONATION HELPS
      ===================================================== */}
      <section
        id="donation-options"
        className="bg-slate-50 py-20 lg:py-24"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto mb-14 max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              How Your Donation Helps
            </p>

            <h2 className="mt-3 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Your Giving Can Create Opportunities
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Every contribution can support meaningful work that helps
              people move toward safer, healthier, and more dignified lives.
            </p>

          </div>


          <div className="grid gap-7 md:grid-cols-3">

            <HelpCard
              amount="₹500"
              desc="Provides books, stationery, and school essentials for one child."
              icon={<GraduationCap size={28} />}
            />

            <HelpCard
  amount="₹1000"
  desc="Supports healthcare checkups, medicines, and medical camps."
  icon={<HeartPulse size={28} />}
/>

            <HelpCard
              amount="₹2500"
              desc="Funds skill development and vocational training programs."
              icon={<Users size={28} />}
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          WHERE YOUR DONATION IS USED
      ===================================================== */}
      <section className="bg-white py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto mb-14 max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Where Your Donation Is Used
            </p>

            <h2 className="mt-3 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Supporting Work That Matters
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Your support contributes toward programmes designed to protect,
              empower, educate, and strengthen vulnerable communities.
            </p>

          </div>


          <div className="grid gap-7 md:grid-cols-2">

            <InfoCard
              title="Education Support"
              icon={<GraduationCap size={26} />}
              desc="Your donation helps provide school fees, books, uniforms, and mentoring support to underprivileged children."
            />

            <InfoCard
              title="Healthcare Services"
              icon={<HeartPulse size={26} />}
              desc="Funds are used to organize free medical camps, medicines, and health awareness programs."
            />

            <InfoCard
              title="Women Empowerment"
              icon={<Users size={26} />}
              desc="Supports vocational training programs that help women develop skills and move toward financial independence."
            />

            <InfoCard
              title="Rescue & Rehabilitation"
              icon={<ShieldCheck size={26} />}
              desc="Helps support rescue, rehabilitation, counseling, and reintegration efforts for vulnerable people."
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          TRANSPARENCY
      ===================================================== */}
      <section className="bg-slate-950 py-20 lg:py-24">

        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
            <CheckCircle2 size={30} />
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
            Transparency & Trust
          </p>

          <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">
            Your Trust Matters to Us
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            We maintain transparency in fund utilization and believe in
            accountability toward our supporters. Regular reports, updates,
            and impact stories can help donors understand how support
            contributes to our mission.
          </p>

        </div>

      </section>


      {/* =====================================================
          FINAL PREMIUM DONATE CTA
      ===================================================== */}
      <section
        className="
          relative w-full overflow-hidden
          bg-white
          py-20 md:py-24
        "
      >

        <div className="mx-auto max-w-6xl px-6 md:px-10">

          <div
            className="
              group
              premium-card
              relative
              overflow-hidden
              rounded-[2rem]
              border border-blue-400/40
              bg-gradient-to-br
              from-blue-900
              via-blue-950
              to-blue-900
              px-7 py-12
              text-center
              text-white
              shadow-[0_30px_100px_rgba(0,0,0,.25)]
              transition-all duration-500
              hover:border-blue-400/60
              hover:shadow-[0_30px_100px_rgba(37,99,235,.20)]
              md:px-14 md:py-16
            "
          >

            {/* Top Glow */}
            <div
              className="
                pointer-events-none
                absolute left-1/2 top-[-180px]
                h-[500px] w-[500px]
                -translate-x-1/2
                rounded-full
                bg-blue-500/20
                blur-[100px]
              "
            />

            {/* Bottom Glow */}
            <div
              className="
                pointer-events-none
                absolute bottom-[-220px] left-1/2
                h-[400px] w-[500px]
                -translate-x-1/2
                rounded-full
                bg-blue-400/10
                blur-[100px]
              "
            />

            {/* Inner Border */}
            <div
              className="
                pointer-events-none
                absolute inset-[1px]
                rounded-[2rem]
                border border-white/5
              "
            />

            <div className="relative z-10">

              <div className="flex items-center justify-center gap-5">

                <span className="hidden h-px w-12 bg-blue-400/70 sm:block" />

                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
                  Support Our Mission
                </p>

                <span className="hidden h-px w-12 bg-blue-400/70 sm:block" />

              </div>


              <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">

                Your Support Can

                <span className="block text-blue-300">
                  Change Lives
                </span>

              </h2>


              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
                Every contribution helps us create safer environments,
                expand opportunities, and support vulnerable communities
                with dignity and compassion.
              </p>


              <div className="mt-9">

                <p className="text-xl font-bold text-white md:text-2xl">
                  Together Against Human Trafficking.
                </p>

                <p className="mt-2 text-xl font-bold text-blue-300 md:text-2xl">
                  Together for Every Girl’s Future.
                </p>

              </div>


              <div className="mt-9 flex justify-center">

                <div
                  className="
                    h-1 w-16
                    rounded-full
                    bg-blue-400
                    shadow-[0_0_15px_rgba(96,165,250,.7)]
                  "
                />

              </div>


              <button
                onClick={() =>
                  document
                    .getElementById("donation-options")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="
                  group/button
                  mt-9
                  inline-flex
                  min-w-[210px]
                  items-center
                  justify-center
                  gap-4
                  rounded-full
                  border border-blue-300/30
                  bg-gradient-to-r
                  from-blue-500
                  to-blue-600
                  px-9 py-4
                  text-base font-bold
                  text-white
                  shadow-[0_12px_35px_rgba(37,99,235,.40)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:from-blue-400
                  hover:to-blue-500
                  hover:shadow-[0_18px_50px_rgba(37,99,235,.55)]
                  md:text-lg
                "
              >

                Donate Today

                <span
                  className="
                    text-2xl leading-none
                    transition-transform duration-300
                    group-hover/button:translate-x-1
                  "
                >
                  →
                </span>

              </button>


              <p className="mt-5 text-sm text-white/50">
                Every contribution, big or small, helps create meaningful change.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};


/* =====================================================
   HELP CARD
===================================================== */

const HelpCard = ({
  amount,
  desc,
  icon,
  highlight = false,
}) => {
  return (
    <div
      className={`
        group relative overflow-hidden
        rounded-[1.75rem]
        border
        p-8
        text-center
        transition-all duration-500
        hover:-translate-y-2
        ${
          highlight
            ? "border-blue-200 bg-blue-50 shadow-xl shadow-blue-100/70"
            : "border-slate-200 bg-white shadow-lg shadow-slate-200/50"
        }
      `}
    >

      {/* Shine */}
      <div
        className="
          pointer-events-none
          absolute inset-x-0 top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-blue-400/50
          to-transparent
        "
      />

      <div
        className="
          mx-auto flex h-14 w-14
          items-center justify-center
          rounded-2xl
          bg-blue-100
          text-blue-700
          transition-transform duration-300
          group-hover:scale-110
        "
      >
        {icon}
      </div>


      <h3 className="mt-6 text-3xl font-bold text-slate-900">
        {amount}
      </h3>

      <p className="mx-auto mt-4 max-w-sm leading-7 text-slate-600">
        {desc}
      </p>


      <button
        className="
          group/button
          mt-7
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-blue-600
          px-6 py-3
          font-semibold
          text-white
          shadow-lg
          shadow-blue-900/20
          transition-all duration-300
          hover:-translate-y-1
          hover:bg-blue-500
        "
      >
        Donate {amount}

        <ArrowRight
          size={17}
          className="
            transition-transform duration-300
            group-hover/button:translate-x-1
          "
        />
      </button>

    </div>
  );
};


/* =====================================================
   INFO CARD
===================================================== */

const InfoCard = ({
  title,
  desc,
  icon,
}) => {
  return (
    <div
      className="
        group
        rounded-[1.75rem]
        border border-slate-200
        bg-white
        p-8
        shadow-lg
        shadow-slate-200/40
        transition-all duration-500
        hover:-translate-y-1
        hover:border-blue-200
        hover:shadow-xl
      "
    >

      <div
        className="
          flex h-12 w-12
          items-center justify-center
          rounded-xl
          bg-blue-50
          text-blue-700
          transition-transform duration-300
          group-hover:scale-110
        "
      >
        {icon}
      </div>


      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {desc}
      </p>

    </div>
  );
};


export default DonateNow;