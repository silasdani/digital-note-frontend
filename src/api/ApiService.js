import axios from "axios";
// import { hideSpinner, showSpinner } from "../redux/ducks/spinnerDuck";
// import store from "../redux/store";

class ApiService {
  async get(url, mapFunc = () => { }) {
    let headers = config();
    // store.dispatch(showSpinner());

    const response = await axios.get(url, headers);
    return mapFunc(response):
  }

  async post(url, body, mapFunc, params = {}) {
    // store.dispatch(showSpinner());

    const response = await axios
      .post(url, body, params);
    return mapFunc(response);;
  }

  async patch(url, body, mapFunc, params = {}) {
    // store.dispatch(showSpinner());

    const response = await axios
      .patch(url, body, params);
    return mapFunc(response);
  }

  async delete(url, params = {}) {
    // store.dispatch(showSpinner());

    let headers = { ...params, ...config() };
    if (params.headers) {
      headers.headers = {
        ...headers.headers,
        ...params.headers,
      };
    }
    await axios.delete(url, headers);
  }
}

export default ApiService;

const config = () => {
  return {
    headers: {
      "Content-Type": "application/json",
    },
  };
};
