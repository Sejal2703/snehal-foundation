{/*import React, { useState } from "react";
import about from "../assets/About.jpeg";

const About = () => {

  const [showForm, setShowForm] = useState(false);

  return (
    <main className="pt-24 px-6 md:px-20 bg-slate-100">

      {/* ================= HERO ================= *
      <section className="mb-20 text-center max-w-4xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About Snehal Foundation
        </h1>

        <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6 rounded"></div>

        <p className="text-gray-600 text-lg leading-relaxed"> The Founder & Director of Snehal Foundation is a committed social worker driven by a deep concern for the safety and dignity of minor girls and vulnerable women. With a strong belief that silence enables exploitation, the foundation was established to take meaningful action against human trafficking and abuse.
           <br /><br /> 
           Through Snehal Foundation, the Director aims to create awareness at the grassroots level, support rescue and rehabilitation efforts, and empower survivors with education and life skills.
            <br /><br /> 
            The vision is to build a society where no girl is treated as a commodity and every woman has the right to live with dignity, safety, and independence. </p>

      </section>


      {/* ================= WHO WE ARE ================= *
      <section className="grid md:grid-cols-2 gap-12 mb-24 items-center">

        <img
          src={about}
          alt="Snehal Foundation"
          className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
        />

        <div>

          <h2 className="text-3xl font-bold mb-4">
            Who We Are
          </h2>

          <div className="h-1 w-16 bg-yellow-400 mb-6 rounded"></div>

          <p className="text-gray-600 leading-relaxed text-lg "> Snehal Foundation is a non-profit organization dedicated to protecting minor girls and vulnerable women from human trafficking, sexual exploitation, and abuse. <br /><br /> We work at the grassroots level to create awareness, support rescue and rehabilitation efforts, and empower survivors through education and skill development. <br /><br /> Guided by compassion and driven by action, Snehal Foundation stands for dignity, safety, and justice. </p>

        </div>

      </section>


      {/* ================= CTA ================= *
      <section className="bg-yellow-300 rounded-2xl py-16 text-center mb-16">

        <h2 className="text-3xl font-bold mb-4">
          Be Part of the Change
        </h2>

        <p className="mb-6 text-lg">
          Together, we can create a safer future.
        </p>

        <button
          onClick={() => setShowForm(true)}
          className="bg-black text-yellow-400 px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          Join as a volunteer
        </button>

      </section>


      {/* ================= VOLUNTEER FORM MODAL ================= *
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-auto">

          <div className="bg-white w-full max-w-3xl p-8 rounded-2xl shadow-xl relative max-h-[90vh] overflow-y-auto">

            {/* Close button *
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-xl font-bold"
            >
              ✕
            </button>


            <h2 className="text-2xl font-bold mb-6 text-center">
              SNEHAL FOUNDATION – VOLUNTEER REGISTRATION FORM
            </h2>


            <form className="space-y-6">

              {/* Personal Info *
              <div>
                <h3 className="font-bold mb-2">1. Personal Information</h3>

                <input className="input" placeholder="Full Name (as per Aadhaar)" />
                <input className="input" placeholder="Father/Mother/Spouse Name" />
                <input className="input" type="date" />

                <select className="input">
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>

                <input className="input" placeholder="Nationality" />
              </div>


              {/* Contact *
              <div>
                <h3 className="font-bold mb-2">2. Contact Details</h3>

                <input className="input" placeholder="Mobile Number" />
                <input className="input" placeholder="Alternate Mobile" />
                <input className="input" placeholder="Email" type="email" />
              </div>


              {/* Address *
              <div>
                <h3 className="font-bold mb-2">3. Address</h3>

                <input className="input" placeholder="Full Address" />
                <input className="input" placeholder="City/District" />
                <input className="input" placeholder="State" />
                <input className="input" placeholder="PIN Code" />
              </div>


              {/* Aadhaar *
              <div>
                <h3 className="font-bold mb-2">4. Aadhaar Verification</h3>

                <input className="input" placeholder="Aadhaar Number" />
                <input className="input" type="file" />
              </div>


              {/* Education *
              <div>
                <h3 className="font-bold mb-2">5. Education & Occupation</h3>

                <input className="input" placeholder="Qualification" />
                <input className="input" placeholder="Occupation" />
                <input className="input" placeholder="Organization / College" />
              </div>


              {/* Skills *
              <div>
                <h3 className="font-bold mb-2">6. Skills & Interests</h3>

                <textarea className="input" placeholder="Your Skills"></textarea>
              </div>


              {/* Volunteering *
              <div>
                <h3 className="font-bold mb-2">7. Volunteering Details</h3>

                <textarea className="input" placeholder="Reason to join"></textarea>
                <input className="input" placeholder="Available Days" />
                <input className="input" placeholder="Available Time" />
              </div>


              {/* Emergency *
              <div>
                <h3 className="font-bold mb-2">8. Emergency Contact</h3>

                <input className="input" placeholder="Name" />
                <input className="input" placeholder="Relation" />
                <input className="input" placeholder="Mobile" />
              </div>


              {/* Declaration *
              <label className="flex gap-2">
                <input type="checkbox" />
                I confirm that the above information is true and correct.
              </label>


              {/* Submit *
              <button
                type="submit"
                className="bg-yellow-400 w-full py-3 rounded-lg font-bold hover:bg-yellow-500"
              >
                Submit Form
              </button>

            </form>

          </div>

        </div>
      )}

    </main>
  );
};

export default About; */}

