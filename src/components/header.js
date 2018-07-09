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
                <button className="logout-button"onClick={() => this.logOut()}>Log out</button>
                <NavLink  activeClassName= "activelink" className='link'  to="/dashboard" >Recipes</NavLink>
                <NavLink  activeClassName= "activelink"className="link"  to="/create">Create</NavLink>
                <NavLink  activeClassName= "activelink"className="link" to="/mealplanner">Plan</NavLink>
                <NavLink  activeClassName= "activelink"className="link" to="/shoppinglist">Shop</NavLink>
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