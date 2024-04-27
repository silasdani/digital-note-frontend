const SHOW_ALERT = 'SHOW_ALERT';
const HIDE_ALERT = 'HIDE_ALERT';

export const ALERT_TYPES = {
  info: 0,
  warning: 1,
  error: 2,
  success: 3,
  buttons: 4,
};

export const alertShown = (data) => ({
  type: SHOW_ALERT,
  data,
});

const alertHidden = () => ({
  type: HIDE_ALERT,
});

export const showAlert = (data) => (dispatch) => {
  dispatch(alertShown(data));
};

export const hideAlert = () => (dispatch) => {
  dispatch(alertHidden());
};

const DEFAULT_ALERT_STATE = {
  message: '',
  delay: 5000,
  type: -1,
  leftButtonText: '',
  rightButtonText: '',
  leftFunction: null,
  rightFunction: null,
};

const alert = (state = DEFAULT_ALERT_STATE, action = {}) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...DEFAULT_ALERT_STATE,
        ...action.data,
      };
    case HIDE_ALERT:
      return DEFAULT_ALERT_STATE;
    default:
      return state;
  }
};

export default alert;
