function loginSuccess(user, token) {
    return {
        type: 'LOGIN_SUCCESS',
        payload: { user, token }
    };
}
