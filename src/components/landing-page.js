import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';


import LoginForm from './login-form';

export function LandingPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/tableofcontents" />;
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