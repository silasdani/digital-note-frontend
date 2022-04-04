import ApiService from "./ApiService";

class SessionService extends ApiService {
  constructor() {
    super();
    this.url = '/session';
  }

  login = (credentials) => {
    return super.post("/login", credentials, (answer => {
      console.warn(answer)
      return answer
    }))
  }

  logout() {
    return super.delete("/logout", ((success) => { return success; }))
  }
}

export default SessionService;