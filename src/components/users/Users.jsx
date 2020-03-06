import React, { useContext } from 'react';

// context
import GithubContext from "../../context/github/GithubContext";

// components
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

const usersStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem',
};

function Users() {
    const githubContext = useContext(GithubContext);
    const { isLoading, users } = githubContext;

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div style={usersStyle}>
            {
                users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))
            }
        </div>
    );
}

export default Users;