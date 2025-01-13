"use client";
import React from "react";
import Qsection from "./Questioncard";

const Qpage = () => {
  const questions = [
    {
      id: "1",
      question: "What is the purpose of your platform/product?",
      answer:"We provide an AI-powered solution to streamline visual content creation, eliminating costly photoshoots and delivering consistent, high-quality imagery faster.",
    },
    {
      id: "2",
      question: "Who can benefit from your product?",
      answer:"We provide an AI-powered solution to streamline visual content creation, eliminating costly photoshoots and delivering consistent, high-quality imagery faster.",
    },
    {
      id: "3",
      question: "Can I try it before committing?",
      answer:"We provide an AI-powered solution to streamline visual content creation, eliminating costly photoshoots and delivering consistent, high-quality imagery faster.",
    },
    {
      id: "4",
      question: "Is there a limit to the number of images I can create?",
      answer:"We provide an AI-powered solution to streamline visual content creation, eliminating costly photoshoots and delivering consistent, high-quality imagery faster.",
    },
    {
      id: "5",
      question: "How can I generate clothing images for my clothing brands?",
      answer:"We provide an AI-powered solution to streamline visual content creation, eliminating costly photoshoots and delivering consistent, high-quality imagery faster.",
    },
    {
      id: "6",
      question:
        "What type of photos should I upload to generate my clothing images?",
      answer:"We provide an AI-powered solution to streamline visual content creation, eliminating costly photoshoots and delivering consistent, high-quality imagery faster.",
    },
    {
      id: "7",
      question: "Will the AI photos have defects?",
      answer:"We provide an AI-powered solution to streamline visual content creation, eliminating costly photoshoots and delivering consistent, high-quality imagery faster.",
    },
  ];

  const [isOpen, setIsOpen] = React.useState<string | null>(null);

  const onAccordionChange = (id: string) => {
    setIsOpen((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bg-[#0C011B] py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-3xl md:text-5xl font-semibold bg-custom-gradient bg-clip-text text-transparent mb-8 text-center">
          Frequently Asked
        </h3>

        <div className="relative">
          <div className="space-y-4 relative z-10">
            {questions?.map((item, index) => (
              <Qsection
                key={index}
                question={item.question}
                answer={item?.answer}
                id={item?.id}
                onClick={onAccordionChange}
                open={isOpen === item?.id}
              />
            ))}
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#5856D6] w-36 h-36 md:w-52 md:h-52 rounded-full blur-3xl z-0"></div>
        </div>
      </div>
    </div>
  );
};

export default Qpage;
