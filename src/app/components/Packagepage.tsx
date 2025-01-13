import React from "react";
import Card from "./packageCard";
import { PrimaryButton, SecondayButton } from "./Buttons";
import Swippercard from "./swippercard";

const PackagePage = () => {
  const text = "Monthly";
  const text2 = "Yearly";
  const packages = [
    {
      title: "Starter",
      price: 240,
      time: "Monthly",
    },
    {
      title: "Professional",
      price: 340,
      time: "Monthly",
    },
    {
      title: "Advance",
      price: 430,
      time: "Monthly",
    },
  ];

  return (
    <div className="flex flex-col lg:h-screen relative  ">
  
      <div className="text-center font-semibold flex flex-col md:flex-row  justify-between items-center mx-6 md:mx-12 lg:mx-36 mt-10">
        <h3 className="text-3xl md:text-4xl bg-custom-gradient bg-clip-text text-transparent mt-10 md:mb-0">
          The Best Package for You
        </h3>
        <div className="justify-center bg-blue-russian-gradient rounded-full p-[1px] hidden  lg:flex ">
          <div className="flex justify-between gap-2 md:gap-3 bg-[#140930] p-1 rounded-full">
            <SecondayButton>{text}</SecondayButton>
            <PrimaryButton>{text2}</PrimaryButton>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 h-full w-full hidden lg:flex items-center     lg:justify-center">

        <div className=" md:flex hidden bg-[#5856D6] h-40 w-20 sm:h-60 sm:w-32 md:h-80 md:w-40 lg:h-96 lg:w-48 rounded-full blur-3xl md:right-"></div>
      </div>

      <div className="lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mx-20 px-2 md:px-6 rounded-md  z-10 hidden">
        {packages.map((packageItem, index) => (
          <Card
            key={index}
            title={packageItem.title}
            price={packageItem.price}
            time={packageItem.time}
            popuplarPackage={packageItem?.title === "Professional"}
            popPackageButton={packageItem?.title === "Professional"}
          />
        ))}
      </div>

      <div className=" lg:hidden mt-10 rounded-3xl">
        <Swippercard />
      </div>
    </div>
  );
};

export default PackagePage;
