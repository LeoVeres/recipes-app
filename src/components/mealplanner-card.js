import React from 'react';
import {connect} from 'react-redux';
import { deletePlan} from '../actions/mealplanner';



class MealplannerCard extends React.Component {
  render(){
    return(
      <div className="plan-box">
        <li>{this.props.meal}-</li>
        <li>{this.props.title}</li>
        <button className="save-button" onClick= {e=> this.props.dispatch(deletePlan(this.props.id))}
        >X
        </button>
      </div> 
    ) 
  }
}

export default (connect()(MealplannerCard));