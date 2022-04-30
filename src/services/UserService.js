import ApiService from "./ApiService";
import UserSerializer from "./Serializers/UserSerializer";
class UserService extends ApiService {
  signup(data) {
    const user = UserSerializer.serialize(data);
    return super.post("users/", user, (answer) => {
      return UserSerializer.deserialize(answer);
    })
  }

  fetchAll() {
    return super.get("users/", res => res.data.data)
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

  editUser({ user, id }) {
    super.patch(`/users/${id}`, { user }, res => res.data)
  }
}

export default UserService;