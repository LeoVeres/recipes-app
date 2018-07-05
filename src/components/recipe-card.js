import React from 'react';
import {connect} from 'react-redux';
import { deleteRecipe, fetchOneRecipe } from '../actions/recipes';
import {Link, Redirect} from 'react-router-dom';
import {API_BASE_URL} from '../config';


class RecipeCard extends React.Component {


  render(){
    let ingredientsList;
    let ingredientsHeader;
    let directions;
    let directionHeader;
    if(this.props.ingredients){
        ingredientsList= this.props.ingredients.map((item,i) => <li key={i}>{item}</li>);
        ingredientsHeader= <div>Ingredients:</div>
    };
    if(this.props.directions){
        directions= this.props.directions;
        directionHeader= <div>Directions:</div>;
    };

    return(
      <div className="recipeBox">
        Recipe:{this.props.title} 
        {ingredientsHeader} 
        <ul>
          {ingredientsList}
        </ul>
        {directionHeader}
          {directions}
        <button onClick= {e=> this.props.dispatch(deleteRecipe(this.props.id))}
        >Delete
        </button>
        <button onClick= {e=>this.props.showEdit(this.props.id)}
        >Edit
        </button>
      </div> 
    ) 
  }
}

export default (connect()(RecipeCard));
