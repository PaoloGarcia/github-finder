import React, { useReducer } from "react";
import AlertContext from "./AlertContext";
import AlertReducer from "./AlertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

function AlertState(props) {
    const initialState = null;

    const [ state, dispatch ] = useReducer(AlertReducer, initialState);

    // set alert
    const setAlert = (msg, type) => {
        dispatch({
            type: SET_ALERT,
            alert: { msg, type }
        });

        // clear the alert after 3 sec
        setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3000);
    };

    // remove alert

    const value = {
        alert: state,
        setAlert
    };

    return (
        <AlertContext.Provider value={value}>
            {props.children}
        </AlertContext.Provider>
    );
}

export default AlertState;