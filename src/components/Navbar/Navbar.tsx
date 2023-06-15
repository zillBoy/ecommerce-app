// React Dependencies
import React from "react";

// Internal Dependencies
import { Button } from "../common/Button/Button";
import { Heading } from "../common/Heading/Heading";

export const Navbar = () => {
  return (
    <nav className="relative z-10 flex items-center justify-between mx-20 my-12 bg-transparent">
      <Heading text="Artopia" color="white" className="bg-transparent" />
      <Button text="Sign In" color="white" />
    </nav>
  );
};
