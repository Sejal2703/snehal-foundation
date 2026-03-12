import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8 text-center">
      <p>© 2025 Snehal Foundation. All rights reserved.</p>
      <div className="flex justify-center mt-4 space-x-6">
        <a href="#" className="hover:text-yellow-400">Facebook</a>
        <a href="#" className="hover:text-yellow-400">Twitter</a>
        <a href="#" className="hover:text-yellow-400">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
