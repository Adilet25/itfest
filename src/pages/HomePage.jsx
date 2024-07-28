import React, { lazy } from "react";
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
      </Layout>
    </div>
  );
};

export default HomePage;
