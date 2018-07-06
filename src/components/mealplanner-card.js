import React from 'react';
import {connect} from 'react-redux';
import { deletePlan} from '../actions/mealplanner';



class MealplannerCard extends React.Component {
  render(){
    return(
      <div className="plan-box">
        <p>{this.props.title}</p>
        <p>{this.props.meal}</p>
        <button className="save-button" onClick= {e=> this.props.dispatch(deletePlan(this.props.id))}
        >Delete
        </button>
      </div> 
    ) 
  }
}

export default (connect()(MealplannerCard));