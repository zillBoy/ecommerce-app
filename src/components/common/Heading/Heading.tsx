// React Dependencies
import React from "react";

// External Dependencies
import { tv } from "tailwind-variants";

type Props = {
  text: string;
  variant: string;
};

const heading = tv({
  base: "text-4.5xl leading-9",
  variants: {
    type: {
      mainHeading: "font-semibold text-8.5xl leading-none",
      heading: "",
      subHeading: "",
    },
  },
});

export const Heading = ({ text, variant }: Props) => {
  return <h1 className={heading({ type: variant })}>{text}</h1>;
};

Heading.defaultProps = {
  variant: "heading",
};
