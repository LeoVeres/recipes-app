import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {fetchRecipes, updateRecipe} from '../actions/recipes';
import Input from './input';
import {required, nonEmpty} from '../validators';



export class EditForm extends React.Component {
    componentWillMount () {
        this.props.initialize({ title:this.props.title, directions: this.props.directions, ingredients:this.props.ingredients, tags:this.props.tags});
      }
    onSubmit(values) {
        let ingredientsList;
        let tagsList;
        const {title, directions, ingredients,tags} = values;
        if(typeof ingredients==='string'){ingredientsList=ingredients.split(',')}else{ingredientsList=ingredients};
        if(typeof tags==='string'){tagsList=tags.split(',')}else{tagsList=tags};
        const recipe = {title, directions, tags:tagsList, ingredients:ingredientsList};
        return this.props
            .dispatch(updateRecipe(recipe,this.props.id))
            .then(() => {this.props.showEdit();
            this.props.dispatch(fetchRecipes())});
    }
  
    render() {

        return (
            <form
                className="recipe-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label htmlFor="title">Title:</label>
                <Field component={Input} type="text" value= {this.props.title}name="title" validate={[required, nonEmpty]}/>

                <label htmlFor="ingredients">Ingredients:</label>
                <Field className='textarea' component="textarea" value= {this.props.title} type="text" name="ingredients" validate={required}/>

                <label htmlFor="directions">Directions:</label>
                <Field className='textarea' component="textarea" value= {this.props.title} type="text" name="directions" validate={required}/>

                <label htmlFor="tags">Tags:</label>
                <Field component={Input} type="text" value= {this.props.title} name="tags" validate={required}/>
                <button
                    className='save-button'
                    type="submit"
                    disabled={this.props.submitting}>
                    Save
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'edit',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('edit', Object.keys(errors)[0]))
})(EditForm);