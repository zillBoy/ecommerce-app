// Next Dependencies
import type { NextApiRequest, NextApiResponse } from "next";

// External Dependencies
import { createMocks, RequestMethod } from "node-mocks-http";

export const mockRequestResponse = (method: RequestMethod = "GET") => {
  const { req, res }: { req: NextApiRequest; res: NextApiResponse } =
    createMocks({ method });
  req.headers = {
    "content-type": "application/json",
  };

  return { req, res };
};
