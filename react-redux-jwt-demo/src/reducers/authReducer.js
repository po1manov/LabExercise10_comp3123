const initialState = {
    isAuthenticated: false,
    user: null,
    token: null
};

// The authReducer function
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token
            };

        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                token: null
            };


        default:
            return state;
    }
};

export default authReducer;
