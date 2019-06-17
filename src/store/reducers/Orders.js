import {
  FETCH_CART_ITEMS,
  FETCH_TOTAL_AMOUNT,
  GENERATE_CART_ID,
  FETCH_MY_ORDERS,
  FETCH_ORDER_BY_ID,
  FETCH_ORDER_DETAIL_BY_ID
} from "../types";

const initialState = {
  cartItems: [],
  totalAmountOfItemsInCart: {},
  uniqueCartId: {},
  myOrders: [],
  orderOfParticularId: [],
  orderDetails: {}
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
    case FETCH_MY_ORDERS:
      return {
        ...state,
        myOrders: action.payload
      };
    case FETCH_ORDER_BY_ID:
      return {
        ...state,
        orderOfParticularId: action.payload
      };
    case FETCH_ORDER_DETAIL_BY_ID:
      return {
        ...state,
        orderDetails: action.payload
      };
    default:
      return state;
  }
};
