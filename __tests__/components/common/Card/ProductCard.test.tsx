// External Dependencies
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

// Internal Dependencies
import { ProductCard } from "@/components/common/Card/ProductCard";

describe("ProductCard", () => {
  it("display product image, title, price, creator image and name", () => {
    const props = {
      image: "/assets/images/product-image.png",
      title: "Test Product",
      price: 12.22,
      creator: {
        image: "/assets/images/creator-image.png",
        name: "Da Viper",
      },
    };

    render(<ProductCard {...props} />);

    const productImage = screen.getByAltText("product-image");
    const creatorImage = screen.getByAltText("creator-image");
    const creatorName = screen.getByText("Da Viper");
    const title = screen.getByText("Test Product");
    const price = screen.getByText("12.22 USD");

    expect(productImage).toBeInTheDocument();
    expect(creatorImage).toBeInTheDocument();
    expect(creatorName).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });
});
