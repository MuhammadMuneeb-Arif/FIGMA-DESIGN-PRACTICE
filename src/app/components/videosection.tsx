"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Videosection=() => {
  const [isVisible, setIsVisible]=useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);


  const handleClick=() => {
    setIsVisible(false);
  };
  return (
    <div className="h-auto bg-[#0c001b] text-white flex flex-col text-centre justify-center ">
      <div className="flex flex-col items-center justify-center relative  py-6  ">
        <h2 className="md:text-5xl text-3xl font-semibold bg-custom-gradient bg-clip-text mt-10 text-transparent" data-aos="fade-up">
          Demo Video
        </h2>
        <p className="text-sm font-medium mt-2 bg-custom-gradient bg-clip-text text-transparent" data-aos="fade-up">
          See How It Works in Action
        </p>
      </div>


      <div className="flex justify-center mt-4 ">

        <div className="shadow-custom-purple hover:shadow-custom-large bg-blue-russian-gradient rounded-md w-[80%] md:w-3/4 h-[135px] md:h-[435px] p-[1px]  " data-aos="fade-up">

          <div
            className="w-full h-[132px] md:h-[432px] bg-[#140930] rounded-md flex items-center justify-center"
            onClick={handleClick} >
            {isVisible&&(
              <img
                src="/Vector.png"
                alt="image"
                className="w-[50px] h-[50px]"
              />
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Videosection;
