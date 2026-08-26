{/*import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-blue-600"
      : "hover:text-blue-600 transition duration-300";

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-2"
          : "bg-white/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] py-3"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-16">

        {/* Logo *
        <div className="flex items-center space-x-3">
          <img src={Logo} alt="Snehal Foundation" className="h-12 w-12" />
          <span className="font-bold text-xl text-blue-700">
            Snehal Foundation
          </span>
        </div>

        {/* Desktop Menu *
        <ul className="hidden md:flex items-center space-x-8 font-semibold text-gray-700">
          <li><NavLink to="/" className={navLinkStyle}>Home</NavLink></li>
          <li><NavLink to="/about" className={navLinkStyle}>About</NavLink></li>
          <li><NavLink to="/programs" className={navLinkStyle}>Programs</NavLink></li>
          <li><NavLink to="/contact" className={navLinkStyle}>Contact</NavLink></li>

          {/* Highlight Donate Button *
          <li>
            <NavLink
              to="/donate"
              className="bg-yellow-500 text-white px-5 py-2 rounded-full hover:bg-yellow-600 transition duration-300 shadow-md"
            >
              Donate Now
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button *
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu *
      <div
        className={`md:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-5 font-semibold text-gray-700">
          <li><NavLink to="/" onClick={() => setIsOpen(false)} className={navLinkStyle}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={() => setIsOpen(false)} className={navLinkStyle}>About</NavLink></li>
          <li><NavLink to="/programs" onClick={() => setIsOpen(false)} className={navLinkStyle}>Programs</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setIsOpen(false)} className={navLinkStyle}>Contact</NavLink></li>

          <li>
            <NavLink
              to="/donate"
              onClick={() => setIsOpen(false)}
              className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition duration-300 shadow-md"
            >
              Donate Now
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; */}

