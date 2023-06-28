// React Dependencies
import React from "react";

// External Dependencies
import { tv } from "tailwind-variants";

type Props = {
  text: string;
  variant: "mainHeading" | "subMainHeading" | "heading" | "subHeading";
  color: "white" | "black";
  className: string;
};

const heading = tv({
  base: "text-4.5xl leading-9",
  variants: {
    type: {
      mainHeading: "font-semibold text-8.5xl leading-none",
      subMainHeading: "font-semibold text-4.5xl md:text-5xl",
      heading: "text-3xl md:text-4.5xl",
      subHeading: "",
    },
    color: {
      white: "text-white",
      black: "text-black",
    },
  },
});

export const Heading = ({ text, variant, color, className }: Props) => {
  const classes = heading({ type: variant, color, class: className });

  const renderHeading = () => {
    if (variant === "mainHeading") {
      return <h1 className={classes}>{text}</h1>;
    } else if (variant === "subMainHeading") {
      return <h2 className={classes}>{text}</h2>;
    } else if (variant === "heading") {
      return <h3 className={classes}>{text}</h3>;
    } else if (variant === "subHeading") {
      return <h4 className={classes}>{text}</h4>;
    } else {
      return <h5 className={classes}>{text}</h5>;
    }
  };

  return renderHeading();
};

Heading.defaultProps = {
  variant: "heading",
  color: "black",
  className: "",
};
