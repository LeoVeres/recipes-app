import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './require-login';
import {Link, Redirect} from 'react-router-dom';
import RecipeForm from './recipe-form';
import RecipeCard from './recipe-card';
import { fetchRecipes } from '../actions/recipes';
import SearchForm from './searchbar';

export class Dashboard extends React.Component {
    componentDidMount(){
        this.props.dispatch(fetchRecipes());
    };
    showEdit(id){
        this.props.history.push(`/edit/${id}`)
    };

    //<button onClick= {e=>this.toggleNew()}>Add Recipe</button>
    render() {
        return (
            <div className="dashboard">
                <div className="">
                    <h2> Recipes </h2>
                    <RecipeForm/>
                    <SearchForm/>
                </div>
                <Link className="link" to="/dashboard">Recipes</Link>
                <Link className="link" to="/mealplanner">Meal Planner</Link>
                <Link className="link" to="/shoppinglist">Shopping List</Link>
                {this.props.recipes.map(recipe=>
                <RecipeCard showEdit={id => this.showEdit(id)} key={recipe.id}{...recipe}/>
                )}
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        recipes: state.recipes.all
    };
};

//export default connect(mapStateToProps)(Dashboard);

export default requiresLogin()(connect(mapStateToProps)(Dashboard));


    // const {currentUser} = state.auth;
        // username: state.auth.currentUser.username,
        // name: `${currentUser.firstName} ${currentUser.lastName}`