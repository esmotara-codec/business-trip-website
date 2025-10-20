import React from "react";
import Container from "../shared/Container";
import Image from "next/image";

import avatar1 from "./../../assets/Rectangle 4086 (1).png";
import avatar2 from "./../../assets/Rectangle 4086 (2).png";
import avatar3 from "./../../assets/Rectangle 4086.png";
import blackQuoteIcon from "./../../assets/Group 3.png";
import whiteQuoteIcon from "./../../assets/Group.png";
import starIcon from "./../../assets/Vector (2).png";
import starEmptyIcon from "./../../assets/Vector (3).png";

const CustomerReview = () => {
  return (
    <div className="bg-white py-12 md:py-16 lg:py-20">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black font-barlow-condensed text-[#000000] leading-[100%] tracking-tighter  text-center mb-12">
          CUSTOMERS  SAID
          <br />
          ABOUT US
        </h2>

        {/* Reviews Grid */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch justify-center">
          {/* Review Card 1 */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 relative lg:w-[380px]  flex flex-col">
            {/* Quote Icon */}
            <div className="absolute top-1/2 right-6">
              <Image
                src={whiteQuoteIcon}
                alt="quote icon"
                width={50}
                height={50}
              />
            </div>

            {/* Text */}
            <p className="text-base md:text-[18px] font-normal text-[#4A4A4A] font-inter-tight leading-relaxed tracking-tight ">
              "As a frequent business traveler, reliable connectivity is a must,
              and Simly delivers. Setting up the eSIM was quick, and I could
              stay connected during back-to-back trips in multiple countries.
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6 md:mb-10"></div>

            {/* User Info */}
            <div className="flex items-center gap-3 mt-8 md:mt-32">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src={avatar1}
                  alt="Daniel A. Rivera"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-[16px] font-inter-tight font-bold text-[#0A0A0A]">
                  Daniel A. Rivera
                </h4>
                <p className="text-[14px] font-inter-tight text-[#4A4A4A]">
                  Art Detector
                </p>
              </div>
            </div>
          </div>

          {/* Review Card 2  */}
          <div className="bg-[#00C896] border border-[#00C896] rounded-3xl p-6 md:p-8 relative w-full md:w-auto lg:w-[600px]  flex flex-col">
            {/* Quote Icon */}
            <div className="absolute top-1/2 right-6">
              <Image
                src={blackQuoteIcon}
                alt="quote icon"
                width={50}
                height={50}
              />
            </div>

            {/* Text */}
            <p className="text-sm md:text-[22px] text-[#0A0A0A] font-inter-tight font-normal leading-relaxed tracking-tight ">
              "Simly made my backpacking trip across Europe so much easier. I
              stayed connected in every country without having to switch SIM
              cards. The app was super easy to use, and I loved being able to
              top up anytime on the go!"
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6 md:mb-10 mt-6">
              <div className="flex gap-1">
                {[1, 2, 3, 4].map((star) => (
                  <Image
                    key={star}
                    src={starIcon}
                    alt="star icon"
                    width={24}
                    height={24}
                  />
                ))}
                <Image
                  src={starEmptyIcon}
                  alt="empty star icon"
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-[#0A0A0A] font-inter-tight font-bold text-[18px]">
                4.5
              </span>
            </div>

            {/* User Info */}
            <div className="flex items-center gap-3 mt-8 md:mt-20">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src={avatar2}
                  alt="Corey C. Smith"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-[16px] font-inter-tight font-bold text-[#0A0A0A]">
                  Corey C. Smith
                </h4>
                <p className="text-[14px] font-inter-tight text-[#4A4A4A]">
                  CEO & Co - Founder
                </p>
              </div>
            </div>
          </div>

          {/* Review Card 3 */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 relative lg:w-[380px]  flex flex-col">
            {/* Quote Icon */}
            <div className="absolute top-1/2 right-6">
              <Image
                src={whiteQuoteIcon}
                alt="quote icon"
                width={50}
                height={50}
              />
            </div>

            {/* Text */}
            <p className="text-base md:text-[18px]  text-[#4A4A4A] font-inter-tight font-normal leading-relaxed tracking-tight ">
              "As a frequent business traveler, reliable connectivity is a must,
              and Simly delivers. Setting up the eSIM was quick, and I could
              stay connected during back-to-back trips in multiple countries.
            </p>
            {/* Rating */}
            <div className="flex items-center gap-2 mb-6 md:mb-10"></div>

            {/* User Info */}
            <div className="flex items-center gap-3 mt-8 md:mt-28">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src={avatar3}
                  alt="Name Here"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-[16px] font-inter-tight font-bold text-[#0A0A0A]">
                  Name Here
                </h4>
                <p className="text-[14px] font-inter-tight text-[#4A4A4A]">
                  Betty T. Slowik
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
