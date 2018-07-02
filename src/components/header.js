import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        let accountName;
        let recipeApp= (<h1>Recipe App</h1>);
        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()}>Log out</button>
            );
            recipeApp = '';
        }
        return (
            <div className="header-bar">
                {recipeApp}
                {accountName}
                {logOutButton}
            </div>
        );
    }
}

const mapStateToProps = state => ({
 loggedIn: state.auth.currentUser !== null,
});

export default connect(mapStateToProps)(HeaderBar);