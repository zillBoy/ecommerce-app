// React Dependencies
import React from "react";

// Next Dependencies
import Image from "next/image";

const partnerLogos = [
  "/assets/images/partner-1.png",
  "/assets/images/partner-2.png",
  "/assets/images/partner-3.png",
  "/assets/images/partner-4.png",
  "/assets/images/partner-5.png",
];

export const PartnerSection = () => {
  return (
    <div
      role="partnerSection"
      className="flex flex-wrap items-center w-full lg:justify-between sm:justify-center py-9 px-11 my-18 border-y"
    >
      {partnerLogos.map((partner, index) => (
        <Image
          key={index}
          src={partner}
          width={120}
          height={60}
          alt="partner logo"
          className="m-6"
        />
      ))}
    </div>
  );
};
