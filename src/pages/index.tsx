// React Dependencies
import React, { useState, useEffect, useCallback } from "react";

// External Dependencies
import axios from "axios";

// Internal Dependencies
import { Navbar } from "@/components/Navbar/Navbar";
import { HeroSection } from "@/components/Section/HeroSection";
import { PartnerSection } from "@/components/Section/PartnerSection";
import { ContentSection } from "@/components/Section/ContentSection";
import { FeaturedProducts } from "@/components/FeaturedProducts/FeaturedProducts";
import { FeaturedCreators } from "@/components/FeaturedCreators/FeaturedCreators";
import { FeaturedCategories } from "@/components/FeaturedCategories/FeaturedCategories";

import { CategoryCardProps } from "@/components/common/Card/CategoryCard";
import { categories } from "@/constants/data";

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [featuredCreators, setFeaturedCreators] = useState([]);
  const [featuredCategories, setFeaturedCategories] = useState<
    CategoryCardProps[]
  >([]);

  const fetchFeaturedProducts = async () => {
    try {
      const response = await axios("/api/featuredProducts");
      const { products } = response.data;
      setFeaturedProducts(products);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchFeaturedCreators = async () => {
    try {
      const response = await axios("/api/featuredCreators");
      const { creators } = response.data;
      setFeaturedCreators(creators);
    } catch (err) {
      console.log(err);
    }
  };

  const getData = useCallback(() => {
    fetchFeaturedProducts();
    fetchFeaturedCreators();

    // Featured Categories
    setFeaturedCategories(categories);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

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
          headingVariant="subMainHeading"
        />
        {featuredProducts.length > 0 && (
          <FeaturedProducts products={featuredProducts} />
        )}

        <ContentSection
          role="topCreatorsSection"
          heading="Top creators"
          paragraph="Checkout Top Rated Creators on the NFT Marketplace"
          className="flex-wrap items-end justify-between mt-40"
          headingVariant="heading"
          headingClassName="font-semibold"
          btnText="View Rankings"
        />
        {featuredCreators.length > 0 && (
          <FeaturedCreators creators={featuredCreators} />
        )}

        <ContentSection
          role="categoriesSection"
          heading="Categories"
          className="mt-40"
          headingVariant="heading"
          headingClassName="font-semibold"
        />

        {featuredCategories.length > 0 && (
          <FeaturedCategories categories={featuredCategories} />
        )}
      </div>
    </div>
  );
};

export default HomePage;
