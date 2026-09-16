import React, { useState, useEffect } from "react";
import logo from "../assets/logo1.jpeg";

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

  /* =====================================================
     SCROLL EFFECT
  ===================================================== */

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

  /* =====================================================
     CLOSE MOBILE MENU ON PAGE CHANGE
  ===================================================== */

  useEffect(() => {
    setIsOpen(false);
    setAboutOpen(false);
    setProgramsOpen(false);
  }, [location.pathname]);

  /* =====================================================
     DESKTOP NAV LINK STYLE
  ===================================================== */

  const navLinkStyle = ({ isActive }) =>
    `
      relative
      transition-all
      duration-300
      after:absolute
      after:left-0
      after:-bottom-2
      after:h-[2px]
      after:w-full
      after:origin-left
      after:scale-x-0
      after:rounded-full
      after:transition-transform
      after:duration-300
      hover:after:scale-x-100
      ${
        scrolled
          ? isActive
            ? "text-blue-600 after:bg-blue-600"
            : "text-slate-700 hover:text-blue-600 after:bg-blue-600"
          : isActive
            ? "text-white after:bg-blue-300"
            : "text-white/95 hover:text-blue-300 after:bg-blue-300"
      }
    `;

  /* =====================================================
     DROPDOWN LINK STYLE
  ===================================================== */

  const dropdownLinkStyle = ({ isActive }) =>
    `
      group
      relative
      flex
      items-center
      justify-between
      px-5
      py-3.5
      text-sm
      transition-all
      duration-200
      ${
        isActive
          ? "bg-blue-50 text-blue-700 font-semibold"
          : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
      }
    `;

  /* =====================================================
     MOBILE LINK STYLE
  ===================================================== */

  const mobileLinkStyle = ({ isActive }) =>
    `
      block
      px-4
      py-3
      rounded-xl
      transition-all
      duration-300
      ${
        isActive
          ? scrolled
            ? "bg-blue-600 text-white shadow-sm"
            : "bg-blue-600/80 text-white shadow-sm"
          : scrolled
            ? "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
            : "text-white hover:bg-white/10 hover:text-blue-300"
      }
    `;

  /* =====================================================
     MOBILE SUB LINK STYLE
  ===================================================== */

  const mobileSubLinkStyle = ({ isActive }) =>
    `
      block
      px-4
      py-2.5
      rounded-lg
      text-sm
      transition-all
      duration-200
      ${
        isActive
          ? scrolled
            ? "bg-blue-50 text-blue-700 font-semibold"
            : "bg-white/10 text-blue-300 font-semibold"
          : scrolled
            ? "text-slate-600 hover:bg-blue-50 hover:text-blue-700"
            : "text-white/90 hover:bg-white/10 hover:text-blue-300"
      }
    `;

  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        z-50
        w-full
        transition-all
        duration-500
        ${
          scrolled
            ? `
              bg-white/95
              backdrop-blur-xl
              border-b
              border-slate-200/70
              shadow-[0_8px_30px_rgba(15,23,42,0.08)]
            `
            : `
              bg-slate-950/15
              backdrop-blur-[3px]
              border-b
              border-white/10
            `
        }
      `}
    >

      {/* =================================================
          NAVBAR CONTAINER
      ================================================= */}

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10 lg:px-16">

        <div
          className={`
            flex
            items-center
            justify-between
            transition-all
            duration-500
            ${
              scrolled
                ? "h-[78px]"
                : "h-[88px]"
            }
          `}
        >

          {/* =================================================
              LOGO
          ================================================= */}

          <NavLink
            to="/"
            className="group flex shrink-0 items-center gap-3"
          >

            <div
              className={`
                relative
                flex
                items-center
                justify-center
                overflow-hidden
                rounded-full
                transition-all
                duration-500
                ${
                  scrolled
                    ? "h-10 w-10 md:h-11 md:w-11"
                    : "h-11 w-11 md:h-12 md:w-12"
                }
              `}
            >

              <img
                src={logo}
                alt="Snehal Foundation Logo"
                className="
                  h-full
                  w-full
                  object-contain
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />

            </div>

            <span
              className={`
                whitespace-nowrap
                text-base
                font-bold
                tracking-[-0.01em]
                transition-all
                duration-500
                sm:text-lg
                md:text-xl
                ${
                  scrolled
                    ? "text-blue-700"
                    : "text-white"
                }
              `}
            >
              Snehal Foundation
            </span>

          </NavLink>


          {/* =================================================
              DESKTOP MENU
          ================================================= */}

          <ul
            className="
              hidden
              items-center
              gap-7
              font-semibold
              md:flex
              lg:gap-9
            "
          >

            {/* ================= HOME ================= */}

            <li>
              <NavLink
                to="/"
                className={navLinkStyle}
              >
                Home
              </NavLink>
            </li>


            {/* =================================================
                ABOUT DROPDOWN
            ================================================= */}

            <li
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >

              <button
                type="button"
                onClick={() => setAboutOpen(!aboutOpen)}
                className={`
                  relative
                  flex
                  cursor-pointer
                  items-center
                  gap-1.5
                  font-semibold
                  transition-all
                  duration-300
                  ${
                    scrolled
                      ? "text-slate-700 hover:text-blue-600"
                      : "text-white hover:text-blue-300"
                  }
                `}
              >
                About

                <ChevronDown
                  size={15}
                  strokeWidth={2}
                  className={`
                    transition-transform
                    duration-300
                    ${
                      aboutOpen
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />

              </button>


              {/* ABOUT DROPDOWN */}

              <div
                className={`
                  absolute
                  left-1/2
                  top-full
                  pt-4
                  -translate-x-1/2
                  transition-all
                  duration-300
                  ${
                    aboutOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-2 opacity-0"
                  }
                `}
              >

                <div
                  className="
                    relative
                    w-64
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    shadow-[0_20px_50px_rgba(15,23,42,0.14)]
                  "
                >

                  {/* TOP ACCENT */}

                  <div className="absolute inset-x-0 top-0 h-1 bg-blue-600" />

                  <div className="pt-1">

                    <NavLink
                      to="/about"
                      className={dropdownLinkStyle}
                    >
                      Who We Are

                      <ChevronRight
                        size={15}
                        className="
                          opacity-0
                          -translate-x-1
                          transition-all
                          duration-200
                          group-hover:translate-x-0
                          group-hover:opacity-100
                        "
                      />
                    </NavLink>


                    <NavLink
                      to="/about#vision"
                      className={dropdownLinkStyle}
                    >
                      Vision

                      <ChevronRight
                        size={15}
                        className="
                          opacity-0
                          -translate-x-1
                          transition-all
                          duration-200
                          group-hover:translate-x-0
                          group-hover:opacity-100
                        "
                      />
                    </NavLink>


                    <NavLink
                      to="/about#mission"
                      className={dropdownLinkStyle}
                    >
                      Mission

                      <ChevronRight
                        size={15}
                        className="
                          opacity-0
                          -translate-x-1
                          transition-all
                          duration-200
                          group-hover:translate-x-0
                          group-hover:opacity-100
                        "
                      />
                    </NavLink>


                    <NavLink
                      to="/about#direction"
                      className={dropdownLinkStyle}
                    >
                      Strategic Direction

                      <ChevronRight
                        size={15}
                        className="
                          opacity-0
                          -translate-x-1
                          transition-all
                          duration-200
                          group-hover:translate-x-0
                          group-hover:opacity-100
                        "
                      />
                    </NavLink>


                    <NavLink
                      to="/about#motto"
                      className={dropdownLinkStyle}
                    >
                      Our Motto

                      <ChevronRight
                        size={15}
                        className="
                          opacity-0
                          -translate-x-1
                          transition-all
                          duration-200
                          group-hover:translate-x-0
                          group-hover:opacity-100
                        "
                      />
                    </NavLink>


                    <NavLink
                      to="/about#values"
                      className={dropdownLinkStyle}
                    >
                      Core Values

                      <ChevronRight
                        size={15}
                        className="
                          opacity-0
                          -translate-x-1
                          transition-all
                          duration-200
                          group-hover:translate-x-0
                          group-hover:opacity-100
                        "
                      />
                    </NavLink>


                    <NavLink
                      to="/about#commitment"
                      className={dropdownLinkStyle}
                    >
                      Our Commitment

                      <ChevronRight
                        size={15}
                        className="
                          opacity-0
                          -translate-x-1
                          transition-all
                          duration-200
                          group-hover:translate-x-0
                          group-hover:opacity-100
                        "
                      />
                    </NavLink>

                  </div>

                </div>

              </div>

            </li>


            {/* =================================================
                PROGRAMS DROPDOWN
            ================================================= */}

            <li
              className="relative"
              onMouseEnter={() => setProgramsOpen(true)}
              onMouseLeave={() => setProgramsOpen(false)}
            >

              <button
                type="button"
                onClick={() => setProgramsOpen(!programsOpen)}
                className={`
                  relative
                  flex
                  cursor-pointer
                  items-center
                  gap-1.5
                  font-semibold
                  transition-all
                  duration-300
                  ${
                    scrolled
                      ? "text-slate-700 hover:text-blue-600"
                      : "text-white hover:text-blue-300"
                  }
                `}
              >
                Programs

                <ChevronDown
                  size={15}
                  strokeWidth={2}
                  className={`
                    transition-transform
                    duration-300
                    ${
                      programsOpen
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />

              </button>


              {/* PROGRAMS DROPDOWN */}

              <div
                className={`
                  absolute
                  left-1/2
                  top-full
                  pt-4
                  -translate-x-1/2
                  transition-all
                  duration-300
                  ${
                    programsOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-2 opacity-0"
                  }
                `}
              >

                <div
                  className="
                    relative
                    w-64
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    shadow-[0_20px_50px_rgba(15,23,42,0.14)]
                  "
                >

                  {/* TOP ACCENT */}

                  <div className="absolute inset-x-0 top-0 h-1 bg-blue-600" />

                  <div className="pt-1">

                    <NavLink
                      to="/programs"
                      className={dropdownLinkStyle}
                    >
                      All Programs

                      <ChevronRight
                        size={15}
                        className="
                          opacity-0
                          -translate-x-1
                          transition-all
                          duration-200
                          group-hover:translate-x-0
                          group-hover:opacity-100
                        "
                      />
                    </NavLink>


                    <NavLink
                      to="/programs/education"
                      className={dropdownLinkStyle}
                    >
                      Education Support

                      <ChevronRight
                        size={15}
                        className="
                          opacity-0
                          -translate-x-1
                          transition-all
                          duration-200
                          group-hover:translate-x-0
                          group-hover:opacity-100
                        "
                      />
                    </NavLink>


                    <NavLink
                      to="/programs/healthcare"
                      className={dropdownLinkStyle}
                    >
                      Healthcare Initiatives

                      <ChevronRight
                        size={15}
                        className="
                          opacity-0
                          -translate-x-1
                          transition-all
                          duration-200
                          group-hover:translate-x-0
                          group-hover:opacity-100
                        "
                      />
                    </NavLink>


                    <NavLink
                      to="/programs/skill-development"
                      className={dropdownLinkStyle}
                    >
                      Skill Development

                      <ChevronRight
                        size={15}
                        className="
                          opacity-0
                          -translate-x-1
                          transition-all
                          duration-200
                          group-hover:translate-x-0
                          group-hover:opacity-100
                        "
                      />
                    </NavLink>

                  </div>

                </div>

              </div>

            </li>


            {/* ================= CONTACT ================= */}

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
                  group
                  relative
                  inline-flex
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  bg-blue-600
                  px-6
                  py-2.5
                  font-semibold
                  text-white
                  shadow-[0_8px_20px_rgba(37,99,235,0.22)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-blue-700
                  hover:shadow-[0_12px_25px_rgba(37,99,235,0.30)]
                "
              >

                <span className="relative z-10">
                  Donate Now
                </span>

                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/15
                    to-transparent
                    transition-transform
                    duration-700
                    group-hover:translate-x-full
                  "
                />

              </NavLink>

            </li>

          </ul>


          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            aria-label={
              isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isOpen}
            className={`
              rounded-xl
              p-2
              transition-all
              duration-300
              md:hidden
              ${
                scrolled
                  ? "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                  : "text-white hover:bg-white/10 hover:text-blue-300"
              }
            `}
            onClick={() => setIsOpen(!isOpen)}
          >

            {isOpen ? (
              <X size={27} strokeWidth={1.8} />
            ) : (
              <Menu size={27} strokeWidth={1.8} />
            )}

          </button>

        </div>


        {/* =================================================
            MOBILE MENU
        ================================================= */}

        <div
          className={`
            overflow-hidden
            transition-all
            duration-500
            ease-out
            md:hidden
            ${
              isOpen
                ? "max-h-[800px] pb-5 opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >

          <div
            className={`
              rounded-2xl
              border
              p-3
              shadow-[0_20px_50px_rgba(15,23,42,0.12)]
              ${
                scrolled
                  ? "border-slate-200 bg-white/98 backdrop-blur-xl"
                  : "border-white/15 bg-slate-950/75 backdrop-blur-xl"
              }
            `}
          >

            <ul className="flex flex-col gap-1 font-semibold">

              {/* ================= HOME ================= */}

              <li>

                <NavLink
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className={mobileLinkStyle}
                >
                  Home
                </NavLink>

              </li>


              {/* =================================================
                  ABOUT
              ================================================= */}

              <li>

                <button
                  type="button"
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className={`
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-xl
                    px-4
                    py-3
                    transition-all
                    duration-300
                    ${
                      scrolled
                        ? "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                        : "text-white hover:bg-white/10 hover:text-blue-300"
                    }
                  `}
                >

                  <span>About</span>

                  <ChevronRight
                    size={18}
                    strokeWidth={2}
                    className={`
                      transition-transform
                      duration-300
                      ${
                        aboutOpen
                          ? "rotate-90"
                          : ""
                      }
                    `}
                  />

                </button>


                {aboutOpen && (

                  <div
                    className={`
                      ml-3
                      mt-1
                      space-y-1
                      border-l-2
                      pl-2
                      ${
                        scrolled
                          ? "border-blue-100"
                          : "border-white/20"
                      }
                    `}
                  >

                    <NavLink
                      to="/about"
                      onClick={() => setIsOpen(false)}
                      className={mobileSubLinkStyle}
                    >
                      Who We Are
                    </NavLink>


                    <NavLink
                      to="/about#vision"
                      onClick={() => setIsOpen(false)}
                      className={mobileSubLinkStyle}
                    >
                      Vision & Mission
                    </NavLink>


                    <NavLink
                      to="/about#philosophy"
                      onClick={() => setIsOpen(false)}
                      className={mobileSubLinkStyle}
                    >
                      Our Philosophy
                    </NavLink>


                    <NavLink
                      to="/about#values"
                      onClick={() => setIsOpen(false)}
                      className={mobileSubLinkStyle}
                    >
                      Core Values
                    </NavLink>


                    <NavLink
                      to="/about#goals"
                      onClick={() => setIsOpen(false)}
                      className={mobileSubLinkStyle}
                    >
                      Long-Term Goals
                    </NavLink>


                    <NavLink
                      to="/about#commitment"
                      onClick={() => setIsOpen(false)}
                      className={mobileSubLinkStyle}
                    >
                      Our Commitment
                    </NavLink>

                  </div>

                )}

              </li>


              {/* =================================================
                  PROGRAMS
              ================================================= */}

              <li>

                <button
                  type="button"
                  onClick={() =>
                    setProgramsOpen(!programsOpen)
                  }
                  className={`
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-xl
                    px-4
                    py-3
                    transition-all
                    duration-300
                    ${
                      scrolled
                        ? "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                        : "text-white hover:bg-white/10 hover:text-blue-300"
                    }
                  `}
                >

                  <span>Programs</span>

                  <ChevronRight
                    size={18}
                    strokeWidth={2}
                    className={`
                      transition-transform
                      duration-300
                      ${
                        programsOpen
                          ? "rotate-90"
                          : ""
                      }
                    `}
                  />

                </button>


                {programsOpen && (

                  <div
                    className={`
                      ml-3
                      mt-1
                      space-y-1
                      border-l-2
                      pl-2
                      ${
                        scrolled
                          ? "border-blue-100"
                          : "border-white/20"
                      }
                    `}
                  >

                    <NavLink
                      to="/programs"
                      onClick={() => setIsOpen(false)}
                      className={mobileSubLinkStyle}
                    >
                      All Programs
                    </NavLink>


                    <NavLink
                      to="/programs/education"
                      onClick={() => setIsOpen(false)}
                      className={mobileSubLinkStyle}
                    >
                      Education Support
                    </NavLink>


                    <NavLink
                      to="/programs/healthcare"
                      onClick={() => setIsOpen(false)}
                      className={mobileSubLinkStyle}
                    >
                      Healthcare Initiatives
                    </NavLink>


                    <NavLink
                      to="/programs/skill-development"
                      onClick={() => setIsOpen(false)}
                      className={mobileSubLinkStyle}
                    >
                      Skill Development
                    </NavLink>

                  </div>

                )}

              </li>


              {/* ================= CONTACT ================= */}

              <li>

                <NavLink
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className={mobileLinkStyle}
                >
                  Contact
                </NavLink>

              </li>


              {/* ================= DONATE ================= */}

              <li className="pt-2">

                <NavLink
                  to="/donate"
                  onClick={() => setIsOpen(false)}
                  className="
                    block
                    rounded-full
                    bg-blue-600
                    px-6
                    py-3
                    text-center
                    font-semibold
                    text-white
                    shadow-[0_8px_20px_rgba(37,99,235,0.22)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-blue-700
                    hover:shadow-[0_12px_25px_rgba(37,99,235,0.28)]
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