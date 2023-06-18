// React Dependencies
import React from "react";

// Internal Dependencies
import { Navbar } from "@/components/Navbar/Navbar";
import { HeroSection } from "@/components/Section/HeroSection";
import { PartnerSection } from "@/components/Section/PartnerSection";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />

      <div className="mx-20">
        <PartnerSection />
      </div>
    </div>
  );
};

export default HomePage;
