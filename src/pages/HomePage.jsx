import React from "react";
import MainSection from "../components/Sections/MainSection/MainSection";
import SecondSection from "../components/Sections/SecondSection/SecondSection";
import PartnerSection from "../components/Sections/PartnerSection/PartnerSection";
import TournamentsSection from "../components/Sections/TournamentsSection/TournamentsSection";
import ExpoSection from "../components/Sections/ExpoSection/ExpoSection";
import AboutSection from "../components/Sections/AboutSection/AboutSection";
import WorkSection from "../components/Sections/WorkSection/WorkSection";
import SpeakersSection from "../components/Sections/SpeakersSection/SpeakersSection";

const HomePage = () => {
  return (
    <div style={{ color: "white" }}>
      <MainSection />
      <SecondSection />
      <PartnerSection />
      <TournamentsSection />
      <ExpoSection />
      <AboutSection />
      <WorkSection />
      <SpeakersSection />
    </div>
  );
};

export default HomePage;
