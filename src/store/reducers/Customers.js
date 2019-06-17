import {
  SIGNUP_USER,
  LOGIN_USER,
  FETCH_CUSTOMER_DETAILS,
  FETCH_SHIPPING_REGIONS,
  FETCH_TAXES
} from "../types";

const initialState = {
  user_login: {},
  user_signup: {},
  customerDetails: {},
  shippingRegions: [],
  taxes: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_USER:
      return {
        ...state,
        user_signup: action.payload
      };
    case LOGIN_USER:
      return {
        ...state,
        user_login: action.payload
      };
    case FETCH_CUSTOMER_DETAILS:
      return {
        ...state,
        customerDetails: action.payload
      };
    case FETCH_SHIPPING_REGIONS:
      return {
        ...state,
        shippingRegions: action.payload
      };
    case FETCH_TAXES:
      return {
        ...state,
        taxes: action.payload
      };
    default:
      return state;
  }
};
