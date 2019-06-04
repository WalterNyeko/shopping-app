import { FETCH_PRODUCT_ATTRIBUTES } from "../types";

const initialState = {
  attributes: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_ATTRIBUTES:
      return {
        ...state,
        attributes: action.payload
      };
    default:
      return state;
  }
};
