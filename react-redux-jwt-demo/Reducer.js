function authReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token
            };
        // ... other cases
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    auth: authReducer
    // ... other reducers
});
