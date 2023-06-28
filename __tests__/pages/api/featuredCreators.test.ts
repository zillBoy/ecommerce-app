// Internal Dependencies
import featuredCreators from "@/pages/api/featuredCreators";
import { mockRequestResponse } from "../../../src/utils/utils";

describe("/api/featuredCreators API Endpoint", () => {
  it("returns a successful response from /featuredCreators API Endpoint", async () => {
    const { req, res } = mockRequestResponse();
    await featuredCreators(req, res);

    expect(res.statusCode).toBe(200);
    expect(res.getHeaders()).toEqual({ "content-type": "application/json" });
    expect(res.statusMessage).toEqual("OK");
  });

  it("returns a 405 if HTTP method is not GET", async () => {
    const { req, res } = mockRequestResponse("POST");
    await featuredCreators(req, res);

    expect(res.statusCode).toBe(405);
    expect(res._getJSONData()).toEqual({ message: "Method not allowed" });
  });
});
