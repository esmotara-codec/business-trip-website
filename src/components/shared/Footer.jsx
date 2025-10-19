import React from 'react';
import Container from './Container';
import Link from 'next/link';
import logo from './../../assets/Vector.png';
import logoName from './../../assets/Group 1597880464.png';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='bg-white py-4 md:py-6 lg:py-8 border-t border-gray-200'>
           <Container>
             <footer className='container mx-auto flex justify-between items-center '>
               {/* Logo */}
             <Link href="/" className='flex items-center space-x-2'>
            <Image src={logo}
            alt='logo'
            width={40}
            height={40}
            />
            
            <Image src={logoName}
            alt='logo name'
            width={70}
            height={70}
            />
            </Link>

              <p className='font-inter-tight text-[16px] text-[#4A4A4A] font-normal '>Instant eSIM Data forTravelers - Connect in 180+ <br/> Countries.</p>
              
            </footer>
           </Container>

            
        </div>
    );
};

export default Footer;