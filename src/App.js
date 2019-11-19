import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

// components
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Search from './components/search/Search';
import Users from './components/users/Users';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alert: null,
            isLoading: false,
            users: [],
        };
    }

    // fetchUsers = async () => {
    //     this.setState({ isLoading: true });
    //     const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    //     this.setState({ users: res.data, isLoading: false });
    // };

    searchUsers = async searchText => {
        this.setState({ isLoading: true });
        const res = await axios.get(`https://api.github.com/search/users?q=${searchText}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        this.setState({ users: res.data.items, isLoading: false });
    };

    // componentDidMount() {
    //     this.fetchUsers();
    // }

    cleanUsers = () => this.setState({ users: [], isLoading: false });

    setAlert = (msg, type) => {
        this.setState({ alert: { msg, type } });

        // clear the alert after 3 sec
        setTimeout(() => this.setState({ alert: null }), 3000);
    };

    render() {
        const { alert, users, isLoading } = this.state;

        return (
            <div className="App">
                <Navbar />
                <div className="container">
                    <Alert alert={alert} />
                    <Search
                        cleanUsers={this.cleanUsers}
                        searchUsers={this.searchUsers}
                        setAlert={this.setAlert}
                        showCleanBtn={users.length > 0 ? true : false}
                    />
                    <Users users={users} isLoading={isLoading} />
                </div>
            </div>
        );
    }
}

export default App;
