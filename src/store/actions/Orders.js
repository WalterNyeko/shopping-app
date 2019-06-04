import {
  FETCH_CART_ITEMS,
  FETCH_TOTAL_AMOUNT,
  EMPTY_SHOPPING_CART
} from "../types";
import { fetchData } from "../config";
import { baseUrl } from "../config";
import {
  showSuccessNotification,
  showErrorNotification
} from "../../helpers/index";
import history from "../../helpers/history";

export const getItemsInCart = id => {
  return fetchData(`/shoppingcart/${id}`, FETCH_CART_ITEMS);
};

export const getTotalAmount = id => {
  console.log(id);
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
      dispatch(getTotalAmount(cart_id));
    });
};

export const emptyShoppingCart = cartId => dispatch => {
  const finalUrl = baseUrl + `/shoppingcart/empty/${cartId}`;
  fetch(finalUrl, {
    method: "DELETE"
  })
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
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


export const deleteItemFromShoppingCart = (cartId, productId) => dispatch => {
    const finalUrl = baseUrl + `/shoppingcart/removeProduct/${productId}`;
    fetch(finalUrl, {
      method: "DELETE"
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        // if (data.length) {
        //   showErrorNotification(
        //     "There was an error while emptying shopping cart"
        //   );
        // } else {
        //   showSuccessNotification("Shopping Cart Has Been Emptied Successfully");
        // }
        dispatch(getItemsInCart());
        dispatch(getTotalAmount(cartId));
      });
  };