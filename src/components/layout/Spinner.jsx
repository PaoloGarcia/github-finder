import React from 'react';

// components
import spinner from './spinner.gif';

const spinnerStyle = {
    width: '300px',
    margin: '60px auto',
    display: 'block'
};

function Spinner() {
    return  <img src={spinner} alt="loading..." style={spinnerStyle} />;
}

export default Spinner;
