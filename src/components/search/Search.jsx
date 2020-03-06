import React, { useState, useContext } from 'react';

// context
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

function Search() {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    const { clearUsers, searchUsers, users } = githubContext;
    const { setAlert } = alertContext;

    const [ text, setText ] = useState("");

    const onChangeInput = e => setText(e.target.value);

    const onSubmitSearch = e => {
        e.preventDefault();
        if (text === "") {
            setAlert('Please type a user', 'light');
        } else {
            searchUsers(text);
            setText("");
        }
    };

    return (
        <>
            <form className="form" onSubmit={onSubmitSearch}>
                <input
                    type="text"
                    name="text"
                    placeholder="Searh user..."
                    value={text}
                    onChange={onChangeInput}
                />
                <input type="submit" value="Search" className="btn btn-dark btn-block"/>
            </form>
            {
                users.length > 0 && 
                <button 
                    className="btn btn-light btn-block"
                    onClick={clearUsers}
                >
                    Clear
                </button>
            }
        </>
    );
}

export default Search;