// External Dependencies
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Internal Dependencies
import { HeroSection } from "@/components/Section/HeroSection";

describe("HeroSection", () => {
  it("displays main heading, paragraph and button (with text 'Explore')", () => {
    render(<HeroSection />);

    const heading = screen.getByRole("heading");
    const paragraph = screen.getByRole("paragraph");
    const button = screen.getByRole("button", {
      name: "Explore",
    });

    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("displays 3 NumericInfoCard component", () => {
    render(<HeroSection />);

    const numericInfoCard = screen.getAllByRole("contentinfo");
    expect(numericInfoCard).toHaveLength(3);
  });

  it("displays 2 hero images", () => {
    render(<HeroSection />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(2);
  });
});
