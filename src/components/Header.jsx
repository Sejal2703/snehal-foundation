import React from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg py-6 flex flex-col items-center">
      <img src={Logo} alt="Snehal Foundation Logo" className="h-16 w-16 mb-2 animate-bounce" />
      <h1 className="text-3xl font-bold text-white drop-shadow-lg">Snehal Foundation</h1>
      <p className="text-white mt-1 text-lg">Empowering communities through education & care</p>
    </header>
  );
};

export default Header;
