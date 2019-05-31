import { notification } from 'antd';

const addToLocalStorage = (key, item) => {
    localStorage.setItem(key, item);
}
export default addToLocalStorage;

export const showSuccessNotification = (message) =>{
    const data = {
        message: message,
        description: 'Successful request',
        duration: 5
    }
    notification.success(data);
  }
  
  export const showErrorNotification = (message) =>{
  const data = {
      message: message,
      description: 'Error occured, please check the error and try again',
      duration: 8
  }
  notification.error(data);
  }

  export const truncateWords = (str, numberOfWords) => {
    return str
      .split(" ")
      .splice(0, numberOfWords)
      .join(" ");
}