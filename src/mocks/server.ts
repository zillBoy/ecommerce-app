// External Dependencies
import { setupServer } from "msw/node";

// Internal Dependencies
import { handlers } from "./handlers";

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handlers);
