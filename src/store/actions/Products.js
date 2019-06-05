import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_BY_DEPARTMENT,
  FETCH_PRODUCTS_BY_CATEGORY,
  FETCH_PRODUCT,
  FETCH_PRODUCT_REVIEWS
} from "../types";
import { fetchData } from "../config";
import {
  showSuccessNotification,
  showErrorNotification
} from "../../helpers/index";
import history from "../../helpers/history";

/**
 * retrieves all the products
 *
 * @returns {Array}
 */
export const getProducts = () => {
  return fetchData("/products", FETCH_PRODUCTS);
};

/**
 * retrieves a product using its id
 *
 * @param {String} productId
 * @returns {Object}
 */
export const getProduct = productId => {
  return fetchData(`/products/${productId}`, FETCH_PRODUCT);
};

/**
 * retrieves all the products' reviews basing on the product's id
 *
 * @param {String} productId
 * @returns {Array}
 */
export const getProductReviews = productId => {
  return fetchData(`/products/${productId}/reviews`, FETCH_PRODUCT_REVIEWS);
};

/**
 * retrieves all the products for a department
 *
 * @param {String} departmentId
 * @returns {Array}
 */
export const getProductsPerDepartment = departmentId => {
  return fetchData(
    `/products/inDepartment/${departmentId}`,
    FETCH_PRODUCTS_BY_DEPARTMENT
  );
};

/**
 * retrieves all the products basing on the
 * category whose id is provided
 *
 * @param {String} categoryId
 *
 * @returns {Array}
 */
export const getProductsPerCategory = categoryId => {
  return fetchData(
    `/products/inCategory/${categoryId}`,
    FETCH_PRODUCTS_BY_CATEGORY
  );
};

/**
 * post a review on a product
 *
 * @param {String} productId
 * @param {Object} data
 *
 * @returns {Array}
 */
export const leaveReview = (productId, data) => dispatch => {
  const token = localStorage.getItem("jwt-token");
  fetch(`https://backendapi.turing.com/products/${productId}/reviews`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `${token}`
    },
    body: JSON.stringify(data)
  })
    .then(resp => resp.json())
    .then(responseData => {
      if (responseData.accessToken) {
        showSuccessNotification("You Have Successfully Logged In");
        history.push("/home");
      } else {
        const { message } = responseData.error;
        showErrorNotification("Very bad boy");
      }
    });
};
