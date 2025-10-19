import Banner from '@/components/Banner';
import CustomerReview from '@/components/FeatureSection/CustomerReview';
import InsructionSection from '@/components/FeatureSection/InsructionSection';
import PopularDestination from '@/components/FeatureSection/PopularDestination';
import Footer from '@/components/shared/Footer';
import React from 'react';

const page = () => {
  return (
    <div>
     <Banner/>
     <InsructionSection/>
     <CustomerReview/>
     <Footer/>
     
      
    </div>
  );
};

export default page;