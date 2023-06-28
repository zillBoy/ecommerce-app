// React Dependencies
import React from "react";

// External Dependencies
import { Menu } from "react-feather";

// Internal Dependencies
import { Button } from "../common/Button/Button";
import { Heading } from "../common/Heading/Heading";

export const Navbar = () => {
  return (
    <nav className="relative z-10 flex items-center justify-between mx-4 my-12 bg-transparent md:mx-20">
      <Heading text="Artopia" color="white" className="bg-transparent" />
      <div>
        <div className="block md:hidden">
          <Menu color="white" size={32} />
        </div>
        <div className="hidden md:block">
          <Button text="Sign In" color="white" />
        </div>
      </div>
    </nav>
  );
};
