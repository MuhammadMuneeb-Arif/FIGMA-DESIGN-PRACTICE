import React from "react";

type CardProps = {
  url: string;
  title: string;
  text: string;
};

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="bg-blue-russian-gradient shadow-custom-purple hover:shadow-custom-large rounded-lg  h-full  p-[1px] ">
      <div className=" bg-[#0c001b] rounded-lg h-full  p-[1px] pb-8   ">
        <img
          src={props.url}
          alt="logo"
          width={100}
          height={100}
          
        />
        <div className="text-left justify-center mx-2 py-1 px-2">
          <p className="text-white  text-base  font-semibold">
            {props.title}
          </p>
          <p className="text-white  text-xs mt-2  w-full">
            {props.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
