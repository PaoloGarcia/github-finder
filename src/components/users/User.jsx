import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// components
import Spinner from "../layout/Spinner";

class User extends Component {
    static propTypes = {
        getUser: PropTypes.func.isRequired,
        isLoading: PropTypes.bool.isRequired,
        user: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
    }

    render() {
        const { user, isLoading } = this.props;

        if (isLoading || !user) {
            return <Spinner />;
        }

        const {
            login,
            // id,
            // node_id,
            avatar_url,
            // gravatar_id,
            // url,
            html_url,
            // followers_url,
            // following_url,
            // gists_url,
            // starred_url,
            // subscriptions_url,
            // organizations_url,
            // repos_url,
            // events_url,
            // received_events_url,
            // type,
            // site_admin,
            name,
            company,
            blog,
            location,
            // email,
            hireable,
            bio,
            public_repos,
            public_gists,
            followers,
            following,
            // created_at,
            // updated_at,
        } = user;

        return (
            <>
                <Link
                    className="btn btn-light"
                    to="/">
                    Back to search
                </Link>
                Hireable: {" "}
                {hireable ?
                    <i className="fa fas-check text-success"></i>
                    :
                    <i classname="fa fas-times-circle text-danger"></i>
                }
                <div className="card grid-2">
                    <div className="all-center">
                        <img
                            style={{ width: "150px" }}
                            className="round-img"
                            alt="profile avatar"
                            src={avatar_url} />
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
                            rel="noopener noreferrer">
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
            </>
        );
    }
}

export default User;