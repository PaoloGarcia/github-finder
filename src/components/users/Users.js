import React from 'react';
import PropTypes from 'prop-types';

// components
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

const usersStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem',
};

function Users({ isLoading, users }) {
    if (isLoading) {
        return <Spinner />
    }

    return (
        <div style={usersStyle}>
            {users.map(user => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    );
}

Users.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Users;