import PropTypes from "prop-types";
import React from "react";

// components
import ReposItem from "./ReposItem";

function Repos({ repos }) {
    return (
        <div>
            {repos.map(repo => <ReposItem key={repo.id} repo={repo} />)}
        </div>
    );
}

Repos.propTypes = {
    repos: PropTypes.array
};

export default Repos;
