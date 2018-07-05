import React from 'react';
import {Field, reduxForm, focus, reset} from 'redux-form';
import {createRecipe, fetchRecipes} from '../actions/recipes';
import Input from './input';
import {required, nonEmpty} from '../validators';


export class RecipeForm extends React.Component {
    onSubmit(values) {
        const {title, directions, ingredients, tags} = values;
        const recipe = {title, directions, ingredients:ingredients.split(','), tags:tags.split(',')};
        return this.props
            .dispatch(createRecipe(recipe))
            .then(() => this.props.dispatch(fetchRecipes()))
            .then(()=>this.props.dispatch(reset('recipe')));   
    }

    render() {
        let successMessage;
        if (this.props.submitSucceeded){
            successMessage= <p>Successfully added!</p>
        }
        return (
            <form
                className="recipe-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label htmlFor="title">Title</label>
                <Field component={Input} type="text" name="title" validate={[required, nonEmpty]} placeholder="power puff pastry"/>

                <label htmlFor="ingredients">Ingredients</label>
                <Field   component={Input} type="text" name="ingredients" validate={[required, nonEmpty]} placeholder="sugar, spice, everything nice"/>

                <label htmlFor="directions">Directions</label>
                <Field component="textarea" type="textarea" element= "textarea" validate={[required, nonEmpty]} name="directions" placeholder="dont forget to add extra ingredient to the concoction--
Chemical X"/>
                <label htmlFor="tags">Tags</label>
                <Field   component={Input} type="text" name="tags" placeholder="Breakfast, Lunch, Dinner"/>
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Save
                </button>
                {successMessage}
            </form>
        );
    }
}

export default reduxForm({
    form: 'recipe',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('recipe', Object.keys(errors)[0]))
})(RecipeForm);