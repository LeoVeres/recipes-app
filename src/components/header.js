import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

import {NavLink} from 'react-router-dom';

export class HeaderBar extends React.Component {

    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        let header;
        if(this.props.loggedIn){
            header= 
            <div className="header-bar">
            <div className="navlinks">
                <button className="logout-button"onClick={() => this.logOut()}><i className="fas fa-sign-out-alt"></i></button>
                <NavLink  activeClassName= "activelink" className='link table-button'  to="/tableofcontents" ><i className="fas fa-question"></i></NavLink>
                <NavLink  activeClassName= "activelink" className='link'  to="/dashboard" ><i className="fas fa-book"></i></NavLink>
                <NavLink  activeClassName= "activelink"className="link"  to="/create"><i className="far fa-plus-square"></i></NavLink>
                <NavLink  activeClassName= "activelink"className="link" to="/mealplanner"><i className="far fa-calendar-alt"></i></NavLink>
                <NavLink  activeClassName= "activelink"className="link" to="/shoppinglist"><i className="fas fa-shopping-cart"></i></NavLink>
            </div>
            </div>
        }
        return (
            <div>
            {header}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);