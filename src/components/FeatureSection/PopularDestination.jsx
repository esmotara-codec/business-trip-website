"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Container from "../shared/Container";
import viewArrow from "./../../assets/Frame 2147224773.png";
import axios from "axios";

const PopularDestination = () => {
  const [activeTab, setActiveTab] = useState("countries");
  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 3; 

  // Fetch Countries
  const fetchCountries = async (page = 1, search = "") => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.get(
        "https://test.telzen.digital/api/v1/country/all",
        {
          params: {
            page: page,
            limit: limit,
            search: search
          }
        }
      );
      
      if (response.data?.data && Array.isArray(response.data.data)) {
        const activeCountries = response.data.data.filter(
          country => country.status === "active"
        );
        
        setCountries(activeCountries);
        setDisplayData(activeCountries.slice(0, 3));
        setTotalPages(response.data.meta?.total_pages || 1);
        console.log("Countries fetched:", activeCountries);
      } else {
        setCountries([]);
        setDisplayData([]);
      }
    } catch (error) {
      console.error("Error fetching countries:", error);
      setError("Failed to load countries");
    } finally {
      setLoading(false);
    }
  };

  // Fetch Regions
  const fetchRegions = async (page = 1, search = "") => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.get(
        "https://test.telzen.digital/api/v1/region/all",
        {
          params: {
            page: page,
            limit: limit,
            search: search
          }
        }
      );
      
      if (response.data?.data && Array.isArray(response.data.data)) {
        const activeRegions = response.data.data.filter(
          region => region.status === "active"
        );
        
        setRegions(activeRegions);
        setDisplayData(activeRegions.slice(0, 3));
        setTotalPages(response.data.meta?.total_pages || 1);
        console.log("Regions fetched:", activeRegions);
      } else {
        setRegions([]);
        setDisplayData([]);
      }
    } catch (error) {
      console.error("Error fetching regions:", error);
      setError("Failed to load regions");
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch based on active tab
  useEffect(() => {
    setCurrentPage(1);
    setSearchQuery("");
    if (activeTab === "countries") {
      fetchCountries(1);
    } else {
      fetchRegions(1);
    }
  }, [activeTab]);

  // Handle search
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setCurrentPage(1);
    
    if (activeTab === "countries") {
      if (query === "") {
        setDisplayData(countries.slice(0, 3));
      } else {
        const filtered = countries.filter(country =>
          country.name.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 3);
        setDisplayData(filtered);
      }
    } else {
      if (query === "") {
        setDisplayData(regions.slice(0, 3));
      } else {
        const filtered = regions.filter(region =>
          region.name.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 3);
        setDisplayData(filtered);
      }
    }
  };

  // Handle pagination
  const handleNext = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    
    if (activeTab === "countries") {
      const startIndex = (nextPage - 1) * limit;
      const endIndex = startIndex + limit;
      const nextData = countries.slice(startIndex, endIndex);
      
      if (nextData.length > 0) {
        setDisplayData(nextData);
      } else if (nextPage > Math.ceil(countries.length / limit)) {
        // Loop back to first page
        setCurrentPage(1);
        setDisplayData(countries.slice(0, 3));
      }
    } else {
      const startIndex = (nextPage - 1) * limit;
      const endIndex = startIndex + limit;
      const nextData = regions.slice(startIndex, endIndex);
      
      if (nextData.length > 0) {
        setDisplayData(nextData);
      } else if (nextPage > Math.ceil(regions.length / limit)) {
        // Loop back to first page
        setCurrentPage(1);
        setDisplayData(regions.slice(0, 3));
      }
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
      
      if (activeTab === "countries") {
        const startIndex = (prevPage - 1) * limit;
        const endIndex = startIndex + limit;
        setDisplayData(countries.slice(startIndex, endIndex));
      } else {
        const startIndex = (prevPage - 1) * limit;
        const endIndex = startIndex + limit;
        setDisplayData(regions.slice(startIndex, endIndex));
      }
    } else {
      // Loop to last page
      if (activeTab === "countries") {
        const lastPage = Math.ceil(countries.length / limit);
        setCurrentPage(lastPage);
        const startIndex = (lastPage - 1) * limit;
        setDisplayData(countries.slice(startIndex));
      } else {
        const lastPage = Math.ceil(regions.length / limit);
        setCurrentPage(lastPage);
        const startIndex = (lastPage - 1) * limit;
        setDisplayData(regions.slice(startIndex));
      }
    }
  };

  // Get background color based on index
  const getCardColor = (index) => {
    const colors = ["#00C896", "#006752", "#FFB94A"];
    return colors[index % colors.length];
  };

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
                value={searchQuery}
                onChange={handleSearch}
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
        <div className="grid grid-cols-1 xl:grid-cols-2  gap-5 lg:gap-15 items-start">
          {/* Left Content */}
          <div className="space-y-6 pr-20 lg:pr-14">
            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-[80px] font-black font-barlow-condensed text-[#000000] leading-tight tracking-tight">
              FIND
              <br />
              POPULAR
              <br />
              DESTINATION
            </h2>

            {/* Description */}
            <p className="text-[#4A4A4A] font-inter-tight text-sm md:text-[19px]">
              Discover our most popular destinations, with 200,000+ happy
              customers!
            </p>

            {/* Navigation Arrows */}
            <div className="flex gap-3 pt-4">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-[#EEEEEE] text-[#0A0A0A] flex items-center justify-center hover:border-[#00C896] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                </svg>
              </button>
              <button 
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-[#00C896] text-[#0A0A0A] hover:border-[#EEEEEE] flex items-center justify-center transition-colors"
              >
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
            {loading && (
              <div className="w-full text-center py-8">
                <p className="text-gray-600">Loading...</p>
              </div>
            )}

            {error && (
              <div className="w-full text-center py-8">
                <p className="text-red-600">{error}</p>
              </div>
            )}

            {!loading && !error && displayData.length === 0 && (
              <div className="w-full text-center py-8">
                <p className="text-gray-600">No {activeTab === "countries" ? "countries" : "regions"} found.</p>
              </div>
            )}

            {!loading && !error && activeTab === "countries" && displayData.map((country, index) => (
              <div
                key={country._id}
                style={{ backgroundColor: getCardColor(index) }}
                className="min-w-[260px] rounded-3xl p-6 text-white flex-shrink-0 space-y-4"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden bg-white">
                  <img
                    src={country.flag}
                    alt={`${country.name} flag`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mb-8 md:mb-16">
                  <h3 className="text-xl md:text-[28px] font-inter-tight font-semibold">
                    {country.name}
                  </h3>
                  <p className="text-sm md:text-[18px] font-inter-tight">
                    {country.start_from > 0 
                      ? `Start from $${country.start_from.toFixed(2)}`
                      : "Free package available"}
                  </p>
                </div>
                <button className="w-full bg-white text-[#00C896] py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
                  View Details
                </button>
              </div>
            ))}

            {!loading && !error && activeTab === "region" && displayData.map((region, index) => (
              <div
                key={region._id}
                style={{ backgroundColor: getCardColor(index) }}
                className="min-w-[260px] rounded-3xl p-6 text-white flex-shrink-0 space-y-4"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden bg-white">
                  <img
                    src={region.image}
                    alt={`${region.name} image`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mb-8 md:mb-16">
                  <h3 className="text-xl md:text-[28px] font-inter-tight font-semibold">
                    {region.name}
                  </h3>
                  <p className="text-sm md:text-[18px] font-inter-tight">
                    {region.start_from > 0 
                      ? `Start from $${region.start_from.toFixed(2)}`
                      : "Free package available"}
                  </p>
                </div>
                <button className="w-full bg-white text-[#00C896] py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularDestination;