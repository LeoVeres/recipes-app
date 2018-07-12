import React from 'react';
import {connect} from 'react-redux';
import { updateItem} from '../actions/mealplanner';

class ShoppinglistCard extends React.Component {
  render(){
    let hideChecked;
    const itemToUpdate = {checked:!this.props.checked, extra:this.props.extra};
    if(this.props.checked === true  && this.props.showAll === false){
    hideChecked= 
    <div className="shoppinglist-li-hidden"> 
    - {this.props.extra}
    <button className="check-button" onClick= {e=> this.props.dispatch(updateItem(itemToUpdate,this.props.id))}><i className="far fa-check-square"></i></button>
    </div>;
    }
    if(this.props.checked === false){
      hideChecked= 
      <div className="shoppinglist-li"> 
      - {this.props.extra}
      <button className="check-button" onClick= {e=> this.props.dispatch(updateItem(itemToUpdate,this.props.id))}><i className="far fa-square"></i></button>
      </div>
    }
    return(
      <li className=""> 
      {hideChecked}
      </li>
    ) 
  }
}

const mapStateToProps = state => {
  return {
      showAll: state.mealplanner.hideCheckedItems,
  };
};

export default (connect(mapStateToProps)(ShoppinglistCard));

