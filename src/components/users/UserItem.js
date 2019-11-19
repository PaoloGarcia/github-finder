import React from 'react';
import PropTypes from 'prop-types';

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
                <a 
                    href={html_url}
                    target="_blank" 
                    className="btn btn-dark btn-sm my1"
                    rel="noopener noreferrer">
                        More
                    </a>
            </div>
        </div>
    );
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
};

export default UserItem;