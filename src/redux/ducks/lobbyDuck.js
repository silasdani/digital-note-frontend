import { PERMISSIONS } from "../../helpers/enums";
import LobbyService from "../../services/LobbyService";
import { errorHandler, successHandler } from '../helpers';

/// ACTIONS
export const FETCH_CONTESTANT = 'FETCH_CONTESTANT';
export const FETCH_CONTESTANTS = 'FETCH_CONTESTANTS';
export const CREATE_CONTESTANT = 'CREATE_CONTESTANT';
export const CHANGE_CONTESTANT_PERMISSIONS = 'CHANGE_CONTESTANT_PERMISSIONS';
export const UPDATE_CONTESTANT_FIELDS = 'UPDATE_CONTESTANT_FIELDS';

/// DUCKS
const contestantCreated = (data) => ({
  type: CREATE_CONTESTANT,
  data
})

const contestantFetched = (data) => ({
  type: FETCH_CONTESTANT,
  data
})

const contestantsFetched = (data) => ({
  type: FETCH_CONTESTANTS,
  data
})

const permissionsChanged = () => ({
  type: CHANGE_CONTESTANT_PERMISSIONS,
})

const contestantFieldUpdated = (data) => ({
  type: UPDATE_CONTESTANT_FIELDS,
  data
})

/// EPICS
export const fetchContestant = (id) => (dispatch, getState) => {
  const { session } = getState().session;

  new LobbyService(session).showContestant(id)
    .then((data) => {
      dispatch(contestantFetched(data))
      dispatch(successHandler({ type: FETCH_CONTESTANT }))
    })
    .catch(({ response }) => dispatch(errorHandler(response)))
}

export const createContestant = (contestant) => async (dispatch) => {
  return new LobbyService().createContestant(contestant)
    .then((data) => {
      dispatch(contestantCreated(data));
      dispatch(successHandler({ type: CREATE_CONTESTANT }));
      return data
    })
    .catch(({ response }) => {
      return dispatch(errorHandler(response));
    })
}

export const fetchContestants = (accessKey) => (dispatch, getState) => {
  const { session } = getState().session;

  new LobbyService(session).fetchAll({ access_key: accessKey })
    .then((data) => {
      dispatch(contestantsFetched(data))
      dispatch(successHandler({ type: FETCH_CONTESTANTS }))
    })
    .catch(({ response }) => dispatch(errorHandler(response)))
}

export const changePermissions = (data) => (dispatch, getState) => {
  const { session } = getState().session;

  new LobbyService(session).changePermissions(data)
    .then(() => {
      dispatch(permissionsChanged())
      dispatch(successHandler({ type: CHANGE_CONTESTANT_PERMISSIONS }))
    })
    .catch(({ response }) => dispatch(errorHandler(response)))
}

export const updateContestantFields = (field, value) => (dispatch) => {
  dispatch(contestantFieldUpdated({ field, value }));
}

/// DEFAULT_STATES
const DEFAULT_CONTESTANT_STATE = {
  accessToken: '',
  accessKey: 'NDQWB',
  firstName: 'Silas',
  lastName: 'Daniel',
  email: 'silas@daniel.com',
  studentClass: '12 I',
}

export const DEFAULT_LOBBY_STATE = {
  contestants: [{
    attributes: { ...DEFAULT_CONTESTANT_STATE, permissions: Object.values(PERMISSIONS) }
  }],
  contestant: DEFAULT_CONTESTANT_STATE,
}

/// REDUCER
const lobby = (state = DEFAULT_LOBBY_STATE, action = {}) => {
  switch (action.type) {
    case FETCH_CONTESTANTS:
      return {
        ...state,
        contestants: action.data
      }
    case FETCH_CONTESTANT:
    case CREATE_CONTESTANT:
      return {
        ...state,
        contestant: action.data
      }
    case UPDATE_CONTESTANT_FIELDS:
      return {
        ...state,
        contestant: {
          ...state.contestant,
          [action.data.field]: action.data.value
        }
      }
    default: return state
  }
}

export default lobby