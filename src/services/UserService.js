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

  show() {
    return super.get(`/user.json`, (answer) => {
      return UserSerializer.deserialize(answer.data.user);
    })
  }

  editProfile(data) {
    const user = UserSerializer.serialize(data);
    return super.patch(`/user.json`, user, (answer) => {
      return UserSerializer.deserialize(answer.data.user);
    })
  }
}

export default UserService;