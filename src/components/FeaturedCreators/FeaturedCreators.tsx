// React Dependencies
import React from "react";

// Internal Dependencies
import {
  CreatorCard,
  CreatorCardProps,
} from "@/components/common/Card/CreatorCard";

export type FeaturedCreatorsProps = {
  creators: CreatorCardProps[];
};

export const FeaturedCreators = ({ creators }: FeaturedCreatorsProps) => {
  return (
    <div
      role="featured-products"
      className="flex flex-col flex-wrap items-start justify-center md:flex-row md:justify-between"
    >
      {creators.map((creator, index) => (
        <CreatorCard
          key={creator.id}
          name={creator.name}
          image={creator.image}
          totalSales={creator.totalSales}
          cardNum={index + 1}
        />
      ))}
    </div>
  );
};
