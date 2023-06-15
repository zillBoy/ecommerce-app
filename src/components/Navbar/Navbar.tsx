// React Dependencies
import React from "react";

// Internal Dependencies
import { Button } from "../common/Button/Button";
import { Heading } from "../common/Heading/Heading";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mx-20 my-12">
      <Heading text="Artopia" />
      <Button text="Sign In" />
    </nav>
  );
};
