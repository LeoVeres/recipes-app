import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './require-login';
import {Link, Redirect} from 'react-router-dom';


export class Dashboard extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="dashboard">
                <div className="">
                  <h2> Recipes </h2>
                </div>
                <Link to="/dashboard">Recipes</Link>
                <Link to="/mealplanner">Meal Planner</Link>
                <Link to="/shoppinglist">Shopping List</Link>
               <div className="recipes">
                    Recipe: {this.props.ingredients}
                    Date: {this.props.datemade}
               </div>         
            </div>
        );
    }
}

const mapStateToProps = state => {
    // const {currentUser} = state.auth;
    const ingredientList= state.recipes.recipes;
    return {
        // username: state.auth.currentUser.username,
        // name: `${currentUser.firstName} ${currentUser.lastName}`,
        datemade: state.recipes.datemade,
        ingredients: ingredientList[0]
    };
};

export default connect(mapStateToProps)(Dashboard);

// requiresLogin()(    )