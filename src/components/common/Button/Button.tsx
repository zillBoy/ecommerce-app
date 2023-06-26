// React Dependencies
import Image from "next/image";
import React from "react";

// External Dependencies
import { tv } from "tailwind-variants";

type Props = {
  text: string;
  variant: "text" | "contained" | "outline";
  color: "white" | "black";
  icon?: string;
  className: string;
};

const button = tv({
  base: "text-base bg-primary text-white border border-primary",
  variants: {
    type: {
      text: "text-xl bg-transparent border-0 p-0 font-bold",
      contained: "bg-primary text-white px-10 py-3 hover:bg-primaryDark",
      outline: "bg-transparent text-primary px-10 py-3",
    },
    color: {
      white: "text-white",
      black: "text-black",
    },
  },
  defaultVariants: {
    variant: "contained",
    color: "black",
  },
});

export const Button = ({ text, variant, color, icon, className }: Props) => {
  return (
    <button
      className={button({
        type: variant,
        color,
        class: `${icon?.length !== 0 ? "flex items-center" : ""} ${className}`,
      })}
    >
      {icon && (
        <Image className="mr-3" src={icon} width={20} height={20} alt="icon" />
      )}
      {text}
    </button>
  );
};

Button.defaultProps = {
  variant: "contained",
  color: "black",
  className: "",
};
