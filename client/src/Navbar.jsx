import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-gray-900 sticky top-0 z-[1200]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src=""
              className="h-8"
              alt=""
            />
            <span className="self-center text-4xl font-semibold whitespace-nowrap text-white">
              OTA'x
            </span>
          </a>
          <div className="flex rtl:space-x-reverse">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-12 h-12 justify-center text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`w-5 h-5 ${isMenuOpen ? "hidden" : ""}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
              <svg
                className={`w-5 h-5 ${isMenuOpen ? "" : "hidden"}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMenuOpen ? "" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col gap-7 p-4 md:p-0 mt-4 font-medium md:flex-row md:mt-0 ">
              <li>
                <Link
                  to="/"
                  className="block text-xl py-2 px-3 text-gray-100 hover:text-cyan-700 rounded md:bg-transparent md:p-0 "
                  area-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block text-xl py-2 px-3 text-gray-100 rounded hover:text-cyan-700 md:p-0 "
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block text-xl py-2 px-3 text-gray-100 rounded hover:text-cyan-700 md:p-0"
                >
                  Help
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
