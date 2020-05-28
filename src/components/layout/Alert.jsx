import React, { useContext } from 'react';

// context
import AlertContext from "../../context/alert/AlertContext";

function Alert() {
    const alertContext = useContext(AlertContext);
    const { alert } = alertContext;

    return alert && 
        <div className={`alert alert-${alert.type}`}>
            <i className="fas fa-info-circle"></i> {alert.msg}
        </div>;
}

export default Alert;
