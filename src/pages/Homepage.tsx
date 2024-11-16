import React from "react";
import Header from "../Components/Homepage/Homepage_header";
import Footer from "../Components/Homepage/Homepage_footer";
import ContactSection from "../Components/Homepage/ContactSection";
import HeroSection from "../Components/Homepage/HeroSection";
import BestDeals from "../Components/Homepage/BestDeals";
import AboutCrafters from "../Components/Homepage/AboutCrafters";
import PopularProducts from "../Components/Homepage/PopularProducts";
import VoiceflowChatWidget from "../Components/ChatBot";

const Homepage: React.FC = () => {
  return (
    <div className=" bg-bgwhite">
      <Header />
      <HeroSection />
      <PopularProducts />
      <AboutCrafters />
      <BestDeals />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Homepage;
