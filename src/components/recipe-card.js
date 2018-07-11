import React from 'react';
import {connect} from 'react-redux';
import { deleteRecipe} from '../actions/recipes';


class RecipeCard extends React.Component {


  render(){
    let ingredientsList;
    let ingredientsHeader;
    let directions;
    let directionHeader;
    let tagsHeader;
    let tagsList;
    if(this.props.ingredients){
        ingredientsList= this.props.ingredients.map((item,i) => <li key={i}>- {item}</li>);
        ingredientsHeader= <div className="recipecard-header">Ingredients:</div>
    };
    if(this.props.directions){
        directions= this.props.directions;
        directionHeader= <div className="recipecard-header">Directions:</div>;
    };
    if(this.props.tags){
      tagsList= this.props.tags.map((item,i) => <li key={i}>- {item}</li>);
      tagsHeader= <div className="recipecard-header">Tags:</div>
    }

    return(
      <div className="recipe-box">

        <button className="delete-button" onClick= {e=> this.props.dispatch(deleteRecipe(this.props.id))}
        ><i className="fas fa-trash-alt"></i>
        </button>
        <button className="edit-button"onClick= {e=>this.props.showEdit(this.props.id)}>
        <i className="fas fa-pencil-alt"></i>
        </button>
        <button className="edit-button"onClick= {e=>this.props.showPlan(this.props.id)}
        ><i className="far fa-calendar-plus"></i>
        </button>
        <h4>{this.props.title}</h4> 
        {ingredientsHeader} 
        <ul>
          {ingredientsList}
        </ul>
        {directionHeader}
          <p>{directions}</p>
        {tagsHeader}
        <ul>
          {tagsList}
        </ul>

      </div> 
    ) 
  }
}

export default (connect()(RecipeCard));
