import axios from "axios";

class ApiService {
  constructor(session) {
    this.session = session;
  }

  async get(url, mapFunc) {
    const response = await axios
      .get(url, this.config());
    return mapFunc(response.data);
  }

  async download(url, mapFunc) {
    const config = {
      ...this.config(),
      responseType: 'blob',
    }
    const response = await axios.get(url, config);
    return mapFunc(response.data);
  }

  async put(url, body, mapFunc) {
    const response = await axios
      .put(url, body, this.config());
    return mapFunc(response.data);
  }

  async post(url, body, mapFunc) {
    const response = await axios
      .post(url, body, this.config());
    return mapFunc(response);
  }

  async postWithResponse(url, body, mapFunc) {
    const response = await axios
      .post(url, body, this.config());
    return mapFunc(response);
  }

  async patch(url, body, mapFunc) {
    const response = await axios
      .patch(url, body, this.config());
    return mapFunc(response);
  }

  async delete(url, mapFunc) {
    const response = await axios
      .delete(url, this.config());
    return mapFunc(response);
  }

  config() {
    const result = {};

    if (this.session) {
      result["headers"] = {
        "Content-Type": "application/json",
        "access-token": this.session.accessToken,
        client: this.session.client,
        expiry: this.session.expiry,
        "token-type": "Bearer",
        uid: this.session.uid
      };
    }

    return result;
  }
}


export default ApiService;