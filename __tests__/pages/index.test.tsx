// External Dependencies
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Internal Dependencies
import HomePage from "@/pages/index";
import { PartnerSection } from "@/components/Section/PartnerSection";

describe("Home", () => {
  it("displays the Navbar component", () => {
    render(<HomePage />);
    const navbar = screen.getByRole("navigation");
    expect(navbar).toBeInTheDocument();
  });

  it("displays the HeroSection component", () => {
    render(<HomePage />);
    const heroSection = screen.getByRole("herosection");
    expect(heroSection).toBeInTheDocument();
  });

  it("displays the PartnerSection component", () => {
    render(<PartnerSection />);
    const partnerSection = screen.getByRole("partnerSection");
    expect(partnerSection).toBeInTheDocument();
  });

  // 3. Partners component showing
  // 4. Headline section with download-able image cards showing
  // 5. Headline section with top creators showing
  // 6. Artist Card Grid showing
  // 7. Section with text-content on left-side and images on the right-side
  // 8. Categories showing
  // 9. Digital art trending section
  // 10. Section with 3 bottom-cards
  // 11. Subscribe for email
  // 12. Footer showing
  // 13. All rights reserved
});
