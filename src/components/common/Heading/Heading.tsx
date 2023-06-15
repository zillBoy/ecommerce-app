// React Dependencies
import React from "react";

// External Dependencies
import { tv } from "tailwind-variants";

type Props = {
  text: string;
  variant: "mainHeading" | "heading" | "subHeading";
  color: "white" | "black";
  className: string;
};

const heading = tv({
  base: "text-4.5xl leading-9",
  variants: {
    type: {
      mainHeading: "font-semibold text-8.5xl leading-none",
      heading: "",
      subHeading: "",
    },
    color: {
      white: "text-white",
      black: "text-black",
    },
  },
});

export const Heading = ({ text, variant, color, className }: Props) => {
  return (
    <h1 className={heading({ type: variant, color, class: className })}>
      {text}
    </h1>
  );
};

Heading.defaultProps = {
  variant: "heading",
  color: "black",
  className: "",
};
