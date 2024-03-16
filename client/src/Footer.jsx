import React from "react";
import { FaRegPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link
import GoogleMapEmbed from "./Map";

function Footer() {
  const sharedHtmlCode = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.9681202507627!2d78.2045770752706!3d26.230225377060542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c14c64938e5f%3A0x87b3d6a725f7b077!2sMadhav%20Institute%20of%20Technology%20%26%20Science%2C%20Gwalior!5e0!3m2!1sen!2sin!4v1710530619909!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  return (
    <>
      <footer className="bg-gray-900 ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              to=""
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src="" className="h-8" alt="" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                OTA'x
              </span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 text-gray-400">
              <li>
                <Link to="/about" className="hover:underline  text-lg me-4 md:me-6">
                  About
                </Link>
              </li>
              <li>
                <Link to="/PrivacyPolicy" className="hover:underline text-lg me-4 md:me-6">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="https://www.termsandconditionsgenerator.com/live.php?token=ad0x82fRGXLbZQPeXAY9FdPgAZfL0hXQ" target="__blank" className="hover:underline text-lg me-4 md:me-6">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-4 sm:mx-auto border-gray-700 lg:my-6" />

          <div className="p-4 flex flex-col lg:flex-row gap-20">
            <div>
            <h1 className="text-white text-xl font-bold ">
              Get frequent updates
            </h1>
            <p className="text-white text-md">
              Subscribe our newsletter and you'll be among the first to find out
              about new features, components, versions, and tools.
            </p>
            <div className="flex items-center gap-2 py-6">
              <input
                className="bg-gray-300 text-gray-900 p-2 relative w-[20rem] h-[3rem] outline-none border-2 border-gray-500 rounded-md text-lg "
                id="subs"
                type="email"
                placeholder="Enter Email Address..."
              />
              <label
                className="bg-gray-300 w-[48px] h-[48px] border-2 border-gray-500 rounded-md flex justify-center items-center"
                htmlFor="subs"
              >
                <FaRegPaperPlane className="w-[28px] h-[28px]" />
              </label>
            </div>
            <p className="text-white text-md">
              By subscribing, you agree with our{" "}
              <a href="https://www.termsandconditionsgenerator.com/live.php?token=ad0x82fRGXLbZQPeXAY9FdPgAZfL0hXQ" className="text-blue-500">Terms of Service</a> and{" "}
              <span className="text-blue-500">Privacy Policy</span>.
            </p>
            </div>
            <div>
              <div className="App">
                <GoogleMapEmbed htmlCode={sharedHtmlCode} />
              </div>
            </div>
          </div>

          <span className="block text-sm sm:text-center mt-5 text-gray-400">
            © 2024{" "}
            <a href="" className="hover:underline">
              OTA'x
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
