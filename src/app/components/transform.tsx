"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Signbutton from "./signupbutton";

const Trans = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="relative bg-[#0c001b] flex flex-col items-center justify-center py-8 px-4 md:px-24 h-auto w-full mx-auto overflow-hidden">
      <div className="absolute top-1/2 left-1 -translate-y-1/2 bg-[#5856D6] w-52 h-52 rounded-full blur-3xl z-0"></div>

      <div className="relative flex flex-col lg:flex-row items-center justify-between py-12 px-4 lg:px-14 h-auto w-full mx-auto overflow-hidden max-w-[1864px]">
        <div className="text-left lg:w-[40%] md:hidden " data-aos="fade-up-right">
          <h3 className="text-4xl  font-semibold bg-custom-gradient bg-clip-text text-transparent ">
            Transform Your Visuals with AI: <br />
            Smarter, Faster, Better
          </h3>
          <ul className="text-base lg:text-lg text-gray-300 list-disc pl-4 my-3 flex flex-col items-center justify-center">
            <li>No More Costly Photoshoot</li>
            <li>Faster Time-To-Market</li>
            <li>Consistent High-Quality Imagery</li>
            <li>Seamless Scalability</li>
          </ul>
          <div className="w-full flex items-center justify-center">
            <Signbutton text="Try for Free" px="px-32" />
          </div>
        </div>

        <div className="text-left lg:w-[60%] hidden md:block " data-aos="fade-up-right">
          <h3 className="text-4xl font-semibold bg-custom-gradient bg-clip-text text-transparent ">
            Transform Your Visuals with AI: <br />
            Smarter, Faster, Better
          </h3>
          <ul className="text-base lg:text-lg text-gray-300 list-disc pl-4 my-3 ">
            <li>No More Costly Photoshoot</li>
            <li>Faster Time-To-Market</li>
            <li>Consistent High-Quality Imagery</li>
            <li>Seamless Scalability</li>
          </ul>

          <Signbutton text="Try for Free" px="px-32" />
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 lg:w-1/2 mt-8 lg:mt-0">
          <div className="flex flex-col md:flex-row items-center lg:items-start gap-8 w-full ">
            <div className="relative flex flex-col items-center mb-5" data-aos="fade-up">
              <Image
                src="/visuals.png"
                alt="Before Upload"
                width={280}
                height={280}
                className="rounded-lg"
              />
              <button className="m-0 p-0 !backdrop-blur-md mt-2 lg:mt-20 absolute text-white border border-[#F9D36480] px-5 py-3 rounded-full overflow-hidden bg-black/25 text-sm -bottom-6 -left-4 font-urbanist transition-transform duration-800 hover:scale-[1.045]">
                Before Upload
              </button>
            </div>

            <div className="relative flex flex-col items-center mt-4" data-aos="fade-up-left">
              <Image
                src="/Image (5).png"
                alt="After Result"
                width={320}
                height={320}
                className="rounded-md size-72 md:w-96 md:h-64"
              />

              <button className="absolute -top-8 -left-4 bg-black/25 border border-[#372F7D] px-5 py-3 rounded-full text-white !backdrop-blur-md text-sm overflow-hidden transition-transform duration-800 hover:scale-[1.045]">
                After Result
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trans;
