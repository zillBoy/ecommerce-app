// React Dependencies
import React from "react";

// External Dependencies
import { tv } from "tailwind-variants";

type Props = {
  text: string;
  variant: "mainParagraph" | "paragraph" | "subParagraph";
  color: "white" | "black";
  className: string;
};

const paragraph = tv({
  base: "text-2xl",
  variants: {
    type: {
      mainParagraph: "text-3.5xl font-semibold",
      paragraph: "",
      subParagraph: "text-xl font-medium",
    },
    color: {
      white: "text-white",
      black: "text-black",
    },
  },
});

export const Typography = ({ text, variant, color, className }: Props) => {
  return (
    <p
      role={variant}
      className={paragraph({ type: variant, color, class: className })}
    >
      {text}
    </p>
  );
};

Typography.defaultProps = {
  variant: "paragraph",
  color: "black",
  className: "",
};
