// React Dependencies
import React from "react";

// Next Dependencies
import Image from "next/image";

// Internal Dependencies
import { Heading } from "../common/Heading/Heading";
import { Button } from "../common/Button/Button";
import { NumericInfoCard } from "../common/Card/NumericInfoCard";
import { Typography } from "../common/Typography/Typography";

export const HeroSection = () => {
  return (
    <>
      <div className="absolute top-0 h-screen bg-secondary w-96" />
      <Image
        src="assets/svg/hero-section-curve.svg"
        width={100}
        height={100}
        className="absolute bottom-0 bg-transparent"
        alt="hero section curve"
      />

      <div role="herosection" className="relative flex items-start mx-36">
        <div className="flex items-center gap-5">
          <Image
            src="/assets/images/hero-image-1.png"
            alt="hero-image"
            width="270"
            height="560"
            className="min-w-67.5 min-h-140"
          />
          <Image
            src="/assets/images/hero-image-2.png"
            alt="hero-image"
            width="270"
            height="560"
            className="min-w-67.5 min-h-140"
          />
        </div>
        <div className="ml-10">
          <Heading
            variant="mainHeading"
            text="Buy and Sell Digital Arts"
            color="white"
          />
          <Typography
            className="mt-11"
            text="The world’s largest online marketplace of online digital art"
            color="white"
          />
          <Button
            className="my-11"
            variant="text"
            color="white"
            text="Explore"
          />

          <div className="flex items-start gap-14">
            <NumericInfoCard
              number="999,000"
              text="Digital art file"
              color="white"
            />
            <NumericInfoCard number="2000" text="Art Seller" color="white" />
            <NumericInfoCard number="10,000" text="Buyer" color="white" />
          </div>
        </div>
      </div>
    </>
  );
};
