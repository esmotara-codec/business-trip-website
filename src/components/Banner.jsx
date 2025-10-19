import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import appStoreIcon from './../assets/App_Store_(iOS).svg 1.png';
import googlePlayIcon from './../assets/Layer_x0020_1.png';
import mobileLeft from './../assets/iPhone 15 Pro - Blue Titanium Left.png';
import mobileRight from './../assets/iPhone 15 Pro - Blue Titanium Right.png';
import appStoreButton from './../assets/App_Store.png';
import googlePlayButton from './../assets/Group 1597880466.png';
import Container from './shared/Container';

const Banner = () => {
    return (
        <div className='bg-white py-12 md:py-20 lg:py-24'>
           <Container>
             <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center'>
                    
                    {/* Left Content */}
                    <div className='space-y-6 lg:space-y-8 text-center lg:text-left'>
                        
                        {/* Badges */}
                        <div className='flex flex-wrap gap-3 justify-center lg:justify-start'>
                            <div className='flex items-center gap-2 '>
                                <Image src={appStoreIcon} 
                                alt='app store icon' 
                                width={20} 
                                height={20}/>
                                <span className='text-sm font-medium text-[#00C896]'>4.8 on App Store</span>
                            </div>
                            
                            <div className='flex items-center gap-2 rounded-full'>
                                <Image src={googlePlayIcon} 
                                alt='google play icon' 
                                width={20} 
                                height={20}/>
                                
                                <span className='text-sm font-medium text-[#00C896]'>4.8 on Google Play</span>
                            </div>
                        </div>

                        {/* Main Heading */}
                        <h1 className='text-7xl font-black font-barlow-condensed leading-tight tracking-tight text-[#0A0A0A]'>
                            INSTANT ESIM DATA<br />
                            FOR TRAVELLERS
                        </h1>

                        {/* Download now*/}
                        <p className='text-[24px] sm:text-xl text-gray-700 font-semibold'>
                            Download Now!
                        </p>

                        {/* App Store Buttons */}
                        <div className='flex flex-wrap gap-4 justify-center lg:justify-start'>
                            <Link 
                                href='https://apps.apple.com' 
                                target='_blank'
                                className='transition-transform hover:scale-105'
                            >
                                <Image
                                    src={appStoreButton}
                                    alt='Download on App Store'
                                    width={140}
                                    height={47}
                                    className='h-12 w-auto'
                                />
                            </Link>
                            
                            <Link 
                                href='https://play.google.com' 
                                target='_blank'
                                className='transition-transform hover:scale-105'
                            >
                                <Image
                                    src={googlePlayButton}
                                    alt='Get it on Google Play'
                                    width={140}
                                    height={47}
                                    className='h-12 w-auto'
                                />
                            </Link>
                        </div>
                    </div>

                

                    {/*  RIGHT CONTENT Phones */}
          <div className="relative flex justify-center lg:justify-end mr-32">
            {/* Circular background */}
            <div className="absolute w-[420px] h-[420px] md:w-[580px] md:h-[570px] bg-[#00C896] rounded-full z-20"></div>
            <div className="absolute w-[460px] h-[460px] md:w-[560px] md:h-[560px] bg-[#FBBF24] rounded-full z-10 -translate-x-9 translate-y-5"></div>

            {/* Phones */}
            <div className="flex justify-center z-70">
              <Image
                src={mobileLeft}
                alt="Mobile Left"
                width={700}
                height={700}
                className=" h-[600px] translate-x-[100px] -translate-y-[40px]"
                priority
              />
              <Image
                src={mobileRight}
                alt="Mobile Right"
                width={700}
                height={700}
                className=" h-[650px] -translate-x-[70px] translate-y-[50px]"
                
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