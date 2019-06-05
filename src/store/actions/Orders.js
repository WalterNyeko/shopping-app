import { FETCH_CART_ITEMS, FETCH_TOTAL_AMOUNT } from "../types";
import { fetchData } from "../config";
import { baseUrl } from "../config";
import {
  showSuccessNotification,
  showErrorNotification
} from "../../helpers/index";
import history from "../../helpers/history";

/**
 * ensures that a user can be able to retrieve
 * all the cart items in his/her cart
 *
 * @param {String} id
 *
 * @returns {Array}
 */
export const getItemsInCart = id => {
  return fetchData(`/shoppingcart/${id}`, FETCH_CART_ITEMS);
};

/**
 * ensures that a user can be able to retrieve
 * the total amount of money in his/her cart
 *
 * @param {String} id
 *
 * @returns {Object}
 */
export const getTotalAmount = id => {
  return fetchData(`/shoppingcart/totalAmount/${id}`, FETCH_TOTAL_AMOUNT);
};

/**
 * generates a unique cart id everytime a user
 * signs in/out of the application
 *
 * @param {Object} dispatch
 *
 * @returns {String}
 */
export const generateUniqueCartId = () => dispatch => {
  const finalUrl = baseUrl + "/shoppingcart/generateUniqueId";
  fetch(finalUrl, {
    method: "GET"
  })
    .then(resp => resp.json())
    .then(data => {
      const { cart_id } = data;
      localStorage.setItem("cartId", cart_id);
      dispatch(getTotalAmount(cart_id));
    });
};

/**
 * remove all the items from the users shopping cart
 *
 * @param {String} cartId
 * @param {Object} dispatch
 *
 * @returns {Array}
 */
export const emptyShoppingCart = cartId => dispatch => {
  const finalUrl = baseUrl + `/shoppingcart/empty/${cartId}`;
  fetch(finalUrl, {
    method: "DELETE"
  })
    .then(resp => resp.json())
    .then(data => {
      if (data.length) {
        showErrorNotification(
          "There was an error while emptying shopping cart"
        );
      } else {
        showSuccessNotification("Shopping Cart Has Been Emptied Successfully");
      }
      dispatch(getItemsInCart());
      dispatch(getTotalAmount(cartId));
    });
};

/**
 * adds an item to the shopping cart
 *
 * @param {Object} data
 * @param {Object} dispatch
 *
 * @returns {Array}
 */
export const addToShoppingCart = data => dispatch => {
  const finalUrl = baseUrl + "/shoppingcart/add";
  fetch(finalUrl, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
      Authorization: localStorage.getItem("jwt-token")
    }
  })
    .then(resp => resp.json())
    .then(responseData => {
      if (responseData.length) {
        showSuccessNotification("Successfully Added To Your Cart");
        dispatch(getTotalAmount(data.cart_id));
      } else {
        showErrorNotification(
          "There was an error while adding item shopping cart"
        );
      }
      history.push("/");
    });
};

/**
 * deletes an item from the shopping cart
 *
 * @param {String} cartId
 * @param {String} productId
 * @param {Object} dispatch
 *
 * @returns {Array}
 */
export const deleteItemFromShoppingCart = (cartId, productId) => dispatch => {
  const finalUrl = baseUrl + `/shoppingcart/removeProduct/${productId}`;
  fetch(finalUrl, {
    method: "DELETE"
  })
    .then(resp => resp.json())
    .then(data => {
      dispatch(getItemsInCart(cartId));
      dispatch(getTotalAmount(cartId));
    });
};

/**
 * adds an item to the shopping cart
 *
 * @param {Object} data
 * @param {String} cartId
 *
 * @returns {Array}
 */
export const createChargeOnCard = (cartId, data) => dispatch => {
  const finalUrl = baseUrl + `/stripe/charge`;
  fetch(finalUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwt-token")
    },
    body: JSON.stringify(data)
  })
    .then(resp => resp.json())
    .then(data => {
      dispatch(emptyShoppingCart(cartId));
      dispatch(getItemsInCart(cartId));
      dispatch(getTotalAmount(cartId));
    });
};
