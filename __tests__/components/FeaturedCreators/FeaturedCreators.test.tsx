// External Dependencies
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Internal Dependencies
import { FeaturedCreators } from "@/components/FeaturedCreators/FeaturedCreators";

describe("FeaturedCreators", () => {
  const creators = [
    {
      id: 1,
      name: "Keepitreal",
      image: "/assets/images/creator-image-1.png",
      totalSales: 34500,
    },
    {
      id: 2,
      name: "DigiLab",
      image: "/assets/images/creator-image-2.png",
      totalSales: 34500,
    },
    {
      id: 3,
      name: "GravityOne",
      image: "/assets/images/creator-image-3.png",
      totalSales: 34500,
    },
    {
      id: 4,
      name: "Juanie",
      image: "/assets/images/creator-image-4.png",
      totalSales: 34500,
    },
    {
      id: 5,
      name: "BlueWhale",
      image: "/assets/images/creator-image-5.png",
      totalSales: 34500,
    },
  ];

  it("displays 5 creators", () => {
    render(<FeaturedCreators creators={creators} />);

    const featuredCreators = screen.getAllByRole("creator-card");

    expect(featuredCreators).toHaveLength(5);
  });
});
