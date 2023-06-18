// React Dependencies
import React from "react";

// Internal Dependencies
import { Navbar } from "@/components/Navbar/Navbar";
import { HeroSection } from "@/components/Section/HeroSection";
import { PartnerSection } from "@/components/Section/PartnerSection";
import { ContentSection } from "@/components/Section/ContentSection";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />

      <div className="mx-10 md:mx-20">
        <PartnerSection />
        <ContentSection
          role="trendingSalesSection"
          heading="Trending Sales"
          paragraph="Checkout our weekly updated trending sales"
        />
      </div>
    </div>
  );
};

export default HomePage;
