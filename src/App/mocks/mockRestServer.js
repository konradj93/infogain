import { setupServer } from "msw/node";
import { handlers } from "../../Points/mocks/handlers";

export const mswServer = setupServer(...handlers);
