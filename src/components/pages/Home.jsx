import React from "react";

// components
import Alert from '../layout/Alert';
import Search from '../search/Search';
import Users from '../users/Users';

function Home() {
    return (
        <>
            <Alert/>
            <Search />
            <Users />
        </>
    );
}

export default Home;
