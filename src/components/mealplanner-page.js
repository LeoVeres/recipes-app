import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './require-login';
import {Link, Redirect} from 'react-router-dom';

export class MealPlanner extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="">
                <div className="">
                  <h2> Meal Planner </h2>
                </div>
                <Link to="/dashboard">Recipes</Link>
                <Link to="/mealplanner">Meal Planner</Link>
                <Link to="/shoppinglist">Shopping List</Link>
           </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`
    };
};

export default requiresLogin()(connect(mapStateToProps)(MealPlanner));