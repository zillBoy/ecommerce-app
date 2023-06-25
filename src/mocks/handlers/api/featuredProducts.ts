// External Dependencies
import { rest } from "msw";

export const featuredProductsHandlers = [
  // Handles a GET /api/featuredProducts request
  rest.get("/api/featuredProducts", (req, res, ctx) => {
    return res(
      ctx.json({
        products: [
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
            price: 2.21,
            creator: {
              image: "/assets/images/creator-image.png",
              name: "Da Viper",
            },
          },
        ],
      })
    );
  }),
];
