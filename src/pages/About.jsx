import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import about from "../assets/About.jpeg";
import {
  HeartHandshake,
  ShieldCheck,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  const [openStrategicDirection, setOpenStrategicDirection] =
    useState(false);

  const [openMissionAreas, setOpenMissionAreas] = useState({});

  const [openMottoValues, setOpenMottoValues] = useState(false);

  const [openMottoCommitment, setOpenMottoCommitment] = useState(false);

  const [openCoreValue, setOpenCoreValue] = useState(null);

  /* =====================================================
     HASH SCROLL
  ===================================================== */
  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, []);

  /* =====================================================
     MISSION AREA TOGGLE
  ===================================================== */
  const toggleMissionArea = (index) => {
    setOpenMissionAreas((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  /* =====================================================
     CORE VALUES
  ===================================================== */
  const coreValues = [
    {
      title: "Integrity",
      short:
        "Honesty, fairness, ethical responsibility, and doing what is right even when no one is watching.",
      principle:
        "Integrity is the cornerstone of Snehal Foundation. It reflects honesty, fairness, and ethical responsibility in every action. The Foundation shall comply with applicable laws and policies, act responsibly, and avoid conflicts of interest, misuse of resources, misleading statements, or conduct that could undermine public trust.",
      commitments: [
        "Act honestly in communications and transactions.",
        "Comply with applicable laws and regulations.",
        "Manage financial resources responsibly.",
        "Prevent fraud, corruption, bribery, and unethical conduct.",
        "Maintain accurate records and documentation.",
        "Encourage ethical decision-making.",
        "Address misconduct promptly and fairly.",
      ],
      behavior: [
        "Tell the truth.",
        "Honor commitments.",
        "Protect organizational resources.",
        "Avoid conflicts of interest.",
        "Report unethical conduct.",
        "Maintain confidentiality where required.",
        "Uphold the reputation of the Foundation.",
      ],
    },

    {
      title: "Compassion",
      short:
        "Empathy, kindness, patience, and respectful support that recognizes individual strengths and circumstances.",
      principle:
        "Compassion is at the heart of Snehal Foundation. Every individual has unique experiences, challenges, and aspirations. The Foundation promotes empathy, kindness, patience, active listening, and genuine commitment while providing respectful support that recognizes strengths and promotes independence.",
      commitments: [
        "Treat beneficiaries with empathy and respect.",
        "Provide services without prejudice or judgment.",
        "Promote emotional well-being and psychosocial support where appropriate.",
        "Build a culture of kindness and understanding.",
        "Encourage staff and volunteers to listen before acting.",
      ],
      behavior: [
        "Show empathy.",
        "Respect personal circumstances.",
        "Avoid humiliating or stigmatizing language and behavior.",
        "Provide support without creating dependency.",
        "Promote hope and resilience.",
      ],
    },

    {
      title: "Equality",
      short:
        "Equal rights, opportunities, participation, and respect for every individual without discrimination.",
      principle:
        "Equality means providing equal rights, opportunities, and respect to all individuals. Snehal Foundation rejects discrimination based on gender, religion, caste, ethnicity, disability, age, language, socioeconomic status, background, or other protected status.",
      commitments: [
        "Ensure equal access to programs and services.",
        "Promote gender equality.",
        "Support equal participation in leadership and decision-making.",
        "Remove barriers wherever reasonably possible.",
        "Use fair and objective criteria.",
      ],
      behavior: [
        "Treat everyone fairly.",
        "Avoid discrimination, bias, and favoritism.",
        "Encourage equal participation.",
        "Respect differing opinions and backgrounds.",
        "Promote inclusion.",
      ],
    },

    {
      title: "Accountability",
      short:
        "Taking responsibility for decisions, commitments, resources, programs, and the impact created.",
      principle:
        "Snehal Foundation is accountable to beneficiaries, donors, volunteers, partners, employees, regulators, and communities. Accountability means responsible stewardship of financial, human, and material resources, transparent decision-making, and continuous evaluation and improvement.",
      commitments: [
        "Maintain clear roles and responsibilities.",
        "Monitor and evaluate programs.",
        "Maintain accurate financial records.",
        "Conduct independent audits where applicable.",
        "Respond to stakeholder feedback.",
        "Investigate complaints fairly and promptly.",
        "Learn from successes and challenges.",
      ],
      behavior: [
        "Take responsibility for actions.",
        "Meet commitments and deadlines.",
        "Report concerns honestly.",
        "Cooperate with monitoring and evaluation.",
        "Use organizational resources responsibly.",
      ],
    },

    {
      title: "Transparency",
      short:
        "Open, accurate, and responsible communication that builds public confidence and institutional credibility.",
      principle:
        "Transparency strengthens public confidence and institutional credibility. The Foundation shall communicate openly about its governance, finances, programs, partnerships, and impact, while respecting legal requirements and personal confidentiality.",
      commitments: [
        "Maintain accurate records.",
        "Publish annual reports and audited financial statements where required.",
        "Provide clear information to donors and stakeholders.",
        "Communicate organizational decisions openly.",
        "Promote ethical fundraising practices.",
        "Protect confidential information appropriately.",
      ],
      behavior: [
        "Share accurate information.",
        "Avoid misleading statements.",
        "Keep records complete and timely.",
        "Support open communication.",
        "Respect confidentiality obligations.",
      ],
    },

    {
      title: "Respect",
      short:
        "Courtesy, dignity, fairness, and appreciation for different perspectives, cultures, beliefs, and lived experiences.",
      principle:
        "Respect is fundamental to all relationships. Snehal Foundation promotes courtesy, dignity, fairness, and recognition of different perspectives, cultures, beliefs, and lived experiences.",
      commitments: [
        "Maintain a respectful workplace.",
        "Encourage constructive dialogue.",
        "Prevent harassment, bullying, and intimidation.",
        "Promote mutual understanding.",
        "Recognize contributions from staff, volunteers, and communities.",
      ],
      behavior: [
        "Listen actively.",
        "Communicate professionally.",
        "Respect cultural diversity.",
        "Value community knowledge.",
        "Resolve disagreements peacefully.",
        "Maintain professional boundaries.",
      ],
    },

    {
      title: "Diversity",
      short:
        "Valuing different cultures, languages, identities, abilities, experiences, and perspectives to create stronger communities.",
      principle:
        "Diversity strengthens communities, organizations, and decision-making. Snehal Foundation values differences in culture, language, gender, age, ability, experience, and perspective because inclusive participation improves innovation and effectiveness.",
      commitments: [
        "Promote diverse representation in leadership and volunteering.",
        "Maintain accessible and inclusive practices.",
        "Respect cultural and linguistic diversity.",
        "Design programs that respond to different communities.",
      ],
      behavior: [
        "Welcome different perspectives.",
        "Avoid stereotypes and prejudice.",
        "Encourage inclusion in meetings, activities, and decision-making.",
        "Celebrate cultural diversity.",
      ],
    },

    {
      title: "Innovation",
      short:
        "Creative thinking, evidence-based practice, continuous learning, and responsible use of technology.",
      principle:
        "Innovation enables the Foundation to respond to changing needs. It involves creative thinking, evidence-based practice, continuous learning, responsible technology use, and a willingness to improve existing approaches.",
      commitments: [
        "Promote learning and capacity building.",
        "Encourage research and evaluation.",
        "Use appropriate technology.",
        "Pilot new ideas responsibly.",
        "Improve programs through evidence and community feedback.",
      ],
      behavior: [
        "Remain open to new ideas.",
        "Learn from experience.",
        "Share knowledge and best practices.",
        "Use technology ethically and responsibly.",
        "Develop practical solutions.",
      ],
    },

    {
      title: "Volunteerism",
      short:
        "A spirit of service and shared responsibility where volunteers contribute their time, skills, knowledge, and passion.",
      principle:
        "Volunteerism reflects a spirit of service and shared responsibility. Volunteers are essential partners of Snehal Foundation and contribute their time, skills, knowledge, and passion toward social change.",
      commitments: [
        "Ensure fair and transparent volunteer recruitment.",
        "Provide orientation and training.",
        "Create safe and respectful volunteering environments.",
        "Recognize volunteer contributions.",
        "Support volunteer growth and leadership.",
      ],
      behavior: [
        "Demonstrate dedication and professionalism.",
        "Respect beneficiaries and colleagues.",
        "Follow organizational policies and safeguarding requirements.",
        "Represent the Foundation responsibly.",
        "Encourage participation and civic engagement.",
      ],
    },

    {
      title: "Human Dignity",
      short:
        "Recognizing the inherent worth, rights, choices, and participation of every person.",
      principle:
        "Human dignity is the highest value of Snehal Foundation. Every individual has inherent worth and must be treated with respect regardless of circumstances or background. The Foundation promotes rights, choices, participation, and empowerment while rejecting humiliating, exploitative, dehumanizing, or discriminatory practices.",
      commitments: [
        "Protect rights and well-being.",
        "Promote informed participation and consent where appropriate.",
        "Protect privacy and confidentiality.",
        "Empower individuals rather than creating dependency.",
        "Ensure child safeguarding and protection.",
        "Maintain fairness and compassion.",
      ],
      behavior: [
        "Use respectful speech and actions.",
        "Protect confidentiality.",
        "Support self-determination and inclusion.",
        "Avoid stigmatizing language and behavior.",
        "Keep beneficiary well-being and best interests central.",
      ],
    },
  ];

  return (
    <main className="bg-slate-100 text-gray-800">

      {/* =====================================================
          ABOUT HERO
      ===================================================== */}
      <section className="relative w-full overflow-hidden bg-slate-950 text-white">

        {/* Background glows */}
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

        <div className="absolute -bottom-32 -left-32 w-[380px] h-[380px] rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">

          <div className="max-w-4xl">

            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-6">

              <span className="h-[2px] w-12 bg-blue-400" />

              <p className="text-blue-300 uppercase tracking-[0.28em] text-xs sm:text-sm font-semibold">
                About Snehal Foundation
              </p>

            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.8rem] font-extrabold tracking-[-0.04em] leading-[0.95]">

              Standing for safety.
              <br />

              <span className="text-blue-300">
                Empowering lives.
              </span>

              <br />

              Building a better future.

            </h1>

            {/* Description */}
            <p className="mt-7 max-w-3xl text-base sm:text-lg md:text-xl text-white/75 leading-8">

              Snehal Foundation is committed to creating a safer, more
              compassionate and empowered society where every child is
              protected, every girl has opportunities, and every woman can
              live with dignity and independence.

            </p>

            {/* Decorative line */}
            <div className="mt-8 flex items-center gap-3">

              <span className="h-[2px] w-16 bg-blue-400" />
              <span className="h-px w-8 bg-white/30" />
              <span className="h-px w-3 bg-white/20" />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHO WE ARE
      ===================================================== */}
      <section className="relative w-full overflow-hidden bg-white py-20 md:py-24">

        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-50 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* IMAGE */}
            <div className="relative">

              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-3xl border-2 border-blue-200 pointer-events-none" />

              <div className="absolute -bottom-4 -right-4 w-28 h-28 rounded-3xl bg-blue-600/10 pointer-events-none" />

              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/70
                  bg-white
                  shadow-2xl
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_30px_70px_rgba(15,23,42,.20)]
                "
              >

                <img
                  src={about}
                  alt="Snehal Foundation"
                  className="
                    w-full
                    h-[400px]
                    sm:h-[480px]
                    md:h-[560px]
                    object-cover
                    object-center
                    scale-[1.15]
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.18]
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />

              </div>

            </div>


            {/* CONTENT */}
            <div>

              <p className="text-blue-600 font-semibold uppercase tracking-[0.25em] text-sm">
                Who We Are
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Standing Together for Safety, Dignity and Justice
              </h2>

              <p className="mt-6 text-slate-600 text-base md:text-lg leading-8">
                Snehal Foundation is a non-profit organization dedicated to
                protecting children and vulnerable women from human
                trafficking, sexual exploitation, abuse, and inequality.
              </p>

              <p className="mt-5 text-slate-600 text-base md:text-lg leading-8">
                We work at the grassroots level to create awareness, support
                rescue and rehabilitation efforts, and empower survivors
                through education, healthcare, skill development, and
                livelihood opportunities.
              </p>

              <p className="mt-5 text-slate-600 text-base md:text-lg leading-8">
                Guided by compassion and driven by action, Snehal Foundation
                stands for dignity, safety, equality, and justice.
              </p>


              {/* KEY FOCUS */}
              <div className="mt-8 grid sm:grid-cols-2 gap-4">

                {[
                  "Protecting vulnerable communities",
                  "Promoting education and opportunity",
                  "Supporting dignity and equality",
                  "Building stronger communities",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="
                      flex
                      items-start
                      gap-3
                      rounded-2xl
                      border
                      border-slate-100
                      bg-slate-50
                      px-4
                      py-4
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-blue-100
                      hover:shadow-sm
                    "
                  >

                    <CheckCircle
                      size={20}
                      className="mt-0.5 shrink-0 text-blue-600"
                    />

                    <p className="text-sm md:text-base font-medium text-slate-700 leading-6">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          VISION
      ===================================================== */}
      <section
  id="mission-vision"
  className="relative w-full overflow-hidden bg-slate-100 py-20 md:py-28 scroll-mt-[88px]"
>

        <div className="absolute -top-40 -right-40 h-[420px] w-[420px] rounded-full bg-blue-100/60 blur-3xl pointer-events-none" />

        <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-blue-50 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

          {/* HEADER */}
          <div className="max-w-4xl">

            <p className="text-blue-600 font-semibold uppercase tracking-[0.28em] text-xs sm:text-sm">
              Our Vision
            </p>

            <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.035em] text-slate-900 leading-[1.02]">
              A Safer, Inclusive and Empowered Society
            </h2>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-[2px] w-16 bg-blue-600" />
              <span className="h-px w-8 bg-blue-300" />
              <span className="h-px w-3 bg-blue-200" />
            </div>

          </div>


          {/* OFFICIAL VISION */}
          <div
            className="
              relative
              mt-12
              overflow-hidden
              rounded-[2rem]
              bg-white
              border
              border-blue-100
              shadow-[0_25px_70px_rgba(15,23,42,.10)]
              p-8
              md:p-12
            "
          >

            <div className="absolute left-0 top-0 h-1 w-full bg-blue-600" />

            <div className="relative z-10">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                  <ShieldCheck size={28} strokeWidth={2} />
                </div>

                <div>

                  <p className="text-xs uppercase tracking-[0.22em] text-blue-500 font-semibold">
                    Official Vision Statement
                  </p>

                  <h3 className="mt-1 text-2xl md:text-3xl font-bold text-slate-900">
                    Our Vision
                  </h3>

                </div>

              </div>

              <blockquote className="mt-8 text-xl md:text-2xl lg:text-[1.65rem] font-semibold italic text-slate-800 leading-relaxed">
                “To build a safe, inclusive, and empowered society where every
                girl, woman, child, and vulnerable individual lives with
                dignity, equality, security, education, opportunity, and
                freedom from exploitation, enabling communities to thrive
                through compassion, justice, and sustainable development.”
              </blockquote>

            </div>

          </div>


          {/* VISION IN ACTION */}
          <div className="mt-16 grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">

            <div>

              <p className="text-blue-600 font-semibold uppercase tracking-[0.24em] text-sm">
                What We Envision
              </p>

              <h3 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Transforming Lives Beyond Assistance
              </h3>

              <p className="mt-6 text-slate-600 text-base md:text-lg leading-8">
                Snehal Foundation envisions an India where no child is
                deprived of education, no woman faces discrimination or
                exploitation, and no individual is denied the opportunity
                to achieve their full potential because of poverty,
                inequality, or social injustice.
              </p>

              <p className="mt-5 text-slate-600 text-base md:text-lg leading-8">
                The Foundation believes that empowered individuals create
                empowered families, empowered families strengthen communities,
                and empowered communities build a stronger nation.
              </p>

              <div className="mt-8 rounded-2xl border-l-4 border-blue-600 bg-white px-6 py-5 shadow-sm">

                <p className="font-semibold text-slate-800 leading-7">
                  Our vision extends beyond providing assistance. We seek to
                  transform lives by creating systems that prevent
                  exploitation, expand opportunities, strengthen community
                  leadership, and promote long-term social and economic
                  resilience.
                </p>

              </div>

            </div>


            {/* COMMUNITY VISION POINTS */}
            <div className="grid sm:grid-cols-2 gap-4">

              {[
                {
                  title: "Safe Childhood",
                  text: "Every child grows up in a safe and nurturing environment.",
                },
                {
                  title: "Education for Girls",
                  text: "Every girl has access to quality education and equal opportunities.",
                },
                {
                  title: "Women Empowerment",
                  text: "Women are empowered socially, economically, and as leaders.",
                },
                {
                  title: "Prevention",
                  text: "Communities understand the risks of exploitation and are equipped to prevent them.",
                },
                {
                  title: "Stronger Families",
                  text: "Families have access to education, healthcare, livelihoods, and welfare schemes.",
                },
                {
                  title: "Youth Leadership",
                  text: "Young people become responsible leaders and agents of positive change.",
                },
                {
                  title: "Survivor Support",
                  text: "Survivors receive compassionate support and opportunities to rebuild their lives.",
                },
                {
                  title: "Inclusive Development",
                  text: "Development remains inclusive, sustainable, and guided by justice and human rights.",
                },
              ].map((item, index) => (

                <div
                  key={index}
                  className="
                    group
                    rounded-2xl
                    border
                    border-blue-100
                    bg-white
                    p-5
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-200
                    hover:shadow-lg
                  "
                >

                  <div className="flex items-start gap-3">

                    <CheckCircle
                      size={20}
                      className="mt-0.5 shrink-0 text-blue-600 transition-transform duration-300 group-hover:scale-110"
                    />

                    <div>

                      <h4 className="font-bold text-slate-900">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-sm md:text-base text-slate-600 leading-6">
                        {item.text}
                      </p>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>


          {/* =================================================
              STRATEGIC DIRECTION
          ================================================= */}
          <div
            id="direction"
            className="mt-20 scroll-mt-[88px]"
          >

            <div className="text-center max-w-3xl mx-auto">

              <p className="text-blue-600 font-semibold uppercase tracking-[0.24em] text-sm">
                Strategic Direction
              </p>

              <h3 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                Five Pillars Guiding Our Future
              </h3>

              <p className="mt-5 text-slate-600 leading-8">
                Snehal Foundation shall pursue its mission through five
                interconnected strategic pillars that guide prevention,
                protection, empowerment, partnership, and sustainability.
              </p>

            </div>


            {/* EXPAND BUTTON */}
            <button
              type="button"
              onClick={() =>
                setOpenStrategicDirection(!openStrategicDirection)
              }
              className="
                mt-8
                w-full
                flex
                items-center
                justify-between
                rounded-[1.5rem]
                border
                border-blue-200
                bg-white
                px-6
                py-5
                text-left
                shadow-sm
                hover:shadow-lg
                hover:border-blue-300
                transition-all
                duration-300
              "
            >

              <div>

                <p className="text-xs uppercase tracking-[0.2em] text-blue-500 font-semibold">
                  Strategic Framework
                </p>

                <p className="mt-1 text-lg font-bold text-slate-900">
                  Explore Our Five Strategic Pillars
                </p>

              </div>

              <span
                className={`
                  text-2xl
                  text-blue-600
                  transition-transform
                  duration-300
                  ${
                    openStrategicDirection
                      ? "rotate-45"
                      : ""
                  }
                `}
              >
                +
              </span>

            </button>


            {/* CONTENT */}
            <div
              className={`
                overflow-hidden
                transition-all
                duration-500
                ${
                  openStrategicDirection
                    ? "mt-7 max-h-[3000px] opacity-100"
                    : "max-h-0 opacity-0"
                }
              `}
            >

              <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-5">

                {[
                  {
                    number: "01",
                    title: "Prevention",
                    text:
                      "Prevent social problems before they occur through education, awareness, community engagement, and early intervention. Key priorities include human trafficking prevention, child safety education, gender equality, legal awareness, safe migration, digital safety, and school-based awareness.",
                  },
                  {
                    number: "02",
                    title: "Protection",
                    text:
                      "Protect vulnerable individuals by strengthening community support systems and facilitating access to appropriate services. This includes referral pathways, community support, survivor-centered assistance, child safeguarding, women's safety initiatives, and legal awareness and guidance.",
                  },
                  {
                    number: "03",
                    title: "Empowerment",
                    text:
                      "Promote long-term self-reliance through education, skills, leadership, entrepreneurship, and access to opportunities. Programs include education support, vocational training, financial literacy, leadership development, digital inclusion, and career guidance.",
                  },
                  {
                    number: "04",
                    title: "Partnership",
                    text:
                      "Collaborate with stakeholders to maximize social impact, including government institutions, educational institutions, healthcare providers, police and child protection agencies, community organizations, corporate CSR initiatives, media partners, volunteers, and donors.",
                  },
                  {
                    number: "05",
                    title: "Sustainability",
                    text:
                      "Ensure that organizational systems are financially, environmentally, and institutionally sustainable through diversified fundraising, strong governance, impact measurement, continuous improvement, technology adoption, capacity building, and responsible financial management.",
                  },
                ].map((pillar) => (

                  <div
                    key={pillar.number}
                    className="
                      group
                      rounded-[1.5rem]
                      bg-gradient-to-br
                      from-blue-950
                      via-blue-900
                      to-slate-900
                      p-6
                      text-white
                      shadow-lg
                      transition-all
                      duration-300
                      hover:-translate-y-2
                      hover:shadow-2xl
                    "
                  >

                    <div className="text-blue-300 text-sm font-bold tracking-[0.2em]">
                      {pillar.number}
                    </div>

                    <h4 className="mt-4 text-xl font-bold">
                      {pillar.title}
                    </h4>

                    <p className="mt-3 text-sm text-white/70 leading-7">
                      {pillar.text}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>


          {/* =================================================
              MISSION
          ================================================= */}
        <div
  id="mission"
  className="
    mt-28
    -mx-6
    md:-mx-10
    lg:-mx-16
    px-6
    md:px-10
    lg:px-16
    pt-24
    pb-24
    bg-white
    scroll-mt-[88px]
  "
>

            <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-10 lg:gap-16 items-start">

              {/* LEFT */}
              <div>

                <p className="text-blue-600 font-semibold uppercase tracking-[0.24em] text-sm">
                  Our Mission
                </p>

                <h3 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                  Creating Lasting Social Change
                </h3>

                <div className="mt-7 h-[2px] w-16 bg-blue-400" />

                <p className="mt-7 text-slate-600 text-base md:text-lg leading-8">
                  Snehal Foundation is committed to creating lasting social
                  change by addressing the root causes of vulnerability
                  rather than merely responding to its consequences.
                </p>

                <p className="mt-5 text-slate-600 text-base md:text-lg leading-8">
                  The Foundation believes that every individual deserves
                  equal opportunities to live with dignity, access education,
                  achieve economic independence, participate in society, and
                  realize their full potential.
                </p>

              </div>


              {/* OFFICIAL MISSION */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  bg-gradient-to-br
                  from-slate-950
                  via-blue-950
                  to-slate-900
                  p-8
                  md:p-10
                  text-white
                  shadow-2xl
                "
              >

                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />

                <div className="relative z-10">

                  <div className="flex items-center gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">
                      <HeartHandshake
                        size={28}
                        strokeWidth={2}
                      />
                    </div>

                    <div>

                      <p className="text-xs uppercase tracking-[0.22em] text-blue-300 font-semibold">
                        Official Mission Statement
                      </p>

                      <h3 className="mt-1 text-2xl md:text-3xl font-bold">
                        Our Mission
                      </h3>

                    </div>

                  </div>

                  <blockquote className="mt-8 text-xl md:text-2xl font-semibold italic leading-relaxed text-white/90">
                    “To prevent human trafficking, protect children and
                    vulnerable individuals, empower women and youth, promote
                    quality education, strengthen communities, and create
                    sustainable opportunities through awareness, capacity
                    building, partnerships, innovation, and compassionate
                    service, while upholding the values of dignity, equality,
                    justice, transparency, and accountability.”
                  </blockquote>

                  <div className="mt-8 border-t border-white/10 pt-6">

                    <p className="text-white/70 leading-7">
                      The Foundation shall work collaboratively with
                      communities, government institutions, educational
                      organizations, civil society, corporate partners,
                      volunteers, and development agencies to design and
                      implement sustainable solutions that improve the lives
                      of disadvantaged and marginalized populations.
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* MISSION EXPLAINED */}
            <div className="mt-16">

              <div className="max-w-4xl">

                <p className="text-blue-600 font-semibold uppercase tracking-[0.24em] text-sm">
                  Mission Explained
                </p>

                <h3 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                  Prevention, Protection, Education and Empowerment
                </h3>

                <p className="mt-5 text-slate-600 text-base md:text-lg leading-8">
                  Meaningful social transformation occurs when prevention,
                  protection, education, empowerment, and community
                  participation work together. The Foundation recognizes that
                  human trafficking, child exploitation, gender inequality,
                  poverty, educational exclusion, unemployment, and social
                  discrimination are interconnected.
                </p>

              </div>


              <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">

                {[
                  "Preventing exploitation through awareness, education, and early intervention.",
                  "Protecting children, women, and vulnerable populations by strengthening community support systems.",
                  "Empowering individuals with knowledge, skills, education, and livelihood opportunities.",
                  "Encouraging community ownership through volunteerism, leadership development, and civic participation.",
                  "Building partnerships that maximize collective impact and support sustainable development.",
                  "Promoting ethical governance, transparency, accountability, and continuous learning.",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="
                      rounded-2xl
                      border
                      border-blue-100
                      bg-white
                      p-6
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-lg
                      hover:border-blue-200
                    "
                  >

                    <div className="flex gap-3 items-start">

                      <CheckCircle
                        size={21}
                        className="mt-0.5 shrink-0 text-blue-600"
                      />

                      <p className="text-slate-700 leading-7">
                        {item}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>


            {/* =================================================
                STRATEGIC MISSION AREAS
            ================================================= */}
            <div className="mt-20">

              <div className="text-center max-w-4xl mx-auto">

                <p className="text-blue-600 font-semibold uppercase tracking-[0.24em] text-sm">
                  Strategic Mission Areas
                </p>

                <h3 className="mt-3 text-3xl md:text-5xl font-bold text-slate-900">
                  Ten Areas of Action
                </h3>

                <p className="mt-5 text-slate-600 text-base md:text-lg leading-8">
                  These strategic areas translate the Foundation's mission
                  into practical directions for sustainable and
                  community-centered action.
                </p>

              </div>


              <div className="mt-12 space-y-4">

                {[
                  {
                    number: "01",
                    title: "Human Trafficking Prevention",
                    text:
                      "Snehal Foundation shall work toward reducing vulnerability to human trafficking through education, awareness, safe migration information, community vigilance, and collaboration with relevant stakeholders. Activities may include community awareness campaigns, school and college awareness programs, safe migration education, public information campaigns, youth engagement initiatives, capacity-building workshops, referral support and coordination, research and documentation, and advocacy for stronger preventive systems.",
                  },
                  {
                    number: "02",
                    title: "Child Protection and Development",
                    text:
                      "Every child has the right to safety, education, health, participation, and development. The Foundation shall promote child rights awareness, child safeguarding education, school safety initiatives, life skills education, child-friendly learning environments, community participation in child protection, access to educational resources, and awareness of child protection laws and services.",
                  },
                  {
                    number: "03",
                    title: "Education for All",
                    text:
                      "Education is recognized as a fundamental driver of individual empowerment and national development. The Foundation shall promote school enrollment support, scholarships, educational material distribution, career counselling, digital learning opportunities, mentorship programs, STEM education promotion, financial literacy education, and higher education guidance, with special emphasis on girls, economically disadvantaged children, and underserved communities.",
                  },
                  {
                    number: "04",
                    title: "Women Empowerment",
                    text:
                      "Snehal Foundation is committed to strengthening the social, educational, and economic participation of women through leadership development, vocational skills training, entrepreneurship development, financial literacy, digital literacy, employment readiness, self-help group capacity building, legal rights awareness, and health and well-being education.",
                  },
                  {
                    number: "05",
                    title: "Youth Leadership and Volunteerism",
                    text:
                      "Young people are essential partners in creating positive social change. The Foundation shall develop youth leadership programs, train community ambassadors, promote volunteerism, encourage civic participation, organize innovation and social action projects, build leadership skills, promote responsible digital citizenship, and encourage environmental stewardship.",
                  },
                  {
                    number: "06",
                    title: "Health and Well-being",
                    text:
                      "Snehal Foundation acknowledges that health is fundamental to sustainable development. The Foundation may promote preventive healthcare awareness, nutrition education, menstrual hygiene awareness, mental health promotion, community health education, health camps, lifestyle education, and disability inclusion awareness.",
                  },
                  {
                    number: "07",
                    title: "Livelihoods and Economic Empowerment",
                    text:
                      "Economic security strengthens resilience and reduces vulnerability. The Foundation shall support vocational training, entrepreneurship development, employment guidance, digital employment skills, financial inclusion, income-generation initiatives, career readiness, and small business development to promote sustainable livelihoods and economic independence.",
                  },
                  {
                    number: "08",
                    title: "Community Development",
                    text:
                      "Snehal Foundation shall strengthen community institutions through community mobilization, capacity building, local leadership development, disaster preparedness, environmental awareness, civic education, digital inclusion, and social participation. Communities shall be encouraged to identify local challenges and participate in designing sustainable solutions.",
                  },
                  {
                    number: "09",
                    title: "Research, Innovation and Policy",
                    text:
                      "The Foundation shall encourage evidence-based decision-making through research studies, community assessments, needs analysis, policy recommendations, program evaluation, impact measurement, knowledge sharing, and innovation initiatives. Research shall inform program improvement and contribute to public policy discussions.",
                  },
                  {
                    number: "10",
                    title: "Institutional Excellence",
                    text:
                      "Snehal Foundation commits to maintaining excellence through good governance, financial accountability, ethical leadership, transparency, capacity building, continuous improvement, technology adoption, monitoring and evaluation, and risk management. Institutional excellence is considered essential for achieving long-term social impact.",
                  },
                ].map((area, index) => (

                  <div
                    key={area.number}
                    className="
                      rounded-[1.5rem]
                      border
                      border-blue-100
                      bg-white
                      overflow-hidden
                      shadow-sm
                      transition-all
                      duration-300
                      hover:shadow-lg
                      hover:border-blue-200
                    "
                  >

                    {/* HEADER */}
                    <button
                      type="button"
                      onClick={() => toggleMissionArea(index)}
                      className="
                        w-full
                        flex
                        items-center
                        gap-4
                        p-5
                        md:p-6
                        text-left
                      "
                    >

                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-blue-50
                          text-blue-700
                          font-extrabold
                        "
                      >
                        {area.number}
                      </div>

                      <div className="flex-1">

                        <p className="text-xs uppercase tracking-[0.18em] text-blue-600 font-semibold">
                          Mission Area {area.number}
                        </p>

                        <h4 className="mt-1 text-lg md:text-xl font-bold text-slate-900">
                          {area.title}
                        </h4>

                      </div>

                      <span
                        className={`
                          text-2xl
                          text-blue-600
                          transition-transform
                          duration-300
                          ${
                            openMissionAreas[index]
                              ? "rotate-45"
                              : ""
                          }
                        `}
                      >
                        +
                      </span>

                    </button>


                    {/* DETAILS */}
                    <div
                      className={`
                        overflow-hidden
                        transition-all
                        duration-500
                        ${
                          openMissionAreas[index]
                            ? "max-h-[800px] opacity-100"
                            : "max-h-0 opacity-0"
                        }
                      `}
                    >

                      <div className="px-5 pb-6 md:px-6 md:pb-7">

                        <div className="h-px bg-blue-100 mb-5" />

                        <p className="text-slate-600 text-base md:text-lg leading-8">
                          {area.text}
                        </p>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MOTTO
      ===================================================== */}
      <section
        id="motto"
        className="relative w-full overflow-hidden bg-slate-950 text-white py-20 md:py-28 scroll-mt-[88px]"
      >

        <div className="absolute -top-40 -right-40 h-[450px] w-[450px] rounded-full bg-blue-400/5 blur-3xl pointer-events-none" />

        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

          {/* HEADER */}
          <div className="max-w-4xl mx-auto text-center">

            <div className="flex items-center justify-center gap-4">

              <span className="h-[2px] w-10 bg-blue-400" />

              <p className="text-blue-400 font-semibold uppercase tracking-[0.28em] text-xs sm:text-sm">
                Our Motto
              </p>

              <span className="h-[2px] w-10 bg-blue-400" />

            </div>

            <h2 className="mt-7 text-4xl sm:text-5xl md:text-6xl lg:text-[4.8rem] font-extrabold tracking-[-0.04em] leading-[1.02]">

              Empowering Lives.
              <br />

              <span className="text-blue-400">
                Protecting Futures.
              </span>

              <br />

              Building Strong Communities.

            </h2>

            <p className="mt-7 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-white/70 leading-8">
              The Motto captures the essence of Snehal Foundation's mission
              and values — empowering individuals, protecting vulnerable
              populations, and strengthening communities through ethical
              leadership, collaboration, innovation, and sustainable
              development.
            </p>

            <div className="mt-8 flex items-center justify-center gap-3">

              <span className="h-[2px] w-16 bg-blue-400" />
              <span className="h-px w-8 bg-white/20" />
              <span className="h-px w-3 bg-white/10" />

            </div>

          </div>


          {/* THREE MOTTO PILLARS */}
          <div className="mt-14 grid md:grid-cols-3 gap-5">

            {/* PILLAR 01 */}
            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-white/10
                bg-white/[0.06]
                backdrop-blur-md
                p-7
                transition-all
                duration-500
                hover:-translate-y-2
                hover:bg-white/[0.08]
                hover:border-blue-400/25
                hover:shadow-[0_25px_60px_rgba(0,0,0,.30)]
              "
            >

              <div className="absolute top-0 left-0 h-1 w-0 bg-blue-400 transition-all duration-500 group-hover:w-full" />

              <div className="relative z-10">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-400/10 border border-blue-400/20">
                  <HeartHandshake
                    size={28}
                    className="text-blue-400"
                  />
                </div>

                <p className="mt-6 text-xs uppercase tracking-[0.22em] text-blue-400/80 font-semibold">
                  Pillar 01
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Empowering Lives
                </h3>

                <p className="mt-4 text-white/65 leading-7">
                  Empower individuals through education, skills,
                  opportunity, leadership, confidence, and economic
                  independence.
                </p>

              </div>

            </div>


            {/* PILLAR 02 */}
            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-white/10
                bg-white/[0.06]
                backdrop-blur-md
                p-7
                transition-all
                duration-500
                hover:-translate-y-2
                hover:bg-white/[0.08]
                hover:border-blue-400/25
                hover:shadow-[0_25px_60px_rgba(0,0,0,.30)]
              "
            >

              <div className="absolute top-0 left-0 h-1 w-0 bg-blue-400 transition-all duration-500 group-hover:w-full" />

              <div className="relative z-10">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-400/10 border border-blue-400/20">
                  <ShieldCheck
                    size={28}
                    className="text-blue-400"
                  />
                </div>

                <p className="mt-6 text-xs uppercase tracking-[0.22em] text-blue-400/80 font-semibold">
                  Pillar 02
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Protecting Futures
                </h3>

                <p className="mt-4 text-white/65 leading-7">
                  Protect children, women, and vulnerable populations by
                  preventing exploitation and creating safer, supportive
                  environments.
                </p>

              </div>

            </div>


            {/* PILLAR 03 */}
            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-white/10
                bg-white/[0.06]
                backdrop-blur-md
                p-7
                transition-all
                duration-500
                hover:-translate-y-2
                hover:bg-white/[0.08]
                hover:border-blue-400/25
                hover:shadow-[0_25px_60px_rgba(0,0,0,.30)]
              "
            >

              <div className="absolute top-0 left-0 h-1 w-0 bg-blue-400 transition-all duration-500 group-hover:w-full" />

              <div className="relative z-10">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-400/10 border border-blue-400/20">
                  <Users
                    size={28}
                    className="text-blue-400"
                  />
                </div>

                <p className="mt-6 text-xs uppercase tracking-[0.22em] text-blue-400/80 font-semibold">
                  Pillar 03
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Building Strong Communities
                </h3>

                <p className="mt-4 text-white/65 leading-7">
                  Strengthen communities through collective responsibility,
                  volunteerism, local leadership, women's participation,
                  youth engagement, resilience, and inclusive decision-making.
                </p>

              </div>

            </div>

          </div>


          {/* PREVENTION */}
          <div className="mt-14 grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-start">

            <div>

              <p className="text-blue-400 font-semibold uppercase tracking-[0.22em] text-sm">
                Protecting Futures
              </p>

              <h3 className="mt-3 text-3xl md:text-4xl font-bold">
                Prevention Through Awareness and Community Action
              </h3>

              <p className="mt-5 text-white/65 leading-8">
                Snehal Foundation believes prevention is more effective than
                reaction. Through education, awareness, partnerships, and
                community engagement, the Foundation seeks to reduce
                vulnerabilities before harm occurs.
              </p>

            </div>


            <div className="grid sm:grid-cols-2 gap-3">

              {[
                "Preventing exploitation.",
                "Promoting child protection.",
                "Encouraging safe migration.",
                "Supporting girls' education.",
                "Strengthening community vigilance.",
                "Raising awareness.",
                "Promoting health and well-being.",
                "Encouraging responsible digital behavior.",
                "Building protective environments.",
                "Supporting access to available services and referral mechanisms.",
              ].map((item, index) => (

                <div
                  key={index}
                  className="
                    flex
                    items-start
                    gap-3
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.05]
                    px-4
                    py-3
                  "
                >

                  <span className="mt-1 text-blue-400 font-bold">
                    ✓
                  </span>

                  <p className="text-sm text-white/70 leading-6">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>


          {/* STRONG COMMUNITIES */}
          <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 md:p-10">

            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-start">

              <div>

                <p className="text-blue-400 font-semibold uppercase tracking-[0.22em] text-sm">
                  Building Strong Communities
                </p>

                <h3 className="mt-3 text-3xl md:text-4xl font-bold">
                  Communities Are the Foundation of Sustainable Development
                </h3>

                <p className="mt-5 text-white/65 leading-8">
                  No organization can achieve lasting impact without active
                  community participation. Snehal Foundation is committed to
                  strengthening communities through collaboration,
                  participation, and shared responsibility.
                </p>

              </div>


              <div className="grid sm:grid-cols-2 gap-3">

                {[
                  "Collective responsibility",
                  "Volunteerism",
                  "Local leadership",
                  "Women's participation",
                  "Youth engagement",
                  "Educational excellence",
                  "Environmental responsibility",
                  "Community resilience",
                  "Inclusive decision-making",
                  "Social harmony",
                  "Civic participation",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.05]
                      px-4
                      py-3
                    "
                  >

                    <span className="text-blue-400">
                      ✓
                    </span>

                    <span className="text-sm text-white/70">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>


          {/* VALUES BEHIND MOTTO */}
          <div className="mt-14">

            <button
              type="button"
              onClick={() =>
                setOpenMottoValues(!openMottoValues)
              }
              className="
                w-full
                flex
                items-center
                justify-between
                rounded-[1.5rem]
                border
                border-blue-400/20
                bg-white/[0.05]
                backdrop-blur-md
                px-6
                py-5
                text-left
                transition-all
                duration-300
                hover:bg-white/[0.08]
                hover:border-blue-400/30
              "
            >

              <div>

                <p className="text-xs uppercase tracking-[0.22em] text-blue-400/80 font-semibold">
                  Core Values
                </p>

                <p className="mt-1 text-lg md:text-xl font-bold text-white">
                  Values Behind Our Motto
                </p>

              </div>

              <span
                className={`
                  text-2xl
                  text-blue-400
                  transition-transform
                  duration-300
                  ${
                    openMottoValues
                      ? "rotate-45"
                      : ""
                  }
                `}
              >
                +
              </span>

            </button>


            <div
              className={`
                overflow-hidden
                transition-all
                duration-500
                ${
                  openMottoValues
                    ? "mt-6 max-h-[5000px] opacity-100"
                    : "max-h-0 opacity-0"
                }
              `}
            >

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

                {[
                  {
                    title: "Compassion",
                    text:
                      "Every individual shall be treated with kindness, empathy, respect, patience, and understanding.",
                  },
                  {
                    title: "Human Dignity",
                    text:
                      "Every human being possesses inherent worth. The Foundation shall respect and protect dignity, rights, privacy, and well-being.",
                  },
                  {
                    title: "Equality",
                    text:
                      "Equal opportunity for all without discrimination based on gender, religion, caste, ethnicity, disability, language, age, economic background, marital status, or geographic location.",
                  },
                  {
                    title: "Justice",
                    text:
                      "Promoting fairness, inclusion, equal access to opportunities, rights, participation, accountability, and non-discrimination.",
                  },
                  {
                    title: "Integrity",
                    text:
                      "Maintaining ethical leadership, honest communication, responsible financial management, transparency, legal compliance, and professional conduct.",
                  },
                  {
                    title: "Accountability",
                    text:
                      "Accepting responsibility for decisions, activities, resources, program effectiveness, ethical conduct, reporting, evaluation, and community feedback.",
                  },
                  {
                    title: "Respect",
                    text:
                      "Valuing diversity, different perspectives, cultural traditions, community knowledge, individual choices, and human rights.",
                  },
                  {
                    title: "Empowerment",
                    text:
                      "Building confidence, leadership, knowledge, independence, and active participation rather than creating dependency.",
                  },
                  {
                    title: "Collaboration",
                    text:
                      "Working with government, schools, healthcare institutions, civil society organizations, CSR partners, community leaders, volunteers, donors, and development organizations.",
                  },
                  {
                    title: "Innovation",
                    text:
                      "Encouraging new educational approaches, technology-enabled solutions, digital awareness campaigns, community-led ideas, research-based programming, and evidence-driven decision-making.",
                  },
                  {
                    title: "Volunteerism",
                    text:
                      "Recognizing volunteers as ambassadors of compassion and community service and supporting them through training, respect, and meaningful participation.",
                  },
                  {
                    title: "Sustainability",
                    text:
                      "Promoting financial sustainability, environmental responsibility, community ownership, institutional capacity, responsible resource use, and long-term partnerships.",
                  },
                ].map((value, index) => (

                  <div
                    key={index}
                    className="
                      rounded-[1.5rem]
                      border
                      border-white/10
                      bg-white/[0.05]
                      p-6
                      transition-all
                      duration-300
                      hover:bg-white/[0.08]
                      hover:-translate-y-1
                    "
                  >

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-400/10 text-blue-400">
                        <CheckCircle size={20} />
                      </div>

                      <h4 className="text-lg font-bold text-white">
                        {value.title}
                      </h4>

                    </div>

                    <p className="mt-4 text-sm text-white/65 leading-7">
                      {value.text}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>


          {/* ORGANIZATIONAL COMMITMENT */}
          <div className="mt-5">

            <button
              type="button"
              onClick={() =>
                setOpenMottoCommitment(
                  !openMottoCommitment
                )
              }
              className="
                w-full
                flex
                items-center
                justify-between
                rounded-[1.5rem]
                border
                border-blue-400/20
                bg-white/[0.05]
                backdrop-blur-md
                px-6
                py-5
                text-left
                transition-all
                duration-300
                hover:bg-white/[0.08]
                hover:border-blue-400/30
              "
            >

              <div>

                <p className="text-xs uppercase tracking-[0.22em] text-blue-400/80 font-semibold">
                  Organizational Commitment
                </p>

                <p className="mt-1 text-lg md:text-xl font-bold text-white">
                  How We Put Our Motto Into Action
                </p>

              </div>

              <span
                className={`
                  text-2xl
                  text-blue-400
                  transition-transform
                  duration-300
                  ${
                    openMottoCommitment
                      ? "rotate-45"
                      : ""
                  }
                `}
              >
                +
              </span>

            </button>


            <div
              className={`
                overflow-hidden
                transition-all
                duration-500
                ${
                  openMottoCommitment
                    ? "mt-6 max-h-[3000px] opacity-100"
                    : "max-h-0 opacity-0"
                }
              `}
            >

              <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.05] p-7 md:p-9">

                <p className="text-white/70 leading-8">
                  Snehal Foundation commits that every policy, program,
                  project, partnership, campaign, and decision shall reflect
                  the principles contained in the Official Motto.
                </p>

                <div className="mt-7 grid sm:grid-cols-2 gap-4">

                  {[
                    "Empower individuals through education and opportunity.",
                    "Protect children, women, and vulnerable populations from exploitation.",
                    "Strengthen communities through participation, leadership, and collaboration.",
                    "Promote equality, justice, and inclusion.",
                    "Maintain transparency and accountability in all operations.",
                    "Encourage innovation and continuous learning.",
                    "Build partnerships that advance sustainable development.",
                  ].map((item, index) => (

                    <div
                      key={index}
                      className="flex items-start gap-3"
                    >

                      <span className="text-blue-400 mt-1">
                        ✓
                      </span>

                      <p className="text-white/70 leading-7">
                        {item}
                      </p>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>


          {/* ORGANIZATIONAL PROMISE */}
          <div className="mt-10 text-center">

            <div className="mx-auto max-w-4xl rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-blue-400/10 to-transparent p-8 md:p-10">

              <p className="text-blue-400 text-xs uppercase tracking-[0.25em] font-semibold">
                Organizational Promise
              </p>

              <blockquote className="mt-5 text-xl md:text-2xl font-semibold italic leading-relaxed text-white/90">
                "True success is measured not by the size of the organization
                but by the lives improved, opportunities created, communities
                strengthened, and futures protected."
              </blockquote>

              <div className="mt-7 h-px w-16 mx-auto bg-blue-400/50" />

              <p className="mt-6 text-white/65 leading-7">
                Through its Motto, Snehal Foundation reaffirms its commitment
                to creating a society where every individual has the
                opportunity to live with dignity, security, equality, and
                hope.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CORE VALUES
      ===================================================== */}
      <section
        id="values"
        className="relative bg-white py-24 md:py-32 overflow-hidden scroll-mt-[88px]"
      >

        {/* Decorative background */}
        <div className="absolute inset-0 pointer-events-none">

          <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />

          <div className="absolute bottom-0 -right-32 w-96 h-96 bg-blue-50 rounded-full blur-3xl" />

        </div>


        <div className="relative max-w-6xl mx-auto px-6 md:px-10">

          {/* HEADER */}
          <div className="text-center max-w-3xl mx-auto mb-16">

            <p className="text-blue-700 font-semibold tracking-[0.2em] uppercase text-sm mb-4">
              Our Ethical Foundation
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Core Values
            </h2>

            <div className="w-20 h-1 bg-blue-700 mx-auto mt-6 mb-7 rounded-full" />

            <p className="text-gray-600 text-base md:text-lg leading-8">
              Our Core Values define the identity, culture, and character of
              Snehal Foundation. They guide every decision, policy, program,
              partnership, and interaction while ensuring that our work
              remains grounded in integrity, compassion, accountability,
              respect, and human dignity.
            </p>

          </div>


          {/* INTRO CARD */}
          <div className="mb-12 bg-slate-950 text-white rounded-3xl p-8 md:p-10 shadow-xl">

            <div className="max-w-4xl">

              <p className="text-blue-300 text-sm font-semibold uppercase tracking-[0.18em] mb-4">
                Our Commitment
              </p>

              <p className="text-slate-200 text-base md:text-lg leading-8">
                These values are binding standards for the Director, Members,
                Employees, Volunteers, Ambassadors, Consultants, Interns, and
                Partners of Snehal Foundation. Our governance, financial
                management, operations, community engagement, and
                relationships must remain consistent with these principles.
              </p>

            </div>

          </div>


          {/* VALUES */}
          <div className="space-y-5">

            {coreValues.map((value, index) => {

              const isOpen = openCoreValue === index;

              return (

                <div
                  key={value.title}
                  className={`
                    rounded-3xl
                    border
                    transition-all
                    duration-500
                    overflow-hidden
                    ${
                      isOpen
                        ? "border-blue-300 shadow-xl bg-blue-50/40"
                        : "border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg"
                    }
                  `}
                >

                  {/* HEADER */}
                  <button
                    type="button"
                    onClick={() =>
                      setOpenCoreValue(
                        isOpen ? null : index
                      )
                    }
                    className="
                      w-full
                      text-left
                      px-6
                      md:px-8
                      py-6
                      flex
                      items-center
                      gap-5
                    "
                  >

                    {/* NUMBER */}
                    <div
                      className={`
                        flex-shrink-0
                        w-11
                        h-11
                        md:w-12
                        md:h-12
                        rounded-2xl
                        flex
                        items-center
                        justify-center
                        font-bold
                        text-sm
                        transition-all
                        duration-300
                        ${
                          isOpen
                            ? "bg-blue-700 text-white"
                            : "bg-blue-50 text-blue-700"
                        }
                      `}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>


                    {/* TITLE */}
                    <div className="flex-1">

                      <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                        {value.title}
                      </h3>

                      <p className="text-gray-600 text-sm md:text-base leading-6 mt-1">
                        {value.short}
                      </p>

                    </div>


                    {/* PLUS */}
                    <div
                      className={`
                        flex-shrink-0
                        w-9
                        h-9
                        rounded-full
                        flex
                        items-center
                        justify-center
                        text-xl
                        font-medium
                        transition-all
                        duration-300
                        ${
                          isOpen
                            ? "bg-blue-700 text-white rotate-45"
                            : "bg-slate-100 text-slate-700"
                        }
                      `}
                    >
                      +
                    </div>

                  </button>


                  {/* EXPANDED */}
                  <div
                    className={`
                      grid
                      transition-all
                      duration-500
                      ease-in-out
                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >

                    <div className="overflow-hidden">

                      <div className="px-6 md:px-8 pb-8">

                        <div className="h-px bg-blue-100 mb-8" />


                        <div className="grid md:grid-cols-3 gap-6">

                          {/* PRINCIPLE */}
                          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">

                            <div className="flex items-center gap-3 mb-4">

                              <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                                P
                              </div>

                              <h4 className="font-bold text-slate-900">
                                Principle
                              </h4>

                            </div>

                            <p className="text-gray-600 text-sm md:text-base leading-7">
                              {value.principle}
                            </p>

                          </div>


                          {/* COMMITMENTS */}
                          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">

                            <div className="flex items-center gap-3 mb-4">

                              <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                                C
                              </div>

                              <h4 className="font-bold text-slate-900">
                                Organizational Commitments
                              </h4>

                            </div>

                            <div className="space-y-3">

                              {value.commitments.map(
                                (item, itemIndex) => (

                                  <div
                                    key={itemIndex}
                                    className="flex items-start gap-3"
                                  >

                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />

                                    <p className="text-gray-600 text-sm leading-6">
                                      {item}
                                    </p>

                                  </div>

                                )
                              )}

                            </div>

                          </div>


                          {/* EXPECTED BEHAVIOR */}
                          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">

                            <div className="flex items-center gap-3 mb-4">

                              <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                                E
                              </div>

                              <h4 className="font-bold text-slate-900">
                                Expected Behavior
                              </h4>

                            </div>

                            <div className="space-y-3">

                              {value.behavior.map(
                                (item, itemIndex) => (

                                  <div
                                    key={itemIndex}
                                    className="flex items-start gap-3"
                                  >

                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />

                                    <p className="text-gray-600 text-sm leading-6">
                                      {item}
                                    </p>

                                  </div>

                                )
                              )}

                            </div>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          LIVING OUR CORE VALUES
      ===================================================== */}
      <section className="relative bg-slate-950 text-white py-24 md:py-28 overflow-hidden">

        <div className="absolute inset-0 pointer-events-none">

          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl" />

          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl" />

        </div>


        <div className="relative max-w-6xl mx-auto px-6 md:px-10">

          <div className="max-w-3xl mb-14">

            <p className="text-blue-300 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Putting Values Into Practice
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Living Our Core Values
            </h2>

            <p className="text-slate-300 text-base md:text-lg leading-8 mt-6">
              Our values are not simply statements. They are expected to
              guide strategic decisions, organizational culture, leadership,
              recruitment, training, partnerships, and everyday conduct.
            </p>

          </div>


          <div className="grid md:grid-cols-2 gap-5">

            {[
              "Strategic decisions shall align with our Core Values.",
              "Recruitment, promotion, and recognition shall consider adherence to our values.",
              "Training shall reinforce ethical behavior and organizational culture.",
              "Employees and volunteers shall receive appropriate induction and orientation.",
              "Leaders shall model the values through their own conduct.",
              "Regular reviews and feedback shall assess how well our values are reflected in practice.",
              "Conduct inconsistent with our values may be addressed through disciplinary, grievance, or ethical review processes.",
            ].map((item, index) => (

              <div
                key={index}
                className="
                  flex
                  items-start
                  gap-4
                  bg-white/5
                  border
                  border-white/10
                  rounded-2xl
                  p-5
                  hover:bg-white/10
                  transition
                "
              >

                <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-600/20 text-blue-300 flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                <p className="text-slate-200 leading-7 text-sm md:text-base">
                  {item}
                </p>

              </div>

            ))}

          </div>


          {/* CHAPTER CONCLUSION */}
          <div className="mt-14 border-t border-white/10 pt-10">

            <p className="text-blue-300 uppercase tracking-[0.18em] text-sm font-semibold mb-4">
              Chapter Conclusion
            </p>

            <p className="text-slate-200 text-base md:text-lg leading-8 max-w-5xl">
              The Core Values of Snehal Foundation — Integrity, Compassion,
              Equality, Accountability, Transparency, Respect, Diversity,
              Innovation, Volunteerism, and Human Dignity — form the ethical
              foundation of our governance, programs, partnerships, financial
              stewardship, and community engagement. These values guide us in
              remaining trusted by communities, respected by partners,
              accountable to stakeholders, and dedicated to sustainable and
              inclusive impact.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          COMMITMENT TO SOCIETY
      ===================================================== */}
      <section
        id="commitment"
        className="relative px-6 md:px-20 py-20 bg-slate-100 scroll-mt-[88px]"
      >

        <div className="max-w-5xl mx-auto">

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-14 text-center">

            <ShieldCheck
              size={50}
              className="text-blue-600 mx-auto mb-6"
              strokeWidth={2}
            />

            <p className="text-blue-600 font-semibold uppercase tracking-[0.2em]">
              Our Commitment
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-8 text-slate-900">
              Building a Society of Dignity, Justice and Equality
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Snehal Foundation is committed to building a society where every
              child is protected, every girl is empowered, every woman is
              respected, and every community stands united against
              exploitation.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mt-5">
              Guided by compassion, integrity, and collaboration, we strive to
              transform lives through education, protection, empowerment, and
              sustainable development.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mt-5">
              We believe that meaningful change begins when individuals,
              communities, institutions, and governments work together toward
              a shared vision of justice, equality, and human dignity.
            </p>

          </div>

        </div>

      </section>

{/* =====================================================
    VOLUNTEER CTA
===================================================== */}
<section className="relative px-6 md:px-20 py-20 overflow-hidden bg-slate-100">

  <div className="relative max-w-6xl mx-auto overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-2xl">

    {/* Background glow */}
    <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />

    <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

    <div className="relative z-10 px-7 py-16 md:px-14 md:py-20 text-center">

      {/* Eyebrow */}
      <div className="flex items-center justify-center gap-4 mb-5">

        <span className="h-[2px] w-10 bg-blue-400" />

        <p className="text-blue-400 font-semibold uppercase tracking-[0.24em] text-xs sm:text-sm">
          Join the Movement
        </p>

        <span className="h-[2px] w-10 bg-blue-400" />

      </div>
 
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
        Be Part of the Change
      </h2>

      {/* Description */}
      <p className="mt-6 text-base md:text-lg text-white/70 leading-8 max-w-2xl mx-auto">
        Your time, skills, and support can help us create a safer future
        for children, girls, women, and vulnerable communities.
      </p>

      {/* Button */}
      <button
        onClick={() => navigate("/volunteer")}
        className="
          mt-9
          inline-flex
          items-center
          justify-center
          bg-blue-600
          text-white
          px-8
          py-4
          rounded-full
          font-semibold
          shadow-lg
          shadow-blue-600/20
          hover:bg-blue-700
          hover:-translate-y-1
          transition-all
          duration-300
          cursor-pointer
        "
      >
        Join as a Volunteer
      </button>

      {/* Bottom accent */}
      <div className="mt-10 flex justify-center items-center gap-3">

        <span className="h-[2px] w-16 bg-blue-500" />
        <span className="h-px w-8 bg-white/20" />
        <span className="h-px w-3 bg-white/10" />

      </div>

    </div>

  </div>

</section>
      


    </main>
  );
};

export default About;