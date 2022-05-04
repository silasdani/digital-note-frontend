import UserService from "../../services/UserService";

export const USER_CREATED = "USER_CREATED";
export const RESET_USER_PASSWORD = "RESET_USER_PASSWORD";
export const REQUEST_RESET_PASSWORD = "REQUEST_RESET_PASSWORD";
export const USER_EDITED = "USER_EDITED";
export const USER_DELETED = "USER_DELETED";
export const FETCH_ALL_USERS = "FETCH_ALL_USERS";
export const FETCH_CURRENT_USERS = "FETCH_CURRENT_USERS";
export const USER_CONFIRMED = "USER_CONFIRMED";
export const TOKEN_VALIDATED = "TOKEN_VALIDATED";

const userCreated = () => ({
  type: USER_CREATED,
});

const userEdited = (data) => ({
  type: USER_EDITED,
  data
});

const userDeleted = () => ({
  type: USER_DELETED,
});

const tokenValidated = () => ({
  type: TOKEN_VALIDATED,
})

const userConfirmed = () => ({
  type: USER_CONFIRMED,
});

const passwordResets = () => ({
  type: RESET_USER_PASSWORD,
});

const allUsersFetched = (data) => ({
  type: FETCH_ALL_USERS,
  data
})

const currentUserFetched = (data) => ({
  type: FETCH_CURRENT_USERS,
  data
})

export const confirm = () => (dispatch) => {
  return new UserService().confirm()
    .then(dispatch(userConfirmed()))
    .catch(console.warn)
}

export const validateToken = (token) => (dispatch) => {
  return new UserService().validateToken(token)
    .then(dispatch(tokenValidated()))
    .catch(console.warn);
}

export const fetchUsers = () => async (dispatch) => {
  try {
    const data = await new UserService().fetchAll();
    return dispatch(allUsersFetched(data));
  } catch (message) {
    return console.warn(message);
  }
}

export const resetPassword = (credentials) => (dispatch) => {
  return new UserService().resetPassword(credentials)
    .then(dispatch(passwordResets()))
    .catch(console.warn)
}

export const signup = (data) => (dispatch) => {
  return new UserService().signup(data)
    .then(dispatch(userCreated()))
    .catch(console.warn)
}

export const editProfile = (user) => async (dispatch, getState) => {
  const { session } = getState().session;
  try {
    const data_1 = await new UserService(session).editProfile(user);
    dispatch(userEdited(data_1));
    return data_1;
  } catch (message) {
    return console.warn(message);
  }
}

export const fetch = () => async (dispatch, getState) => {
  const { session } = getState().session;
  try {
    const data = await new UserService(session).show();
    dispatch(currentUserFetched(data));
  } catch (message) {
    return console.warn(message);
  }
}

export const deleteUser = (id) => (dispatch) => {
  return new UserService().deleteUser(id)
    .then(dispatch(userDeleted))
    .catch(console.warn);
}

const DEFAULT_STATE = {
  teacher: {
    firstName: '',
    lastName: '',
    address: '',
    username: '',
    phoneNumber: '',
    profilePic: '',
  }
}

const user = (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case FETCH_ALL_USERS:
      return {
        ...state,
        users: action.data,
      }
    case USER_EDITED:
    case FETCH_CURRENT_USERS:
      return {
        ...state,
        teacher: action.data,
      }
    default:
      return state;
  }
}

export default user;