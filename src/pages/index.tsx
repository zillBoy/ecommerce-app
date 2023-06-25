// React Dependencies
import React, { useState, useEffect } from "react";

// External Dependencies
import axios from "axios";

// Internal Dependencies
import { Navbar } from "@/components/Navbar/Navbar";
import { HeroSection } from "@/components/Section/HeroSection";
import { PartnerSection } from "@/components/Section/PartnerSection";
import { ContentSection } from "@/components/Section/ContentSection";
import { FeaturedProducts } from "@/components/FeaturedProducts/FeaturedProducts";

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  const fetchFeaturedProducts = async () => {
    try {
      const response = await axios("/api/featuredProducts");
      const { products } = response.data;
      setFeaturedProducts(products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

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
        {featuredProducts.length > 0 && (
          <FeaturedProducts products={featuredProducts} />
        )}
      </div>
    </div>
  );
};

export default HomePage;
