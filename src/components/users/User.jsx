import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

// context
import GithubContext from "../../context/github/GithubContext";

// components
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";

function User({ match: { params } }) {
    const githubContext = useContext(GithubContext);
    const { isLoading, getUser, getUserRepos, repos, user } = githubContext;

    useEffect(() => {
        getUser(params.login);
        getUserRepos(params.login);
        // eslint-disable-next-line
    }, []);

    if (isLoading || !user) {
        return <Spinner />;
    }

    const {
        login,
        avatar_url,
        html_url,
        name,
        company,
        blog,
        location,
        hireable,
        bio,
        public_repos,
        public_gists,
        followers,
        following,
    } = user;

    return (
        <>
            <Link
                className="btn btn-light"
                to="/"
            >
                Back to search
            </Link>
            Hireable: {" "}
            {hireable ?
                <i className="fa fas-check text-success"></i>
                :
                <i className="fa fas-times-circle text-danger"></i>
            }
            <div className="card grid-2">
                <div className="all-center">
                    <img
                        style={{ width: "150px" }}
                        className="round-img"
                        alt="profile avatar"
                        src={avatar_url}
                    />
                    <h1>{name}</h1>
                    {location && <p>Location: {location}</p>}
                </div>
                <div>
                    {bio &&
                        <>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </>    
                    }
                    <a 
                        href={html_url} 
                        className="btn -btn-dark my-1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visit Github page
                    </a>
                    {login && <div><strong>Username: </strong>{login}</div>}
                    {company && <div><strong>Company: </strong>{company}</div>}
                    {blog && <div><strong>Website: </strong>{blog}</div>}
                </div>
            </div>
            <div className="card text-center">
                <div className="badge badge-primary">Followers: {followers}</div>
                <div className="badge badge-success">Following: {following}</div>
                <div className="badge badge-light">Public Repos: {public_repos}</div>
                <div className="badge badge-dark">Public Gists: {public_gists}</div>
            </div>
            <Repos repos={repos} />
        </>
    );
}

export default User;
