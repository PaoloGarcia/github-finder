import React from 'react';
import './App.css';

// components
import Routes from './components/routes/Routes';

// context
import AlertState from './context/alert/AlertState';
import GithubState from './context/github/GithubState';

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
