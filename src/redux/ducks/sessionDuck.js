import SessionService from '../../services/SessionService';
import { errorHandler, successHandler } from '../helpers';
import { fetch } from './userDuck';

export const USER_LOGGED_IN = "USER_LOGGED_IN";
export const USER_LOGGED_OUT = "USER_LOGGED_OUT";
export const RELOAD_SESSION = "RELOAD_SESSION";

export const STORAGE_KEY = "session";
const SESSION_EMAIL_KEY = "currentSessionEmail";

const userLoggedIn = (data) => ({
  type: USER_LOGGED_IN,
  data,
});

const userLoggedOut = () => ({
  type: USER_LOGGED_OUT,
});

const reloadSession = (data) => ({
  type: RELOAD_SESSION,
  data,
});

export const login = (credentials) => async (dispatch) => {
  try {
    window.localStorage.clear();
    window.sessionStorage.clear();
    const { rememberMe } = credentials;
    const answer = await new SessionService().login(credentials)
      .then(payload => {
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
    dispatch(fetch())
    dispatch(successHandler({ type: USER_LOGGED_IN }))
  } catch ({ response }) {
    dispatch(errorHandler(response));
  }
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
    dispatch(successHandler({ type: USER_LOGGED_OUT }))
  } catch (response) {
    dispatch(errorHandler(response));
  }
}

export const autoLogin = () => (dispatch) => {
  const localStorage = window.localStorage.getItem(STORAGE_KEY);
  const sessionStorage = window.sessionStorage.getItem(STORAGE_KEY);
  const session = localStorage || sessionStorage;
  if (session) {
    dispatch(reloadSession({ session: JSON.parse(session) }))
    dispatch(successHandler({ type: RELOAD_SESSION }))
    dispatch(fetch())
  }
}

export const DEFAULT_STATE = {
  session: {
    accessToken: '',
    authenticated: false,
    rememberMe: false,
    currentUser: {
      id: null,
      name: '',
      email: '',
    }
  },
}

const session = (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.data;
    case RELOAD_SESSION:
      return action.data;
    case USER_LOGGED_OUT:
      return DEFAULT_STATE;
    default:
      return state;
  }
}

export default session;