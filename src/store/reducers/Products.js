import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  FETCH_PRODUCTS_BY_DEPARTMENT,
  FETCH_PRODUCTS_BY_CATEGORY,
  FETCH_PRODUCT_REVIEWS,
  FETCH_PRODUCTS_THROUGH_SEARCH
} from "../types";

const initialState = {
  products: [],
  product: {},
  productsPerDepartment: [],
  productsPerCategory: [],
  productReviews: [],
  productsAfterSearch: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case FETCH_PRODUCT:
      return {
        ...state,
        product: action.payload
      };
    case FETCH_PRODUCT_REVIEWS:
      return {
        ...state,
        productReviews: action.payload
      };
    case FETCH_PRODUCTS_BY_DEPARTMENT:
      return {
        ...state,
        productsPerDepartment: action.payload
      };
    case FETCH_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        productsPerCategory: action.payload
      };
    case FETCH_PRODUCTS_THROUGH_SEARCH:
      return {
        ...state,
        productsAfterSearch: action.payload
      };
    default:
      return state;
  }
};
