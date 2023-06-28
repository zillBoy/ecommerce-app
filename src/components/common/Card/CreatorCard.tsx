// React Dependencies
import React from "react";

// Next Dependencies
import Image from "next/image";

// External Dependencies
import { abbreviateNumber } from "js-abbreviation-number";

// Internal Dependencies
import { Typography } from "../Typography/Typography";

export type CreatorCardProps = {
  id?: number | string;
  name: string;
  image: string;
  totalSales: number;
  cardNum?: number;
};

export const CreatorCard = ({
  id,
  name,
  image,
  totalSales,
  cardNum,
}: CreatorCardProps) => {
  return (
    <div
      role="creator-card"
      className="relative p-6 rounded-lg max-w-73 bg-darkGray min-w-full"
    >
      <p className="inline-block w-6 text-center rounded-full bg-darkerGray text-lightGray">
        {cardNum}
      </p>
      <Image
        className="mx-auto -mt-5"
        src={image}
        width={146}
        height={146}
        alt="creator"
      />

      <div className="mt-6 mb-4">
        <Typography
          className="text-center capitalize"
          color="white"
          text={name}
          variant="mainSubParagraph"
        />

        <div className="flex justify-center gap-1 flex-wrap">
          <Typography
            className="font-normal text-center"
            color="lightGray"
            text="Total Sales:"
            variant="subParagraph"
          />
          <Typography
            className="font-normal text-center"
            color="white"
            text={`${abbreviateNumber(totalSales, 1)} USD`}
            variant="subParagraph"
          />
        </div>
      </div>
    </div>
  );
};
