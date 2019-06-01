import { FETCH_CATEGORIES, FETCH_CATEGORIES_PER_DEPARTMENT } from "../types";

const initialState = {
  categories: [],
  categoriesPerDepartment: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    case FETCH_CATEGORIES_PER_DEPARTMENT:
      return {
        ...state,
        categoriesPerDepartment: action.payload
      };
    default:
      return state;
  }
};