import React from 'react';
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";

function UserItem({ user: { avatar_url, login, html_url } }) {
    return (
        <div className="card text-center">
            <img 
                src={avatar_url}
                alt="user"
                className="round-img"
                style={{ width: '60px' }}
            />
            <h3>{login}</h3>
            <div>
                <Link 
                    to={`/users/${login}`}
                    className="btn btn-dark btn-sm my1"
                    rel="noopener noreferrer"
                >
                        More
                </Link>
            </div>
        </div>
    );
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
};

export default UserItem;