import {
  FETCH_CART_ITEMS,
  FETCH_TOTAL_AMOUNT,
  GENERATE_CART_ID
} from "../types";
import { fetchData } from "../config";
import { baseUrl } from "../config";

export const getItemsInCart = id => {
  return fetchData(`/shoppingcart/${id}`, FETCH_CART_ITEMS);
};

export const getTotalAmount = id => {
  return fetchData(`/shoppingcart/totalAmount/${id}`, FETCH_TOTAL_AMOUNT);
};

export const generateUniqueCartId = () => dispatch => {
  const finalUrl = baseUrl + "/shoppingcart/generateUniqueId";
  fetch(finalUrl, {
    method: "GET"
  })
    .then(resp => resp.json())
    .then(data => {
      const { cart_id } = data;
      localStorage.setItem("cartId", cart_id);
    });
};
