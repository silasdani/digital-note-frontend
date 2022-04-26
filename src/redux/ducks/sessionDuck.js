import SessionSerializer from '../../services/Serializers/SessionSerializer';
import UserSerializer from '../../services/Serializers/UserSerializer';
import SessionService from '../../services/SessionService';

export const USER_LOGGED_IN = "USER_LOGGED_IN";
export const USER_LOGGED_OUT = "USER_LOGGED_OUT";

export const userLoggedIn = (data) => ({
  type: USER_LOGGED_IN,
  data,
});

const userLoggedOut = () => ({
  type: USER_LOGGED_OUT,
});
const STORAGE_KEY = "session";
const SESSION_EMAIL_KEY = "currentSessionEmail";

export const login = (credentials) => async (dispatch) => {
  try {
    window.localStorage.clear();
    window.sessionStorage.clear();
    const { rememberMe } = credentials;
    const answer = await new SessionService().login(credentials)
      .then(payload => {
        console.log(payload);
        const stringPayload = JSON.stringify(payload.session);

        if (rememberMe) {
          window.localStorage.setItem(STORAGE_KEY, stringPayload);
          window.localStorage.setItem(SESSION_EMAIL_KEY, payload.session.uid);
        } else {
          window.sessionStorage.setItem(STORAGE_KEY, stringPayload);
        }
        return payload;
      });

    dispatch(userLoggedIn(answer));
  } catch (message) {
    return console.warn(message);
  }
}

export const autoLogin = (token) => (dispatch) => {
  const user = UserSerializer.deserializeToken(token)
  dispatch(userLoggedIn(user));
}

export const logout = () => async (dispatch, getState) => {
  const { session } = getState().session;
  try {
    await new SessionService().logout(session);

    window.localStorage.clear();
    window.sessionStorage.clear();

    if (session.rememberMe) {
      window.localStorage.setItem(SESSION_EMAIL_KEY, session.uid);
    }

    dispatch(userLoggedOut());
  } catch (message) {
    return console.warn(message);
  }
}

const DEFAULT_STATE = {
  session: {
    accessToken: '',
    authenticated: false,
    rememberMe: false,
  },
  currentUser: {
    id: null,
    name: '',
    email: '',
  }
}

const session = (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.data;
    case USER_LOGGED_OUT:
      return DEFAULT_STATE;
    default:
      return state;
  }
}

export default session;