
const baseUrl = `https://backendapi.turing.com`;
export const fetchData = (url, type) => dispatch => {
    const finalUrl = baseUrl+url;
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
  }
