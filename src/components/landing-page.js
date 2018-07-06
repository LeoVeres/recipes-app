import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export function LandingPage(props) {
    if (props.loggedIn) {
        return (<div className="landingpage"><Redirect to="/"/>
        <h2 className="landingpage-header">Lets Get Cooking!</h2>
        </div>);
    }

    return (
        <div className="home">
            <LoginForm />
            <Link className="register-link" to="/register">Register</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);