// React Dependencies
import React from "react";
import { Heading } from "../common/Heading/Heading";
import { Typography } from "../common/Typography/Typography";

// Props
type Props = {
  role: string;
  heading: string;
  paragraph: string;
};

export const ContentSection = ({ role, heading, paragraph }: Props) => {
  return (
    <div role={role} className="mb-14">
      <Heading text={heading} color="white" variant="subMainHeading" />
      <Typography
        className="mt-2"
        text={paragraph}
        color="white"
        variant="caption"
      />
    </div>
  );
};
