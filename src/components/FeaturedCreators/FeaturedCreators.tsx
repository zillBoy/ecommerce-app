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
      role="featured-creators"
      className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
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
