// Next Dependencies
import type { NextApiRequest, NextApiResponse } from "next";

// Internal Dependencies
import { CreatorCardProps } from "@/components/common/Card/CreatorCard";

type Data = {
  creators?: CreatorCardProps[];
  message?: string;
};

// TODO: Remove this onces we get the data from database (Superbase)
const creators = [
  {
    id: 1,
    name: "Keepitreal",
    image: "/assets/images/creator-image-1.png",
    totalSales: 34500,
  },
  {
    id: 2,
    name: "DigiLab",
    image: "/assets/images/creator-image-2.png",
    totalSales: 34500,
  },
  {
    id: 3,
    name: "GravityOne",
    image: "/assets/images/creator-image-3.png",
    totalSales: 34500,
  },
  {
    id: 4,
    name: "Juanie",
    image: "/assets/images/creator-image-4.png",
    totalSales: 34500,
  },
  {
    id: 5,
    name: "BlueWhale",
    image: "/assets/images/creator-image-5.png",
    totalSales: 34500,
  },
  {
    id: 6,
    name: "mr fox",
    image: "/assets/images/creator-image-6.png",
    totalSales: 34500,
  },
  {
    id: 7,
    name: "Shroomie",
    image: "/assets/images/creator-image-7.png",
    totalSales: 34500,
  },
  {
    id: 8,
    name: "robotica",
    image: "/assets/images/creator-image-8.png",
    totalSales: 34500,
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

    res.status(200).json({ creators });
  } catch (err) {
    console.log(err);
  }
}
