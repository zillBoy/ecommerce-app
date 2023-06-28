// React Dependencies
import React from "react";

// Next Dependencies
import Image from "next/image";

// Internal Dependencies
import { Typography } from "../Typography/Typography";

export type CategoryCardProps = {
  id?: number;
  title: string;
  image: string;
  icon: string;
};

export const CategoryCard = ({ id, title, image, icon }: CategoryCardProps) => {
  return (
    <div
      role="category-card"
      className="relative rounded-xl max-w-73 overflow-hidden min-w-full"
    >
      <div className="">
        <Image
          className="rounded-t-xl blur-md min-w-full"
          src={image}
          width={292}
          height={292}
          alt={`category-image-${id}`}
        />
        <div className="absolute flex justify-center items-center top-0 h-2/3 w-full">
          <Image
            src={icon}
            width={112}
            height={112}
            alt={`category-icon-${id}`}
          />
        </div>
      </div>
      <div className="relative bottom-1 py-6 px-9 bg-darkGray rounded-b-xl">
        <Typography text={title} color="white" />
      </div>
    </div>
  );
};
