import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    static propTypes = {
        cleanUsers: PropTypes.func.isRequired,
        searchUsers: PropTypes.func.isRequired,
        setAlert: PropTypes.func.isRequired,
        showCleanBtn: PropTypes.bool.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    onChangeInput = e => this.setState({ [e.target.name]: e.target.value });

    onSubmitSearch = e => {
        e.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert('Please type a user', 'light');
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({ text: '' });
        }
    };

    render() {
        const { cleanUsers, showCleanBtn } = this.props;
        return (
            <>
                <form className="form" onSubmit={this.onSubmitSearch}>
                    <input
                        type="text"
                        name="text"
                        placeholder="Searh user..."
                        value={this.state.text}
                        onChange={this.onChangeInput}
                    />
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                {
                    showCleanBtn && 
                    <button 
                        className="btn btn-light btn-block"
                        onClick={cleanUsers}
                    >
                        Clear
                    </button>
                }
            </>
        );
    }
}

export default Search;