export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';


export const loginRequest = () => {
    return {
        type: LOGIN_REQUEST
    };
};

export const loginSuccess = (user, token) => {
    return {
        type: LOGIN_SUCCESS,
        payload: {
            user,
            token
        }
    };
};

export const loginFailure = (error) => {
    return {
        type: LOGIN_FAILURE,
        payload: {
            error
        }
    };
};

export const logout = () => {
    return {
        type: LOGOUT
    };
};