import { FETCH_PRODUCT_ATTRIBUTES } from "../types";
import { fetchData } from "../config";

export const getProductAttributes = productId => {
  return fetchData(
    `/attributes/inProduct/${productId}`,
    FETCH_PRODUCT_ATTRIBUTES
  );
};