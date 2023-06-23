// Next Dependencies
import type { NextApiRequest, NextApiResponse } from "next";

// Internal Dependencies
import { ProductCardProps } from "@/components/common/Card/ProductCard";

type Data = {
  products?: ProductCardProps[];
  message?: string;
};

// TODO: Remove this onces we get the data from database (Superbase)
const products = [
  {
    id: 1,
    image: "/assets/images/product-image.png",
    title: "Test Product 1",
    price: 12.22,
    creator: {
      image: "/assets/images/creator-image.png",
      name: "Da Viper",
    },
  },
  {
    id: 2,
    image: "/assets/images/product-image.png",
    title: "Test Product 2",
    price: 4.25,
    creator: {
      image: "/assets/images/creator-image.png",
      name: "Bear",
    },
  },
  {
    id: 3,
    image: "/assets/images/product-image.png",
    title: "Test Product 3",
    price: 14.25,
    creator: {
      image: "/assets/images/creator-image.png",
      name: "Viking",
    },
  },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    // Only allow GET request
    if (req.method !== "GET") {
      res.status(405).json({ message: "Method not allowed" });
      return;
    }

    res.status(200).json({ products });
  } catch (err) {
    console.log(err);
  }
}
