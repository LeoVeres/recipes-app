import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './require-login';
import {Link} from 'react-router-dom';
import RecipeForm from './recipe-form';


export class NewRecipe extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="">
                <div className="">
                  <h2> Create Recipe </h2>
                </div>
                <Link className="link" to="/dashboard">Recipe Book</Link>
                <Link className="link" to="/create">Create Recipe</Link>
                <Link className="link" to="/mealplanner">Meal Planner</Link>
                <Link className="link" to="/shoppinglist">Shopping List</Link>
                <RecipeForm/>
           </div>
        );
    }
}

const mapStateToProps = state => {
    return {

    };
};

export default requiresLogin()(connect(mapStateToProps)(NewRecipe));