"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SecondayButton } from "./Buttons";

const Hero = () => {
  const text = "Try for Free";

  useEffect(() => {
    AOS.init({
      duration: 1500, 
      easing: "ease-in-out",
      once: true, 
        });
  }, []);

  return (
    <div
      className="relative flex items-center justify-center h-80 sm:h-96 lg:h-screen bg-[#0C001B] w-full"
      data-aos="fade-up"
    >
      <img
        src="/hero.svg"
        alt="hero"
        className="absolute top-7 mix-blend-lighten md:top-2 w-full max-w-7xl"
        
      />
      <div
        className="absolute bottom-0 w-full flex items-center justify-between space-y-6 text-center px-4 sm:px-8 lg:flex-row lg:justify-between lg:items-end lg:px-16 lg:space-y-0"
        data-aos="fade-up"
      >
        <p
          className="text-base font-semibold bg-custom-gradient bg-clip-text text-transparent sm:text-lg md:text-2xl lg:text-4xl xl:text-5xl"
          data-aos="fade-right"
        >
          Turn Flat lays into- <br /> model images-instantly
        </p>
        <div>
          <SecondayButton>{text}</SecondayButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
