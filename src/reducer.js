export const INITIAL_STATE = {
    donors: [],
    donor: []
};

export const rootReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_DONORS':
            return {
                ...state,
                users: action.data
            };
        default:
            return state
    }
};