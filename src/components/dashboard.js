import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './require-login';
import {Link} from 'react-router-dom';
import RecipeCard from './recipe-card';
import { fetchRecipes } from '../actions/recipes';
import SearchForm from './search-form';

export class Dashboard extends React.Component {
    componentDidMount(){
        this.props.dispatch(fetchRecipes());
    };
    showEdit(id){
        this.props.history.push(`/edit/${id}`)
    };

    render() {
        let recipeResults;
        if (this.props.recipes){
            recipeResults= this.props.recipes.map(recipe=>
                <RecipeCard showEdit={id => this.showEdit(id)} key={recipe.id}{...recipe}/>)
        };
        return (
            <div className="dashboard">
                <h2>Recipes</h2>
                <Link className="link" to="/dashboard">Recipe Book</Link>
                <Link className="link" to="/create">Create Recipe</Link>
                <Link className="link" to="/mealplanner">Meal Planner</Link>
                <Link className="link" to="/shoppinglist">Shopping List</Link>
                <SearchForm/>
                {recipeResults}
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {

        recipes: state.recipes.all.filter(item=> 
            item.title.toLowerCase().includes(state.recipes.searchTerm.toLowerCase()) || 
            item.ingredients.includes(state.recipes.searchTerm) ||
            item.tags.includes(state.recipes.searchTerm))
    };
};

//export default connect(mapStateToProps)(Dashboard);

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
