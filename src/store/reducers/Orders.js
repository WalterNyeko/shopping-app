import { FETCH_CART_ITEMS, FETCH_TOTAL_AMOUNT, GENERATE_CART_ID } from "../types";

const initialState = {
  cartItems: [],
  totalAmountOfItemsInCart: {},
  uniqueCartId: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload
      };
    case FETCH_TOTAL_AMOUNT:
      return {
        ...state,
        totalAmountOfItemsInCart: action.payload
      };
    case GENERATE_CART_ID:
      return {
        ...state,
        uniqueCartId: action.payload
      };
    default:
      return state;
  }
};
