import React from 'react';
import {connect} from 'react-redux';
import { deletePlan, deleteItem} from '../actions/mealplanner';



class MealplannerCard extends React.Component {
  render(){
    return(
      <li className="plan-box">
        - {this.props.meal}{':   '} 
        {this.props.title}
        <button className="cancel-button" onClick= {e=> this.props.dispatch(deletePlan(this.props.id)).then(()=>this.props.dispatch(deleteItem(this.props.id)))}
        ><i className="fas fa-check"></i>
        </button>
        </li>
    ) 
  }
}

export default (connect()(MealplannerCard));