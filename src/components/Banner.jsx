import Image from "next/image";
import Link from "next/link";
import React from "react";
import appStoreIcon from "./../assets/App_Store_(iOS).svg 1.png";
import googlePlayIcon from "./../assets/Layer_x0020_1.png";
import mobileLeft from "./../assets/iPhone 15 Pro - Blue Titanium Left.png";
import mobileRight from "./../assets/iPhone 15 Pro - Blue Titanium Right.png";
import appStoreButton from "./../assets/App_Store.png";
import googlePlayButton from "./../assets/Group 1597880466.png";
import Container from "./shared/Container";

const Banner = () => {
  return (
    <div className="bg-white py-12 md:py-20 lg:py-24">
      <Container>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              {/* Badges */}
              <div className="flex flex-row flex-wrap gap-3 justify-center lg:justify-start">
                <div className="flex items-center gap-2 ">
                  <Image
                    src={appStoreIcon}
                    alt="app store icon"
                    width={20}
                    height={20}
                  />
                  <span className="text-[16px] font-medium font-inter-tight text-[#00C896]">
                    4.8 on App Store
                  </span>
                </div>

                <div className="flex items-center gap-2 rounded-full">
                  <Image
                    src={googlePlayIcon}
                    alt="google play icon"
                    width={20}
                    height={20}
                  />

                  <span className="text-[16px] font-medium font-inter-tight text-[#00C896]">
                    4.8 on Google Play
                  </span>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-black font-barlow-condensed leading-tight tracking-tight text-[#0A0A0A]">
                INSTANT ESIM DATA
                <br />
                FOR TRAVELLERS
              </h1>

              <div className="space-y-4 lg:space-y-4">
                {/* Download now*/}
                <p className="text-[24px] sm:text-xl text-[#4A4A4A] font-semibold font-inter-tight">
                  Download Now!
                </p>

                {/* App Store Buttons */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <Link
                    href="https://apps.apple.com"
                    target="_blank"
                    className="transition-transform hover:scale-105"
                  >
                    <Image
                      src={appStoreButton}
                      alt="Download on App Store"
                      width={140}
                      height={47}
                      className="h-12 w-auto"
                    />
                  </Link>

                  <Link
                    href="https://play.google.com"
                    target="_blank"
                    className="transition-transform hover:scale-105"
                  >
                    <Image
                      src={googlePlayButton}
                      alt="Get it on Google Play"
                      width={140}
                      height={47}
                      className="h-12 w-auto"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/*  RIGHT CONTENT -Mobile MockUP */}
            <div className="relative flex justify-center lg:justify-end mr-0 md:mr-0 lg:mr-3 xl:pr-32 2xl:pr-64 p-6 lg:p-0 mt-12 lg:mt-0">
              {/* Circular background */}
              <div className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[320px] md:w-[580px] md:h-[570px] lg:w-[447px] lg:h-[447px]  bg-[#00C896] rounded-full z-20"></div>
              <div className="absolute w-[230px] h-[230px] sm:w-[460px] sm:h-[460px] md:w-[560px] md:h-[560px] lg:w-[425px] lg:h-[430px] bg-[#FBBF24] rounded-full z-10 -translate-x-5  md:-translate-x-9 -lg:translate-x-[50px] -xl:translate-x-[60px]  translate-y-5"></div>

              {/*  Left Phone */}
              <div className="flex justify-center z-30">
                <Image
                  src={mobileLeft}
                  alt="Mobile Left"
                  width={700}
                  height={700}
                  className="h-[270px] sm:h-[450px] md:h-[600px] lg:h-[470px] translate-x-[60px] sm:translate-x-[80px] md:translate-x-[100px] lg:translate-x-[60px] xl:translate-x-[80px] -translate-y-[25px] sm:-translate-y-[30px] md:-translate-y-[40px]"
                  priority
                />
                 {/*  Right Phone */}
                <Image
                  src={mobileRight}
                  alt="Mobile Right"
                  width={700}
                  height={700}
                  className="h-[310px]  sm:h-[550px] md:h-[650px] lg:h-[480px] xl:h-[530px] -translate-x-[30px] sm:-translate-x-[60px] md:-translate-x-[70px] -lg:translate-x-[20px] -xl:translate-x-7 translate-y-[10px] sm:translate-y-[40px] md:translate-y-[50px] xl:translate-y-3"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
