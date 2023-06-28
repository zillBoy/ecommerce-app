// React Dependencies
import React from "react";

// External Dependencies
import { tv } from "tailwind-variants";

type Props = {
  text: string;
  variant:
    | "mainParagraph"
    | "mainSubParagraph"
    | "paragraph"
    | "subParagraph"
    | "triParagraph"
    | "caption"
    | "footnode";
  color: "white" | "black" | "lightGray";
  className: string;
};

const paragraph = tv({
  base: "text-2xl",
  variants: {
    type: {
      mainParagraph: "text-3.5xl font-semibold",
      mainSubParagraph: "text-2.5xl font-semibold",
      paragraph: "text-1.5xl font-bold",
      subParagraph: "text-xl font-medium",
      triParagraph: "text-lg font-medium",
      caption: "text-1.5xl font-light",
      footnode: "text-base font-medium",
    },
    color: {
      white: "text-white",
      black: "text-black",
      lightGray: "text-lightGray",
    },
  },
});

export const Typography = ({ text, variant, color, className }: Props) => {
  return (
    <p
      role="typoParagraph"
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
