// External Dependencies
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FeaturedProducts } from "@/components/FeaturedProducts/FeaturedProducts";

describe("FeaturedProducts", () => {
  const products = [
    {
      id: 1,
      image: "/assets/images/product-image.png",
      title: "Test Product 1",
      price: 12.22,
      creator: {
        image: "/assets/images/creator-image.png",
        name: "Da Viper",
      },
    },
    {
      id: 2,
      image: "/assets/images/product-image.png",
      title: "Test Product 2",
      price: 4.25,
      creator: {
        image: "/assets/images/creator-image.png",
        name: "Bear",
      },
    },
    {
      id: 3,
      image: "/assets/images/product-image.png",
      title: "Test Product 3",
      price: 14.25,
      creator: {
        image: "/assets/images/creator-image.png",
        name: "Viking",
      },
    },
  ];

  it("dispaly 3 products", () => {
    render(<FeaturedProducts products={products} />);

    const featuredProducts = screen.getAllByRole("product-card");

    expect(featuredProducts).toHaveLength(3);
  });
});
