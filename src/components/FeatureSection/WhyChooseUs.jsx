"use client";

import React, { useState, useEffect } from "react";
import Container from "../shared/Container";
import Image from "next/image";
import esimIcon from "./../../assets/44990845_9098111 1.png";
import axios from "axios";

const WhyChooseUs = () => {
  const [openId, setOpenId] = useState(null);
  const [accordionData, setAccordionData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://test.telzen.digital/api/v1/faq/all"
        );

        if (response.data?.data && Array.isArray(response.data.data)) {
          setAccordionData(response.data.data);
          console.log(response.data.data);
        } else {
          setAccordionData([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load FAQs");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleAccordion = (index) => {
    setOpenId(openId === index ? null : index);
  };

  return (
    <div className="bg-white py-12 md:py-16 lg:py-20">
      <Container>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFB94A] flex flex-col lg:flex-row justify-between gap-8 md:gap-12 items-center p-5 md:p-8 lg:p-12 rounded-3xl">
            {/* Left Content  */}
            <div className="rounded-3xl p-8 md:p-12 lg:p-10 space-y-6">
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
              <h2 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-black font-barlow-condensed text-[#000000] leading-[100%] tracking-tight">
                WHY CHOOSE
                <br />
                TELZEN?
              </h2>

              {/*Heading  Description */}
              <p className="text-base md:text-lg text-[#4A4A4A] font-inter-tight">
                Here is why Simly is your go-to eSIM provider.
              </p>
            </div>

            {/* Right Content  */}
            <div className="w-full  lg:w-[480px] space-y-4">
              {loading && <p>Loading...</p>}
              {error && <p>Error fetching data</p>}
              {!loading &&
                !error &&
                accordionData.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    {/* Accordion Header */}
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                    >
                      <h3 className="text-base md:text-[24px] font-semibold font-inter-tight text-[#0A0A0A]">
                        {item.title}
                      </h3>
                      <svg
                        className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                          openId === index ? "rotate-180" : ""
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
                        openId === index ? "max-h-40" : "max-h-0"
                      }`}
                    >
                      <div className="px-5 md:px-6 pb-5">
                        <p className="text-sm md:text-[18px] text-[#4A4A4A] font-normal font-inter-tight leading-relaxed">
                          {item.description}
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
