import React from "react";
import { PrimaryButton } from "./Buttons";

const text2="Upgrade";

const PackageCard=({ title, price, time, popPackageButton, popuplarPackage }: any) => {
  return (
    <div
      className={`shadow-custom-purple rounded-3xl hover:shadow-custom-large  relative p-1 w-full sm:p-2 overflow-hidden ${popuplarPackage? "bg-transparent backdrop-blur":""
        }`}
    >
      <div className="p-[1px] bg-blue-russian-gradient rounded-3xl mb-4 sm:mb-6">
        <div className="w-full bg-[#140930] rounded-3xl p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2">{title}</h2>
          <p className="text-sm sm:text-lg md:text-xl text-white mb-4">
            ${price} <span className="text-xs sm:text-sm md:text-base">{time}</span>
          </p>
        </div>
      </div>
      <ul className="list-disc list-inside text-white my-6 sm:my-8 md:my-10 ">
        <li className="text-xs sm:text-sm md:text-base marker:text-[#5856D6] px-2 sm:px-4 md:my-6 my-2">
          Lorem ipsum dolor
        </li>
        <li className="text-xs sm:text-sm md:text-base marker:text-[#5856D6] px-2 sm:px-4 md:my-6 my-2">
          Lorem ipsum dolor
        </li>
        <li className="text-xs sm:text-sm md:text-base marker:text-[#5856D6] px-2 sm:px-4 md:my-6 my-2">
          Lorem ipsum dolor
        </li>
        <li className="text-xs sm:text-sm md:text-base marker:text-[#5856D6] px-2 sm:px-4 md:my-6 my-2">
          Lorem ipsum dolor
        </li>
        <li className="text-xs sm:text-sm md:text-base marker:text-[#5856D6] px-2 sm:px-4 md:my-6 my-2">
          Lorem ipsum dolor
        </li>
      </ul>
      <div className="w-full flex justify-center">
        <PrimaryButton
          classsName={`bg-[#140930] mx-auto ${popPackageButton? "bg-[#5856D6]":""}`}
          bg="bg-blue-russian-gradient"
        >
          {text2}
        </PrimaryButton>
      </div>
      
    </div>
  );
};

export default PackageCard;
