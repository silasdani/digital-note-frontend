import jwtDecode from "jwt-decode"

export default class UserSerializer {
  static serialize(user) {
    return {
      user: {
        first_name: user.firstName,
        last_name: user.lastName,
        email: user.email,
        password: user.password,
        password_confirmation: user.passwordConfirmation,
      }
    }
  }

  static deserialize(user) {
    const result = {
      id: user.id,
      address: user.address,
      createdAt: user.created_at,
      email: user.email,
      firstName: user.first_name,
      lastName: user.last_name,
      name: user.name,
      phoneNumber: user.phone_no,
      profilePic: user.profile_pic,
    }

    return result;
  }

  static JWTdeserialize(answer) {
    if (answer.status?.startWith('2')) return {};

    const { token } = answer.data;
    localStorage.token = token;
    const data = token ? JSON.parse(jwtDecode(token)) : answer.data;

    const { attributes: { manager, activated, ...user } } = data.data;
    return {
      ...user
    }
  }

  static deserializeToken(token) {
    const data = JSON.parse(jwtDecode(token));
    const { attributes: { manager, activated, ...user } } = data.data;

    return {
      ...user
    }
  }
}