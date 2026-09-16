
import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ChevronRight,
} from "lucide-react";

import logo from "../assets/logo1.jpeg";

const Footer = () => {
  return (
    <footer className="relative z-[200] bg-black text-white">

      {/* =====================================================
          TOP CTA SECTION
      ===================================================== */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-10 md:py-12">

          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">

            {/* ================= LOGO ================= */}
            <div className="shrink-0">
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-white p-2 flex items-center justify-center shadow-lg">
                <img
                  src={logo}
                  alt="Snehal Foundation"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
            </div>

            {/* ================= CTA TEXT ================= */}
            <div className="flex-1 text-center lg:text-left">

              <p className="text-blue-400 uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold">
                Be a Part of the Change
              </p>

              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-white">
                Together, We Can Make a Difference
              </h2>

              <p className="mt-3 text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
                Your support, time and compassion can help us build safer
                communities and create meaningful opportunities.
              </p>

            </div>

            {/* ================= BUTTONS ================= */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 shrink-0">

              <Link
                to="/donate"
                className="inline-flex items-center justify-center
                bg-blue-600 hover:bg-blue-700
                text-white px-7 py-3.5
                rounded-full font-semibold
                transition-all duration-300
                hover:scale-105 shadow-lg
                whitespace-nowrap"
              >
                Donate Now →
              </Link>

              <Link
                to="/volunteer"
                className="inline-flex items-center justify-center
                border-2 border-white
                text-white hover:bg-white hover:text-black
                px-7 py-3.5
                rounded-full font-semibold
                transition-all duration-300
                hover:scale-105
                whitespace-nowrap"
              >
                Become a Volunteer
              </Link>

            </div>

          </div>

        </div>
      </div>

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-12 md:py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* =================================================
              COLUMN 1 — ABOUT
          ================================================= */}
          <div>

            <h3 className="text-2xl font-bold font-serif text-white">
              Snehal Foundation
            </h3>

            <div className="h-1 w-14 bg-blue-600 rounded-full mt-4 mb-6"></div>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Snehal Foundation is committed to creating a safer, more
              dignified and empowered society through education,
              healthcare, rehabilitation, skill development and
              community support.
            </p>

            <p className="mt-5 text-blue-400 font-serif italic text-lg font-semibold">
              Hope Begins Where Fear Ends.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-7">

              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
              >
                <Facebook size={19} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
              >
                <Instagram size={19} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
              >
                <Linkedin size={19} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
              >
                <Youtube size={19} />
              </a>

            </div>

          </div>

          {/* =================================================
              COLUMN 2 — QUICK LINKS
          ================================================= */}
          <div>

            <h3 className="text-2xl font-bold font-serif text-white">
              Quick Links
            </h3>

            <div className="h-1 w-14 bg-blue-600 rounded-full mt-4 mb-6"></div>

            <div className="space-y-4">

              {/* Home */}
              <Link
                to="/"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <ChevronRight size={17} className="text-blue-500" />
                Home
              </Link>

              {/* About */}
              <Link
                to="/about"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <ChevronRight size={17} className="text-blue-500" />
                About Us
              </Link>

              {/* Our Founder */}
              <Link
                to="/our-team"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <ChevronRight size={17} className="text-blue-500" />
                Our Founder
              </Link>

              {/* Our Team */}
              <Link
                to="/our-team"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <ChevronRight size={17} className="text-blue-500" />
                Our Team
              </Link>

              {/* Programs */}
              <Link
                to="/programs"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <ChevronRight size={17} className="text-blue-500" />
                Our Programs
              </Link>

              {/* Contact */}
              <Link
                to="/contact"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <ChevronRight size={17} className="text-blue-500" />
                Contact Us
              </Link>

            </div>

          </div>

          {/* =================================================
              COLUMN 3 — PROGRAMS
          ================================================= */}
          <div>

            <h3 className="text-2xl font-bold font-serif text-white">
              Our Programs
            </h3>

            <div className="h-1 w-14 bg-blue-600 rounded-full mt-4 mb-6"></div>

            <div className="space-y-4">

              {/* Education */}
              <Link
                to="/programs/education"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <ChevronRight size={17} className="text-blue-500" />
                Education
              </Link>

              {/* Healthcare */}
              <Link
                to="/programs/healthcare"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <ChevronRight size={17} className="text-blue-500" />
                Healthcare
              </Link>

              {/* Skill Development */}
              <Link
                to="/programs/skill-development"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <ChevronRight size={17} className="text-blue-500" />
                Skill Development
              </Link>

              {/* All Programs */}
              <Link
                to="/programs"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <ChevronRight size={17} className="text-blue-500" />
                All Programs
              </Link>

            </div>

            <Link
              to="/programs"
              className="inline-block mt-7 text-blue-500 font-semibold hover:text-blue-400 transition-colors"
            >
              Explore All Programs →
            </Link>

          </div>

          {/* =================================================
              COLUMN 4 — GET INVOLVED + CONTACT
          ================================================= */}
          <div>

            <h3 className="text-2xl font-bold font-serif text-white">
              Get Involved
            </h3>

            <div className="h-1 w-14 bg-blue-600 rounded-full mt-4 mb-6"></div>

            <div className="space-y-4">

              {/* Volunteer */}
              <Link
                to="/volunteer"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <ChevronRight size={17} className="text-blue-500" />
                Become a Volunteer
              </Link>

              {/* Donate */}
              <Link
                to="/donate"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <ChevronRight size={17} className="text-blue-500" />
                Donate Now
              </Link>

              {/* Partner */}
              <Link
                to="/contact"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <ChevronRight size={17} className="text-blue-500" />
                Partner With Us
              </Link>

              {/* Contact */}
              <Link
                to="/contact"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <ChevronRight size={17} className="text-blue-500" />
                Contact Us
              </Link>

            </div>

            {/* CONTACT */}
            <h3 className="text-2xl font-bold font-serif text-white mt-10">
              Contact Us
            </h3>

            <div className="h-1 w-14 bg-blue-600 rounded-full mt-4 mb-5"></div>

            <div className="space-y-4">

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin
                  size={30}
                  className="text-blue-500 shrink-0 mt-0.5"
                />

                <p className="text-gray-400 text-sm leading-relaxed">
                  Pune , Maharashtra
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone
                  size={30}
                  className="text-blue-500 shrink-0"
                />

                <p className="text-gray-400 text-sm">
                  +91 XXXXX XXXXX
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail
                  size={30}
                  className="text-blue-500 shrink-0"
                />

                <p className="text-gray-400 text-sm break-all">
                  info@snehalfoundation.org
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          BOTTOM COPYRIGHT
      ===================================================== */}
      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-5">

          <div className="flex flex-col md:flex-row items-center justify-between gap-3">

            <p className="text-gray-300 text-sm text-center md:text-left">
              © 2026 Snehal Foundation. All Rights Reserved.
            </p>

            <div className="flex items-center gap-4 text-sm">

              <Link
                to="/privacy-policy"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>

              <span className="text-gray-700">|</span>

              <Link
                to="/terms"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
