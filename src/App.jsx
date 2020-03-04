import React, { useState } from 'react';
import './App.css';

// redux
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import axios from 'axios';

// components
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Search from './components/search/Search';
import Users from './components/users/Users';
import User from "./components/users/User";
import About from './components/pages/About';

function App() {
    const [ alert, setAlert ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ repos, setRepos ] = useState([]);
    const [ user, setUser ] = useState(null);
    const [ users, setUsers ] = useState([]);

    const searchUsers = async searchText => {
        const params = `?q=${searchText}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
        setIsLoading(true);
        const res = await axios.get(`https://api.github.com/search/users${params}`);
        setUsers([ ...res.data.items ]);
        setIsLoading(false);
    };

    const getUser = async userName => {
        const params = `?q=client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
        setIsLoading(true);
        const res = await axios.get(`https://api.github.com/users/${userName}${params}`);
        setUser(res.data);
        setIsLoading(false);
    }

    const getUserRepos = async userName => {
        const params = `?q=client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
        setIsLoading(true);
        const res = await axios.get(`https://api.github.com/users/${userName}/repos${params}&per_page=5&sort=created:asc`);
        setRepos([ ...res.data ]);
        setIsLoading(false);
    }

    const cleanUsers = () => {
        setUsers([]);
        setIsLoading(false);
    }

    const showAlert = (msg, type) => {
        setAlert({ msg, type });

        // clear the alert after 3 sec
        setTimeout(() => setAlert(null), 3000);
    };

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
                                    cleanUsers={cleanUsers}
                                    searchUsers={searchUsers}
                                    showAlert={showAlert}
                                    showCleanBtn={users.length > 0 ? true : false}
                                />
                                <Users 
                                    users={users} 
                                    isLoading={isLoading} 
                                    getUser={getUser}
                                />
                            </>
                        } />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/users/:login" render={props => (
                            <User 
                                {...props} 
                                isLoading={isLoading}
                                getUser={getUser}
                                getUserRepos={getUserRepos}
                                repos={repos}
                                user={user} 
                            />
                        )} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
