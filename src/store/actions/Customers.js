import { SIGNUP_USER, LOGIN_USER } from "../types";
import history from '../../helpers/history';
import addToLocalStorage from '../../helpers/index';
import { showSuccessNotification, showErrorNotification } from '../../helpers/index';

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
        addToLocalStorage("jwt-token", usersPayload.accessToken);
        showSuccessNotification("User Successfully Created");
        history.push('/');
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

export const signIn = (userData) => dispatch => {
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
            addToLocalStorage("jwt-token", usersPayload.accessToken);
            showSuccessNotification("You Have Successfully Logged In");
            history.push('/');
          } else {
            const { message } = usersPayload.error;
            showErrorNotification(message);
          }
          dispatch({
            type: LOGIN_USER,
            payload: usersPayload
          });
    });
}
