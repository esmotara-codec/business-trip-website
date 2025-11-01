"use client";
import React, { useState, useEffect } from "react";
import Container from "../shared/Container";
import Image from "next/image";
import axios from "axios";

import blackQuoteIcon from "./../../assets/Group 3.png";
import whiteQuoteIcon from "./../../assets/Group.png";
import starIcon from "./../../assets/Vector (2).png";
import starEmptyIcon from "./../../assets/Vector (3).png";

const CustomerReview = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          "https://test.telzen.digital/api/v1/review/all"
        );

        if (response.data?.data && Array.isArray(response.data.data)) {
          setReviews(response.data.data.slice(0, 3)); // Get first 3 reviews
        } else {
          setReviews([]);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setError("Failed to load reviews");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // Render stars based on rating
  const renderStars = (rating) => {
    const stars = [];

    // Loop through 5 stars
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        // Full star
        stars.push(
          <Image
            key={i}
            src={starIcon}
            alt="star icon"
            width={24}
            height={24}
          />
        );
      } else {
        // Empty star
        stars.push(
          <Image
            key={i}
            src={starEmptyIcon}
            alt="empty star icon"
            width={24}
            height={24}
          />
        );
      }
    }

    return stars;
  };

  if (loading) {
    return (
      <div className="bg-white py-12 md:py-16 lg:py-20">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-8">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black font-barlow-condensed text-[#000000] leading-[100%] tracking-tighter text-center mb-12">
            CUSTOMERS SAID
            <br />
            ABOUT US
          </h2>
          <div className="text-center py-8">
            <p className="text-gray-600">Loading reviews...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white py-12 md:py-16 lg:py-20">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-8">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black font-barlow-condensed text-[#000000] leading-[100%] tracking-tighter text-center mb-12">
            CUSTOMERS SAID
            <br />
            ABOUT US
          </h2>
          <div className="text-center py-8">
            <p className="text-red-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white py-12 md:py-16 lg:py-20">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black font-barlow-condensed text-[#000000] leading-[100%] tracking-tighter  text-center mb-12">
          CUSTOMERS SAID
          <br />
          ABOUT US
        </h2>

        {/* Reviews Grid */}
        <div className="flex flex-col lg:flex-row gap-6  justify-center">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`${
                index === 1
                  ? "bg-[#00C896] border-[#00C896] w-full md:w-auto lg:w-[600px]"
                  : "bg-white border-gray-200 lg:w-[380px]"
              } border rounded-3xl p-6 md:p-8 relative flex flex-col h-full`}
            >
              {/* Quote Icon */}
              <div className="absolute top-1/2 right-6">
                <Image
                  src={index === 1 ? blackQuoteIcon : whiteQuoteIcon}
                  alt="quote icon"
                  width={40}
                  height={40}
                />
              </div>

              {/* Text */}
              <p
                className={`${
                  index === 1
                    ? "text-sm md:text-[22px] text-[#0A0A0A]"
                    : "text-base md:text-[18px] text-[#4A4A4A]"
                } font-inter-tight font-normal leading-relaxed tracking-tight`}
              >
                "{review.quote}"
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6 md:mb-10 mt-6">
                {review.rating && (
                  <>
                    <div className="flex gap-1">
                      {renderStars(review.rating)}
                    </div>
                    <span
                      className={`${
                        index === 1 ? "text-[#0A0A0A]" : "text-[#4A4A4A]"
                      } font-inter-tight font-bold text-[18px]`}
                    >
                      {review.rating}
                    </span>
                  </>
                )}
              </div>

              {/* User Info */}
              <div
                className={`flex items-center gap-3 ${
                  index === 1 ? "mt-8 md:mt-24" : "mt-8 md:mt-22"
                }`}
              >
                <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src={review.image}
                    alt={review.name}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-[16px] font-inter-tight font-bold text-[#0A0A0A]">
                    {review.name}
                  </h4>
                  <p className="text-[14px] font-inter-tight text-[#4A4A4A]">
                    {review.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
