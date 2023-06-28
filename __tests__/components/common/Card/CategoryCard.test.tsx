// Extenral Dependencies
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Internal Dependencies
import { CategoryCard } from "@/components/common/Card/CategoryCard";

describe("CategoryCard", () => {
  it("displays creator image, name, totalSales", () => {
    const props = {
      id: 1,
      title: "Digital Art",
      image: "/assets/images/category-1.png",
      icon: "/assets/svg/paint-brush.svg",
    };

    render(<CategoryCard {...props} />);

    const categoryTitle = screen.getByText("Digital Art");
    const categoryImage = screen.getByAltText("category-image-1");
    const categoryIcon = screen.getByAltText("category-icon-1");

    expect(categoryTitle).toBeInTheDocument();
    expect(categoryImage).toBeInTheDocument();
    expect(categoryIcon).toBeInTheDocument();
  });
});
