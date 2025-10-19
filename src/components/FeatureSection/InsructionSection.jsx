import React from "react";
import Container from "../shared/Container";
import airplane from "./../../assets/Search Icon Style.png";
import plan from "./../../assets/Search Icon Style (1).png";
import eSim from "./../../assets/Search Icon Style (2).png";
import connected from "./../../assets/Search Icon Style (3).png";
import Image from "next/image";

const stepsData = [
  {
    id: 1,
    icon: airplane,
    alt: "airplane",
    title: "Select Destination",
    description: "Choose from over 180 countries within the app.",
  },
  {
    id: 2,
    icon: plan,
    alt: "pick-plan",
    title: "Pick a Plan",
    description: "Find a data package that fits your travel needs.",
  },
  {
    id: 3,
    icon: eSim,
    alt: "install-esim",
    title: "Install eSIM",
    description: "Install directly via the app or by scanning a QR code.",
  },
  {
    id: 4,
    icon: connected,
    alt: "stay-connected",
    title: "Stay Connected",
    description: "Enjoy seamless data and top up anytime during your trip.",
  },
];

const InsructionSection = () => {
  return (
    <div className="bg-[#FFEBC6] py-8 md:py-12 lg:py-16">
      <div className="container mx-auto w-full px-[18px] md:px-7 md:py-4  ">
        {/* Main-Title */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-barlow-condensed leading-tight tracking-tight text-[#0A0A0A] mb-12">
          HOW IT WORKS
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stepsData.map((step) => (
            <div key={step.id} className=" space-y-4">
              {/* Icon */}
              <div className="flex itms-center ">
                <Image
                  src={step.icon}
                  alt="airplane"
                  width={120}
                  height={120}
                />
              </div>
              <div className="flex flex-col space-y-1">
                {/* Title */}
                <h3 className="text-[24px] font-semibold font-inter-tight text-[#0A0A0A]">
                  Select Destination
                </h3>
                {/* Description */}
                <p className="text-[18px] text-[#4A4A4A] font-inter-tight font-normal ">
                  Choose from over 180 countries within the app.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsructionSection;
