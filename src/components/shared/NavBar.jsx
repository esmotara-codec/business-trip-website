"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "./../../assets/Vector.png";
import logoName from "./../../assets/Group 1597880464.png";
import flagIcon from "./../../assets/Circle.png";
import Container from "./Container";
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-white">
      <Container>
        <div className="container mx-auto flex items-center justify-between p-2">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 ">
            <Image src={logo} alt="logo" width={40} height={40} />

            <Image src={logoName} alt="logo name" width={70} height={70} />
          </Link>

          {/*  Destop Navigation Link */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/buy-plans"
              className="text-gray-700 hover:text-gray-900 text-sm font-inter-tight "
            >
              Buy Plans
            </Link>
            {/* Help Center */}
            <Link
              href="/help-center"
              className="text-gray-700 hover:text-gray-900 text-sm md:text-[16px] font-inter-tight "
            >
              Help Center
            </Link>
            {/* Contact Us */}
            <Link
              href="/contact-us"
              className="text-gray-700 hover:text-gray-900 text-sm font-inter-tight "
            >
              Contact Us
            </Link>
            {/* Language */}
            <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 text-sm ">
              <div className="flex items-center gap-1">
                <Image src={flagIcon} alt="flag icon" />
                <span>EN</span>
              </div>
            </button>

            {/* Login Link */}
            <Link
              href="/login"
              className="text-gray-700 hover:text-gray-900 text-sm "
            >
              Login
            </Link>

            {/* Sign Up Button */}
            <Link
              href="/signup"
              className="bg-[#00C896] hover:bg-[#048f6c] text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden z-50 p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>

          {/* Mobile Menu Drawer */}
          {isMenuOpen && (
            <div className="lg:hidden fixed inset-0 z-100">
              {/* Backdrop */}
              <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
                onClick={() => setIsMenuOpen(false)}
              ></div>

              {/* Slide-out Drawer */}
              <div
                className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
                  isMenuOpen ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                  {/* Logo */}
                  <Link href="/" className="flex items-center space-x-2 ">
                    <Image src={logo} alt="logo" width={40} height={40} />

                    <Image
                      src={logoName}
                      alt="logo name"
                      width={70}
                      height={70}
                    />
                  </Link>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-full text-gray-600 hover:bg-gray-100"
                    aria-label="Close menu"
                  >
                    <span className="text-3xl"> ✕</span>
                  </button>
                </div>

                {/* Menu Content */}
                <div className="flex flex-col h-full overflow-y-auto py-4">
                  <Link
                    href="/buy-plans"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#00C896] text-base font-medium"
                  >
                    Buy Plans
                  </Link>

                  <Link
                    href="/help-center"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#00C896] text-base font-medium"
                  >
                    Help Center
                  </Link>

                  <Link
                    href="/contact-us"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#00C896] text-base font-medium"
                  >
                    Contact Us
                  </Link>

                  {/* Language */}
                  <button className="flex items-center gap-2 px-6 py-3 text-gray-700 hover:text-[#00C896] text-base">
                    <Image
                      src={flagIcon}
                      alt="flag icon"
                      width={20}
                      height={20}
                    />
                    <span>EN</span>
                  </button>

                  <Link
                    href="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#00C896] text-base font-medium"
                  >
                    Login
                  </Link>

                  <Link
                    href="/signup"
                    onClick={() => setIsMenuOpen(false)}
                    className="mx-6 mt-4 bg-[#00C896] hover:bg-[#048f6c] text-white text-center py-2 rounded-full font-semibold transition-colors"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
