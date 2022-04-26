import ApiService from "./ApiService";
import SessionSerializer from "./Serializers/SessionSerializer";

class SessionService extends ApiService {
  login = (credentials) => {
    const session = SessionSerializer.serialize(credentials);
    return super.post("users/sign_in.json", session, (answer => {
      return SessionSerializer.deserialize(answer);
    }))
  }

  logout(session) {
    this.session = session;
    return super.delete("users/sign_out.json", () => this.session = null)
  }
}

export default SessionService;