import React from 'react';
import PropTypes from 'prop-types';

function Alert({ alert }) {
    return alert && <div className={`alert alert-${alert.type}`}><i className="fas fa-info-circle"></i> {alert.msg}</div>;
}

Alert.propTypes = {
    alert: PropTypes.object,
};

export default Alert;