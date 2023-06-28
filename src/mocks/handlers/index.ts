// Internal Dependencies
import { featuredProductsHandlers } from "./api/featuredProducts";
import { featuredCreatorsHandlers } from "./api/featuredCreators";

export const handlers = [
  ...featuredProductsHandlers,
  ...featuredCreatorsHandlers,
];
