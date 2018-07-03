import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {createRecipe} from '../actions/recipes';
import Input from './input';
import {required, nonEmpty} from '../validators';


export class RecipeForm extends React.Component {
    onSubmit(values) {
        console.log(values);
        const {title, directions, ingredients} = values;
        const recipe = {title, directions, ingredients};
        return this.props
            .dispatch(createRecipe(recipe));   
    }

    render() {
        return (
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label htmlFor="title">Title</label>
                <Field component={Input} type="text" name="title" validate={[required, nonEmpty]}/>

                <label htmlFor="ingredients">Ingredients</label>
                <Field component={Input} type="text" name="ingredients"/>

                <label htmlFor="directions">directions</label>
                <Field component={Input} type="text" name="directions"/>
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Submit
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'recipe',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('recipe', Object.keys(errors)[0]))
})(RecipeForm);