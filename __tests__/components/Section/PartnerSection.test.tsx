// External dependencies
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Internal dependencies
import { PartnerSection } from "@/components/Section/PartnerSection";

describe("PartnerSection", () => {
  it("displays 5 partner logos", () => {
    render(<PartnerSection />);
    const partnerLogos = screen.getAllByAltText("partner logo");

    expect(partnerLogos).toHaveLength(5);
  });
});
