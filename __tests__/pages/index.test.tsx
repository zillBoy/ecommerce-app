import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

// Internal Dependencies
import HomePage from "@/pages/index";
import { ContentSection } from "@/components/Section/ContentSection";

describe("Home", () => {
  it("displays the Navbar component", async () => {
    render(<HomePage />);
    const navbar = await screen.findByRole("navigation");
    expect(navbar).toBeInTheDocument();
  });

  it("displays the HeroSection component", async () => {
    render(<HomePage />);
    const heroSection = await screen.findByRole("herosection");
    expect(heroSection).toBeInTheDocument();
  });

  it("displays the PartnerSection component", () => {
    render(<HomePage />);
    const partnerSection = screen.getByRole("partnerSection");
    expect(partnerSection).toBeInTheDocument();
  });

  it("displays the ContentSection component", () => {
    const props = {
      role: "contentSection",
      heading: "Heading",
      paragraph: "some test content",
    };

    render(<ContentSection headingVariant="heading" {...props} />);
    const contentSection = screen.getByRole("contentSection");
    expect(contentSection).toBeInTheDocument();
  });

  it("displays the FeaturedProducts component inside home-page", async () => {
    render(<HomePage />);
    const featuredProducts = await screen.findAllByRole("product-card");
    expect(featuredProducts).toHaveLength(2);
  });

  it("displays the FeaturedCreators component inside home-page", async () => {
    render(<HomePage />);
    const featuredCreators = await screen.findAllByRole("creator-card");
    expect(featuredCreators).toHaveLength(5);
  });

  it("displays the FeaturedCategories component inside home-page", async () => {
    render(<HomePage />);
    const featuredCategories = await screen.findAllByRole("category-card");
    expect(featuredCategories).toHaveLength(8);
  });

  // 7. Section with text-content on left-side and images on the right-side
  // 9. Digital art trending section
  // 10. Section with 3 bottom-cards
  // 11. Subscribe for email
  // 12. Footer showing
  // 13. All rights reserved
});
