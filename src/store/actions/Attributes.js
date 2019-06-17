import { FETCH_PRODUCT_ATTRIBUTES } from "../types";
import { fetchData } from "../config";

/**
 * ensures that a user can be able to retrieve attributes
 * of a particular product
 *
 * @param {String} productId
 *
 * @returns {Array}
 */
export const getProductAttributes = productId => {
  return fetchData(
    `/attributes/inProduct/${productId}`,
    FETCH_PRODUCT_ATTRIBUTES
  );
};
