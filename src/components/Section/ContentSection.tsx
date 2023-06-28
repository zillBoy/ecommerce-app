// React Dependencies
import React from "react";

// Internal Dependencies
import { Heading } from "../common/Heading/Heading";
import { Typography } from "../common/Typography/Typography";
import { Button } from "../common/Button/Button";

// Props
type Props = {
  role: string;
  heading: string;
  paragraph?: string;
  btnText?: string;
  className?: string;
  headingClassName?: string;
  headingVariant: "heading" | "subMainHeading" | "mainHeading" | "subHeading";
};

export const ContentSection = ({
  role,
  heading,
  paragraph = "",
  className = "",
  headingClassName = "",
  headingVariant,
  btnText = "",
}: Props) => {
  return (
    <div
      className={`mb-14 ${className} ${
        btnText.length === 0 ? "block" : "flex"
      }`}
    >
      <div role={role} className="">
        <Heading
          text={heading}
          color="white"
          variant={headingVariant}
          className={headingClassName}
        />
        <Typography
          className="mt-2"
          text={paragraph}
          color="white"
          variant="caption"
        />
      </div>

      <div
        className={`${btnText.length === 0 ? "hidden" : "block my-4 md:my-0"}`}
      >
        <Button
          text={btnText}
          variant="outline"
          color="white"
          className="font-semibold"
          icon="./assets/svg/rocket-launch.svg"
        />
      </div>
    </div>
  );
};
