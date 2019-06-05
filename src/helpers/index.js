import { notification } from "antd";

/**
 * ensures that an item can be added to localStorage
 * at any time without having to repeat localStorage.setItem()
 * everytime
 *
 * @param {String} key
 * @param {String} item
 *
 * @returns {void}
 */
const addToLocalStorage = (key, item) => {
  localStorage.setItem(key, item);
};
export default addToLocalStorage;

/**
 * ensures that we can render a success message to the user
 * after their requests for particular resources were successful
 *
 * @param {String} message
 *
 * @returns {void}
 */
export const showSuccessNotification = message => {
  const data = {
    message: message,
    description: "Successful request",
    duration: 5
  };
  notification.success(data);
};

/**
 * ensures that we can render an error message to the user
 * after their requests for particular resources were not successful
 *
 * @param {String} message
 *
 * @returns {void}
 */
export const showErrorNotification = message => {
  const data = {
    message: message,
    description: "Error occured, please check the error and try again",
    duration: 8
  };
  notification.error(data);
};

/**
 * ensures that a text can be truncated to only 
 * the first desirable number of words, for example;
 * a long sentence or paragraph can be truncated to 
 * only return 20 words 
 *
 * @param {String} str
 * @param {Integer} numberOfWords
 *
 * @returns {void}
 */
export const truncateWords = (str, numberOfWords) => {
  return str
    .split(" ")
    .splice(0, numberOfWords)
    .join(" ");
};
