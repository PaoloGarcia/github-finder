import React from 'react';
import PropTypes from 'prop-types';

// redux
import { Link } from 'react-router-dom';

function Navbar({ icon, title }) {
    return (
        <nav className="navbar bg-primary">
            <h1><i className={icon}></i> {title}</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
}

Navbar.defaultProps = {
    icon: 'fab fa-github',
    title: 'Github Finder',
};

Navbar.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Navbar;