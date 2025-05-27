import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar md:w-[80%] mx-auto bg-background relative">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex-1">
          <a href="/" className="text-xl w-[100%] sm:w-auto px-0">
            <img
              src="/Iogo/Foresight.png"
              alt="Foresight Logo"
              className="h-[40px] max-w-full"
            />
          </a>
        </div>

        {/* Hamburger Icon */}
        <div className="flex-none sm:hidden">
          <button onClick={toggleMenu} className="p-2 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="flex-none hidden sm:block opacity-70 backdrop-blur-3xl">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full justify-end backdrop-blur-lg z-10">
          <ul className="menu p-2">
            <li className="border-b border-accent">
              <a href="/">Home</a>
            </li>
            <li className="border-b border-accent">
              <a href="/about">About</a>
            </li>
            <li className="border-b border-accent">
              <a href="/services">Services</a>
            </li>
            <li className="border-b border-accent">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
