import UserSerializer from './UserSerializer';

export default class SessionSerializer {
  static deserialize(response) {
    const { data } = response;
    const headers = response.headers;

    const user = UserSerializer.deserialize(data.user);

    const result = {
      session: {
        accessToken: headers['access-token'],
        tokenType: headers['token-type'],
        client: headers.client,
        expiry: headers.expiry,
        uid: headers.uid,
        authenticated: true,
        currentUser: user,
      },
    };

    return result;
  }

  static serialize(data) {
    const result = {
      user: {
        email: data.email,
        password: data.password,
        remember_me: data.rememberMe,
      },
    };

    return result;
  }
}
