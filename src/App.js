import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

// components
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isLoading: false,
        };
    }

    fetchUsers = async () => {
        this.setState({ isLoading: true });
        const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        this.setState({ users: res.data, isLoading: false });
    }

    componentDidMount() {
        this.fetchUsers();
    }

    render() {
        const { users, isLoading } = this.state;

        return (
            <div className="App">
                <Navbar />
                <div className="container">
                    <Users users={users} isLoading={isLoading} />
                </div>
            </div>
        );
    }
}

export default App;
