// React Dependencies
import React from "react";

// Next Dependencies
import Image from "next/image";

// Internal Dependencies
import { Typography } from "../Typography/Typography";

export type ProductCardProps = {
  id?: number | string;
  image: string;
  title: string;
  price: number;
  creator: {
    image: string;
    name: string;
  };
  cardNum?: number;
};

export const ProductCard = ({
  image,
  title,
  price,
  creator,
  cardNum,
}: ProductCardProps) => {
  return (
    <div
      role="product-card"
      className="relative block w-full mb-4 rounded-2xl lg:w-100 2xl:w-1/3.5"
      // max-2xl:w-
    >
      <div className="relative">
        <Image
          className="w-full rounded-2xl lg:w-100 2xl:w-full"
          src={image}
          width={400}
          height={400}
          alt="product-image"
        />

        <div className="absolute bottom-0 w-full px-6 pt-4 pb-6 backdrop-blur-3xl rounded-b-2xl">
          <Typography
            text={title}
            color="white"
            variant="paragraph"
            className="mb-2.5"
          />
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src={creator.image}
                width={42}
                height={42}
                alt="creator-image"
              />
              <div className="ml-3">
                <Typography
                  text="Creator"
                  variant="footnode"
                  className="text-gray"
                />
                <Typography
                  text={creator.name}
                  variant="triParagraph"
                  color="white"
                />
              </div>
            </div>

            <div>
              <Typography
                text="Amount"
                variant="footnode"
                className="text-right text-gray"
              />
              <Typography
                text={`${price} USD`}
                variant="triParagraph"
                color="white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
