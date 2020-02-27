import React, { Component } from 'react';
import './App.css';

// redux
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import axios from 'axios';

// components
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Search from './components/search/Search';
import Users from './components/users/Users';
import About from './components/pages/About';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alert: null,
            isLoading: false,
            users: [],
        };
    }

    searchUsers = async searchText => {
        const params = `?q=${searchText}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
        this.setState({ isLoading: true });
        const res = await axios.get(`https://api.github.com/search/users${params}`);
        this.setState({ users: res.data.items, isLoading: false });
    };

    cleanUsers = () => this.setState({ users: [], isLoading: false });

    setAlert = (msg, type) => {
        this.setState({ alert: { msg, type } });

        // clear the alert after 3 sec
        setTimeout(() => this.setState({ alert: null }), 3000);
    };

    render() {
        const { alert, users, isLoading } = this.state;

        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <div className="container">
                        <Switch>
                            <Route exact path="/" render={() =>
                                <>
                                    <Alert alert={alert} />
                                    <Search
                                        cleanUsers={this.cleanUsers}
                                        searchUsers={this.searchUsers}
                                        setAlert={this.setAlert}
                                        showCleanBtn={users.length > 0 ? true : false}
                                    />
                                    <Users users={users} isLoading={isLoading} />
                                </>
                            } />
                            <Route exact path="/about" component={About} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
