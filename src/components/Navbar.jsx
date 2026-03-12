import React, { useState, useEffect } from "react";
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
          : "bg-white/90 backdrop-blur-md py-3"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-16">

        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={Logo} alt="Snehal Foundation" className="h-12 w-12" />
          <span className="font-bold text-xl text-blue-700">
            Snehal Foundation
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 font-semibold text-gray-700">
          <li><NavLink to="/" className={navLinkStyle}>Home</NavLink></li>
          <li><NavLink to="/about" className={navLinkStyle}>About</NavLink></li>
          <li><NavLink to="/programs" className={navLinkStyle}>Programs</NavLink></li>
          <li><NavLink to="/contact" className={navLinkStyle}>Contact</NavLink></li>

          {/* Highlight Donate Button */}
          <li>
            <NavLink
              to="/donate"
              className="bg-yellow-500 text-white px-5 py-2 rounded-full hover:bg-yellow-600 transition duration-300 shadow-md"
            >
              Donate Now
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
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

export default Navbar;