import React, { useState } from "react";
import {
  ArrowRight,
  HeartHandshake,
  ShieldCheck,
  Users,
  GraduationCap,
  HeartPulse,
  Megaphone,
  Laptop,
  CheckCircle2,
  Clock3,
  UserRound,
  MapPin,
  BriefcaseBusiness,
  Sparkles,
  X,
  AlertCircle,
  Send,
  ChevronDown,
} from "lucide-react";

const initialFormData = {
  fullName: "",
  parentName: "",
  dateOfBirth: "",
  gender: "",
  nationality: "",

  mobile: "",
  alternateMobile: "",
  email: "",

  address: "",
  city: "",
  state: "",
  pinCode: "",

  aadhaarNumber: "",

  qualification: "",
  occupation: "",
  organization: "",

  skills: "",

  reasonToJoin: "",
  availableDays: "",
  availableTime: "",

  emergencyName: "",
  emergencyRelation: "",
  emergencyMobile: "",

  declaration: false,
};

const Volunteer = () => {
  const [formData, setFormData] = useState(initialFormData);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Stores field names which are currently missing
  const [missingFields, setMissingFields] = useState([]);

  // =========================================================
  // REQUIRED FIELD CONFIGURATION
  // =========================================================

  const requiredFields = [
    {
      name: "fullName",
      label: "Full Name",
      section: "Personal Information",
    },
    {
      name: "gender",
      label: "Gender",
      section: "Personal Information",
    },
    {
      name: "mobile",
      label: "Mobile Number",
      section: "Contact Information",
    },
    {
      name: "email",
      label: "Email Address",
      section: "Contact Information",
    },
    {
      name: "address",
      label: "Full Address",
      section: "Location",
    },
    {
      name: "city",
      label: "City / District",
      section: "Location",
    },
    {
      name: "state",
      label: "State",
      section: "Location",
    },
    {
      name: "qualification",
      label: "Qualification",
      section: "Education & Occupation",
    },
    {
      name: "skills",
      label: "Skills, Interests & Experience",
      section: "Skills & Interests",
    },
    {
      name: "reasonToJoin",
      label: "Reason for Volunteering",
      section: "Volunteering Preferences",
    },
    {
      name: "availableDays",
      label: "Available Days",
      section: "Volunteering Preferences",
    },
    {
      name: "availableTime",
      label: "Available Time",
      section: "Volunteering Preferences",
    },
    {
      name: "declaration",
      label: "Declaration",
      section: "Declaration",
    },
  ];

  // =========================================================
  // HANDLE INPUT
  // =========================================================

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const newValue =
      type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    // Remove field from missing list once properly filled
    if (
      missingFields.includes(name) &&
      (type === "checkbox"
        ? checked
        : value.trim() !== "")
    ) {
      setMissingFields((prev) =>
        prev.filter((field) => field !== name)
      );
    }
  };

  // =========================================================
  // CHECK REQUIRED FIELDS
  // =========================================================

  const validateForm = () => {
    const missing = requiredFields
      .filter((field) => {
        const value = formData[field.name];

        if (typeof value === "boolean") {
          return !value;
        }

        return !value || value.trim() === "";
      })
      .map((field) => field.name);

    setMissingFields(missing);

    return missing;
  };

  // =========================================================
  // SCROLL TO FIRST MISSING FIELD
  // =========================================================

  const focusFirstMissingField = (missing) => {
    if (!missing.length) return;

    const firstField = document.querySelector(
      `[name="${missing[0]}"]`
    );

    if (firstField) {
      firstField.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      setTimeout(() => {
        if (typeof firstField.focus === "function") {
          firstField.focus();
        }
      }, 500);
    }
  };

  // =========================================================
  // SUBMIT FORM
  // =========================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMissingFields([]);

    // Validate required fields first
    const missing = validateForm();

    if (missing.length > 0) {
      focusFirstMissingField(missing);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/volunteer",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Unable to submit the volunteer form."
        );
      }

      // Success
      setSuccess(true);

      // Clear missing fields
      setMissingFields([]);

      // Reset form
      setFormData(initialFormData);
    } catch (err) {
      console.error("Volunteer form error:", err);

      setMissingFields([
        "__server_error__",
      ]);
    } finally {
      setLoading(false);
    }
  };

  // =========================================================
  // FIELD ERROR CHECK
  // =========================================================

  const hasError = (fieldName) =>
    missingFields.includes(fieldName);

  // =========================================================
  // COMMON STYLES
  // =========================================================

  const inputClass = (fieldName = "") =>
    `w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 ${
      hasError(fieldName)
        ? "border-red-300 bg-red-50/30 ring-4 ring-red-50 focus:border-red-400 focus:ring-red-100"
        : "border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
    }`;

  const labelClass =
    "mb-2 block text-sm font-semibold text-slate-700";

  const RequiredStar = () => (
    <span
      className="ml-1 text-red-500"
      aria-hidden="true"
    >
      *
    </span>
  );

  const OptionalText = () => (
    <span className="ml-2 text-xs font-normal text-slate-400">
      Optional
    </span>
  );

  // =========================================================
  // SECTION HEADER
  // =========================================================

  const SectionHeader = ({
    number,
    title,
    description,
    icon,
  }) => (
    <div className="mb-8 flex items-start gap-4">
      <div className="relative shrink-0">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 shadow-sm">
          {icon}
        </div>

        <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-blue-600 px-1.5 text-[10px] font-bold text-white shadow-md">
          {number}
        </span>
      </div>

      <div className="pt-0.5">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600">
          Step {number}
        </p>

        <h3 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
          {title}
        </h3>

        {description && (
          <p className="mt-1.5 max-w-2xl text-sm leading-6 text-slate-500">
            {description}
          </p>
        )}
      </div>
    </div>
  );

  // =========================================================
  // CONTRIBUTION CARD
  // =========================================================

  const ContributionCard = ({
    icon,
    title,
    description,
  }) => (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/10">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
        {icon}
      </div>

      <h3 className="mt-5 text-lg font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {description}
      </p>
    </div>
  );

  // =========================================================
  // FORM FIELD ERROR
  // =========================================================

  const FieldError = ({ field }) => {
    if (!hasError(field)) return null;

    return (
      <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600">
        <AlertCircle size={13} />
        This field is required.
      </p>
    );
  };

  return (
    <main className="w-full overflow-hidden bg-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[620px] overflow-hidden bg-slate-950">

        <img
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=2200&q=90"
          alt="Volunteers working together"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/60" />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-slate-950/20" />

        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-28 lg:px-8">

          <div className="max-w-3xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100 backdrop-blur-md">
              <HeartHandshake size={16} />
              Be Part of the Change
            </div>

            <h1 className="font-serif text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Your Time Can Create
              <span className="block text-blue-300">
                a Safer Future.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              Join Snehal Foundation and use your time, skills and
              compassion to support vulnerable children, women and
              communities. Together, we can turn concern into
              meaningful action.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <a
                href="#volunteer-form"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-950/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500"
              >
                Become a Volunteer

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#why-volunteer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
              >
                Why Volunteer?
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="bg-white py-20 lg:py-24">

        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
            Volunteer With Snehal Foundation
          </p>

          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Compassion Into Action
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Volunteering is more than giving time. It is about standing
            with people, listening to communities, sharing skills and
            helping create opportunities for a safer and more dignified
            future.
          </p>

        </div>

      </section>


      {/* =====================================================
          WHY VOLUNTEER
      ===================================================== */}

      <section
        id="why-volunteer"
        className="bg-slate-50 py-20 lg:py-24"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
              Why Volunteer
            </p>

            <h2 className="mt-4 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Be a Voice. Be a Helping Hand.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Every person brings something valuable. Your participation
              can help strengthen programmes, communities and
              opportunities for people who need support.
            </p>

          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <ContributionCard
              icon={<HeartHandshake size={24} />}
              title="Make a Difference"
              description="Contribute your time and energy toward meaningful community work."
            />

            <ContributionCard
              icon={<ShieldCheck size={24} />}
              title="Protect Communities"
              description="Support initiatives focused on safety, dignity and protection."
            />

            <ContributionCard
              icon={<GraduationCap size={24} />}
              title="Empower People"
              description="Help children, girls and women access education and opportunities."
            />

            <ContributionCard
              icon={<Users size={24} />}
              title="Build Communities"
              description="Work alongside people and organisations to create lasting change."
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          WAYS YOU CAN CONTRIBUTE
      ===================================================== */}

      <section className="bg-white py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-2xl">

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
                Ways You Can Contribute
              </p>

              <h2 className="mt-4 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
                There Is a Place for Your Skills
              </h2>

            </div>

            <p className="max-w-xl text-base leading-7 text-slate-600">
              Whether you are a student, professional, creative,
              educator or community member, your skills can contribute
              to meaningful work.
            </p>

          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: <GraduationCap size={23} />,
                title: "Education Support",
                description:
                  "Support learning, awareness and educational activities.",
              },
              {
                icon: <Users size={23} />,
                title: "Community Outreach",
                description:
                  "Engage with communities and help spread awareness.",
              },
              {
                icon: <HeartPulse size={23} />,
                title: "Healthcare & Awareness",
                description:
                  "Support health awareness and community wellbeing initiatives.",
              },
              {
                icon: <HeartHandshake size={23} />,
                title: "Women Empowerment",
                description:
                  "Support opportunities, dignity and independence for women.",
              },
              {
                icon: <ShieldCheck size={23} />,
                title: "Child Protection",
                description:
                  "Contribute to safer environments for vulnerable children.",
              },
              {
                icon: <Megaphone size={23} />,
                title: "Awareness Campaigns",
                description:
                  "Help communicate important social issues and initiatives.",
              },
              {
                icon: <Laptop size={23} />,
                title: "Digital & Creative Support",
                description:
                  "Use technology, design, writing or social media skills.",
              },
              {
                icon: <Sparkles size={23} />,
                title: "Events & Activities",
                description:
                  "Help organise programmes, campaigns and community events.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-blue-700 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  {item.icon}
                </div>

                <h3 className="mt-4 font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PREMIUM FORM SECTION
      ===================================================== */}

      <section
        id="volunteer-form"
        className="relative overflow-hidden bg-slate-50 py-20 lg:py-24"
      >

        {/* Background decoration */}

        <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-40 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          {/* FORM INTRO */}

          <div className="mx-auto mb-12 max-w-3xl text-center">

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-900/20">
              <Send size={24} />
            </div>

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
              Volunteer Application
            </p>

            <h2 className="mt-4 font-serif text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              Tell Us About Yourself
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
              Take a few minutes to share your details, interests and
              availability. We would love to learn how you can contribute
              to Snehal Foundation.
            </p>

          </div>


          {/* FORM CARD */}

          <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">

            {/* =================================================
                FORM HEADER
            ================================================= */}

            <div className="relative overflow-hidden bg-slate-950 px-6 py-9 sm:px-10 lg:px-12">

              <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

              <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

                <div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-300">
                    <HeartHandshake size={14} />
                    Join the Snehal Foundation community
                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                    Volunteer Registration
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/60">
                    Fields marked with
                    <span className="mx-1 text-red-400">*</span>
                    are required. Your information helps us understand
                    how you would like to contribute.
                  </p>

                </div>

                <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-blue-300 backdrop-blur-sm sm:flex">
                  <HeartHandshake size={30} />
                </div>

              </div>


              {/* FORM STEPS */}

              <div className="relative mt-9 grid grid-cols-4 gap-2 sm:grid-cols-7">

                {[
                  "Personal",
                  "Contact",
                  "Location",
                  "Education",
                  "Skills",
                  "Preferences",
                  "Finish",
                ].map((step, index) => (
                  <div key={step} className="text-center">

                    <div
                      className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                        index === 6
                          ? "bg-blue-500 text-white"
                          : "bg-white/10 text-white/70"
                      }`}
                    >
                      {index + 1}
                    </div>

                    <p className="mt-2 hidden text-[10px] font-medium text-white/45 sm:block">
                      {step}
                    </p>

                  </div>
                ))}

              </div>

            </div>


            <form onSubmit={handleSubmit} noValidate>


              {/* =================================================
                  VALIDATION SUMMARY
              ================================================= */}

              {missingFields.length > 0 && (
                <div className="border-b border-red-100 bg-red-50 px-6 py-6 sm:px-10 lg:px-12">

                  <div className="flex items-start gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
                      <AlertCircle size={23} />
                    </div>

                    <div className="min-w-0">

                      <h3 className="font-bold text-red-800">
                        Please complete the required fields
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-red-700/80">
                        Please fill in the following information before
                        submitting your application.
                      </p>

                      {missingFields.includes("__server_error__") ? (
                        <p className="mt-3 rounded-xl bg-white/70 px-4 py-3 text-sm font-medium text-red-700">
                          Something went wrong while submitting your
                          application. Please check your connection and
                          try again.
                        </p>
                      ) : (
                        <div className="mt-4 grid gap-2 sm:grid-cols-2">

                          {requiredFields
                            .filter((field) =>
                              missingFields.includes(field.name)
                            )
                            .map((field) => (
                              <button
                                key={field.name}
                                type="button"
                                onClick={() => {
                                  const element =
                                    document.querySelector(
                                      `[name="${field.name}"]`
                                    );

                                  if (element) {
                                    element.scrollIntoView({
                                      behavior: "smooth",
                                      block: "center",
                                    });

                                    setTimeout(() => {
                                      element.focus();
                                    }, 400);
                                  }
                                }}
                                className="group flex items-center gap-2 rounded-lg bg-white/80 px-3 py-2 text-left text-xs font-semibold text-red-700 transition hover:bg-white"
                              >
                                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                                {field.label}
                                <ArrowRight
                                  size={13}
                                  className="ml-auto opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"
                                />
                              </button>
                            ))}

                        </div>
                      )}

                    </div>

                  </div>

                </div>
              )}


              {/* =================================================
                  01 PERSONAL INFORMATION
              ================================================= */}

              <div className="border-b border-slate-100 px-6 py-10 sm:px-10 lg:px-12">

                <SectionHeader
                  number="01"
                  title="Personal Information"
                  description="Basic information about you."
                  icon={<UserRound size={22} />}
                />

                <div className="grid gap-5 md:grid-cols-2">

                  {/* FULL NAME */}

                  <div>

                    <label className={labelClass}>
                      Full Name
                      <RequiredStar />
                    </label>

                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={inputClass("fullName")}
                    />

                    <FieldError field="fullName" />

                  </div>


                  {/* DOB */}

                  <div>

                    <label className={labelClass}>
                      Date of Birth
                      <OptionalText />
                    </label>

                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className={inputClass()}
                    />

                  </div>


                  {/* GENDER */}

                  <div>

                    <label className={labelClass}>
                      Gender
                      <RequiredStar />
                    </label>

                    <div className="relative">

                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className={`${inputClass("gender")} appearance-none pr-10`}
                      >
                        <option value="">
                          Select Gender
                        </option>

                        <option value="Male">
                          Male
                        </option>

                        <option value="Female">
                          Female
                        </option>

                        <option value="Other">
                          Other
                        </option>

                      </select>

                      <ChevronDown
                        size={18}
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                    </div>

                    <FieldError field="gender" />

                  </div>

                </div>

              </div>


              {/* =================================================
                  02 CONTACT
              ================================================= */}

              <div className="border-b border-slate-100 px-6 py-10 sm:px-10 lg:px-12">

                <SectionHeader
                  number="02"
                  title="Contact Information"
                  description="How our team can reach you."
                  icon={<HeartPulse size={22} />}
                />

                <div className="grid gap-5 md:grid-cols-2">

                  <div>

                    <label className={labelClass}>
                      Mobile Number
                      <RequiredStar />
                    </label>

                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Enter your mobile number"
                      className={inputClass("mobile")}
                    />

                    <FieldError field="mobile" />

                  </div>


                  <div>

                    <label className={labelClass}>
                      Alternate Mobile
                      <OptionalText />
                    </label>

                    <input
                      type="tel"
                      name="alternateMobile"
                      value={formData.alternateMobile}
                      onChange={handleChange}
                      placeholder="Alternate mobile number"
                      className={inputClass()}
                    />

                  </div>


                  <div className="md:col-span-2">

                    <label className={labelClass}>
                      Email Address
                      <RequiredStar />
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={inputClass("email")}
                    />

                    <FieldError field="email" />

                  </div>

                </div>

              </div>


              {/* =================================================
                  03 LOCATION
              ================================================= */}

              <div className="border-b border-slate-100 px-6 py-10 sm:px-10 lg:px-12">

                <SectionHeader
                  number="03"
                  title="Location"
                  description="Your current residential details."
                  icon={<MapPin size={22} />}
                />

                <div className="space-y-5">

                  <div>

                    <label className={labelClass}>
                      Full Address
                      <RequiredStar />
                    </label>

                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter your complete address"
                      className={`${inputClass("address")} min-h-[120px] resize-y`}
                    />

                    <FieldError field="address" />

                  </div>


                  <div className="grid gap-5 md:grid-cols-3">

                    <div>

                      <label className={labelClass}>
                        City / District
                        <RequiredStar />
                      </label>

                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="City / District"
                        className={inputClass("city")}
                      />

                      <FieldError field="city" />

                    </div>


                    <div>

                      <label className={labelClass}>
                        State
                        <RequiredStar />
                      </label>

                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="State"
                        className={inputClass("state")}
                      />

                      <FieldError field="state" />

                    </div>


                    <div>

                      <label className={labelClass}>
                        PIN Code
                        <OptionalText />
                      </label>

                      <input
                        type="text"
                        name="pinCode"
                        value={formData.pinCode}
                        onChange={handleChange}
                        placeholder="PIN Code"
                        className={inputClass()}
                      />

                    </div>

                  </div>

                </div>

              </div>


              {/* =================================================
                  04 EDUCATION & OCCUPATION
              ================================================= */}

              <div className="border-b border-slate-100 px-6 py-10 sm:px-10 lg:px-12">

                <SectionHeader
                  number="04"
                  title="Education & Occupation"
                  description="Tell us about your educational and professional background."
                  icon={<BriefcaseBusiness size={22} />}
                />

                <div className="grid gap-5 md:grid-cols-2">

                  <div>

                    <label className={labelClass}>
                      Qualification
                      <RequiredStar />
                    </label>

                    <input
                      type="text"
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleChange}
                      placeholder="Highest Qualification"
                      className={inputClass("qualification")}
                    />

                    <FieldError field="qualification" />

                  </div>


                  <div>

                    <label className={labelClass}>
                      Occupation
                      <OptionalText />
                    </label>

                    <input
                      type="text"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                      placeholder="Occupation"
                      className={inputClass()}
                    />

                  </div>


                  <div className="md:col-span-2">

                    <label className={labelClass}>
                      Organization / College
                      <OptionalText />
                    </label>

                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Organization / College"
                      className={inputClass()}
                    />

                  </div>

                </div>

              </div>


              {/* =================================================
                  05 SKILLS
              ================================================= */}

              <div className="border-b border-slate-100 px-6 py-10 sm:px-10 lg:px-12">

                <SectionHeader
                  number="05"
                  title="Skills & Interests"
                  description="Share the skills and experience you can contribute."
                  icon={<Sparkles size={22} />}
                />

                <label className={labelClass}>
                  Skills, Interests & Experience
                  <RequiredStar />
                </label>

                <textarea
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="Tell us about your skills, interests, experience, technology, design, communication, teaching, event management, etc."
                  className={`${inputClass("skills")} min-h-[150px] resize-y`}
                />

                <FieldError field="skills" />

                <p className="mt-2 text-xs text-slate-400">
                  You can mention multiple skills or areas where you would
                  like to contribute.
                </p>

              </div>


              {/* =================================================
                  06 VOLUNTEERING PREFERENCES
              ================================================= */}

              <div className="border-b border-slate-100 px-6 py-10 sm:px-10 lg:px-12">

                <SectionHeader
                  number="06"
                  title="Volunteering Preferences"
                  description="Help us understand your motivation and availability."
                  icon={<Clock3 size={22} />}
                />

                <div className="space-y-5">

                  <div>

                    <label className={labelClass}>
                      Why do you want to volunteer with Snehal Foundation?
                      <RequiredStar />
                    </label>

                    <textarea
                      name="reasonToJoin"
                      value={formData.reasonToJoin}
                      onChange={handleChange}
                      placeholder="Tell us why you would like to join Snehal Foundation..."
                      className={`${inputClass("reasonToJoin")} min-h-[150px] resize-y`}
                    />

                    <FieldError field="reasonToJoin" />

                  </div>


                  <div className="grid gap-5 md:grid-cols-2">

                    <div>

                      <label className={labelClass}>
                        Available Days
                        <RequiredStar />
                      </label>

                      <input
                        type="text"
                        name="availableDays"
                        value={formData.availableDays}
                        onChange={handleChange}
                        placeholder="e.g. Weekends / Monday to Friday"
                        className={inputClass("availableDays")}
                      />

                      <FieldError field="availableDays" />

                    </div>


                    <div>

                      <label className={labelClass}>
                        Available Time
                        <RequiredStar />
                      </label>

                      <input
                        type="text"
                        name="availableTime"
                        value={formData.availableTime}
                        onChange={handleChange}
                        placeholder="e.g. 10 AM - 2 PM"
                        className={inputClass("availableTime")}
                      />

                      <FieldError field="availableTime" />

                    </div>

                  </div>

                </div>

              </div>


              {/* =================================================
                  07 EMERGENCY CONTACT
              ================================================= */}

              <div className="border-b border-slate-100 px-6 py-10 sm:px-10 lg:px-12">

                <SectionHeader
                  number="07"
                  title="Emergency Contact"
                  description="Optional contact information for emergencies."
                  icon={<Users size={22} />}
                />

                <div className="grid gap-5 md:grid-cols-3">

                  <div>

                    <label className={labelClass}>
                      Name
                      <OptionalText />
                    </label>

                    <input
                      type="text"
                      name="emergencyName"
                      value={formData.emergencyName}
                      onChange={handleChange}
                      placeholder="Emergency Contact Name"
                      className={inputClass()}
                    />

                  </div>


                  <div>

                    <label className={labelClass}>
                      Relation
                      <OptionalText />
                    </label>

                    <input
                      type="text"
                      name="emergencyRelation"
                      value={formData.emergencyRelation}
                      onChange={handleChange}
                      placeholder="Relationship"
                      className={inputClass()}
                    />

                  </div>


                  <div>

                    <label className={labelClass}>
                      Mobile
                      <OptionalText />
                    </label>

                    <input
                      type="tel"
                      name="emergencyMobile"
                      value={formData.emergencyMobile}
                      onChange={handleChange}
                      placeholder="Mobile Number"
                      className={inputClass()}
                    />

                  </div>

                </div>

              </div>


              {/* =================================================
                  DECLARATION + SUBMIT
              ================================================= */}

              <div className="bg-slate-50/70 px-6 py-10 sm:px-10 lg:px-12">

                <div
                  className={`rounded-2xl border p-5 transition-all duration-300 sm:p-6 ${
                    hasError("declaration")
                      ? "border-red-300 bg-red-50"
                      : "border-blue-100 bg-blue-50/70"
                  }`}
                >

                  <div className="mb-4 flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
                      <ShieldCheck size={21} />
                    </div>

                    <div>

                      <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                        Declaration
                      </p>

                      <p className="mt-0.5 text-xs text-slate-500">
                        Please confirm before submitting.
                      </p>

                    </div>

                  </div>


                  <label className="flex cursor-pointer items-start gap-4">

                    <input
                      type="checkbox"
                      name="declaration"
                      checked={formData.declaration}
                      onChange={handleChange}
                      className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-blue-600"
                    />

                    <span className="text-sm leading-7 text-slate-700">
                      I confirm that the information provided above is
                      true and correct to the best of my knowledge.
                      <RequiredStar />
                    </span>

                  </label>

                  <FieldError field="declaration" />

                </div>


                {/* SERVER ERROR */}

                {missingFields.includes("__server_error__") && (
                  <div className="mt-5 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700">

                    <AlertCircle
                      size={19}
                      className="mt-0.5 shrink-0"
                    />

                    <span>
                      Something went wrong while submitting your
                      application. Please try again later.
                    </span>

                  </div>
                )}


                {/* SUBMIT */}

                <button
                  type="submit"
                  disabled={loading}
                  className={`group mt-7 inline-flex w-full items-center justify-center gap-3 rounded-xl px-7 py-4 text-base font-semibold shadow-lg transition-all duration-300 sm:text-lg ${
                    loading
                      ? "cursor-not-allowed bg-slate-400 text-white"
                      : "bg-blue-600 text-white shadow-blue-900/20 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-900/20"
                  }`}
                >

                  {loading ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                      Submitting Application...
                    </>
                  ) : (
                    <>
                      Submit Volunteer Application

                      <ArrowRight
                        size={19}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </>
                  )}

                </button>

                <div className="mt-5 flex items-center justify-center gap-2 text-center text-xs leading-5 text-slate-500">

                  <ShieldCheck size={14} className="shrink-0" />

                  <span>
                    Your application details are submitted securely to
                    Snehal Foundation.
                  </span>

                </div>

              </div>

            </form>

          </div>

        </div>

      </section>


      {/* =====================================================
          BLUE IMPACT SECTION
      ===================================================== */}

      <section className="relative overflow-hidden bg-blue-800 py-20 lg:py-24">

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-blue-950/20 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-md">
            <HeartHandshake size={31} />
          </div>

          <h2 className="mt-7 font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            One Person Can Make a Difference
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/85 sm:text-lg">
            When people come together with compassion, skills and
            purpose, small acts of service can contribute to stronger
            communities and a safer future.
          </p>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="bg-white py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-7 py-12 shadow-2xl shadow-slate-900/10 sm:px-10 lg:px-16 lg:py-14">

            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative flex flex-col gap-9 lg:flex-row lg:items-center lg:justify-between">

              <div className="max-w-3xl">

                <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-300">
                  Your Contribution Matters
                </p>

                <h2 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  Help Build a Safer Future
                </h2>

                <p className="mt-5 text-base leading-8 text-white/70 sm:text-lg">
                  Your time, skills, voice and compassion can help
                  Snehal Foundation protect vulnerable people,
                  empower communities and create opportunities for
                  a more dignified future.
                </p>

              </div>

              <a
                href="#volunteer-form"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-950/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500"
              >
                Join Us

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SUCCESS POPUP
      ===================================================== */}

      {success && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-950/70 px-4 backdrop-blur-sm">

          <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] bg-white p-8 text-center shadow-2xl sm:p-10">

            <div className="absolute left-0 right-0 top-0 h-1.5 bg-blue-600" />

            <button
              type="button"
              onClick={() => setSuccess(false)}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-800"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-blue-600 shadow-inner">
              <CheckCircle2 size={42} />
            </div>

            <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Thank You
            </p>

            <h2 className="mt-3 font-serif text-3xl font-bold text-slate-900">
              Application Submitted!
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Thank you for your interest in volunteering with Snehal
              Foundation. Your application has been submitted
              successfully. Our team will contact you soon.
            </p>

            <button
              type="button"
              onClick={() => setSuccess(false)}
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500"
            >
              Continue
              <ArrowRight size={17} />
            </button>

          </div>

        </div>
      )}

    </main>
  );
};

export default Volunteer;