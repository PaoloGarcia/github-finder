import React from 'react';
import './App.css';

// components
import Routes from "./components/routes/Routes";

// context
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

function App() {
    return (
        <GithubState>
            <AlertState>
                <Routes />
            </AlertState>
        </GithubState>
    );
}

export default App;
