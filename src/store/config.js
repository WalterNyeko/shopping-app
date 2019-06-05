export const baseUrl = `https://backendapi.turing.com`;

/**
 * retrieves all the required information from the database
 * connects the action to redux store and stores the content in the store
 *
 * @param {String} url
 * @param {String} type
 * @param {Object} dispatch
 *
 * @returns {Array}
 */
export const fetchData = (url, type) => dispatch => {
  const finalUrl = baseUrl + url;
  fetch(finalUrl, {
    method: "GET"
  })
    .then(resp => resp.json())
    .then(data => {
      dispatch({
        type,
        payload: data
      });
    });
};
