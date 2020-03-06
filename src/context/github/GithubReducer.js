import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS,
} from "../types";

export default (state, action) => {
    switch (action.type) {
        case CLEAR_USERS:
            return {
                ...state,
                isLoading: false,
                users: []
            };
        case GET_REPOS:
            return {
                ...state,
                isLoading: false,
                repos: action.repos
            };
        case GET_USER:
            return {
                ...state,
                isLoading: false,
                user: action.user
            };
        case SET_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case SEARCH_USERS:
            return {
                ...state,
                isLoading: false,
                users: action.users
            };
        default:
            return state;
    }
};