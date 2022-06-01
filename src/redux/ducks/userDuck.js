import UserService from "../../services/UserService";
import { errorHandler, successHandler } from '../helpers';

export const USER_CREATED = "USER_CREATED";
export const RESET_USER_PASSWORD = "RESET_USER_PASSWORD";
export const REQUEST_RESET_PASSWORD = "REQUEST_RESET_PASSWORD";
export const USER_EDITED = "USER_EDITED";
export const USER_DELETED = "USER_DELETED";
export const FETCH_ALL_USERS = "FETCH_ALL_USERS";
export const FETCH_CURRENT_USER = "FETCH_CURRENT_USER";
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

export const currentUserFetched = (data) => ({
  type: FETCH_CURRENT_USER,
  data
})

export const signup = (data) => (dispatch) => {
  return new UserService().signup(data)
    .then(() => {
      dispatch(successHandler({ type: USER_CREATED }))
      dispatch(userCreated())
    })
    .catch(response => dispatch(errorHandler(response)));
}

export const editProfile = (user) => async (dispatch, getState) => {
  const { session } = getState().session;
  try {
    const data = await new UserService(session).editProfile(user);

    dispatch(userEdited(data));
    dispatch(successHandler({ type: USER_EDITED }))
    return data;
  } catch (response) {
    dispatch(errorHandler(response))
  }
}

export const fetch = () => async (dispatch, getState) => {
  const { session } = getState().session;
  try {
    const data = await new UserService(session).show();

    dispatch(currentUserFetched(data));
    // dispatch(successHandler({ type: FETCH_CURRENT_USER }))
  } catch (response) {
    dispatch(errorHandler(response))
  }
}

export const deleteUser = (id) => (dispatch) => {
  return new UserService().deleteUser(id)
    .then(dispatch(userDeleted))
    .catch(response => dispatch(errorHandler(response)));
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
    case FETCH_CURRENT_USER:
      return {
        ...state,
        teacher: action.data,
      }
    default:
      return state;
  }
}

export default user;

