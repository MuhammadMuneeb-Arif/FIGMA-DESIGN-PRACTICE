"use client";
import React, { useState, useEffect } from "react";
import { PrimaryButton, SecondayButton } from "./Buttons";
import { FaBars, FaTimes } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar=() => {
  const text="Sign Up";
  const text2="Log In";
  const [isMenuOpen, setIsMenuOpen]=useState(false);

  const toggleMenu=() => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <div className="bg-transparent absolute top-0 left-0 w-full z-50">
      <div className="text-white ease-out duration-300 transition-all ">

        <div
          className="container mx-auto md:flex justify-between items-center py-5 px-6 hidden"
          data-aos="fade-down"
        >
          <div className="flex items-center gap-6">
            <h1 className="text-base md:text-lg font-semibold">Ai FRAME |</h1>
            <div className="hidden md:flex gap-6">
              <p className="cursor-pointer text-[#FFFFFFB2] hover:text-white transition">
                How It Works
              </p>
              <p className="cursor-pointer text-[#FFFFFFB2] hover:text-white transition">
                Pricing
              </p>
              <p className="cursor-pointer text-[#FFFFFFB2] hover:text-white transition">
                FAQs
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <PrimaryButton classsName="bg-[#140930]" bg="bg-blue-russian-gradient">
              {text2}
            </PrimaryButton>
            <SecondayButton>{text}</SecondayButton>
          </div>
        </div>

        <div
          className="md:hidden container mx-auto flex justify-between items-center py-5 px-6 mb-3 sm:bg-transparent"
          data-aos="fade-down"
        >
          <h1 className="text-base font-semibold">Ai FRAME</h1>
          <button
            className="text-2xl md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen? <FaTimes />:<FaBars />}
          </button>
        </div>
        {isMenuOpen&&(
          <div
            className={`h-screen  w-[75%] transform ${isMenuOpen? 'translate-x-0':'-translate-x-full'} ease-in-out duration-600 transition-all  bg-[#140930] text-white absolute top-0 left-0 md:hidden py-10 px-2`}
          >
            <nav className="flex flex-col py-4 space-y-6">
              <h1 className="text-base md:text-lg font-semibold">Ai FRAME </h1>
              <p className="cursor-pointer text-white hover:text-gray-700 transition">
                How It Works
              </p>
              <p className="cursor-pointer text-white hover:text-gray-700 transition">
                Pricing
              </p>
              <p className="cursor-pointer text-white hover:text-gray-700 transition">
                FAQs
              </p>
            </nav>
            <div className="flex gap-8 px-4">
              <PrimaryButton classsName="bg-[#140930]" bg="bg-blue-russian-gradient">
                {text2}
              </PrimaryButton>
              <SecondayButton>{text}</SecondayButton>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Navbar;