import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import { NavLink, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  const location = useLocation();

  /* ================= SCROLL EFFECT ================= */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ================= CLOSE MOBILE MENU ON PAGE CHANGE ================= */
  useEffect(() => {
    setIsOpen(false);
    setAboutOpen(false);
    setProgramsOpen(false);
  }, [location.pathname]);

  /* ================= NAV LINK STYLE ================= */
  const navLinkStyle = ({ isActive }) =>
    `transition duration-300 ${
      isActive
        ? "text-blue-600"
        : "text-gray-700 hover:text-blue-600"
    }`;

  /* ================= DROPDOWN LINK STYLE ================= */
  const dropdownLinkStyle = ({ isActive }) =>
    `block px-4 py-3 text-sm transition duration-200 ${
      isActive
        ? "bg-blue-50 text-blue-600 font-semibold"
        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-2"
          : "bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] py-3"
      }`}
    >
      {/* ================= NAVBAR CONTAINER ================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        <div className="flex items-center justify-between">

          {/* ================= LOGO ================= */}
          <NavLink
            to="/"
            className="flex items-center gap-3"
          >
            <img
              src={Logo}
              alt="Snehal Foundation Logo"
              className="h-11 w-11 md:h-12 md:w-12 object-contain"
            />

            <span className="font-bold text-lg md:text-xl text-blue-700 whitespace-nowrap">
              Snehal Foundation
            </span>
          </NavLink>


          {/* ================= DESKTOP MENU ================= */}
          <ul className="hidden md:flex items-center gap-7 lg:gap-9 font-semibold">

            {/* HOME */}
            <li>
              <NavLink
                to="/"
                className={navLinkStyle}
              >
                Home
              </NavLink>
            </li>


            {/* ================= ABOUT DROPDOWN ================= */}
            <li
              className="relative group"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >

              <button
                type="button"
                onClick={() => setAboutOpen(!aboutOpen)}
                className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition duration-300 cursor-pointer"
              >
                About

                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    aboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>


              {/* ABOUT MENU */}
              <div
                className={`absolute left-0 top-full pt-3 transition-all duration-200 ${
                  aboutOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >

                <div className="w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">

                  <NavLink
                    to="/about"
                    className={dropdownLinkStyle}
                  >
                    Who We Are
                  </NavLink>

                  <NavLink
                    to="/about#vision"
                    className={dropdownLinkStyle}
                  >
                    Vision & Mission
                  </NavLink>

                  <NavLink
                    to="/about#philosophy"
                    className={dropdownLinkStyle}
                  >
                    Our Philosophy
                  </NavLink>

                  <NavLink
                    to="/about#values"
                    className={dropdownLinkStyle}
                  >
                    Core Values
                  </NavLink>

                  <NavLink
                    to="/about#goals"
                    className={dropdownLinkStyle}
                  >
                    Long-Term Goals
                  </NavLink>

                  <NavLink
                    to="/about#commitment"
                    className={dropdownLinkStyle}
                  >
                    Our Commitment
                  </NavLink>

                </div>

              </div>

            </li>


            {/* ================= PROGRAMS DROPDOWN ================= */}
            <li
              className="relative"
              onMouseEnter={() => setProgramsOpen(true)}
              onMouseLeave={() => setProgramsOpen(false)}
            >

              <button
                type="button"
                onClick={() => setProgramsOpen(!programsOpen)}
                className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition duration-300 cursor-pointer"
              >
                Programs

                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    programsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>


              {/* PROGRAMS MENU */}
              <div
                className={`absolute left-0 top-full pt-3 transition-all duration-200 ${
                  programsOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >

                <div className="w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">

                  <NavLink
                    to="/programs"
                    className={dropdownLinkStyle}
                  >
                    All Programs
                  </NavLink>

                  <NavLink
                    to="/programs/education"
                    className={dropdownLinkStyle}
                  >
                    Education Support
                  </NavLink>

                  <NavLink
                    to="/programs/healthcare"
                    className={dropdownLinkStyle}
                  >
                    Healthcare Initiatives
                  </NavLink>

                  <NavLink
                    to="/programs/skill-development"
                    className={dropdownLinkStyle}
                  >
                    Skill Development
                  </NavLink>

                </div>

              </div>

            </li>


            {/* CONTACT */}
            <li>
              <NavLink
                to="/contact"
                className={navLinkStyle}
              >
                Contact
              </NavLink>
            </li>


            {/* ================= DONATE BUTTON ================= */}
            <li>
              <NavLink
                to="/donate"
                className="
                  inline-flex items-center
                  bg-yellow-500
                  text-white
                  px-6
                  py-2.5
                  rounded-full
                  hover:bg-yellow-600
                  hover:scale-105
                  transition
                  duration-300
                  shadow-md
                "
              >
                Donate Now
              </NavLink>
            </li>

          </ul>


          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            className="md:hidden text-gray-700 hover:text-blue-600 transition cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>

        </div>


        {/* ================= MOBILE MENU ================= */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen
              ? "max-h-[700px] opacity-100 py-5"
              : "max-h-0 opacity-0"
          }`}
        >

          <ul className="flex flex-col gap-2 font-semibold text-gray-700">


            {/* HOME */}
            <li>
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg transition ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "hover:bg-blue-50 hover:text-blue-600"
                  }`
                }
              >
                Home
              </NavLink>
            </li>


            {/* ================= MOBILE ABOUT ================= */}
            <li>

              <button
                type="button"
                onClick={() => setAboutOpen(!aboutOpen)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition cursor-pointer"
              >
                <span>About</span>

                <ChevronRight
                  size={18}
                  className={`transition-transform duration-300 ${
                    aboutOpen ? "rotate-90" : ""
                  }`}
                />
              </button>


              {aboutOpen && (
                <div className="ml-4 mt-1 border-l-2 border-blue-100">

                  <NavLink
                    to="/about"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-sm hover:text-blue-600"
                  >
                    Who We Are
                  </NavLink>

                  <NavLink
                    to="/about#vision"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-sm hover:text-blue-600"
                  >
                    Vision & Mission
                  </NavLink>

                  <NavLink
                    to="/about#philosophy"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-sm hover:text-blue-600"
                  >
                    Our Philosophy
                  </NavLink>

                  <NavLink
                    to="/about#values"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-sm hover:text-blue-600"
                  >
                    Core Values
                  </NavLink>

                  <NavLink
                    to="/about#goals"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-sm hover:text-blue-600"
                  >
                    Long-Term Goals
                  </NavLink>

                  <NavLink
                    to="/about#commitment"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-sm hover:text-blue-600"
                  >
                    Our Commitment
                  </NavLink>

                </div>
              )}

            </li>


            {/* ================= MOBILE PROGRAMS ================= */}
            <li>

              <button
                type="button"
                onClick={() => setProgramsOpen(!programsOpen)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition cursor-pointer"
              >
                <span>Programs</span>

                <ChevronRight
                  size={18}
                  className={`transition-transform duration-300 ${
                    programsOpen ? "rotate-90" : ""
                  }`}
                />
              </button>


              {programsOpen && (
                <div className="ml-4 mt-1 border-l-2 border-blue-100">

                  <NavLink
                    to="/programs"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-sm hover:text-blue-600"
                  >
                    All Programs
                  </NavLink>

                  <NavLink
                    to="/programs/education"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-sm hover:text-blue-600"
                  >
                    Education Support
                  </NavLink>

                  <NavLink
                    to="/programs/healthcare"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-sm hover:text-blue-600"
                  >
                    Healthcare Initiatives
                  </NavLink>

                  <NavLink
                    to="/programs/skill-development"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-sm hover:text-blue-600"
                  >
                    Skill Development
                  </NavLink>

                </div>
              )}

            </li>


            {/* CONTACT */}
            <li>
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg transition ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "hover:bg-blue-50 hover:text-blue-600"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>


            {/* DONATE */}
            <li className="pt-2">

              <NavLink
                to="/donate"
                onClick={() => setIsOpen(false)}
                className="
                  block
                  text-center
                  bg-yellow-500
                  text-white
                  px-6
                  py-3
                  rounded-full
                  hover:bg-yellow-600
                  transition
                  duration-300
                  shadow-md
                "
              >
                Donate Now
              </NavLink>

            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;