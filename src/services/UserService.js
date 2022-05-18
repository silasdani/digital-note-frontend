import ApiService from "./ApiService";
import UserSerializer from "./Serializers/UserSerializer";
class UserService extends ApiService {
  constructor(session) {
    super();
    this.session = session;
  }

  signup(data) {
    const user = UserSerializer.serialize(data);
    return super.post("/users.json", user, (answer) => {
      return UserSerializer.deserialize(answer.data.user);
    })
  }

  fetchAll() {
    return super.get("users/", res => res.data.data)
  }

  show() {
    return super.get(`/user.json`, (answer) => {
      return UserSerializer.deserialize(answer.user);
    })
  }

  confirm(token) {
    return super.get("/account_activations/" + token, res => res.data.data.attributes)
  }

  resetPasswordRequest(email) {
    return super.post("/password_resets", { email }, res => res)
  }

  validateToken(token) {
    return super.post("/validate_token", { token }, res => res)
  }

  resetPassword(data) {
    return super.post("/password_resets", { data }, res => res)
  }

  removeUser(id) {
    super.delete(`/users/${id}`, res => res)
  }

  editProfile(data) {
    const user = UserSerializer.serialize(data);
    return super.patch(`/user.json`, user, (answer) => {
      return UserSerializer.deserialize(answer.data.user);
    })
  }
}

export default UserService;