// External Dependencies
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Internal Dependencies
import { ContentSection } from "@/components/Section/ContentSection";

describe("ContentSection", () => {
  it("displays the heading and paragraph", () => {
    render(
      <ContentSection
        role="trendingSalesSection"
        heading="Trending Sales"
        paragraph="Checkout our weekly updated trending sales"
      />
    );

    const trendingSalesSections = screen.getByRole("trendingSalesSection");
    const heading = screen.getByRole("heading");
    const paragraph = screen.getByRole("typoParagraph");

    expect(trendingSalesSections).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  });
});
