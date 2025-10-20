"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import newZealandFlag from "./../../assets/Element.png";
import japanFlag from "./../../assets/Circle (2).png";
import germanyFlag from "./../../assets/Country Icon.png";
import Container from "../shared/Container";
import viewArrow from "./../../assets/Frame 2147224773.png";

const PopularDestination = () => {
  const [activeTab, setActiveTab] = useState("countries");
  return (
    <div className="bg-white py-12 md:py-16 lg:py-20">
      <div className="container w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/*  Tabs and Search Button */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
          {/* Tab Buttons */}
          <div className="flex gap-3">
            <div className="bg-[#EEEEEE] rounded-3xl shadow-xs">
              <button
                onClick={() => setActiveTab("countries")}
                className={`px-6 py-3 rounded-3xl font-inter-tight text-[16px] font-semibold transition-all duration-300 ${
                  activeTab === "countries"
                    ? "bg-[#0A0A0A] text-white shadow-md"
                    : "text-[#0A0A0A]"
                }`}
              >
                Countries
              </button>
              <button
                onClick={() => setActiveTab("region")}
                className={`px-6 py-3 rounded-3xl font-inter-tight text-[16px] font-semibold transition-all duration-300 ${
                  activeTab === "region"
                    ? "bg-[#0A0A0A] text-white shadow-md"
                    : "text-[#0A0A0A]"
                }`}
              >
                Regional Packs
              </button>
            </div>
          </div>

          {/* Search Bar & View All */}
          <div className="flex  flex-col lg:flex-row justify-between items-center gap-2 w-full lg:w-auto ">
            {/* Search Bar */}
            <div className="relative w-full lg:w-[450px]">
              <button className="absolute left-4 top-1/2 -translate-y-1/2">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <input
                type="text"
                placeholder="Search here"
                className="w-full px-4 py-3 pl-12 rounded-full border border-gray-200 focus:outline-none focus:border-[#00C896] text-sm text-[#9E9E9E] font-inter-tight"
              />
            </div>

            {/* View All Button */}

            <Link href="/destinations">
              <button className="bg-[#00C896] text-white  rounded-full  text-[16px] font-inter-tight font-semibold flex items-center  hover:bg-[#048f6c] transition-colors whitespace-nowrap">
                <span className="pl-6 pr-2 py-2"> View All</span>
                <Image
                  src={viewArrow}
                  alt="View All"
                  width={50}
                  height={50}
                  className="bg-white rounded-full"
                />
              </button>
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 xl:grid-cols-2  gap-5 lg:gap-8 items-start">
          {/* Left Content */}
          <div className="space-y-6 pr-32 md:pr-32">
            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-[92px] font-black font-barlow-condensed text-[#000000] leading-tight tracking-tight">
              FIND
              <br />
              POPULAR
              <br />
              DESTINATION
            </h2>

            {/* Description */}
            <p className="text-[#4A4A4A] font-inter-tight text-sm md:text-[20px]">
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
              <button className="w-10 h-10 rounded-full bg-[#00C896] text-[#0A0A0A] hover:border-[#EEEEEE] flex items-center justify-center transition-colors">
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

          {/* Right Content - Destination Cards */}
          <div className="flex gap-5 pb-4 overflow-x-auto scrollbar-hide w-full ">
            {/* New Zealand Card */}
            <div className="bg-[#00C896] min-w-[260px]  rounded-3xl p-2 md:p-6 text-white flex-shrink-0 space-y-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <Image
                  src={newZealandFlag}
                  alt="New Zealand flag"
                  width={100}
                  height={100}
                  className=" rounded-full"
                />
              </div>
              <div className="mb-10 md:mb-24">
                <h3 className="text-xl md:text-[28px] font-inter-tight font-semibold">
                  {" "}
                  New Zealand
                </h3>
                <p className="text-sm md:text-[18px]  font-inter-tight">
                  Start from $6.92
                </p>
              </div>
              <button className="w-full bg-white text-[#00C896] py-2 my-5  rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
                View Details
              </button>
            </div>

            {/* Japan Card */}
            <div className="bg-[#006752] min-w-[260px]  rounded-3xl p-6 text-white flex-shrink-0 space-y-4">
              <div className="w-16 h-16  rounded-full flex items-center justify-center">
                <Image
                  src={japanFlag}
                  alt="Japan flag"
                  width={100}
                  height={100}
                />
              </div>
              <div className="mb-10 md:mb-24">
                <h3 className="text-xl md:text-[28px] font-inter-tight font-semibold">
                  Japan
                </h3>
                <p className="text-sm md:text-[18px]  font-inter-tight">
                  Start from $6.99
                </p>
              </div>
              <button className="w-full bg-white text-[#00C896] py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
                View Details
              </button>
            </div>

            {/* Germany Card */}
            <div className="bg-[#FFB94A] min-w-[260px]  rounded-3xl p-6 text-white flex-shrink-0 space-y-4">
              <div className="w-12 h-12  rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src={germanyFlag}
                  alt="Germany flag"
                  width={100}
                  height={100}
                />
              </div>
              <div className="mb-10 md:mb-24">
                <h3 className="text-xl md:text-[28px] font-inter-tight font-semibold">
                  Germany
                </h3>
                <p className="text-sm md:text-[18px]  font-inter-tight">
                  Start from $7.04
                </p>
              </div>
              <button className="w-full bg-white text-[#00C896] py-2 my-5 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularDestination;
