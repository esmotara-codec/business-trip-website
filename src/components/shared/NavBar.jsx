import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from './../../assets/Vector.png';
import logoName from './../../assets/Group 1597880464.png';
import flagIcon from './../../assets/Circle.png';
const NavBar = () => {
    return (
        <nav className='bg-white border-b border-gray-200 px-6 py-4'>
            <div className='max-w-7xl mx-auto flex items-center justify-between'>
            {/* Logo */}
             <Link href="/" className='flex items-center space-x-2'>
            <Image src={logo}
            alt='logo'
            width={30}
            height={40}
            />
            
            <Image src={logoName}
            alt='logo name'
            width={50}
            height={50}
            />
            </Link>

            {/* Navigation Link */}
             <div className="flex items-center gap-8">
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
            <div  className='flex items-center gap-1'>
                <Image
                src={flagIcon}
                alt='flag icon'
                />   
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
            </div>
        </nav>
    );
};

export default NavBar;