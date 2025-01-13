import React from "react";
import Card from "./card";

const CardsPage = () => {
  const cardData = [
    { url: "/Icon.png", title: "Upload Your Item", text: "Snap a picture or upload an image of the item." },
    { url: "Icon (1).png", title: "Customize Your Result", text: "Select your preferred style, theme, and settings." },
    { url: "Icon (2).png", title: "Generate Your AI Design", text: "Click “Generate,” and let AI create a stunning design." },
    { url: "Icon (3).png", title: "Download & Use", text: "Save your custom picture and share it instantly." },
  ];

  return (
    <div className="relative h-auto bg-[#0C001B] py-16">
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-5xl  font-bold bg-custom-gradient bg-clip-text text-transparent">How It Works</h1>
        <p className="text-sm   md:text-lg text-[#E2E2E2] mt-4 mx-7 md:mx-0">Our AI-powered tool is easy to use and requires no design skills.</p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mx-10 md:mx-20 lg:mx-28 xl:mx-32">
        {cardData.map((card, index) => (
          <Card key={index} url={card.url} title={card.title} text={card.text} />
        ))}
      </div>
    </div>
  );
};

export default CardsPage;
