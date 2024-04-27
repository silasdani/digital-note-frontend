import axios from 'axios';

const DEFAULT_CONFIG = {
  headers: {},
  params: {},
};
class ApiService {
  constructor(session) {
    this.session = session;
  }

  async get(url, mapFunc, config = DEFAULT_CONFIG) {
    const response = await axios.get(url, this.setConfig(config));
    return mapFunc(response);
  }

  async download(url, mapFunc) {
    const config = {
      ...this.setConfig(),
      responseType: 'blob',
    };
    const response = await axios.get(url, config);
    return mapFunc(response);
  }

  async put(url, body, mapFunc) {
    const response = await axios.put(url, body, this.setConfig());
    return mapFunc(response);
  }

  async post(url, body, mapFunc) {
    const response = await axios.post(url, body, this.setConfig());
    return mapFunc(response);
  }

  async postWithResponse(url, body, mapFunc) {
    const response = await axios.post(url, body, this.setConfig());
    return mapFunc(response);
  }

  async patch(url, body, mapFunc) {
    const response = await axios.patch(url, body, this.setConfig());
    return mapFunc(response);
  }

  async delete(url, mapFunc) {
    const response = await axios.delete(url, this.setConfig());
    return mapFunc(response);
  }

  setConfig(config = DEFAULT_CONFIG) {
    const result = {
      headers: config.headers || {},
      params: config.params || {},
    };

    if (this.session) {
      result.headers = {
        ...result.headers,
        'Content-Type': 'application/json',
        'access-token': this.session.accessToken,
        'client': this.session.client,
        'expiry': this.session.expiry,
        'token-type': 'Bearer',
        'uid': this.session.uid,
      };
    }

    return result;
  }
}

export default ApiService;
