// React Dependencies
import React from "react";

// Internal Dependencies
import {
  CategoryCard,
  CategoryCardProps,
} from "@/components/common/Card/CategoryCard";

export type FeaturedCategoriesProps = {
  categories: CategoryCardProps[];
};

export const FeaturedCategories = ({ categories }: FeaturedCategoriesProps) => {
  return (
    <div
      role="featured-products"
      className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          id={category.id}
          image={category.image}
          title={category.title}
          icon={category.icon}
        />
      ))}
    </div>
  );
};
