import React from 'react';
import Header from '../Components/Homepage/Homepage_header';
import Footer from '../Components/Homepage/Homepage_footer';
import ContactSection from '../Components/Homepage/ContactSection';
import HeroSection from '../Components/Homepage/HeroSection';
import BestDeals from '../Components/Homepage/BestDeals';
import AboutCrafters from '../Components/Homepage/AboutCrafters'
import PopularProducts from '../Components/Homepage/PopularProducts';
import VoiceflowChatWidget from '../Components/ChatBot';
import MentalHealthChat from '../Components/MentalhealthChatbot';
const Homepage: React.FC = () => {
  return (
    <div className=' bg-bgwhite'>
      <VoiceflowChatWidget/>
      <Header />
      <HeroSection />
      <PopularProducts />
      <AboutCrafters />
      <BestDeals />
      <ContactSection />
      <Footer />
      <VoiceflowChatWidget />
    </div>
  );
};

export default Homepage;
