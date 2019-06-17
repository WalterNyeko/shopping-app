import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_BY_DEPARTMENT,
  FETCH_PRODUCTS_BY_CATEGORY,
  FETCH_PRODUCT,
  FETCH_PRODUCT_REVIEWS,
  FETCH_PRODUCTS_THROUGH_SEARCH
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
export const getProducts = ({ page, limit, description_length }) => {
  return fetchData(
    `/products?page=${page}&limit=${limit}&description_length=${description_length}`,
    FETCH_PRODUCTS
  );
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
export const getProductsPerDepartment = ({
  departmentId,
  page,
  limit,
  description_length
}) => {
  return fetchData(
    `/products/inDepartment/${departmentId}?page=${page}&limit=${limit}&description_length=${description_length}`,
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
export const getProductsPerCategory = ({
  categoryId,
  page,
  limit,
  description_length
}) => {
  return fetchData(
    `/products/inCategory/${categoryId}?page=${page}&limit=${limit}&description_length=${description_length}`,
    FETCH_PRODUCTS_BY_CATEGORY
  );
};

/**
 * search all the products
 *
 * @param {String} searchData
 * @returns {Array}
 */
export const getProductsAfterSearch = ({
  query_string,
  page,
  limit,
  description_length
}) => {
  return fetchData(
    `/products/search?query_string=${query_string}&page=${page}&limit=${limit}&description_length=${description_length}`,
    FETCH_PRODUCTS_THROUGH_SEARCH
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
      "USER-KEY": `${token}`
    },
    body: JSON.stringify(data)
  })
    .then(resp => {})
    .then(responseData => {
      showSuccessNotification("Review Successfully Submitted");
      dispatch(getProductReviews(productId));
    });
};
