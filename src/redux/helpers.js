import { ALERT_TYPES, alertShown } from "./ducks/alertDuck"
import * as userActions from './ducks/userDuck';
import * as examActions from './ducks/examDuck';
import * as sessionActions from './ducks/sessionDuck';
import * as lobbyActions from './ducks/lobbyDuck';
import { isNaN, isEmpty, isNumber } from 'lodash';

export const errorHandler = (response) => {
  const { status, message, data: { error }, statusText } = response;

  switch (status) {
    case 404:
    case 500:
      return alertShown({ type: ALERT_TYPES.error, message })
    case 401: case 403: case 422:
      return alertShown({
        type: ALERT_TYPES.warning,
        message: message || error || statusText,
        delay: 10000
      })
    default: return alertShown({
      type: ALERT_TYPES.error,
      message: error || 'Something went wrong',
      delay: 15000
    })
  }
}

export const successHandler = (action) => {
  switch (action.type) {
    // user actions
    case userActions.FETCH_CURRENT_USER:
      return alertShown({ type: ALERT_TYPES.info, message: 'Fetched current user' })
    case userActions.USER_EDITED:
      return alertShown({ type: ALERT_TYPES.success, message: 'Successfully updated profile' })
    case userActions.USER_CREATED:
      return alertShown({ type: ALERT_TYPES.success, message: 'Successfully created teacher, Welcome !' })

    // exam actions
    case examActions.CREATE_EXAM:
      return alertShown({ type: ALERT_TYPES.info, message: "Exam created successfully" })
    case examActions.UPDATE_EXAM:
      return alertShown({ type: ALERT_TYPES.info, message: "Exam updated successfully" })
    case examActions.FETCH_EXAMS:
      return alertShown({ type: ALERT_TYPES.success, message: "Exams were fetched. " })
    case examActions.INVALID_ACCESS_KEY:
      return alertShown({ type: ALERT_TYPES.error, message: "Your access key is invalid - Please try again." })

    // session actions
    case sessionActions.USER_LOGGED_IN:
      return alertShown({ type: ALERT_TYPES.success, message: "Successfully logged in!" })
    case sessionActions.USER_LOGGED_OUT:
      return alertShown({ type: ALERT_TYPES.info, message: "Logged out!" })
    case sessionActions.RELOAD_SESSION:
      return alertShown({ type: ALERT_TYPES.info, message: "Session reloaded." })

    // lobby actions
    case lobbyActions.CHANGE_CONTESTANT_PERMISSIONS:
      return alertShown({ type: ALERT_TYPES.info, message: 'Permissions changed' })
    case lobbyActions.FETCH_CONTESTANTS:
      return alertShown({ type: ALERT_TYPES.success, message: 'Contestants were fetched' })
    case lobbyActions.FETCH_CONTESTANT:
      return alertShown({ type: ALERT_TYPES.success, message: 'Contestant fetched' })

    default: return alertShown({ type: ALERT_TYPES.success, message: 'Success!' })
  }
}

export const isBlank = (value) => {
  return isEmpty(value) && !isNumber(value) || isNaN(value);
}

export const isEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}