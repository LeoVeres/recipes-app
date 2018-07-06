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
        ingredientsList= this.props.ingredients.map((item,i) => <li key={i}>{item}</li>);
        ingredientsHeader= <div>Ingredients:</div>
    };
    if(this.props.directions){
        directions= this.props.directions;
        directionHeader= <div>Directions:</div>;
    };
    if(this.props.tags){
      tagsList= this.props.tags.map((item,i) => <li key={i}>{item}</li>);
      tagsHeader= <div>Tags:</div>
    }

    return(
      <div className="recipe-box">
        <h3>{this.props.title}</h3> 
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
        <button className="delete-button" onClick= {e=> this.props.dispatch(deleteRecipe(this.props.id))}
        >Delete
        </button>
        <button className="edit-button"onClick= {e=>this.props.showEdit(this.props.id)}
        >Edit
        </button>
        <button className="edit-button"onClick= {e=>this.props.showPlan(this.props.id)}
        >Add to Meal Plan
        </button>
      </div> 
    ) 
  }
}

export default (connect()(RecipeCard));
