import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../Components/Homepage/Homepage_header";
import Footer from "../Components/Homepage/Homepage_footer";
import MentalHealthChat from "../Components/MentalHealthChat";

const MentalHealthChatPage = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      <Header />
      <div className="mt-32 flex flex-col gap-[20px] px-10 p-6 mb-20">
        <div className="flex flex-col-reverse gap-4 justify-between items-center md:flex-row">
          <div className="flex flex-row gap-[14px] items-center font-outfit">
            <span className="text-base text-black font-[800] md:text-[18px]">
              {t("Mental Health Assistant")}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-[20px]">
          <MentalHealthChat />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MentalHealthChatPage;