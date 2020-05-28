import React, { useReducer } from "react";
import axios from "axios";

// context
import GithubContext from "./GithubContext";
import GithubReducer from "./GithubReducer";
import {
    CLEAR_USERS,
    GET_USER,
    GET_REPOS,
    SEARCH_USERS,
    SET_LOADING,
} from "../types";

function GithubState(props) {
    const initialState = {
        isLoading: false,
        repos: [],
        user: null,
        users: []
    };

    const [ state, dispatch ] = useReducer(GithubReducer, initialState);

    // search users
    const searchUsers = async searchText => {
        setLoading();
        const params = `?q=${searchText}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
        const res = await axios.get(`https://api.github.com/search/users${params}`);
        dispatch({
            type: SEARCH_USERS,
            users: res.data.items
        });
    };

    // get user
    const getUser = async userName => {
        setLoading();
        const params = `?q=client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
        const res = await axios.get(`https://api.github.com/users/${userName}${params}`);
        dispatch({
            type: GET_USER,
            user: res.data
        });
    };

    // get repos
    const getUserRepos = async userName => {
        setLoading();
        const params = `?q=client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
        const res = await axios.get(`https://api.github.com/users/${userName}/repos${params}&per_page=5&sort=created:asc`);
        dispatch({
            type: GET_REPOS,
            repos: res.data
        });
    };

    // clear users
    const clearUsers = () =>
        dispatch({ type: CLEAR_USERS });

    // set loading
    const setLoading = () =>
        dispatch({ type: SET_LOADING });

    const value = {
        isLoading: state.isLoading,
        repos: state.repos,
        user: state.user,
        users: state.users,
        clearUsers,
        getUser,
        getUserRepos,
        searchUsers,
    };

    return (
        <GithubContext.Provider value={value}>
            {props.children}
        </GithubContext.Provider>
    );
}

export default GithubState;
