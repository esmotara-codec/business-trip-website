"use client";

import React, { useState } from "react";
import Container from "../shared/Container";
import Image from "next/image";
import esimIcon from "./../../assets/44990845_9098111 1.png";

const accordionData = [
  {
    id: 1,
    title: "One eSIM for All Trips",
    content:
      "Use one eSIM for 180+ countries — no reinstallation required for each journey.",
  },
  {
    id: 2,
    title: "Trusted by 200,000+ Travelers",
    content:
      "Join global travelers trusting Telzen for fast, secure, and affordable connectivity.",
  },
  {
    id: 3,
    title: "Direct In-App eSIM Setup",
    content:
      "Install and activate your eSIM instantly from the Telzen app — no QR codes.",
  },
  {
    id: 4,
    title: "24/7 Support & Transparent Pricing",
    content:
      "Enjoy 24/7 support and transparent pricing with no hidden fees or surprises.",
  },
  {
    id: 5,
    title: "Seamless Connectivity & Easy Management",
    content:
      "Switch plans, track usage, and manage networks effortlessly in one app.",
  },
];

const WhyChooseUs = () => {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-white py-12 md:py-16 lg:py-20">
      <Container>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFB94A] flex flex-col lg:flex-row justify-between gap-8 md:gap-12 items-center p-5 md:p-8 lg:p-12 rounded-3xl">
            {/* Left Content  */}
            <div className="rounded-3xl p-8 md:p-12 lg:p-16 space-y-6">
              {/* Icon */}
              <div className="flex items-center justify-start">
                <div className="">
                  <Image
                    src={esimIcon}
                    alt="eSIM icon"
                    width={196}
                    height={196}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Heading */}
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-black font-barlow-condensed text-[#000000] leading-tight tracking-tight">
                WHY CHOOSE
                <br />
                TELZEN?
              </h2>

              {/* Description */}
              <p className="text-base md:text-lg text-[#4A4A4A] font-inter-tight">
                Here is why Simly is your go-to eSIM provider.
              </p>
            </div>

            {/* Right Content  */}
            <div className="w-full  lg:w-[480px] space-y-4">
              {accordionData.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                  >
                    <h3 className="text-base md:text-[24px] font-semibold font-inter-tight text-[#0A0A0A]">
                      {item.title}
                    </h3>
                    <svg
                      className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                        openId === item.id ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Accordion Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openId === item.id ? "max-h-40" : "max-h-0"
                    }`}
                  >
                    <div className="px-5 md:px-6 pb-5">
                      <p className="text-sm md:text-[18px] text-[#4A4A4A] font-normal font-inter-tight leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
