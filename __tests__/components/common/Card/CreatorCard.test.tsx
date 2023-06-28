// Extenral Dependencies
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Internal Dependencies
import { CreatorCard } from "@/components/common/Card/CreatorCard";

describe("CreatorCard", () => {
  it("displays creator image, name, totalSales", () => {
    const props = {
      id: 1,
      name: "Keepitreal",
      image: "/assets/images/creator-image-1.png",
      totalSales: 34500,
      cardNum: 1,
    };

    render(<CreatorCard {...props} />);

    const creatorImage = screen.getByRole("img");
    const creatorName = screen.getByText("Keepitreal");
    const creatorTotalSales = screen.getByText("34.5k USD");

    expect(creatorImage).toBeInTheDocument();
    expect(creatorName).toBeInTheDocument();
    expect(creatorTotalSales).toBeInTheDocument();
  });
});
