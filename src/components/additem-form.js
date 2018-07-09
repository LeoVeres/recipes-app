import React from 'react';
import {Field, reduxForm, focus, reset} from 'redux-form';
import {connect} from 'react-redux';
import Input from './input';
import {fetchItems, createItem} from '../actions/mealplanner';


class AddItem extends React.Component {

  onSubmit(values){
    let item = {extra:values.additem};
    
    return this.props.dispatch(createItem(item))
    .then(()=>this.props.dispatch(reset('additem')))
    .then(()=>this.props.dispatch(fetchItems()));
  }

    render() {
      return (
        <form 
            className="search" 
            onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values))}>
          <div className="search-inputs">
          <label htmlFor="additem"></label>
          <Field className="search-box"component={Input} type="text" name="additem" />
          <button 
          disabled={this.props.pristine || this.props.submitting}
          type="submit" 
          className="search-button">+</button>
          </div>
        </form>
      );
    }
}




AddItem = reduxForm({
    form: 'additem',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('additem', Object.keys(errors)[0]))
})(AddItem);


export default (connect()(AddItem));