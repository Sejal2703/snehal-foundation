
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

    handleScroll();

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
    `transition-all duration-300 ${
      scrolled
        ? isActive
          ? "text-blue-600"
          : "text-gray-700 hover:text-blue-600"
        : isActive
          ? "text-white"
          : "text-white hover:text-yellow-300"
    }`;

  /* ================= DROPDOWN LINK STYLE ================= */

  const dropdownLinkStyle = ({ isActive }) =>
    `block px-5 py-3 text-sm transition-all duration-200 ${
      isActive
        ? "bg-blue-50 text-blue-600 font-semibold"
        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-black/20 backdrop-blur-[2px]"
      }`}
    >
      {/* ================= NAVBAR CONTAINER ================= */}

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        <div className="h-20 flex items-center justify-between">

          {/* ================= LOGO ================= */}

          <NavLink
            to="/"
            className="flex items-center gap-3 group shrink-0"
          >
            <img
              src={Logo}
              alt="Snehal Foundation Logo"
              className="h-11 w-11 md:h-12 md:w-12 object-contain transition-transform duration-300 group-hover:scale-105"
            />

            <span
              className={`font-bold text-lg md:text-xl whitespace-nowrap transition-colors duration-300 ${
                scrolled
                  ? "text-blue-700"
                  : "text-white"
              }`}
            >
              Snehal Foundation
            </span>
          </NavLink>


          {/* ================= DESKTOP MENU ================= */}

          <ul className="hidden md:flex items-center gap-6 lg:gap-8 font-semibold">

            {/* HOME */}

            <li>
              <NavLink
                to="/"
                className={navLinkStyle}
              >
                Home
              </NavLink>
            </li>


            {/* ================= ABOUT ================= */}

            <li
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button
                type="button"
                onClick={() => setAboutOpen(!aboutOpen)}
                className={`flex items-center gap-1 transition-all duration-300 cursor-pointer ${
                  scrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white hover:text-blue-300"
                }`}
              >
                About

                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    aboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>


              {/* ABOUT DROPDOWN */}

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


            {/* ================= PROGRAMS ================= */}

            <li
              className="relative"
              onMouseEnter={() => setProgramsOpen(true)}
              onMouseLeave={() => setProgramsOpen(false)}
            >
              <button
                type="button"
                onClick={() => setProgramsOpen(!programsOpen)}
                className={`flex items-center gap-1 transition-all duration-300 cursor-pointer ${
                  scrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white hover:text-yellow-300"
                }`}
              >
                Programs

                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    programsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>


              {/* PROGRAMS DROPDOWN */}

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


            {/* ================= DONATE ================= */}

            <li>
              <NavLink
                to="/donate"
                className="
                  inline-flex
                  items-center
                  justify-center
                  bg-yellow-500
                  text-white
                  px-6
                  py-2.5
                  rounded-full
                  font-semibold
                  hover:bg-yellow-600
                  hover:scale-105
                  transition-all
                  duration-300
                  shadow-md
                  hover:shadow-lg
                "
              >
                Donate Now
              </NavLink>
            </li>

          </ul>


          {/* ================= MOBILE BUTTON ================= */}

          <button
            type="button"
            aria-label="Toggle navigation menu"
            className={`md:hidden transition-colors duration-300 ${
              scrolled
                ? "text-gray-700 hover:text-blue-600"
                : "text-white hover:text-yellow-300"
            }`}
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
              ? "max-h-[700px] opacity-100 py-4"
              : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`rounded-2xl p-3 ${
              scrolled
                ? "bg-white shadow-lg border border-gray-100"
                : "bg-black/60 backdrop-blur-md"
            }`}
          >

            <ul className="flex flex-col gap-1 font-semibold">

              {/* HOME */}

              <li>
                <NavLink
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg transition ${
                      isActive
                        ? scrolled
                          ? "bg-blue-50 text-blue-600"
                          : "bg-white/10 text-yellow-300"
                        : scrolled
                          ? "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          : "text-white hover:bg-white/10 hover:text-yellow-300"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>


              {/* ABOUT */}

              <li>
                <button
                  type="button"
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition ${
                    scrolled
                      ? "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      : "text-white hover:bg-white/10 hover:text-yellow-300"
                  }`}
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
                  <div
                    className={`ml-4 mt-1 border-l-2 ${
                      scrolled
                        ? "border-blue-100"
                        : "border-white/30"
                    }`}
                  >

                    <NavLink
                      to="/about"
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 text-sm ${
                        scrolled
                          ? "text-white hover:text-blue-600"
                          : "text-white hover:text-yellow-300"
                      }`}
                    >
                      Who We Are
                    </NavLink>

                    <NavLink
                      to="/about#vision"
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 text-sm ${
                        scrolled
                          ? "text-gray-700 hover:text-blue-600"
                          : "text-white hover:text-yellow-300"
                      }`}
                    >
                      Vision & Mission
                    </NavLink>

                    <NavLink
                      to="/about#philosophy"
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 text-sm ${
                        scrolled
                          ? "text-gray-700 hover:text-blue-600"
                          : "text-white hover:text-yellow-300"
                      }`}
                    >
                      Our Philosophy
                    </NavLink>

                    <NavLink
                      to="/about#values"
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 text-sm ${
                        scrolled
                          ? "text-gray-700 hover:text-blue-600"
                          : "text-white hover:text-yellow-300"
                      }`}
                    >
                      Core Values
                    </NavLink>

                    <NavLink
                      to="/about#goals"
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 text-sm ${
                        scrolled
                          ? "text-gray-700 hover:text-blue-600"
                          : "text-white hover:text-yellow-300"
                      }`}
                    >
                      Long-Term Goals
                    </NavLink>

                    <NavLink
                      to="/about#commitment"
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 text-sm ${
                        scrolled
                          ? "text-gray-700 hover:text-blue-600"
                          : "text-white hover:text-yellow-300"
                      }`}
                    >
                      Our Commitment
                    </NavLink>

                  </div>
                )}
              </li>


              {/* PROGRAMS */}

              <li>
                <button
                  type="button"
                  onClick={() => setProgramsOpen(!programsOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition ${
                    scrolled
                      ? "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      : "text-white hover:bg-white/10 hover:text-yellow-300"
                  }`}
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
                  <div
                    className={`ml-4 mt-1 border-l-2 ${
                      scrolled
                        ? "border-blue-100"
                        : "border-white/30"
                    }`}
                  >

                    <NavLink
                      to="/programs"
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 text-sm ${
                        scrolled
                          ? "text-gray-700 hover:text-blue-600"
                          : "text-white hover:text-yellow-300"
                      }`}
                    >
                      All Programs
                    </NavLink>

                    <NavLink
                      to="/programs/education"
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 text-sm ${
                        scrolled
                          ? "text-gray-700 hover:text-blue-600"
                          : "text-white hover:text-yellow-300"
                      }`}
                    >
                      Education Support
                    </NavLink>

                    <NavLink
                      to="/programs/healthcare"
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 text-sm ${
                        scrolled
                          ? "text-gray-700 hover:text-blue-600"
                          : "text-white hover:text-yellow-300"
                      }`}
                    >
                      Healthcare Initiatives
                    </NavLink>

                    <NavLink
                      to="/programs/skill-development"
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 text-sm ${
                        scrolled
                          ? "text-gray-700 hover:text-blue-600"
                          : "text-white hover:text-yellow-300"
                      }`}
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
                        ? scrolled
                          ? "bg-blue-50 text-blue-600"
                          : "bg-white/10 text-yellow-300"
                        : scrolled
                          ? "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          : "text-white hover:bg-white/10 hover:text-yellow-300"
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
                    transition-all
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

      </div>
    </nav>
  );
};

export default Navbar;

