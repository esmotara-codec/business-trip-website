import Banner from '@/components/Banner';
import CustomerReview from '@/components/FeatureSection/CustomerReview';
import FrequentlyAsk from '@/components/FeatureSection/FrequentlyAsk';
import InsructionSection from '@/components/FeatureSection/InsructionSection';
import PopularDestination from '@/components/FeatureSection/PopularDestination';
import WhyChooseUs from '@/components/FeatureSection/WhyChooseUs';
import Footer from '@/components/shared/Footer';
import React from 'react';

const page = () => {
  return (
    <div>
     <Banner/>
     <PopularDestination/>
     <InsructionSection/>
     <WhyChooseUs/>
     <CustomerReview/>
     <FrequentlyAsk/>
     <Footer/>
     
      
    </div>
  );
};

export default page;