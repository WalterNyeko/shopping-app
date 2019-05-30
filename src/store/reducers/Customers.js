import { SIGNUP_USER, LOGIN_USER } from "../types";

const initialState = {
  user_login: {},
  user_signup: {}
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
    default:
      return state;
  }
};
