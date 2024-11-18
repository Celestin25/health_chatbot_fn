import React from "react";
import MentalHealthChat from "../Components/MentalhealthChatbot";
import Footer from "../Components/Homepage/Homepage_footer";
import Header from "../Components/Homepage/Homepage_header";

const ChatBot = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <MentalHealthChat />
      <Footer />
    </div>
  );
};

export default ChatBot;