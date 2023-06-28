// Internal Dependencies
import featuredProducts from "@/pages/api/featuredProducts";
import { mockRequestResponse } from "../../../src/utils/utils";

describe("/api/featuredProducts API Endpoint", () => {
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
