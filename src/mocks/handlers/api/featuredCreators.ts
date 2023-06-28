// External Dependencies
import { rest } from "msw";

export const featuredCreatorsHandlers = [
  // Handler a GET /api/featuredCreators request
  rest.get("/api/featuredCreators", (req, res, ctx) => {
    return res(
      ctx.json({
        creators: [
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
        ],
      })
    );
  }),
];
