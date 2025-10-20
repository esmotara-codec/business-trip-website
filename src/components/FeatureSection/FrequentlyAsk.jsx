"use client";
import React, { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "What is Telzen?",
    answer:
      "Telzen is a next-generation telecom app powered by eSIM technology. It lets you connect instantly without needing a physical SIM card — offering seamless mobile data and global connectivity from your phone.",
  },
  //   {
  //     id: 2,
  //     question: "How does Telzen work?",
  //     answer: "Telzen uses eSIM technology to digitally activate mobile networks. You can browse available plans, choose your preferred carrier, and connect instantly — all within the app.",
  //   },
  {
    id: 2,
    question: "What is an eSIM?",
    answer:
      "An eSIM (embedded SIM) is a digital SIM that allows you to activate a mobile plan without inserting a physical SIM card. It's secure, flexible, and built into most modern smartphones.",
  },
  //   {
  //     id: 4,
  //     question: "Which devices support Telzen?",
  //     answer: "Telzen works on all eSIM-compatible devices, including most recent iPhone, Samsung Galaxy, Google Pixel, and other flagship Android models.",
  //   },
  {
    id: 3,
    question: "Can I keep my existing number?",
    answer:
      "Yes. Depending on your region and carrier, you can easily port your current mobile number to Telzen without changing it.",
  },
];

const FrequentlyAsk = () => {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-[#006752] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-10 sm:px-16 md:px-32 lg:px-40">
        <div className="flex flex-col justify-center items-center gap-15 ">
          {/*  FAQ- Heading */}
          <div>
            <h2 className="uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[92px] text-center text-[#FFFFFF] font-barlow-condensed font-black leading-tight tracking-tighter">
              FREQUENTLY
              <br />
              ASKED QUESTIONS
            </h2>
          </div>

          {/*  FAQ Accordion */}
          <div className="space-y-6 px-5 md:px-10 lg:px-20">
            {faqData.map((faq) => (
              <div
                key={faq.id}
                className={
                  "rounded-2xl overflow-hidden transition-all duration-300 "
                }
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full flex items-center justify-between  text-left"
                >
                  <h3 className="text-base md:text-[24px] font-semibold text-white font-inter-tight pr-4 tracking-tight">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openId === faq.id ? (
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 12H4"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    )}
                  </div>
                </button>

                {/* Answer Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openId === faq.id ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className=" mt-2">
                    <p className="text-sm md:text-[16px] text-white font-inter-tight leading-relaxed tracking-tight">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAsk;
