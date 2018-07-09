import React from 'react';
import {connect} from 'react-redux';
import { deleteItem, deletePlan} from '../actions/mealplanner';



class ShoppinglistCard extends React.Component {
  render(){
    let ingredientsList;
    let extrasList;

    if(this.props.extra){
      extrasList = 

        <li className="shoppinglist-li">{this.props.extra}
        <button className="save-button" onClick= {e=> this.props.dispatch(deleteItem(this.props.id))}>X</button>
        </li>
    }

    if(this.props.ingredients){
      ingredientsList= this.props.ingredients.map((item,i) =>
        <li className="shoppinglist-li" key={i}>
         {item}
          <button className="save-button" >X</button>
        </li>);
    };


    return(
      <ul className="shoppinglist-ul">
          {ingredientsList}
          {extrasList}
      </ul> 
    ) 
  }
}

export default (connect()(ShoppinglistCard));

// onClick= {e=> this.props.dispatch(deletePlan(this.props.id))}