const axios = require("axios");

const api = process.env.REACT_APP_API_URL + "/api";

export default async function request(endpoint, method, body, token) {
  try {
    const { data } = await axios({
      method: method,
      url: api + endpoint,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`
      },
      data: body
    });
    return data;
  } catch (error) {
    return error.response;
  }
}
