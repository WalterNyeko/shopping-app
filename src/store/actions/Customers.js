import {
  SIGNUP_USER,
  LOGIN_USER,
  FETCH_CUSTOMER_DETAILS,
  FETCH_SHIPPING_REGIONS,
  FETCH_TAXES
} from "../types";
import history from "../../helpers/history";
import addToLocalStorage from "../../helpers/index";
import {
  showSuccessNotification,
  showErrorNotification
} from "../../helpers/index";
import { generateUniqueCartId } from "./Orders";
import jwtDecode from "jwt-decode";
import { fetchData } from "../config";

/**
 * ensures that a user can be able to register an account
 * with the application
 *
 * @param {String} userData
 *
 * @returns {Object}
 */
export const signupUser = userData => dispatch => {
  fetch("https://backendapi.turing.com/customers", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(userData)
  })
    .then(resp => resp.json())
    .then(usersPayload => {
      if (usersPayload.accessToken) {
        const user = jwtDecode(usersPayload.accessToken);
        addToLocalStorage("user", user.name);
        addToLocalStorage("jwt-token", usersPayload.accessToken);
        showSuccessNotification("User Successfully Registered");
        dispatch(generateUniqueCartId());
        const { pathname } = history.location;
        if (pathname === "/home" || pathname === "/home#") {
          history.push("/");
        } else {
          history.push("/home");
        }
      } else {
        const { message } = usersPayload.error;
        showErrorNotification(message);
      }
      dispatch({
        type: SIGNUP_USER,
        payload: usersPayload
      });
    });
};

/**
 * ensures that a user can be able to log into his account
 * to access the application
 *
 * @param {String} userData
 *
 * @returns {Object}
 */
export const signIn = userData => dispatch => {
  fetch("https://backendapi.turing.com/customers/login", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(userData)
  })
    .then(resp => resp.json())
    .then(usersPayload => {
      if (usersPayload.accessToken) {
        const user = jwtDecode(usersPayload.accessToken);
        addToLocalStorage("user", user.name);
        addToLocalStorage("jwt-token", usersPayload.accessToken);
        showSuccessNotification("You Have Successfully Logged In");
        dispatch(generateUniqueCartId());
        history.push("/home");
      } else {
        const { message } = usersPayload.error;
        showErrorNotification(message);
      }
      dispatch({
        type: LOGIN_USER,
        payload: usersPayload
      });
    });
};

export const getCustomersDetails = () => dispatch => {
  const jwtToken = localStorage.getItem("jwt-token");
  fetch("https://backendapi.turing.com/customer", {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "USER-KEY": `${jwtToken}`
    }
  })
    .then(resp => resp.json())
    .then(customer => {
      dispatch({
        type: FETCH_CUSTOMER_DETAILS,
        payload: customer
      });
    });
};

export const updateProfile = data => dispatch => {
  const jwtToken = localStorage.getItem("jwt-token");
  fetch("https://backendapi.turing.com/customer", {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      "USER-KEY": jwtToken
    },
    body: JSON.stringify(data)
  })
    .then(resp => resp.json())
    .then(usersPayload => {
      console.log(usersPayload);
      if (usersPayload.error) {
        showErrorNotification(usersPayload.error.message);
      } else {
        addToLocalStorage("user", data.name);
        showSuccessNotification("You Have Successfully Edited Your Profile");
        dispatch(getCustomersDetails());
      }
    });
};

export const updateAddress = data => dispatch => {
  const jwtToken = localStorage.getItem("jwt-token");
  fetch("https://backendapi.turing.com/customers/address", {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      "USER-KEY": jwtToken
    },
    body: JSON.stringify(data)
  })
    .then(resp => resp.json())
    .then(usersPayload => {
      if (usersPayload.error) {
        showErrorNotification(usersPayload.error.message);
      } else {
        showSuccessNotification("You Have Successfully Edited Your Address");
        dispatch(getCustomersDetails());
      }
    });
};

export const updateCreditCard = data => dispatch => {
  const jwtToken = localStorage.getItem("jwt-token");
  fetch("https://backendapi.turing.com/customers/creditCard", {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      "USER-KEY": jwtToken
    },
    body: JSON.stringify(data)
  })
    .then(resp => resp.json())
    .then(usersPayload => {
      if (usersPayload.error) {
        showErrorNotification(usersPayload.error.message);
      } else {
        showSuccessNotification(
          "You Have Successfully Edited Your Credit Card"
        );
        dispatch(getCustomersDetails());
      }
    });
};

export const getShippingRegions = () => {
  return fetchData(`/shipping/regions`, FETCH_SHIPPING_REGIONS);
};


export const getTaxes = () => {
  return fetchData(`/tax`, FETCH_TAXES);
};