import React from 'react';
import {Field, reduxForm, focus, reset} from 'redux-form';
import Input from './input';



 class SearchForm extends React.Component {
    handleSubmit(value) {
        value.preventDefault();
      console.log(value);

      // return this.props.dispatch(fetchSearchTerm(values));))

    }

    render() {
        return (
            <form 
                onSubmit= {this.handleSubmit}
            >               
                <label htmlFor="search">Search</label>
                <Field component={Input} type="text" name="search"/>
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Search
                </button>
            </form>
        );
    }
}

export default reduxForm({
  form: 'search',
  onSubmitFail: (errors, dispatch) =>
      dispatch(focus('search', Object.keys(errors)[0]))
})(SearchForm);