import React, { useState } from "react";
import about from "../assets/About.jpeg";
import VolunteerForm from "../components/VolunteerForm";
import {
  HeartHandshake,
  ShieldCheck,
  GraduationCap,
  Users,
  Scale,
  Handshake,
  Lightbulb,
  Leaf,
  Target,
  CheckCircle,
} from "lucide-react";

const About = () => {
  const [showForm, setShowForm] = useState(false);

  const coreValues = [
    {
      title: "Compassion",
      icon: HeartHandshake,
      description:
        "Serving every individual with empathy, kindness, and respect.",
    },
    {
      title: "Integrity",
      icon: ShieldCheck,
      description:
        "Maintaining honesty, transparency, and ethical conduct in all activities.",
    },
    {
      title: "Equality",
      icon: Scale,
      description:
        "Providing equal opportunities without discrimination based on gender, religion, caste, ethnicity, disability, or economic status.",
    },
    {
      title: "Child-Centered Approach",
      icon: ShieldCheck,
      description:
        "Placing the safety, rights, and well-being of children at the heart of every program.",
    },
    {
      title: "Empowerment",
      icon: Users,
      description:
        "Enabling individuals and communities to become self-reliant and resilient.",
    },
    {
      title: "Accountability",
      icon: CheckCircle,
      description:
        "Being responsible to beneficiaries, donors, partners, volunteers, and society.",
    },
    {
      title: "Collaboration",
      icon: Handshake,
      description:
        "Working with governments, NGOs, educational institutions, businesses, and communities to maximize impact.",
    },
    {
      title: "Innovation",
      icon: Lightbulb,
      description:
        "Using creative, technology-driven, and evidence-based solutions to address social challenges.",
    },
    {
      title: "Sustainability",
      icon: Leaf,
      description:
        "Designing programs that create long-term positive change and strengthen community resilience.",
    },
    {
      title: "Respect",
      icon: HeartHandshake,
      description:
        "Treating every individual with dignity, fairness, and cultural sensitivity.",
    },
  ];

  const longTermGoals = [
    "Reduce the incidence of human trafficking through prevention and awareness.",
    "Ensure access to quality education for vulnerable children and girls.",
    "Support survivors with comprehensive rehabilitation and reintegration.",
    "Strengthen women's economic independence through skills and entrepreneurship.",
    "Improve community health through preventive healthcare initiatives.",
    "Build a nationwide network of trained volunteers and ambassadors.",
    "Partner with CSR organizations and government agencies to scale impact.",
    "Expand programs across India and, eventually, internationally.",
    "Become a recognized leader in child protection, women's empowerment, and anti-human trafficking initiatives.",
  ];

  return (
    <main className="pt-24 bg-slate-100 text-gray-800">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="px-6 md:px-20 py-16 md:py-20 text-center">

        <div className="max-w-4xl mx-auto">

          <p className="text-blue-600 font-semibold uppercase tracking-widest mb-3">
            About Us
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Snehal Foundation
          </h1>

          <div className="h-1 w-24 bg-yellow-400 mx-auto mb-8 rounded"></div>

          <p className="text-gray-600 text-lg leading-relaxed">
            Snehal Foundation is committed to creating a safer, more
            compassionate, and empowered society where every child is
            protected, every girl has opportunities, and every woman can live
            with dignity and independence.
          </p>

        </div>

      </section>


      {/* =====================================================
          WHO WE ARE
      ===================================================== */}
      <section className="px-6 md:px-20 pb-20">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <img
              src={about}
              alt="Snehal Foundation"
              className="w-full h-[350px] md:h-[450px] object-cover rounded-2xl shadow-xl"
            />
          </div>

          <div>

            <p className="text-blue-600 font-semibold uppercase tracking-wide mb-2">
              Who We Are
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Standing Together for Safety, Dignity and Justice
            </h2>

            <div className="h-1 w-16 bg-yellow-400 mb-6 rounded"></div>

            <p className="text-gray-600 leading-relaxed text-lg">
              Snehal Foundation is a non-profit organization dedicated to
              protecting children and vulnerable women from human trafficking,
              sexual exploitation, abuse, and inequality.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg mt-5">
              We work at the grassroots level to create awareness, support
              rescue and rehabilitation efforts, and empower survivors through
              education, healthcare, skill development, and livelihood
              opportunities.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg mt-5">
              Guided by compassion and driven by action, Snehal Foundation
              stands for dignity, safety, equality, and justice.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          VISION
      ===================================================== */}
      <section className="bg-blue-50 px-6 md:px-20 py-20">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">

            <p className="text-blue-600 font-semibold uppercase tracking-wide">
              Our Vision
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              A Safer and More Equal Future
            </h2>

            <div className="h-1 w-20 bg-yellow-400 mx-auto mt-5 rounded"></div>

          </div>


          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">

            <p className="text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed text-center mb-10">
              "To build a world where every child is safe, every girl is
              empowered, every woman lives with dignity, and every community
              is free from human trafficking, exploitation, discrimination,
              and inequality."
            </p>

            <h3 className="text-2xl font-bold mb-6 text-blue-700">
              Snehal Foundation envisions a future where:
            </h3>

            <div className="grid md:grid-cols-2 gap-5">

              {[
                "Every child grows up in a safe and nurturing environment.",
                "Human trafficking is prevented through awareness and strong community systems.",
                "Girls receive quality education and equal opportunities.",
                "Women are financially independent and respected.",
                "Families are empowered to break the cycle of poverty.",
                "Communities actively protect vulnerable individuals.",
                "Every survivor of trafficking receives justice, rehabilitation, and a chance to rebuild their life.",
                "Education, healthcare, and livelihood opportunities are accessible to all.",
                "Society embraces equality, inclusion, and compassion.",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-3 items-start p-4 bg-blue-50 rounded-xl"
                >
                  <CheckCircle
                    className="text-blue-600 flex-shrink-0 mt-1"
                    size={22}
                  />

                  <p className="text-gray-700 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MISSION
      ===================================================== */}
      <section className="px-6 md:px-20 py-20">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">

            <p className="text-green-600 font-semibold uppercase tracking-wide">
              Our Mission
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Creating Lasting Social Impact
            </h2>

            <div className="h-1 w-20 bg-yellow-400 mx-auto mt-5 rounded"></div>

            <p className="max-w-3xl mx-auto text-gray-600 text-lg mt-6 leading-relaxed">
              The mission of Snehal Foundation is to create lasting social
              impact by empowering vulnerable communities through education,
              protection, healthcare, livelihood opportunities, and advocacy.
            </p>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "Prevent human trafficking through education and community awareness.",
              "Protect children from abuse, neglect, exploitation, and violence.",
              "Support survivors through rehabilitation, counseling, legal aid, education, and livelihood assistance.",
              "Promote education for girls and marginalized children.",
              "Empower women through leadership, entrepreneurship, financial literacy, and vocational training.",
              "Improve access to healthcare, nutrition, and mental health services.",
              "Build youth leadership and volunteer networks.",
              "Promote environmental sustainability and community resilience.",
              "Partner with governments, corporations, educational institutions, and NGOs to achieve sustainable development.",
              "Encourage active citizenship and volunteerism.",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <CheckCircle className="text-green-600" size={22} />
                </div>

                <p className="text-gray-700 leading-relaxed">
                  {item}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          MOTTO
      ===================================================== */}
      <section className="bg-gray-900 text-white px-6 md:px-20 py-20">

        <div className="max-w-6xl mx-auto text-center">

          <p className="text-yellow-400 font-semibold uppercase tracking-widest">
            Our Motto
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
            "Together Against Human Trafficking.
            <br />
            Together for Every Girl's Future."
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto mt-8 text-lg leading-relaxed">
            This motto reflects the Foundation's belief that ending human
            trafficking and ensuring a brighter future for girls requires
            collective action.
          </p>


          <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">

            {/* Together Against */}
            <div className="bg-white/10 p-8 rounded-2xl">

              <h3 className="text-2xl font-bold text-yellow-400 mb-5">
                Together Against Human Trafficking
              </h3>

              <ul className="space-y-3 text-gray-300">

                {[
                  "Communities must identify and report trafficking.",
                  "Families must educate and protect children.",
                  "Schools must spread awareness.",
                  "Governments must enforce laws.",
                  "NGOs must provide rehabilitation.",
                  "Corporates must support prevention through CSR.",
                  "Citizens must become advocates for change.",
                ].map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-yellow-400">✓</span>
                    {item}
                  </li>
                ))}

              </ul>

            </div>


            {/* Every Girl */}
            <div className="bg-white/10 p-8 rounded-2xl">

              <h3 className="text-2xl font-bold text-yellow-400 mb-5">
                Together for Every Girl's Future
              </h3>

              <ul className="space-y-3 text-gray-300">

                {[
                  "Every girl deserves education.",
                  "Every girl deserves safety.",
                  "Every girl deserves healthcare.",
                  "Every girl deserves equal opportunity.",
                  "Every girl deserves freedom from exploitation.",
                  "Every girl deserves the chance to achieve her dreams.",
                ].map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-yellow-400">✓</span>
                    {item}
                  </li>
                ))}

              </ul>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}
      <section className="px-6 md:px-20 py-20 bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">

            <p className="text-purple-600 font-semibold uppercase tracking-wide">
              Our Philosophy
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              What We Believe
            </h2>

            <div className="h-1 w-20 bg-yellow-400 mx-auto mt-5 rounded"></div>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "Every human life has equal value.",
              "Prevention is more effective than rescue alone.",
              "Education is the most powerful tool against exploitation.",
              "Empowered women create stronger families and communities.",
              "Sustainable change comes through partnerships and community participation.",
              "Transparency and accountability build trust.",
              "Compassion and dignity should guide every action.",
            ].map((item, index) => (
              <div
                key={index}
                className="p-7 bg-slate-50 rounded-2xl border border-gray-100 hover:shadow-lg transition"
              >
                <Target className="text-purple-600 mb-4" size={30} />

                <p className="font-semibold text-gray-700 leading-relaxed">
                  {item}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CORE VALUES
      ===================================================== */}
      <section className="px-6 md:px-20 py-20 bg-slate-100">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">

            <p className="text-blue-600 font-semibold uppercase tracking-wide">
              Core Values
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Values That Guide Our Work
            </h2>

            <div className="h-1 w-20 bg-yellow-400 mx-auto mt-5 rounded"></div>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {coreValues.map((value, index) => {

              const Icon = value.icon;

              return (
                <div
                  key={index}
                  className="bg-white p-7 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
                >

                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-5">

                    <Icon
                      size={25}
                      className="text-blue-600"
                      strokeWidth={2.5}
                    />

                  </div>

                  <h3 className="text-xl font-bold mb-3">
                    {value.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          LONG TERM GOALS
      ===================================================== */}
      <section className="px-6 md:px-20 py-20 bg-white">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">

            <p className="text-orange-600 font-semibold uppercase tracking-wide">
              Looking Ahead
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Our Long-Term Goals
            </h2>

            <div className="h-1 w-20 bg-yellow-400 mx-auto mt-5 rounded"></div>

          </div>


          <div className="space-y-4">

            {longTermGoals.map((goal, index) => (
              <div
                key={index}
                className="flex items-start gap-5 bg-slate-50 p-5 rounded-xl hover:shadow-md transition"
              >

                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                <p className="text-gray-700 leading-relaxed pt-2">
                  {goal}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          COMMITMENT STATEMENT
      ===================================================== */}
      <section className="px-6 md:px-20 py-20 bg-blue-50">

        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-14 text-center">

          <ShieldCheck
            size={50}
            className="text-blue-600 mx-auto mb-6"
            strokeWidth={2}
          />

          <p className="text-blue-600 font-semibold uppercase tracking-wide">
            Our Commitment
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-8">
            Building a Society of Dignity, Justice and Equality
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Snehal Foundation is committed to building a society where every
            child is protected, every girl is empowered, every woman is
            respected, and every community stands united against exploitation.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mt-5">
            Guided by compassion, integrity, and collaboration, we strive to
            transform lives through education, protection, empowerment, and
            sustainable development.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mt-5">
            We believe that meaningful change begins when individuals,
            communities, institutions, and governments work together toward a
            shared vision of justice, equality, and human dignity.
          </p>

        </div>

      </section>


      {/* =====================================================
          GUIDING PRINCIPLE
      ===================================================== */}
      <section className="px-6 md:px-20 py-20 bg-gray-900 text-white">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-yellow-400 font-semibold uppercase tracking-widest mb-5">
            Guiding Principle
          </p>

          <div className="h-1 w-16 bg-yellow-400 mx-auto mb-8 rounded"></div>

          <blockquote className="text-2xl md:text-4xl font-semibold leading-relaxed">
            "When one girl is educated, one family is transformed.
            <br className="hidden md:block" />
            When one survivor is empowered, one community becomes stronger.
            <br className="hidden md:block" />
            When society stands together against exploitation, the future
            becomes safer for everyone."
          </blockquote>

        </div>

      </section>


      {/* =====================================================
          VOLUNTEER CTA
      ===================================================== */}
      <section className="px-6 md:px-20 py-20">

        <div className="max-w-6xl mx-auto bg-yellow-300 rounded-3xl py-14 px-6 text-center shadow-lg">

          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Be Part of the Change
          </h2>

          <p className="text-lg max-w-2xl mx-auto mb-8">
            Your time, skills, and support can help us create a safer future
            for children, girls, women, and vulnerable communities.
          </p>

          <button
            onClick={() => setShowForm(true)}
            className="bg-black text-yellow-400 px-9 py-4 rounded-full font-semibold hover:scale-105 hover:bg-gray-900 transition duration-300 cursor-pointer"
          >
            Join as a Volunteer
          </button>

        </div>

      </section>


      {/* =====================================================
          REUSABLE VOLUNTEER FORM
      ===================================================== */}
      {showForm && (
        <VolunteerForm onClose={() => setShowForm(false)} />
      )}

    </main>
  );
};

export default About;