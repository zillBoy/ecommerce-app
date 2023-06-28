// External Dependencies
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Internal Dependencies
import { FeaturedCategories } from "@/components/FeaturedCategories/FeaturedCategories";
import { CategoryCardProps } from "@/components/common/Card/CategoryCard";

describe("FeaturedCreators", () => {
  const categories: CategoryCardProps[] = [
    {
      id: 1,
      title: "Digital Art",
      image: "/assets/images/category-1.png",
      icon: "/assets/svg/paint-brush.svg",
    },
    {
      id: 2,
      title: "Game assets",
      image: "/assets/images/category-2.png",
      icon: "/assets/svg/swatches.svg",
    },
  ];

  it("displays 5 creators", () => {
    render(<FeaturedCategories categories={categories} />);

    const featuredCreators = screen.getAllByRole("category-card");

    expect(featuredCreators).toHaveLength(2);
  });
});
