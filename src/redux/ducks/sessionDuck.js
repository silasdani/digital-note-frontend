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

export const login = (credentials) => async (dispatch) => {
    try {
        const answer = await new SessionService().login(credentials);
        const user = UserSerializer.deserialize(answer);
        dispatch(userLoggedIn(user));
    } catch (message) {
        return console.warn(message);
    }
}

export const autoLogin = (token) => (dispatch) => {
    const user = UserSerializer.deserializeToken(token)
    dispatch(userLoggedIn(user));
}

export const logout = () => async (dispatch) => {
    try {
        await new SessionService().logout();
        localStorage.clear();
        dispatch(userLoggedOut());
    } catch (message) {
        return console.warn(message);
    }
}

const DEFAULT_STATE = {
    user: {
        id: null,
        name: '',
        email: '',
    },
    signedIn: false
}

const session = (state = DEFAULT_STATE, action = {}) => {
    switch (action.type) {
        case USER_LOGGED_IN:
            return {
                user: action.data,
                signedIn: true
            };
        case USER_LOGGED_OUT:
            return DEFAULT_STATE;
        default:
            return state;
    }
}

export default session;