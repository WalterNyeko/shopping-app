import { FETCH_PRODUCTS, FETCH_PRODUCTS_BY_DEPARTMENT, FETCH_PRODUCTS_BY_CATEGORY } from "../types";

const initialState = {
  products: [],
  productsPerDepartment: [],
  productsPerCategory: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case FETCH_PRODUCTS_BY_DEPARTMENT:
      return {
        productsPerDepartment: action.payload
      };
    case FETCH_PRODUCTS_BY_CATEGORY:
      return {
        productsPerCategory: action.payload
      };
    default:
      return state;
  }
};
