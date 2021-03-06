const axios = require('axios');
const api = process.env.REACT_APP_API_URL + '/api';

export default async function request(endpoint, method, { headers, body, token } = {}) {
  try {
    const { data } = await axios({
      method: method,
      url: api + endpoint,
      data: {
        headers: headers,
        body: body,
        token: token,
      }
    });
    return data;
  } catch(error) {
    console.error(error);
  }
}