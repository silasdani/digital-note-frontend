import ApiService from "../api/ApiService";
import setHeader from "../utils/setAuthorizationHeader";

class SessionService extends ApiService {
    constructor() {
        super();
        this.url = '/session';
    }

    login = (credentials) => {
        console.warn("service")
        return super.post("/login", credentials, (answer => {
            return answer
        }))
    }

    logout() {
        return super.delete("/logout", (() => setHeader()))
    }
}

export default SessionService;