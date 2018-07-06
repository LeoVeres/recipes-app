import React from 'react';
import {connect} from 'react-redux';
import { deletePlan} from '../actions/mealplanner';



class ShoppinglistCard extends React.Component {
  render(){
    let ingredientsList;
    if(this.props.ingredients){
      ingredientsList= this.props.ingredients.map((item,i) => <li key={i}>{item}</li>);
    };
    return(
      <div className="plan-box">
        <ul>
          {ingredientsList}
        </ul>
      </div> 
    ) 
  }
}

export default (connect()(ShoppinglistCard));