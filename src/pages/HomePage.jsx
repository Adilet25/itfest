import React, { lazy } from "react";
// import MainSection from "../components/Sections/MainSection/MainSection";
// import SecondSection from "../components/Sections/SecondSection/SecondSection";
// import PartnerSection from "../components/Sections/PartnerSection/PartnerSection";
// import TournamentsSection from "../components/Sections/TournamentsSection/TournamentsSection";
// import ExpoSection from "../components/Sections/ExpoSection/ExpoSection";
// import AboutSection from "../components/Sections/AboutSection/AboutSection";
// import WorkSection from "../components/Sections/WorkSection/WorkSection";
// import SpeakersSection from "../components/Sections/SpeakersSection/SpeakersSection";
import Layout from "../components/Layout/Layout";

const MainSection = lazy(() =>
  import("../components/Sections/MainSection/MainSection")
);
const SecondSection = lazy(() =>
  import("../components/Sections/SecondSection/SecondSection")
);
const PartnerSection = lazy(() =>
  import("../components/Sections/PartnerSection/PartnerSection")
);
const AboutSection = lazy(() =>
  import("../components/Sections/AboutSection/AboutSection")
);
const TournamentsSection = lazy(() =>
  import("../components/Sections/TournamentsSection/TournamentsSection")
);
const PacketSection = lazy(() =>
  import("../components/Sections/PacketSection/PacketSection")
);
const ExpoSection = lazy(() =>
  import("../components/Sections/ExpoSection/ExpoSection")
);
// const PartnerSection = lazy(() =>
//   import("../components/Sections/PartnerSection/PartnerSection")
// );
// const WorkSection = lazy(() =>
//   import("../components/Sections/WorkSection/WorkSection")
// );
// const SpeakersSection = lazy(() =>
//   import("../components/Sections/SpeakersSection/SpeakersSection")
// );

const HomePage = () => {
  return (
    <div style={{ color: "white" }}>
      <Layout>
        <MainSection />
        <SecondSection />
        <PartnerSection />
        <AboutSection />
        <TournamentsSection />
        <PacketSection />
        <ExpoSection />
        {/* <WorkSection />
        <SpeakersSection /> */}
      </Layout>
    </div>
  );
};

export default HomePage;
