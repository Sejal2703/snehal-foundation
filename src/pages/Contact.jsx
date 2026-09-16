import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";

const Contact = () => {
  const navigate = useNavigate();

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.currentTarget;
  setLoading(true);

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/contact`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.elements.name.value.trim(),
          email: form.elements.email.value.trim(),
          subject: form.elements.subject.value.trim(),
          message: form.elements.message.value.trim(),
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Unable to send your message."
      );
    }

    setSuccess(true);

    form.reset();

    setTimeout(() => {
      setSuccess(false);
    }, 3000);

  } catch (error) {
    console.error(
      "Contact form error:",
      error
    );

    alert(
      error.message ||
        "Unable to send your message. Please try again."
    );

  } finally {
    setLoading(false);
  }
};

  return (
    <main className="w-full overflow-hidden bg-white">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-28 lg:py-32">

        {/* Background Glow */}
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
            Contact Snehal Foundation
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let’s Connect
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Whether you want to support our mission, volunteer your time,
            collaborate with us, or simply learn more about our work,
            we would love to hear from you.
          </p>

        </div>
      </section>


      {/* =====================================================
          CONTACT CONTENT
      ===================================================== */}
      <section className="bg-white py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* ================= CONTACT GRID ================= */}
          <div className="grid gap-12 md:grid-cols-2">

            {/* =================================================
                CONTACT INFORMATION
            ================================================= */}
            <div>

              <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                Reach Out
              </p>

              <h2 className="mb-6 font-serif text-3xl font-bold text-gray-900">
                Contact Information
              </h2>

              <p className="mb-7 max-w-xl leading-relaxed text-gray-600">
                We would love to hear from you. Whether you have a question,
                want to support our work, or would like to learn more about
                Snehal Foundation, feel free to get in touch with us.
              </p>


              {/* ================= CONTACT DETAILS ================= */}
              <div className="space-y-5 font-semibold text-blue-600">

                <a
                  href="mailto:info@snehalfoundation.org"
                  className="flex items-center gap-3 transition hover:text-blue-800"
                >
                  <Mail size={20} className="stroke-[2.5]" />
                  <span>info@snehalfoundation.org</span>
                </a>

                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 transition hover:text-blue-800"
                >
                  <Phone size={20} className="stroke-[2.5]" />
                  <span>+91 98765 43210</span>
                </a>

                <a
                  href="https://maps.google.com?q=Pune,Maharashtra"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 transition hover:text-blue-800"
                >
                  <MapPin size={20} className="stroke-[2.5]" />
                  <span>Pune, Maharashtra</span>
                </a>

                <div className="flex items-center gap-3">
                  <Clock size={20} className="stroke-[2.5]" />
                  <span>Mon - Sat (10:00 AM – 6:00 PM)</span>
                </div>

              </div>


              {/* ================= SOCIAL ICONS ================= */}
              <div className="mt-9">

                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Follow Us
                </h2>

                <div className="flex gap-4">

                  <a
                    href="#"
                    aria-label="Facebook"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white shadow transition hover:scale-110 hover:bg-blue-800"
                  >
                    <Facebook size={20} strokeWidth={2.5} />
                  </a>

                  <a
                    href="#"
                    aria-label="Instagram"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white shadow transition hover:scale-110 hover:bg-blue-800"
                  >
                    <Instagram size={20} strokeWidth={2.5} />
                  </a>

                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white shadow transition hover:scale-110 hover:bg-blue-800"
                  >
                    <Linkedin size={20} strokeWidth={2.5} />
                  </a>

                </div>

              </div>

            </div>


            {/* =================================================
                SEND A MESSAGE
            ================================================= */}
            <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-7 shadow-2xl shadow-slate-300/40 sm:p-9 lg:p-10">

              {/* Decorative Glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

              <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative">

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
                  Send a Message
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Let’s Start a Conversation
                </h2>

                <p className="mt-4 max-w-xl leading-7 text-slate-300">
                  Have a question, want to support our work, or looking to
                  collaborate with Snehal Foundation? We would love to hear
                  from you.
                </p>


                {/* ================= FORM ================= */}
                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-5"
                >

                  {/* Name */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-200">
                      Your Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Enter your name"
                      className="
                        w-full rounded-xl border border-white/10
                        bg-white/5 px-4 py-3.5
                        text-white placeholder:text-slate-500
                        outline-none transition-all
                        focus:border-blue-500
                        focus:bg-white/10
                        focus:ring-2 focus:ring-blue-500/20
                      "
                    />
                  </div>


                  {/* Email */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-200">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Enter your email"
                      className="
                        w-full rounded-xl border border-white/10
                        bg-white/5 px-4 py-3.5
                        text-white placeholder:text-slate-500
                        outline-none transition-all
                        focus:border-blue-500
                        focus:bg-white/10
                        focus:ring-2 focus:ring-blue-500/20
                      "
                    />
                  </div>


                  {/* Subject */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-200">
                      Subject
                    </label>

                    <input
                      type="text"
                      name="subject"
                      required
                      placeholder="How can we help?"
                      className="
                        w-full rounded-xl border border-white/10
                        bg-white/5 px-4 py-3.5
                        text-white placeholder:text-slate-500
                        outline-none transition-all
                        focus:border-blue-500
                        focus:bg-white/10
                        focus:ring-2 focus:ring-blue-500/20
                      "
                    />
                  </div>


                  {/* Message */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-200">
                      Message
                    </label>

                    <textarea
                      name="message"
                      rows="6"
                      required
                      placeholder="Write your message here..."
                      className="
                        w-full resize-none rounded-xl border border-white/10
                        bg-white/5 px-4 py-3.5
                        text-white placeholder:text-slate-500
                        outline-none transition-all
                        focus:border-blue-500
                        focus:bg-white/10
                        focus:ring-2 focus:ring-blue-500/20
                      "
                    />
                  </div>


                  {/* ================= SUCCESS MESSAGE ================= */}
                  {success && (
                    <div className="rounded-xl border border-green-400/20 bg-green-500/10 px-4 py-3 text-sm font-medium text-green-300">
                      Your message has been sent successfully. Thank you
                      for reaching out to us.
                    </div>
                  )}


                  {/* ================= SUBMIT BUTTON ================= */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="
                      group inline-flex w-full
                      items-center justify-center gap-2
                      rounded-xl bg-blue-600 px-6 py-3.5
                      font-semibold text-white
                      shadow-lg shadow-blue-950/30
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:bg-blue-500
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                    "
                  >
                    {loading ? "Sending..." : "Send Message"}

                    {!loading && (
                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    )}
                  </button>

                </form>

              </div>
            </div>

          </div>


          {/* =================================================
              FIND US / MAP
              FULL WIDTH BELOW BOTH COLUMNS
          ================================================= */}
          <section className="mt-20">

            <div className="mb-8 text-center">

              <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                Find Us
              </p>

              <h2 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
                Our Location
              </h2>

              <p className="mx-auto mt-3 max-w-xl leading-relaxed text-gray-600">
                Connect with Snehal Foundation or visit us in Pune,
                Maharashtra.
              </p>

            </div>


            {/* ================= MAP ================= */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-xl shadow-slate-200/50">

              <iframe
                src="https://www.google.com/maps?q=Pune,Maharashtra&output=embed"
                className="h-72 w-full sm:h-80 md:h-96"
                loading="lazy"
                title="Snehal Foundation Location"
                allowFullScreen
              ></iframe>

            </div>

          </section>

        </div>
      </section>
{/* =====================================================
    SUPPORT OUR MISSION
===================================================== */}
<section className="bg-white py-16 lg:py-20">

  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    <div className="
      relative overflow-hidden
      rounded-[2rem]
      border border-blue-100
      bg-blue-50/70
      px-7 py-9
      shadow-sm
      sm:px-10 sm:py-10
      lg:px-12 lg:py-11
    ">

      {/* Soft Decorative Glow */}
      <div className="
        pointer-events-none absolute
        -right-20 -top-20
        h-56 w-56
        rounded-full
        bg-blue-200/40
        blur-3xl
      " />

      <div className="
        relative
        flex flex-col
        gap-8
        lg:flex-row
        lg:items-center
        lg:justify-between
      ">

        {/* Text */}
        <div className="max-w-3xl">

          <p className="
            mb-2
            text-sm font-bold
            uppercase tracking-[0.2em]
            text-blue-700
          ">
            Support Our Mission
          </p>

          <h2 className="
            font-serif
            text-2xl font-bold
            text-slate-900
            sm:text-3xl
          ">
            Every Action Can Create Change
          </h2>

          <p className="
            mt-4
            text-base leading-7
            text-slate-600
            sm:text-lg
          ">
            Every child deserves safety. Every girl deserves opportunity.
            Every woman deserves dignity. Your time, voice, skills and
            support can help Snehal Foundation work toward a safer and
            more empowered society.
          </p>

        </div>


        {/* Button */}
        <div className="shrink-0">

          <button
            onClick={() => navigate("/donate")}
            className="
              group
              inline-flex
              w-full sm:w-auto
              items-center
              justify-center
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
            Support Our Work

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
    MAKE A DIFFERENCE
===================================================== */}
<section className="bg-slate-100 py-24 lg:py-28">

  <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

    <p className="
      text-sm font-bold
      uppercase tracking-[0.25em]
      text-blue-700
    ">
      Make a Difference
    </p>

    <h2 className="
      mt-4
      font-serif
      text-4xl font-bold
      tracking-tight
      text-slate-900
      sm:text-5xl
      lg:text-6xl
    ">
      Be Part of a Safer Future
    </h2>

    <p className="
      mx-auto mt-6
      max-w-2xl
      text-base leading-8
      text-slate-600
      sm:text-lg
    ">
      Whether through volunteering, supporting our programmes, or
      simply sharing our mission, every contribution can help create
      safer and more empowered communities.
    </p>


    {/* Buttons */}
    <div className="
      mt-9
      flex flex-col
      justify-center
      gap-4
      sm:flex-row
    ">

      <button
        onClick={() => navigate("/volunteer")}
        className="
          group
          inline-flex
          items-center
          justify-center
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
        Become a Volunteer

        <ArrowRight
          size={18}
          className="
            transition-transform duration-300
            group-hover:translate-x-1
          "
        />
      </button>


      <button
        onClick={() => navigate("/donate")}
        className="
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-xl
          border border-slate-300
          bg-white
          px-7 py-3.5
          font-semibold
          text-slate-800
          shadow-sm
          transition-all duration-300
          hover:-translate-y-1
          hover:border-blue-300
          hover:bg-blue-50
        "
      >
        Support Our Mission
      </button>

    </div>

  </div>

</section>

    </main>
  );
};

export default Contact;