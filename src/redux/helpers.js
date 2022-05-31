import { ALERT_TYPES, alertShown } from "./ducks/alertDuck"
import * as userActions from './ducks/userDuck';
import * as examActions from './ducks/examDuck';
import * as sessionActions from './ducks/sessionDuck';

export const errorHandler = (response) => {
  const { status, message, data: { error }, statusText } = response;

  switch (status) {
    case 404:
    case 500:
      return alertShown({ type: ALERT_TYPES.error, message })
    case 401: case 403: case 422:
      return alertShown({ type: ALERT_TYPES.warning, message: error || message || statusText, delay: 10000 })
    default: return alertShown({
      type: ALERT_TYPES.error,
      message: error || 'Something went wrong',
      delay: 5000
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

    // session actions
    case sessionActions.USER_LOGGED_IN:
      return alertShown({ type: ALERT_TYPES.success, message: "Successfully logged in!" })
    case sessionActions.USER_LOGGED_OUT:
      return alertShown({ type: ALERT_TYPES.info, message: "Logged out!" })
    case sessionActions.RELOAD_SESSION:
      return alertShown({ type: ALERT_TYPES.info, message: "Session reloaded." })

    default: return alertShown({ type: ALERT_TYPES.success, message: 'Success!' })
  }
}
