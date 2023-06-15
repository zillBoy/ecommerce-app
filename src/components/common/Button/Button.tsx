// React Dependencies
import React from "react";

// External Dependencies
import { tv } from "tailwind-variants";

type Props = {
  text: string;
  variant: string;
};

const button = tv({
  base: "bg-primary text-white border border-primary",
  variants: {
    type: {
      contained: "bg-primary text-white hover:bg-primaryDark",
      outline: "bg-transparent text-primary",
    },
  },
  compoundVariants: [
    {
      class: "text-base px-10 py-3",
    },
  ],
  defaultVariants: {
    size: "md",
    color: "primary",
  },
});

export const Button = ({ text, variant }: Props) => {
  return <button className={button({ type: variant })}>{text}</button>;
};

Button.defaultProps = {
  variant: "contained",
};
