import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Search({ cleanUsers, searchUsers, showAlert, showCleanBtn }) {
    const [ text, setText ] = useState("");

    const onChangeInput = e => setText(e.target.value);

    const onSubmitSearch = e => {
        e.preventDefault();
        if (text === "") {
            showAlert('Please type a user', 'light');
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
                showCleanBtn && 
                <button 
                    className="btn btn-light btn-block"
                    onClick={cleanUsers}
                >
                    Clear
                </button>
            }
        </>
    );
}

Search.propTypes = {
    cleanUsers: PropTypes.func.isRequired,
    searchUsers: PropTypes.func.isRequired,
    showAlert: PropTypes.func.isRequired,
    showCleanBtn: PropTypes.bool.isRequired,
};

export default Search;