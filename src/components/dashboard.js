import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './require-login';
import RecipeCard from './recipe-card';
import { fetchRecipes, searchRecipes } from '../actions/recipes';
import SearchForm from './search-form';
 

export class Dashboard extends React.Component {
    componentDidMount(){
    this.props.dispatch(fetchRecipes());
    this.props.dispatch(searchRecipes(''));    
    };
    showEdit(id){
        this.props.history.push(`/edit/${id}`)
    };
    showPlan(id){
        this.props.history.push(`/plan/${id}`)
    };


    render() {
        let recipeResults;
        if (this.props.recipes){
            recipeResults= this.props.recipes.map(recipe=>
                <RecipeCard showEdit={id => this.showEdit(id)} showPlan={id => this.showPlan(id)}key={recipe.id}{...recipe}/>)
        };
        return (
            <div className="dashboard">
                <h3>Recipes</h3>
                <SearchForm />
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
