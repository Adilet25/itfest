import React from "react";
import MainSection from "../components/Sections/MainSection/MainSection";
import SecondSection from "../components/Sections/SecondSection/SecondSection";
import PartnerSection from "../components/Sections/PartnerSection/PartnerSection";
import TournamentsSection from "../components/Sections/TournamentsSection/TournamentsSection";
import ExpoSection from "../components/Sections/ExpoSection/ExpoSection";
import AboutSection from "../components/Sections/AboutSection/AboutSection";

const HomePage = () => {
  return (
    <div>
      <MainSection />
      <SecondSection />
      <PartnerSection />
      <TournamentsSection />
      <ExpoSection />
      <AboutSection />
    </div>
  );
};

export default HomePage;
