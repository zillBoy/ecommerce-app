/**
 * @jest-environment node
 */
import { createMocks, RequestMethod } from "node-mocks-http";
import type { NextApiRequest, NextApiResponse } from "next";
import featuredProducts from "@/pages/api/featuredProducts";

describe("/api/featuredProducts API Endpoint", () => {
  function mockRequestResponse(method: RequestMethod = "GET") {
    const { req, res }: { req: NextApiRequest; res: NextApiResponse } =
      createMocks({ method });
    req.headers = {
      "content-type": "application/json",
    };

    return { req, res };
  }

  //   {
  //     id: 1,
  //     image: "/assets/images/product-image.png",
  //     title: "Test Product 1",
  //     price: 12.22,
  //     creator: {
  //       image: "/assets/images/creator-image.png",
  //       name: "Da Viper",
  //     },
  //   },
  //   {
  //     id: 2,
  //     image: "/assets/images/product-image.png",
  //     title: "Test Product 2",
  //     price: 4.25,
  //     creator: {
  //       image: "/assets/images/creator-image.png",
  //       name: "Bear",
  //     },
  //   },
  //   {
  //     id: 3,
  //     image: "/assets/images/product-image.png",
  //     title: "Test Product 3",
  //     price: 14.25,
  //     creator: {
  //       image: "/assets/images/creator-image.png",
  //       name: "Viking",
  //     },
  //   },
  // ];

  it("returns a successful response from /featuredProducts API Endpoint", async () => {
    const { req, res } = mockRequestResponse();
    await featuredProducts(req, res);

    expect(res.statusCode).toBe(200);
    expect(res.getHeaders()).toEqual({ "content-type": "application/json" });
    expect(res.statusMessage).toEqual("OK");
  });

  it("returns a 405 if HTTP method is not GET", async () => {
    const { req, res } = mockRequestResponse("POST"); // Invalid HTTP call
    await featuredProducts(req, res);

    expect(res.statusCode).toBe(405);
    expect(res._getJSONData()).toEqual({ message: "Method not allowed" });
  });
});
