import {
  FETCH_CART_ITEMS,
  FETCH_TOTAL_AMOUNT,
  FETCH_MY_ORDERS,
  FETCH_ORDER_BY_ID,
  FETCH_ORDER_DETAIL_BY_ID
} from "../types";
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
      "USER-KEY": `${localStorage.getItem("jwt-token")}`
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
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      "USER-KEY": `${localStorage.getItem("jwt-token")}`
    }
  })
    .then(resp => {
      if (!resp.ok) {
        return Promise.reject("something went wrong");
      }
    })
    .then(data => {
      dispatch(getItemsInCart(cartId));
      dispatch(getTotalAmount(cartId));
      showSuccessNotification(
        "Product Removed From Shopping Cart Successfully"
      );
    })
    .catch(error => {
      showErrorNotification(
        "Something went wrong while removing item from the cart"
      );
    });
};

/**
 * edits an item from the shopping cart and
 * increases or decreases it's quantity
 *
 * @param {String} cartId
 * @param {String} productId
 * @param {Object} dispatch
 *
 * @returns {Array}
 */
export const editItemFromShoppingCart = (cartId, data) => dispatch => {
  const { item_id } = data;
  const finalUrl = baseUrl + `/shoppingcart/update/${item_id}`;
  fetch(finalUrl, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      "USER-KEY": `${localStorage.getItem("jwt-token")}`
    },
    body: JSON.stringify(data)
  })
    .then(resp => {
      if (!resp.ok) {
        return Promise.reject("something went wrong");
      }
    })
    .then(data => {
      dispatch(getItemsInCart(cartId));
      dispatch(getTotalAmount(cartId));
    })
    .catch(error => {
      showErrorNotification(
        "Something went wrong while editing item from the cart"
      );
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
      "USER-KEY": `${localStorage.getItem("jwt-token")}`
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

/**
 * places an order
 *
 * @param {Object} data
 *
 * @returns {vimport("external-editor")VoidCallback}
 */
export const placeOrder = data => dispatch => {
  const finalUrl = baseUrl + `/orders`;
  fetch(finalUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "USER-KEY": `${localStorage.getItem("jwt-token")}`
    },
    body: JSON.stringify(data)
  })
    .then(resp => resp.json())
    .then(data => {
      if (data.orderId) {
        showSuccessNotification("Order Placed Successfully");
        dispatch(getAllMyOrders());
      } else {
        showErrorNotification("Order was not placed");
      }
    });
};

export const getAllMyOrders = () => {
  return fetchData(`/orders/inCustomer`, FETCH_MY_ORDERS);
};

export const getOrderById = orderId => {
  return fetchData(`/orders/${orderId}`, FETCH_ORDER_BY_ID);
};

export const getOrderDetailById = orderId => {
  return fetchData(`/orders/shortDetail/${orderId}`, FETCH_ORDER_DETAIL_BY_ID);
};

// attributes: "Red: M"
// order_id: 9049
// product_id: 1
// product_name: "Arc d'Triomphe"
// quantity: 2
// subtotal: "29.98"
// unit_cost: "14.99"
