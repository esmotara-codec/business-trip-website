"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import newZealandFlag from "./../../assets/Element.png";
import japanFlag from "./../../assets/Circle (2).png";
import germanyFlag from "./../../assets/Country Icon.png";
import Container from "../shared/Container";

const PopularDestination = () => {
  const [activeTab, setActiveTab] = useState("countries");
  return (
    <div className="bg-white py-12 md:py-16 lg:py-20">
      <Container>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="pr-24 lg:pr-56 space-y-6">
              {/* Tab Buttons */}
              <div className="flex gap-3">
                <div className="bg-[#EEEEEE] rounded-3xl shadow-xs ">
                  <button
                    onClick={() => setActiveTab("countries")}
                    className={`px-6 py-3 rounded-3xl font-inter-tight text-[16px] font-semibold transition-all duration-300 ${
                      activeTab === "countries"
                        ? "bg-[#0A0A0A] text-white shadow-md transform-scale-105"
                        : "text-[#0A0A0A] "
                    } `}
                  >
                    Countries
                  </button>
                  <button
                    onClick={() => setActiveTab("region")}
                    className={`px-6 py-3 rounded-3xl font-inter-tight text-[16px] font-semibold transition-all duration-300 ${
                      activeTab === "region"
                        ? "bg-[#0A0A0A] text-white shadow-md transform-scale-105"
                        : "text-[#0A0A0A] "
                    } `}
                  >
                    Regional Packs
                  </button>
                </div>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black font-barlow-condensed text-[#0A0A0A] leading-tight tracking-tight">
                FIND
                <br />
                POPULAR
                <br />
                DESTINATION
              </h2>

              {/* Description */}
              <p className="text-[#4A4A4A] font-inter-tight text-sm md:text-[16px]">
                Discover our most popular destinations, with 200,000+ happy
                customers!
              </p>

              {/* Navigation Arrows */}
              <div className="flex gap-3 pt-4">
                <button className="w-10 h-10 rounded-full bg-[#EEEEEE] text-[#0A0A0A] flex items-center justify-center hover:border-[#00C896] transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-[#00C896] text-[#0A0A0A] hover:border-[#EEEEEE] flex items-center justify-center  transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 11v2h12.17l-5.59 5.59L12 20l8-8-8-8-1.41 1.41L16.17 11H4z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Content  */}
            <div className="relative">
             
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PopularDestination;
