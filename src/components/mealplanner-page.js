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
                <Link className="link" to="/dashboard">Recipes</Link>
                <Link className="link" to="/mealplanner">Meal Planner</Link>
                <Link className="link" to="/shoppinglist">Shopping List</Link>
           </div>
        );
    }
}

const mapStateToProps = state => {
    return {

    };
};

export default requiresLogin()(connect(mapStateToProps)(MealPlanner));